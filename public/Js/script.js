// Event content for modals
const eventContent = {
    event1: `
        <h3>Event 1: Robo-Triathlon</h3>
        <p class="event-intro">This event includes 3 sub events:</p>
        <ul class="event-sub-list">
            <li>Pick and place</li>
            <li>Draw a shape</li>
            <li>Pick a specific colored object: Robovision</li>
        </ul>

        <h4>1.1 General Guidelines</h4>
        <ul>
            <li>Competition is open to all registered student teams</li>
            <li>Each team may consist of 2-4 members</li>
            <li>Only 2 members are allowed near the arena during the run</li>
            <li>Any misconduct, track damage, or interference with officials leads to immediate disqualification</li>
            <li>The organizers reserve the right to change the rules and/or arena as they deem fit</li>
        </ul>

        <h4>1.2 Specific Guidelines</h4>
        <ul>
            <li>Maximum allowed time to complete all 3 events is 5 minutes</li>
            <li>A common robot should be allowed to use for all 3 events</li>
            <li>The team completes all three events within a short time will be the winner</li>
            <li>No break between the sub events</li>
            <li>If no teams complete all the events, then the team completes 2 events in short time will be the winner</li>
        </ul>

        <h4>1.3 Event Framework</h4>
        <ol>
            <li><strong>Pick and place:</strong> A robot is asked to pick an object and place it in a designated area, here object is in cube shape. Design a gripper accordingly.</li>
            <li><strong>Draw a shape:</strong> A robot is asked to draw a simple shape (square/circle/rectangle/triangle) on a plane sheet.</li>
            <li><strong>Pick a specific colored object:</strong> Here a specific colored object to be identified and picked to put in a designated box.</li>
        </ol>
        <p>Time taken is calculated from sum of all three events, but no specific time to complete any event.</p>

        <h4>1.4 Electrical & Power Requirements</h4>
        <ul>
            <li>Maximum voltage limit: 25.2V (6S LiPo equivalent)</li>
            <li>Only LiPo or LiFePO4 batteries permitted</li>
            <li>Batteries must be fully enclosed or secured in a fire-resistant compartment</li>
        </ul>
    `,
    event2: `
        <h3>Event 2: Robo Race</h3>

        <h4>General Guidelines</h4>
        <ul>
            <li>Competition is open to all registered student teams</li>
            <li>Each team may consist of 2-4 members</li>
            <li>Only 2 members are allowed near the track during the run</li>
            <li>Any misconduct, track damage, or interference with officials leads to immediate disqualification</li>
            <li>The organizers reserve the right to change the rules and/or arena as they deem fit</li>
        </ul>

        <h4>2. Robot Specifications</h4>
        <p><strong>2.1 Dimensions:</strong> Robot must fit fully inside a 300 mm × 300 mm × 300 mm cube. (This dimension is just for assumption can be changed)</p>
        <p><strong>2.2 Power Supply:</strong> Maximum limit 25.2V (6S LiPo equivalent)</p>
        <p><strong>2.3 Locomotion:</strong> Wheeled or tracked robots only.</p>
        <ul>
            <li>No LEGO kits, toy cars, or pre-assembled platforms</li>
            <li>Custom-built chassis mandatory</li>
        </ul>
        <p><strong>2.4 Control Method:</strong> Wired or Wireless (2.4 GHz RC)</p>

        <h4>3. Track Specifications</h4>
        <p><strong>3.1 Lane width:</strong> Minimum 400 mm</p>
        <p><strong>3.2 Track surface:</strong> Plywood, carpet, or vinyl</p>
        <p><strong>3.3 Possible obstacles include:</strong></p>
        <ul>
            <li>Ramps (max 30° incline)</li>
            <li>Speed breakers (max 20 mm height)</li>
            <li>Sand or gravel traps</li>
            <li>Bridge with protective rail</li>
            <li>Zig-zag turns and sharp corners</li>
        </ul>

        <h4>4. Race Rules & Procedure</h4>
        <p><strong>Objective:</strong> Complete the full track in the shortest time.</p>
        <p><strong>Rounds:</strong></p>
        <ul>
            <li>Qualifiers: 1 lap</li>
            <li>Finals: 2 laps or Subjected to reviewer call</li>
            <li>Maximum allowed time: 4 minutes per run</li>
        </ul>

        <h4>5. Penalties & Scoring</h4>
        <p>Final Score = Base Time + Penalties (who completes the track)</p>
        <table>
            <tr>
                <th>Violation</th>
                <th>Penalty</th>
            </tr>
            <tr>
                <td>Touching side wall</td>
                <td>+5 sec per touch</td>
            </tr>
            <tr>
                <td>Skipping an obstacle</td>
                <td>+20 sec or restart</td>
            </tr>
            <tr>
                <td>Pulling robot using wire</td>
                <td>+10 sec</td>
            </tr>
            <tr>
                <td>Manual reset ("Hand Touch")</td>
                <td>+10 sec</td>
            </tr>
        </table>

        <h5>Reset Rule</h5>
        <p>If the robot flips, stalls, or becomes stuck:</p>
        <ul>
            <li>Driver must call "RESET!"</li>
            <li>Timer continues running</li>
            <li>Robot is placed at the previous checkpoint</li>
            <li>+10 seconds penalty applied</li>
        </ul>

        <h4>6. Safety & Inspection Requirements</h4>
        <p>Each robot must pass inspection before racing:</p>
        <ul>
            <li>Must fit into the 300 mm cube test box</li>
            <li>No sharp edges or exposed screws that could damage the track</li>
            <li>Battery must be securely fixed and insulated</li>
            <li>Robot must include an easily accessible kill switch</li>
        </ul>
    `,
    event3: `
        <h3>Event 3: Robo War</h3>

        <h4>1. Robot Requirements</h4>
        
        <h5>1.1 Weight & Dimensions</h5>
        <ul>
            <li>Maximum allowable weight: 2.0 kg (inclusive of battery; exclusive of transmitter)</li>
            <li>Weight tolerance: 10 grams (strict limit)</li>
            <li>Robot must fit within: 300mm × 300mm × 300mm starting box</li>
            <li>Mechanical extensions are allowed only after the match begins</li>
        </ul>

        <h5>1.2 Electrical & Power Requirements</h5>
        <ul>
            <li>Maximum voltage limit: 25.2V (6S LiPo equivalent)</li>
            <li>Only LiPo or LiFePO4 batteries permitted</li>
            <li>Batteries must be fully enclosed or secured in a fire-resistant compartment</li>
        </ul>

        <h5>1.3 Weapon System Guidelines</h5>
        <p><strong>Allowed Weapons:</strong></p>
        <ul>
            <li>Spinners (Drum, Vertical, Horizontal, Bar)</li>
            <li>Lifters, Flippers, Clamps</li>
            <li>Wedges, Pushers</li>
        </ul>
        <p><strong>Banned Weapons/Mechanisms:</strong></p>
        <ul>
            <li>Liquids (water, oil, glue, chemicals)</li>
            <li>Fire, flame, explosives</li>
            <li>Nets, chains, tapes, entanglement devices</li>
            <li>Projectiles or shooting parts</li>
            <li>EMP or communication jammers</li>
            <li>High-voltage shock devices</li>
        </ul>

        <h4>2. Safety Guidelines (Mandatory for Participation)</h4>
        
        <h5>2.1 Kill Switch</h5>
        <ul>
            <li>Every robot must have an external kill switch accessible without lifting the robot</li>
            <li>Must shut down both drive and weapon instantly</li>
        </ul>

        <h5>2.2 Fail-Safe Requirement</h5>
        <p>Robot must automatically stop all functions if:</p>
        <ul>
            <li>The transmitter is turned off</li>
            <li>Signal is lost</li>
            <li>Fail-safe is triggered</li>
        </ul>

        <h5>2.3 Weapon Safety</h5>
        <p>All active weapons (especially spinners) must include:</p>
        <ul>
            <li>A physical weapon lock/pin when outside the arena</li>
            <li>Secure mounting to prevent detachment</li>
        </ul>

        <h5>2.4 Battery & Internal Safety</h5>
        <ul>
            <li>No exposed batteries allowed</li>
            <li>All wiring must be insulated and secured</li>
            <li>Robots must not have sharp, unprotected edges that could injure handling staff</li>
        </ul>

        <h4>3. Match Operation Guidelines</h4>
        <p><strong>Match Duration:</strong> Each match lasts 4 minutes.</p>

        <h5>3.1 Winning Criteria</h5>
        <p>A team can win through:</p>
        <ul>
            <li>Knockout (KO): Opponent immobile for 30 seconds</li>
            <li>Judge's Decision: If match reaches time limit</li>
            <li>Tap Out: Driver voluntarily stops the match</li>
        </ul>

        <h5>3.2 Match Conduct</h5>
        <ul>
            <li>Drivers must remain behind the designated safety line</li>
            <li>No physical contact with the arena during the match</li>
            <li>Only the referee may pause or stop the match for safety concerns</li>
            <li>No restarts for robots stuck on hazards unless due to arena malfunction</li>
        </ul>

        <h5>3.3 Pinning Rule</h5>
        <ul>
            <li>Maximum pin time: 10 seconds</li>
            <li>Robot must release the opponent after 10 seconds</li>
        </ul>

        <h4>4. Fouls & Disqualifications</h4>
        <p>Participants may be penalized or disqualified for:</p>
        <ul>
            <li>Touching the arena during a match</li>
            <li>Damage to arena floor, walls, or glass</li>
            <li>Using banned weapons or prohibited materials</li>
            <li>Unsafe operation or ignoring referee instructions</li>
        </ul>

        <h4>5. Judging Guidelines (100 Points Total)</h4>
        <p>If the match reaches time limit, points are awarded as follows:</p>
        <table>
            <tr>
                <th>Category</th>
                <th>Points</th>
                <th>Description</th>
            </tr>
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
        </table>

        <h4>6. Inspection & Pit Guidelines (Pre-Match Check)</h4>
        <p>Every robot must pass a 2-minute inspection before being allowed to compete.</p>

        <h5>6.1 Inspection Checklist</h5>
        <ul>
            <li>Weight below 2kg</li>
            <li>Fits in a 300mm cube</li>
            <li>Fail-safe works (Transmitter off → Robot stops)</li>
            <li>Kill switch accessible & functional</li>
            <li>Weapon lock installed in the pit area</li>
            <li>Robot moves in all directions</li>
            <li>No loose parts or exposed batteries</li>
        </ul>

        <h5>6.2 Pit Area Safety</h5>
        <ul>
            <li>All robots must be handled only in the test box or with wheels lifted</li>
            <li>Weapons must remain locked outside the arena at all times</li>
            <li>Charging batteries must be placed in LiPo safe bags</li>
        </ul>
    `
};

