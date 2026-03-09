import React from 'react';
import { motion } from 'framer-motion';
import './Coordinators.css';

const Coordinators = () => {
    const coords = [
        { role: "Faculty Coordinator", name: "Dr. Manjunath", phone: "+91 9844719520" },
        { role: "Main Coordinator", name: "Suraj Menezes", phone: "9380321088" },
        { role: "Robo Race", name: "Adigarla Rakesh", phone: "8897767253" },
        { role: "Robo War", name: "Naveen Kumar K S", phone: "8722249072" },
        { role: "Robo Exhibition", name: "Yash Lal & Niharika", phone: "9880769119" },
    ];

    return (
        <section id="coordinators" className="coordinators-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Leadership
                </motion.h2>

                <div className="coord-grid">
                    {coords.map((coord, idx) => (
                        <motion.div
                            key={idx}
                            className="coord-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                        >
                            <div className="coord-info">
                                <p className="coord-role">{coord.role}</p>
                                <h3 className="coord-name">{coord.name}</h3>
                                <p className="coord-phone">{coord.phone}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Coordinators;
