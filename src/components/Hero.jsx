import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Loader2 } from 'lucide-react';
import './Hero.css';

const Spline = lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
    const scrollToReg = () => {
        document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero-section">
            <div className="hero-grid-overlay" />
            <div className="hero-glow-orb hero-glow-1" />
            <div className="hero-glow-orb hero-glow-2" />
            <div className="hero-glow-orb hero-glow-3" />
            <div className="hero-scan-line" />
            {/* HUD corner indicators */}
            <div className="hud-corner hud-tl" />
            <div className="hud-corner hud-tr" />
            <div className="hud-corner hud-bl" />
            <div className="hud-corner hud-br" />

            <div className="container hero-container">
                <div className="hero-content">
                    <motion.div
                        className="hero-date-badge"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="badge-dot" />
                        <span className="badge-bracket">[</span>
                        24 • 04 • 2026 // BENGALURU, IN
                        <span className="badge-bracket">]</span>
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="title-line-sm">// ACHARYA PRESENTS</span>
                        <span className="title-main glitch-text" data-text="ROBO HABBA">ROBO HABBA</span>
                        <span className="title-year">2026</span>
                        <span className="title-scanner" />
                    </motion.h1>

                    <motion.div
                        className="hero-bottom"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <p className="hero-subtitle">
                            The premier inter-collegiate showcase of mechatronics, engineering, and tactical robotics.
                        </p>
                        <button className="premium-btn hero-cta" onClick={scrollToReg}>
                            Register Now <ArrowUpRight size={18} />
                        </button>
                    </motion.div>

                    <motion.div
                        className="hero-stats"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                    >
                        <div className="stat-item">
                            <span className="stat-value cyan">03</span>
                            <span className="stat-label">Events</span>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat-item">
                            <span className="stat-value amber">₹500</span>
                            <span className="stat-label">Per Event</span>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat-item">
                            <span className="stat-value magenta">AIT</span>
                            <span className="stat-label">Bengaluru</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