// Store registration data temporarily
let registrationData = {};

// Create particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Scroll animations
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const offsetTop = targetSection.offsetTop - 70;
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });

        const navMenu = document.getElementById('navMenu');
        navMenu.classList.remove('active');
    });
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Event modal functions
function openEventModal(eventId) {
    const modal = document.getElementById('eventModal');
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = eventContent[eventId];
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeEventModal() {
    const modal = document.getElementById('eventModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('eventModal');
    if (event.target == modal) {
        closeEventModal();
    }
}

// Registration form submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    registrationData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        college: document.getElementById('college').value,
        department: document.getElementById('department').value,
        year: document.getElementById('year').value,
        usn: document.getElementById('usn').value,
        event: document.getElementById('eventSelect').value
    };
    
    if (!registrationData.event) {
        alert('Please select an event!');
        return;
    }
    
    const eventName = document.getElementById('eventSelect').options[document.getElementById('eventSelect').selectedIndex].text;
    
    console.log('Registration Data:', registrationData);
    
    // Show confirmation and open payment link
    const confirmed = confirm('Registration details saved!\n\nEvent: ' + eventName + '\nName: ' + registrationData.fullName + '\n\nClick OK to proceed to payment (₹500)');
    
    if (confirmed) {
        // Open payment link in new tab
        window.open('https://www.acharyaerptech.in/ExternalPayment/285', '_blank');
        
        // Show payment proof section after a delay
        setTimeout(function() {
            document.getElementById('registrationForm').style.display = 'none';
            document.getElementById('paymentProofSection').style.display = 'block';
            
            // Scroll to payment proof section
            document.getElementById('paymentProofSection').scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 2000);
    }
});

