import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const cards = [
        {
            title: "About Acharya",
            content: "Acharya is a premier educational community based in Bangalore, known for its commitment to innovation, excellence, and holistic student development. With a legacy of over three decades, Acharya offers a diverse and dynamic learning environment that nurtures talent and shapes future leaders. The institution provides more than 100 academic programs, fostering experiential and collaborative learning.",
            delay: 0.1
        },
        {
            title: "Institute of Technology",
            content: "Acharya Institute of Technology (AIT), established in 2000 in Bengaluru, is one of the leading engineering and technology colleges in India. Affiliated with Visvesvaraya Technological University and accredited by NAAC and NBA, AIT is committed to excellence in teaching, research, and professional development.",
            delay: 0.2
        },
        {
            title: "Mechatronics Engineering",
            content: "Mechatronics engineering combines elements of mechanical engineering, electronics, computer science, and control engineering. The program prepares students for careers in designing and implementing intelligent systems and products. Our collaboration with Siemens helps students stay updated on current industry trends.",
            delay: 0.3
        }
    ];

    return (
        <section id="about" className="about-section">
            <div className="container">

                <div className="about-header">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Institution
                    </motion.h2>
                    <motion.p
                        className="about-lead"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Fostering experiential and collaborative learning through hands-on technical showcases and a commitment to excellence.
                    </motion.p>
                </div>

                <div className="about-grid">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            className="premium-card about-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: card.delay, ease: "easeOut" }}
                        >
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-text">{card.content}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
