import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="minimal-footer">
            <div className="container footer-container">
                <div className="footer-left">
                    <h2>ACHARYA ROBO HABBA '26</h2>
                    <p>Where Innovation Meets Intelligent Machines.</p>
                </div>

                <div className="footer-right">
                    <p>Acharya Institute of Technology</p>
                    <p>Bengaluru, India</p>
                    <p className="copyright">&copy; 2026 Acharya Robo Habba.</p>
                </div>
            </div>
            <p className="made-by">Made by TBO</p>
        </footer>
    );
};

export default Footer;
