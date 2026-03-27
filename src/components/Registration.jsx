import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Loader2 } from 'lucide-react';
import './Registration.css';
import { ID } from 'appwrite';
import { storage, functions, APPWRITE_CONFIG, ExecutionMethod } from '../appwrite';
import { useAuth } from '../hooks/useAuth';

const Registration = () => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        fullName: '', email: '', mobile: '',
        college: '', department: '', year: '',
        usn: '', eventSelect: ''
    });
    const [proofData, setProofData] = useState({
        transactionId: '', paymentScreenshot: null
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleProofChange = (e) => {
        if (e.target.name === 'paymentScreenshot') {
            setProofData({ ...proofData, paymentScreenshot: e.target.files[0] });
        } else {
            setProofData({ ...proofData, [e.target.name]: e.target.value });
        }
    };

    const openPaymentLink = (e) => {
        e.preventDefault();
        window.open('https://www.acharyaerptech.in/ExternalPayment/285', '_blank');
    };

    const submitRegistration = async (e) => {
        e.preventDefault();

        // Explicit Client-Side Validations
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(formData.mobile)) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }

        if (!formData.usn || formData.usn.trim().length < 5) {
            alert('Please enter a valid USN / Roll Number.');
            return;
        }

        if (!proofData.transactionId || !proofData.transactionId.trim() || !proofData.paymentScreenshot) {
            alert('Please complete the payment and upload the transaction details before submitting the form.');
            return;
        }

        setIsLoading(true);
        let uploadedFile = null;

        try {
            // Safely get the event name without DOM manipulation
            const eventNames = {
                'robo-triathlon': 'Robo-Triathlon',
                'robo-race': 'Robo Race',
                'robo-war': 'Robo War',
                'robo-exhibition': 'Robo Exhibition'
            };
            const eventName = eventNames[formData.eventSelect] || formData.eventSelect;

            // 1. Upload payment screenshot to Appwrite Storage
            uploadedFile = await storage.createFile(
                APPWRITE_CONFIG.bucketId,
                ID.unique(),
                proofData.paymentScreenshot
            );

            // 2. Prepare payload for the Cloud Function
            const payload = {
                fullName: formData.fullName,
                email: formData.email,
                mobile: formData.mobile,
                college: formData.college,
                department: formData.department,
                year: formData.year,
                usn: formData.usn,
                eventSelect: formData.eventSelect,
                transactionId: proofData.transactionId,
                paymentScreenshotFileId: uploadedFile.$id,
                appwriteUserId: user?.$id || null,
                appwriteUserEmail: user?.email || null
            };

            // 3. Execute the Cloud Function
            const execution = await functions.createExecution(
                APPWRITE_CONFIG.functionId,
                JSON.stringify(payload),
                false,
                '/',
                ExecutionMethod.POST,
                {}
            );

            const result = JSON.parse(execution.responseBody);

            if (result.success) {
                alert(`Registration completed successfully for ${eventName}!\nName: ${formData.fullName}\nTransaction ID: ${proofData.transactionId}`);

                // Reset form
                setFormData({
                    fullName: '', email: '', mobile: '',
                    college: '', department: '', year: '',
                    usn: '', eventSelect: ''
                });
                setProofData({ transactionId: '', paymentScreenshot: null });
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error("Backend Submission Error:", result.error || 'Unknown error', "Full Result:", result);
                
                // Rollback: Delete the uploaded file since DB entry failed
                if (uploadedFile?.$id) {
                    try {
                        await storage.deleteFile(APPWRITE_CONFIG.bucketId, uploadedFile.$id);
                    } catch (cleanupError) {
                        console.error('Failed to cleanup orphaned file:', cleanupError);
                    }
                }
                
                alert(`Submission Failed: ${result.error || 'Unknown error'}`);
            }

        } catch (error) {
            console.error("Submission Execution Error:", error);
            if (error?.response) {
                console.error("Error Response Data:", error.response);
            }
            
            // Rollback: Delete the uploaded file since the process threw an error
            if (uploadedFile?.$id) {
                try {
                    await storage.deleteFile(APPWRITE_CONFIG.bucketId, uploadedFile.$id);
                } catch (cleanupError) {
                    console.error('Failed to cleanup orphaned file on error:', cleanupError);
                }
            }
            
            alert(`Error details: ${error.message || error}\nPlease check your network or try again.`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="registration" className="reg-section">
            <div className="container">

                <div className="reg-hero">
                    <Motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Registration
                    </Motion.h2>
                </div>

                <div className="reg-container">
                    <Motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="form-step"
                    >
                        <div className="reg-header">
                            <h3>Participant Details</h3>
                            <p className="reg-fee">Registration Fee: ₹500 / EVENT</p>
                        </div>

                        <form onSubmit={submitRegistration} className="minimal-form">
                            {/* Part 1: Personal Details */}
                            <div className="form-section-title">01. Basic Information</div>
                            <div className="form-grid">
                                <div className="form-group">
                                    <input type="text" name="fullName" value={formData.fullName} onChange={handleFormChange} required placeholder="Full Name *" className="minimal-input" />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" value={formData.email} onChange={handleFormChange} required placeholder="Email Address *" className="minimal-input" />
                                </div>
                                <div className="form-group">
                                    <input type="tel" name="mobile" pattern="[0-9]{10}" value={formData.mobile} onChange={handleFormChange} required placeholder="Mobile Number *" className="minimal-input" />
                                </div>
                            </div>

                            {/* Part 2: Academic Details */}
                            <div className="form-section-title">02. Academic Profile</div>
                            <div className="form-grid">
                                <div className="form-group">
                                    <input type="text" name="college" value={formData.college} onChange={handleFormChange} required placeholder="College Affiliation *" className="minimal-input" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="department" value={formData.department} onChange={handleFormChange} required placeholder="Department / Branch *" className="minimal-input" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="year" value={formData.year} onChange={handleFormChange} required placeholder="Year / Semester *" className="minimal-input" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="usn" value={formData.usn} onChange={handleFormChange} required placeholder="USN / Roll Number *" className="minimal-input" />
                                </div>
                                <div className="form-group select-wrapper">
                                    <select id="eventSelect" name="eventSelect" value={formData.eventSelect} onChange={handleFormChange} required className="minimal-input minimal-select">
                                        <option value="" disabled>Select Target Event *</option>
                                        <option value="robo-triathlon">Robo-Triathlon</option>
                                        <option value="robo-race">Robo Race</option>
                                        <option value="robo-war">Robo War</option>
                                        <option value="robo-exhibition">Robo Exhibition</option>
                                    </select>
                                </div>
                            </div>

                            {/* Outstanding Payment Instruction Box */}
                            <div className="payment-instruction-banner">
                                <div className="banner-icon">
                                    <ShieldCheck size={28} color="var(--text-main)" />
                                </div>
                                <div className="banner-content">
                                    <h4>Required Payment Step</h4>
                                    <p>Before submitting this form, you must complete the ₹500 registration fee. Click the button below to open the secure Acharya ERP payment portal in a new tab. Once completed, copy your Transaction ID and take a screenshot to upload below.</p>
                                    <button className="premium-btn premium-btn-outline banner-btn" onClick={openPaymentLink}>
                                        Open Payment Portal <ArrowUpRight size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Part 3: Verification */}
                            <div className="form-section-title">03. Payment Verification</div>
                            <div className="form-grid">
                                <div className="form-group full-width">
                                    <input type="text" name="transactionId" value={proofData.transactionId} onChange={handleProofChange} required placeholder="Transaction ID *" className="minimal-input" />
                                </div>

                                <div className="form-group full-width file-upload">
                                    <div className="upload-box relative">
                                        <input type="file" name="paymentScreenshot" accept="image/*" onChange={handleProofChange} required className="file-input" />
                                        <div className="upload-ui">
                                            <p>{proofData.paymentScreenshot ? proofData.paymentScreenshot.name : 'Click to upload payment screenshot (JPG/PNG)'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-actions space-between">
                                <button type="submit" className="premium-btn" disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                            <span className="pulse-text">Buffering...</span>
                                            <Loader2 size={18} className="spin" />
                                        </>
                                    ) : (
                                        <>Submit Registration <ArrowUpRight size={18} /></>
                                    )}
                                </button>
                            </div>
                        </form>
                    </Motion.div>
                </div>
            </div>
        </section>
    );
};

export default Registration;
