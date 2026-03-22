import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import './Events.css';

const eventDetails = {
    event1: {
        title: "Robo-Triathlon",
        content: (
            <>
                <p className="event-intro">This event includes 3 sub-events:</p>
                <ul className="modal-list">
                    <li>Pick and Place</li>
                    <li>Draw a Shape</li>
                    <li>Block Stacking</li>
                </ul>
                
                <h4 className="modal-h4">General Guidelines</h4>
                <ul className="modal-list">
                    <li>Competition is open to all registered student teams.</li>
                    <li>Each team may consist of 2–4 members.</li>
                    <li>Only 2 members are allowed near the arena during the run.</li>
                    <li>Any misconduct, arena damage, or interference with officials will lead to immediate disqualification.</li>
                    <li>The organizers reserve the right to modify the arena or rules if necessary.</li>
                    <li>Teams may control the robot manually (remote controlled) or autonomously.</li>
                </ul>
                
                <h4 className="modal-h4">Specific Guidelines</h4>
                <ul className="modal-list">
                    <li>Maximum time to complete all stages will be notified on the day of the event.</li>
                    <li>A single robot must be used for all three tasks.</li>
                    <li>The robot must perform the tasks in sequence without breaks.</li>
                    <li>The team that completes all three tasks in the shortest total time will be declared the winner.</li>
                    <li>If no team completes all three tasks, the team that completes the maximum number of tasks in the shortest time will be ranked higher.</li>
                    <li>The timer will not pause for resets, controller switching, or technical adjustments.</li>
                </ul>

                <h4 className="modal-h4">Event Framework</h4>
                <p className="modal-p"><strong>Stage 1: Cube Pick and Place</strong><br/>
                The robot must pick cube-shaped objects from the Supply Zone and place them into the Target Zone.</p>
                <ul className="modal-list">
                    <li>Number of cubes: 3 cubes</li>
                    <li>Cubes will be uniform in size and weight</li>
                    <li>Cubes must be fully placed inside the target zone</li>
                </ul>
                <p className="modal-p"><i>Cube specification:</i> Dimension 50 mm (length) × 50mm (breadth) × 70 mm (height), Weight - 65 grams.<br/>
                <strong>Penalty:</strong> +10 seconds if a cube is dropped outside the target zone.</p>

                <p className="modal-p"><strong>Stage 2: Shape Drawing</strong><br/>
                The robot must draw one recognizable geometric shape on the drawing surface. Allowed shapes: Square, Circle, Triangle, Rectangle.</p>
                <ul className="modal-list">
                    <li>A standard marker provided by the organizers must be used.</li>
                    <li>The shape must be clearly recognizable by judges.</li>
                </ul>
                <p className="modal-p"><strong>Penalty:</strong> +10 seconds if the shape is unrecognizable.</p>

                <p className="modal-p"><strong>Stage 3: Block Stacking</strong><br/>
                The robot must stack blocks vertically to form a stable tower.</p>
                <ul className="modal-list">
                    <li>Blocks must be stacked one on top of another vertically.</li>
                    <li>The stack must remain stable for at least 3 seconds after the robot releases the final block and moves away.</li>
                </ul>
                <p className="modal-p"><i>Cube specification:</i> Dimension 50 mm (length) × 50mm (breadth) × 70 mm (height), Weight - 65 grams.<br/>
                <strong>Penalty:</strong> +20 seconds if the stack collapses before the 3-second stability check.</p>

                <h4 className="modal-h4">Electrical & Power Requirements</h4>
                <ul className="modal-list">
                    <li>Maximum voltage limit: 12V LiPo (3S LiPo equivalent)</li>
                    <li>Batteries must be properly enclosed or securely mounted</li>
                    <li>Loose batteries or exposed terminals are not allowed</li>
                </ul>

                <h4 className="modal-h4">Result & Scoring</h4>
                <p className="modal-p">Total time is calculated from the start of the run until completion of the final task. Penalty time will be added to the total time.</p>
                <table className="modal-table">
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Completion</th>
                            <th>Penalty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Pick & Place</td>
                            <td>Success / Fail</td>
                            <td>+10s if cube dropped</td>
                        </tr>
                        <tr>
                            <td>Draw Shape</td>
                            <td>Success / Fail</td>
                            <td>+10s if shape unclear</td>
                        </tr>
                        <tr>
                            <td>Block Stack</td>
                            <td>Success / Fail</td>
                            <td>+20s if stack falls</td>
                        </tr>
                        <tr>
                            <td><strong>Total Time</strong></td>
                            <td><strong>Final Score</strong></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <p className="modal-p">The team with the lowest total time (including penalties) will be declared the winner.</p>
            </>
        )
    },
    event2: {
        title: "Robo Race",
        content: (
            <>
                <h4 className="modal-h4">General Guidelines</h4>
                <ul className="modal-list">
                    <li>Competition is open to all registered student teams</li>
                    <li>Each team may consist of 2-4 members</li>
                    <li>Only 2 members are allowed near the track during the run</li>
                    <li>Any misconduct, track damage, or interference with officials leads to immediate disqualification</li>
                    <li>The organizers reserve the right to change the rules and/or arena as they deem fit</li>
                </ul>

                <h4 className="modal-h4">Robot Specifications</h4>
                <p className="modal-p"><strong>Dimensions:</strong> Robot must fit fully inside a 300 mm × 300 mm × 300 mm cube.<br/>
                <strong>Power Supply:</strong> Maximum limit 12v lipo (3S LiPo equivalent).<br/>
                <strong>Locomotion:</strong> Wheeled or tracked robots only. No LEGO kits, toy cars, or pre-assembled platforms. Custom-built chassis mandatory.<br/>
                <strong>Control Method:</strong> Wired or Wireless.</p>

                <h4 className="modal-h4">Track Specifications</h4>
                <p className="modal-p">Possible obstacles include:</p>
                <ul className="modal-list">
                    <li>Ramps</li>
                    <li>Speed breakers</li>
                    <li>Sand or gravel traps</li>
                    <li>Bridge with protective rail</li>
                    <li>Zig-zag turns and sharp corners</li>
                </ul>

                <h4 className="modal-h4">Race Rules</h4>
                <p className="modal-p"><strong>Objective:</strong> Complete the full track in the shortest time.</p>

                <h4 className="modal-h4">Penalties & Scoring</h4>
                <p className="modal-p">Final Score = Base Time + Penalties (who completes the track)</p>
                <table className="modal-table">
                    <thead>
                        <tr>
                            <th>Violation</th>
                            <th>Penalty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Touching side wall</td>
                            <td>+5 sec per touch</td>
                        </tr>
                        <tr>
                            <td>Skipping an obstacle</td>
                            <td>+20 sec</td>
                        </tr>
                        <tr>
                            <td>Pulling robot using wire</td>
                            <td>+10 sec</td>
                        </tr>
                        <tr>
                            <td>Manual reset ("Hand Touch") and half bot crossing line</td>
                            <td>+10 sec</td>
                        </tr>
                    </tbody>
                </table>

                <h4 className="modal-h4">Reset Rule</h4>
                <p className="modal-p">If the robot flips, stalls, or becomes stuck: Driver must call "RESET!". Timer continues running. Robot is placed at the previous checkpoint. <strong>+10 seconds penalty applied</strong>.</p>

                <h4 className="modal-h4">Safety & Inspection Requirements</h4>
                <p className="modal-p">Each robot must pass inspection before racing:</p>
                <ul className="modal-list">
                    <li>Must fit into the 300 mm cube test box</li>
                    <li>No sharp edges or exposed screws that could damage the track</li>
                    <li>Battery must be securely fixed and insulated</li>
                    <li>Robot must include an easily accessible kill switch</li>
                </ul>
            </>
        )
    },
    event3: {
        title: "Robo War",
        content: (
            <>
                <h4 className="modal-h4">Robot Requirements</h4>
                <p className="modal-p"><strong>Weight & Dimensions:</strong> Maximum weight is 5.0 kg (includes battery, excludes transmitter) with a strict 50-gram tolerance.<br/>
                <strong>Size Limits:</strong> The robot must fit inside a 400mm × 400mm × 300mm starting box.<br/>
                <strong>Extensions:</strong> Mechanical extensions are only allowed after the match begins.</p>

                <h4 className="modal-h4">Electrical & Power Requirements</h4>
                <p className="modal-p"><strong>Voltage Limit:</strong> Maximum voltage is 25.2V (6S LiPo equivalent) and must never exceed this at any time.<br/>
                <strong>Battery Types:</strong> Only LiPo or LiFePO4 batteries are permitted.<br/>
                <strong>Battery Safety:</strong> Batteries must be fully enclosed or secured in a fire-resistant compartment, and must be charged inside LiPo safe bags.<br/>
                <strong>Master & Kill Switches:</strong> An external master power switch and a separate kill switch (which instantly stops both drive and weapons) are mandatory.<br/>
                <strong>Fail-Safe Requirement:</strong> The robot must automatically stop all functions if the transmitter is turned off or the signal is lost.</p>

                <h4 className="modal-h4">Weapon System Guidelines</h4>
                <p className="modal-p"><strong>Allowed Weapons:</strong> Spinners (Drum, Vertical, Horizontal, Bar), Lifters, Flippers, Clamps, Wedges, and Pushers.<br/>
                <strong>Banned Weapons:</strong> Liquids, fire, explosives, entanglement devices (nets, chains, tapes), projectiles, EMPs, and high-voltage shock devices.<br/>
                <strong>Weapon Safety:</strong> All active weapons must have a physical safety lock or pin inserted when outside the arena and be securely mounted to prevent detachment.</p>

                <h4 className="modal-h4">Match Operation Guidelines</h4>
                <p className="modal-p"><strong>Match Duration:</strong> Duration will be notified on the day of the event.<br/>
                <strong>Winning Criteria:</strong> A team can win by Knockout (opponent is immobile for 30 seconds), Tap Out (driver voluntarily stops), or a Judge's Decision.<br/>
                <strong>Match Conduct:</strong> Drivers must stay behind the safety line and cannot touch the arena. Only the referee can pause the match.<br/>
                <strong>Pinning Rule:</strong> You can only pin an opponent for a maximum of 10 seconds before you must release them.<br/>
                <strong>Timeouts & Repairs:</strong> Teams get one 2-minute technical timeout per match. There is a mandatory 20-minute minimum repair gap between matches.</p>

                <h4 className="modal-h4">Fouls & Disqualifications</h4>
                <p className="modal-p">You will be penalized or disqualified for:</p>
                <ul className="modal-list">
                    <li><strong>Excessive Damage:</strong> Fully destroying or causing irreparable, complete damage to an opponent's robot may lead to immediate disqualification.</li>
                    <li>Touching the arena during a match.</li>
                    <li>Damaging the arena structure.</li>
                    <li>Using banned weapons or prohibited materials.</li>
                    <li>Operating your robot unsafely or ignoring referee instructions.</li>
                </ul>

                <h4 className="modal-h4">Tournament Format & Spares</h4>
                <p className="modal-p"><strong>Format & Matchups:</strong> The exact tournament structure and specific opponent matchups will be notified to all teams on the day of the event.<br/>
                <strong>Spare Parts Required:</strong> Since robots will take damage, teams must carry extra spare parts. If a component breaks during a fight, you are responsible for replacing it quickly within the allowed repair time so your robot is ready for the next round.</p>

                <h4 className="modal-h4">Judging Guidelines (100 Points Total)</h4>
                <p className="modal-p">If the match goes to the time limit, judges award points based on:</p>
                <table className="modal-table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Points</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Aggression</td>
                            <td>40</td>
                            <td>Actively attacking and maintaining offense.</td>
                        </tr>
                        <tr>
                            <td>Damage</td>
                            <td>40</td>
                            <td>Causing functional damage (without completely destroying the opponent).</td>
                        </tr>
                        <tr>
                            <td>Control</td>
                            <td>20</td>
                            <td>Driving skill, stability, and arena awareness.</td>
                        </tr>
                    </tbody>
                </table>

                <h4 className="modal-h4">Inspection & Pits</h4>
                <p className="modal-p"><strong>Inspection:</strong> Every robot must pass a 2-minute checklist (weight, size, fail-safes, locks, and movement) before competing.<br/>
                <strong>Pit Safety:</strong> Robots must only be handled in the test box or with their wheels lifted. Weapons must stay locked outside the arena.</p>
            </>
        )
    },
    event4: {
        title: "Robo Exhibition",
        content: (
            <>
                <p className="event-intro">Showcase your robotic innovation and creativity.</p>
                <h4 className="modal-h4">Requirements & Setup</h4>
                <ul className="modal-list">
                    <li>Each team can have 1–4 members and must present a working project or demonstrable prototype during the exhibition.</li>
                    <li>Teams must explain the concept, working principle, applications, and benefits of their project to the judges.</li>
                    <li>The exhibition encourages academic and hobby projects related to robotic applications.</li>
                </ul>
                <h4 className="modal-h4">Evaluation Criteria</h4>
                <ul className="modal-list">
                    <li>Projects will be evaluated based on innovation, technical understanding, implementation, practical application, and presentation.</li>
                </ul>
                <h4 className="modal-h4">Safety Guidelines</h4>
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
