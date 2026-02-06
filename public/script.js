const interviewData = [
    {
        question: "Welcome to your SpaceX Starlink GSM interview. Given your experience at Tesla and Rivian, how would you approach scaling the mechanical supply chain for Starlink's next-generation user terminals to handle a 10x increase in monthly production?",
        audio: "assets/q1.mp3",
        interviewer: "https://i.pravatar.cc/300?u=1",
        answer: "Highlight your experience at Tesla scaling Model 3/Y. Focus on vendor diversification, vertical integration for critical mechanical assemblies, and implementing automated quality gates. Mention your Engineering degree to show you understand the 'Physics First' principle."
    },
    {
        question: "SpaceX often faces 'impossible' timelines. Tell me about a time at GM or Rivian where a critical mechanical component was delayed for an NPI launch. How did you resolve the bottleneck while maintaining cost targets?",
        audio: "assets/q2.mp3",
        interviewer: "https://i.pravatar.cc/300?u=2",
        answer: "Use the STAR method. Emphasize your 'should-cost' knowledge to negotiate expedite fees without blowing the budget. Mention working directly with engineering to potentially relax non-critical tolerances for faster manufacturing."
    },
    {
        question: "We use should-cost modeling extensively here. Walk me through your process for developing a should-cost model for a complex injection-molded or cast mechanical assembly. What are the primary cost drivers you look for?",
        audio: "assets/q3.mp3",
        interviewer: "https://i.pravatar.cc/300?u=3",
        answer: "Discuss material weight, cycle time, cavitation, and secondary operations (de-burring, painting). Showcase your deep technical sourcing expertise and how you use these models to drive transparent supplier negotiations."
    },
    {
        question: "Strategic sourcing at SpaceX isn't just about picking a vendor; it's about finding partners who can innovate. How do you evaluate a supplier's technical capability versus their commercial terms?",
        audio: "assets/q4.mp3",
        interviewer: "https://i.pravatar.cc/300?u=4",
        answer: "Talk about on-site audits, reviewing their R&D roadmap, and checking their ability to handle rapid design changes (NPI agility). Commercials are a baseline, but technical partnership is the multiplier for Starlink."
    },
    {
        question: "With your Chemical Engineering background from Georgia Tech and CS expertise, how do you bridge the gap between SpaceX engineers designing hardware and the supply chain realities of raw material availability?",
        audio: "assets/q5.mp3",
        interviewer: "https://i.pravatar.cc/300?u=5",
        answer: "Lean into your ability to 'speak Engineering.' Mention how you can suggest alternative materials or manufacturing processes (e.g., DFM) that satisfy design requirements while ensuring a robust supply base."
    },
    {
        question: "Starlink requires global deployment. How would you manage the geopolitical risks and logistics of sourcing specialized mechanical components from regions with volatile trade relations?",
        audio: "assets/q6.mp3",
        interviewer: "https://i.pravatar.cc/300?u=6",
        answer: "Discuss dual-sourcing strategies (China/Asia + North America/Mexico). Highlight your strategic sourcing experience in global markets and how you monitor logistics bottlenecks proactively."
    },
    {
        question: "Tesla is known for its fast pace, similar to SpaceX. What is the most significant supply chain optimization you implemented at Tesla that saved either significant time or millions in cost?",
        audio: "assets/q7.mp3",
        interviewer: "https://i.pravatar.cc/300?u=7",
        answer: "Pick a specific mechanical sub-assembly. Explain how you identified a cost outlier using should-cost modeling, renegotiated the contract, or changed the manufacturing process to save $XM."
    },
    {
        question: "If a supplier fails a quality audit for a critical Starlink mechanical part two weeks before a launch, what is your immediate action plan? How do you balance launch urgency with safety and reliability?",
        audio: "assets/q8.mp3",
        interviewer: "https://i.pravatar.cc/300?u=8",
        answer: "Safety/Reliability is paramount. Immediately activate a backup supplier or internal task force. Coordinate with Engineering for a risk assessment of the current batch. Never sacrifice mission success for a timeline."
    },
    {
        question: "How do you handle negotiations with a sole-source supplier who knows they are the only ones capable of meeting our technical specifications for a proprietary mechanical alloy?",
        audio: "assets/q9.mp3",
        interviewer: "https://i.pravatar.cc/300?u=9",
        answer: "Focus on long-term partnership and volume guarantees. Use your 'should-cost' data to show what a fair margin looks like. Simultaneously, work with SpaceX Engineering to qualify a second source to reduce leverage."
    },
    {
        question: "Finally, why SpaceX? Given your leadership roles at Rivian and GM, why is the Starlink GSM role the right next step for your career and how will you contribute to making life multi-planetary?",
        audio: "assets/q10.mp3",
        interviewer: "https://i.pravatar.cc/300?u=10",
        answer: "Connect your history of solving 'hard' supply chain problems at Tesla/Rivian to the Starlink mission. Mention your passion for high-velocity environments and using your technical background to solve global-scale challenges."
    }
];

let currentQuestion = 0;

const photo = document.getElementById('interviewer-photo');
const audio = document.getElementById('question-audio');
const questionText = document.getElementById('question-text');
const answerBox = document.getElementById('answer-box');
const answerText = document.getElementById('answer-text');
const toggleBtn = document.getElementById('toggle-answer');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressText = document.getElementById('progress');

function updateUI() {
    const data = interviewData[currentQuestion];
    photo.src = data.interviewer;
    audio.src = data.audio;
    questionText.textContent = data.question;
    answerText.textContent = data.answer;
    
    // Reset state
    answerBox.classList.add('hidden');
    toggleBtn.textContent = "Reveal Suggestion";
    
    progressText.textContent = `${currentQuestion + 1} / ${interviewData.length}`;
    
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = currentQuestion === interviewData.length - 1;
}

photo.addEventListener('click', () => {
    audio.play();
});

toggleBtn.addEventListener('click', () => {
    answerBox.classList.toggle('hidden');
    toggleBtn.textContent = answerBox.classList.contains('hidden') ? "Reveal Suggestion" : "Hide Suggestion";
});

prevBtn.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        updateUI();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestion < interviewData.length - 1) {
        currentQuestion++;
        updateUI();
    }
});

// Initialize
updateUI();
