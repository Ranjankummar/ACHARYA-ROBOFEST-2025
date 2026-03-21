import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import './Events.css';

const eventDetails = {
    event1: {
        title: "Robo-Triathlon",
        content: (
            <>
                <p className="event-intro">This event includes 3 sub events: Pick and place, Draw a shape, Pick a specific colored object: Robovision</p>
                <h4 className="modal-h4">1.1 General Guidelines</h4>
                <ul className="modal-list">
                    <li>Competition is open to all registered student teams</li>
                    <li>Each team may consist of 2-4 members</li>
                    <li>Only 2 members are allowed near the arena during the run</li>
                    <li>Any misconduct leads to immediate disqualification</li>
                </ul>
                <h4 className="modal-h4">1.2 Specific Guidelines</h4>
                <ul className="modal-list">
                    <li>Maximum allowed time to complete all 3 events is 5 minutes</li>
                    <li>A common robot should be allowed to use for all 3 events</li>
                    <li>The team completes all three events within a short time will be the winner</li>
                </ul>
            </>
        )
    },
    event2: {
        title: "Robo Race",
        content: (
            <>
                <h4 className="modal-h4">2. Robot Specifications</h4>
                <p className="modal-p"><strong>Dimensions:</strong> Robot must fit fully inside a 300 mm × 300 mm × 300 mm cube.</p>
                <p className="modal-p"><strong>Power Supply:</strong> Maximum limit 25.2V (6S LiPo equivalent).</p>
                <p className="modal-p"><strong>Locomotion:</strong> Wheeled or tracked robots only. No LEGO kits.</p>

                <h4 className="modal-h4">4. Race Rules</h4>
                <p className="modal-p"><strong>Objective:</strong> Complete the full track in the shortest time.</p>
                <ul className="modal-list">
                    <li>Qualifiers: 1 lap</li>
                    <li>Finals: 2 laps</li>
                    <li>Max time: 4 minutes per run</li>
                </ul>
            </>
        )
    },
    event3: {
        title: "Robo War",
        content: (
            <>
                <h4 className="modal-h4">1. Robot Requirements</h4>
                <ul className="modal-list">
                    <li>Maximum allowable weight: 2.0 kg</li>
                    <li>Weight tolerance: 10 grams (strict limit)</li>
                    <li>Robot must fit within 300x300x300mm starting box</li>
                </ul>
                <h4 className="modal-h4">1.3 Weapon System Guidelines</h4>
                <p className="modal-p">Allowed: Spinners, Lifters, Flippers, Wedges.</p>
                <p className="modal-p">Banned: Liquids, Fire, Nets, Projectiles, EMP, High-voltage.</p>
                <h4 className="modal-h4">2. Safety Guidelines</h4>
                <ul className="modal-list">
                    <li>Every robot must have an external kill switch</li>
                    <li>Fail-Safe Requirement is mandatory</li>
                </ul>
            </>
        )
    },
    event4: {
        title: "Robo Exhibition",
        content: (
            <>
                <h4 className="modal-h4">1. Team & Project Requirements</h4>
                <ul className="modal-list">
                    <li>Each team can have 1–4 members and must present a working project or demonstrable prototype during the exhibition.</li>
                    <li>Teams must explain the concept, working principle, applications, and benefits of their project to the judges.</li>
                </ul>
                <h4 className="modal-h4">2. Evaluation Criteria</h4>
                <ul className="modal-list">
                    <li>Projects will be evaluated based on innovation, technical understanding, implementation, practical application, and presentation.</li>
                    <li>The exhibition encourages academic and hobby projects related to robotic applications.</li>
                </ul>
                <h4 className="modal-h4">3. Safety Guidelines</h4>
                <ul className="modal-list">
                    <li>All projects must be safe to demonstrate, and teams must follow event rules and venue safety guidelines.</li>
                </ul>
            </>
        )
    }
};

const Events = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const eventsList = [
        { id: 'event1', number: '01', title: 'Robo-Triathlon', desc: 'Three challenges, one robot, ultimate skill test.' },
        { id: 'event2', number: '02', title: 'Robo Race', desc: 'Speed, precision, and navigation combined.' },
        { id: 'event3', number: '03', title: 'Robo War', desc: 'Battle of machines, clash of titans.' },
        { id: 'event4', number: '04', title: 'Robo Exhibition', desc: 'Showcase your robotic innovation and creativity.' }
    ];

    return (
        <section id="events" className="events-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Competitions
                </motion.h2>

                <div className="events-list">
                    {eventsList.map((evt, idx) => (
                        <motion.div
                            key={evt.id}
                            className="event-row"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            onClick={() => setSelectedEvent(evt.id)}
                        >
                            <span className="event-number">{evt.number}</span>
                            <div className="event-info">
                                <h3 className="event-title">{evt.title}</h3>
                                <p className="event-desc">{evt.desc}</p>
                            </div>
                            <div className="event-action">
                                <span>View specification</span>
                                <ArrowRight size={20} className="arrow-icon" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedEvent && (
                    <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
                        <motion.div
                            className="premium-modal"
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="modal-header">
                                <h3 className="modal-title">{eventDetails[selectedEvent].title}</h3>
                                <button className="modal-close" onClick={() => setSelectedEvent(null)}>
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="modal-body">
                                {eventDetails[selectedEvent].content}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Events;