// Payment proof form submission
document.getElementById('paymentProofForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const transactionId = document.getElementById('transactionId').value;
    const paymentScreenshot = document.getElementById('paymentScreenshot').files[0];
    
    if (!transactionId || !paymentScreenshot) {
        alert('Please provide both transaction ID and payment screenshot!');
        return;
    }
    
    // Store payment proof data
    registrationData.transactionId = transactionId;
    registrationData.paymentScreenshot = paymentScreenshot.name;
    
    console.log('Complete Registration Data:', registrationData);
    
    // Show success message
    alert('Registration completed successfully!\n\nTransaction ID: ' + transactionId + '\n\nYou will receive a confirmation email shortly.');
    
    // Reset forms
    document.getElementById('registrationForm').reset();
    document.getElementById('paymentProofForm').reset();
    document.getElementById('imagePreview').innerHTML = '';
    
    // Hide payment proof section and show registration form
    document.getElementById('paymentProofSection').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'block';
    
    // Scroll to top of registration section
    document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
});

// Image preview
document.getElementById('paymentScreenshot').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const preview = document.getElementById('imagePreview');
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            preview.innerHTML = '<img src="' + e.target.result + '" alt="Payment Screenshot">';
        }
        
        reader.readAsDataURL(file);
    } else {
        preview.innerHTML = '';
    }
});

// Go back to payment button
function goBackToPayment() {
    const confirmed = confirm('Are you sure you want to go back? You will need to fill the payment details again.');
    
    if (confirmed) {
        window.open('https://www.acharyaerptech.in/ExternalPayment/285', '_blank');
    }
}

// Initialize on load
window.addEventListener('load', function() {
    createParticles();
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});