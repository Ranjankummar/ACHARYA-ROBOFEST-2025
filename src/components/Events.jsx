import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import './Events.css';

const eventDetails = {
    event1: {
        title: "Robo-Triathlon",
        content: (
            <>
                <p className="event-intro">This event includes 3 sub-events: Pick and Place, Draw a Shape, and Block Stacking.</p>
                
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
                    <li>Maximum allowed time to complete all three events is 5 minutes.</li>
                    <li>A single robot must be used for all three tasks.</li>
                    <li>The robot must perform the tasks in sequence without breaks.</li>
                    <li>The team that completes all three tasks in the shortest total time will be declared the winner.</li>
                    <li>If no team completes all three tasks, the team that completes the maximum number of tasks in the shortest time will be ranked higher.</li>
                    <li>The 5-minute timer will not pause for resets, controller switching, or technical adjustments.</li>
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
                <p className="modal-p"><strong>Weight & Dimensions:</strong><br/>
                Maximum allowable weight: 5.0 kg (inclusive of battery; exclusive of transmitter).<br/>
                Weight tolerance: 50 grams (strict limit).<br/>
                Robot must fit within: 400mm × 400mm × 300mm starting box.<br/>
                Mechanical extensions are allowed only after the match begins.</p>
                <p className="modal-p"><strong>Electrical & Power Requirements:</strong><br/>
                Maximum voltage limit: 25.2V (6S LiPo equivalent).<br/>
                Only LiPo or LiFePO4 batteries permitted.<br/>
                Batteries must be fully enclosed or secured in a fire-resistant compartment.</p>

                <h4 className="modal-h4">Weapon System Guidelines</h4>
                <p className="modal-p"><strong>Allowed Weapons:</strong> Spinners (Drum, Vertical, Horizontal, Bar), Lifters, Flippers, Clamps, Wedges, Pushers.</p>
                <p className="modal-p"><strong>Banned Weapons/Mechanisms:</strong><br/>
                Liquids (water, oil, glue, chemicals), Fire, flame, explosives, Nets, chains, tapes, entanglement devices, Projectiles or shooting parts, EMP or communication jammers, High-voltage shock devices.</p>

                <h4 className="modal-h4">Safety Guidelines (Mandatory)</h4>
                <ul className="modal-list">
                    <li><strong>Kill Switch:</strong> Every robot must have an external kill switch accessible without lifting the robot. Must shut down both drive and weapon instantly.</li>
                    <li><strong>Fail-Safe Requirement:</strong> Robot must automatically stop all functions if: The transmitter is turned off, Signal is lost, or Fail-safe is triggered.</li>
                    <li><strong>Weapon Safety:</strong> All active weapons (especially spinners) must include: A physical weapon lock/pin when outside the arena, and Secure mounting to prevent detachment.</li>
                    <li><strong>Battery & Internal Safety:</strong> No exposed batteries allowed. All wiring must be insulated and secured. Robots must not have sharp, unprotected edges that could injure handling staff.</li>
                </ul>

                <h4 className="modal-h4">Match Operation Guidelines</h4>
                <p className="modal-p"><strong>Match Duration:</strong> Each match lasts 4 minutes.</p>
                <p className="modal-p"><strong>Winning Criteria:</strong> A team can win through Knockout (KO): Opponent immobile for 30 seconds, Judge's Decision: If match reaches time limit, or Tap Out: Driver voluntarily stops the match.</p>
                <p className="modal-p"><strong>Match Conduct:</strong> Drivers must remain behind the designated safety line. No physical contact with the arena during the match. Only the referee may pause or stop the match for safety concerns. No restarts for robots stuck on hazards unless due to arena malfunction.</p>
                <p className="modal-p"><strong>Pinning Rule:</strong> Maximum pin time: 10 seconds. Robot must release the opponent after 10 seconds.</p>

                <h4 className="modal-h4">Fouls & Disqualifications</h4>
                <ul className="modal-list">
                    <li>Touching the arena during a match</li>
                    <li>Damage to arena floor, walls, or glass</li>
                    <li>Using banned weapons or prohibited materials</li>
                    <li>Unsafe operation or ignoring referee instructions</li>
                </ul>

                <h4 className="modal-h4">Judging Guidelines (100 Points Total)</h4>
                <p className="modal-p">If the match reaches time limit, points are awarded as follows:</p>
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
                            <td>Actively attacking and maintaining offense</td>
                        </tr>
                        <tr>
                            <td>Damage</td>
                            <td>40</td>
                            <td>Actual damage or loss of opponent functionality</td>
                        </tr>
                        <tr>
                            <td>Control</td>
                            <td>20</td>
                            <td>Driving skill, stability, maneuvering, ring awareness</td>
                        </tr>
                    </tbody>
                </table>

                <h4 className="modal-h4">Inspection & Pit Guidelines</h4>
                <p className="modal-p">Every robot must pass a 2-minute inspection before being allowed to compete.</p>
                <ul className="modal-list">
                    <li><strong>Inspection Checklist:</strong> Weight below 5.0kg, Fits in a 400mm cube, Fail-safe works, Kill switch accessible & functional, Weapon lock installed in the pit area, Robot moves in all directions, No loose parts or exposed batteries.</li>
                    <li><strong>Pit Area Safety:</strong> All robots must be handled only in the test box or with wheels lifted. Weapons must remain locked outside the arena at all times. Charging batteries must be placed in LiPo safe bags.</li>
                </ul>
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
