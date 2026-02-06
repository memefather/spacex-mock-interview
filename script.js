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
    },
    {
        question: "How do you manage the transition from NPI (New Product Introduction) to high-volume production when the design is still evolving? How do you prevent 'scrap' while ensuring parts are available for build?",
        audio: "assets/q11.mp3",
        interviewer: "https://i.pravatar.cc/300?u=11",
        answer: "Focus on agile sourcing. Use short-term, low-MOQ tooling or soft-tooling for initial phases. Maintain high-frequency communication with Engineering to anticipate 'ECNs' (Engineering Change Notes) before placing large POs."
    },
    {
        question: "Walk me through your strategy for negotiating a Master Services Agreement (MSA) with a Tier 1 mechanical supplier. What are your 'non-negotiable' clauses for SpaceX?",
        audio: "assets/q12.mp3",
        interviewer: "https://i.pravatar.cc/300?u=12",
        answer: "Non-negotiables typically include IP ownership, strict quality standards (AS9100 style), lead-time flexibility, and transparent should-cost audits. Emphasize SpaceX's need for velocity and right-to-audit."
    },
    {
        question: "How do you use data and Python for supply chain optimization? Give an example of a script or model you've built to manage vendor performance or inventory risk.",
        audio: "assets/q13.mp3",
        interviewer: "https://i.pravatar.cc/300?u=13",
        answer: "Leverage your CS background. Mention building a tool for 'shortage prediction' by scraping vendor lead-time data or a 'should-cost calculator' that automates material price indexing. Show you can scale yourself through automation."
    },
    {
        question: "A vendor demands a price increase due to 'raw material surcharges.' How do you validate this claim and what is your counter-strategy?",
        audio: "assets/q14.mp3",
        interviewer: "https://i.pravatar.cc/300?u=14",
        answer: "Use your Chemical Engineering knowledge of material markets (e.g., aluminum, resins). Check commodity indices (LME, Platts). Counter by proposing a 'fixed-price' contract for raw materials or hedging if the volume justifies it."
    },
    {
        question: "What is your process for 'Vendor De-risking'? If you find out a critical vendor is having financial troubles, how do you protect the Starlink production line?",
        audio: "assets/q15.mp3",
        interviewer: "https://i.pravatar.cc/300?u=15",
        answer: "Audit their financial health early. Strategy: Build buffer stock, secure tooling ownership (ensure you can move it), and immediately start qualifying a backup. In extreme cases, suggest SpaceX's 'vertical integration' if it's a core tech."
    },
    {
        question: "In a negotiation, if the supplier is refusing to budge on price, what 'levers' other than price do you pull to create a win-win scenario?",
        audio: "assets/q16.mp3",
        interviewer: "https://i.pravatar.cc/300?u=16",
        answer: "Levers include: Payment terms, volume commitments, multi-year exclusivity, tooling amortizations, or collaboration on R&D for future SpaceX programs (Mars/Starship)."
    },
    {
        question: "How do you handle 'maverick spend' or engineers ordering parts outside of the approved supply chain process?",
        audio: "assets/q17.mp3",
        interviewer: "https://i.pravatar.cc/300?u=17",
        answer: "Standardize the 'approved vendor list' (AVL) but keep it agile. Educate engineers on why the supply chain process exists (cost, quality, traceability). Set up a 'Fast-Track' process for R&D prototypes so they don't feel slowed down."
    },
    {
        question: "SpaceX requires extreme 'Value Engineering.' Tell me about a time you looked at a complex part and simplified the supply chain by changing the manufacturing process (e.g., CNC to Casting).",
        audio: "assets/q18.mp3",
        interviewer: "https://i.pravatar.cc/300?u=18",
        answer: "Describe the technical trade-offs. Casting has higher upfront tooling but lower piece-price. Explain how you calculated the 'break-even' point and led the cross-functional effort with Engineering to approve the change."
    },
    {
        question: "How do you maintain quality and traceability for SpaceX components when using sub-tier suppliers (the suppliers of your suppliers)?",
        audio: "assets/q19.mp3",
        interviewer: "https://i.pravatar.cc/300?u=19",
        answer: "Implement a 'flow-down' of quality requirements in the contract. Perform audits not just on the Tier 1, but also the critical Tier 2s. Use your Python skills to build a traceability dashboard for material certs."
    },
    {
        question: "You've managed global supply chains at Tesla and Rivian. How do you decide between 'Local Sourcing' for agility versus 'Offshore Sourcing' for cost?",
        audio: "assets/q20.mp3",
        interviewer: "https://i.pravatar.cc/300?u=20",
        answer: "It's a TCO (Total Cost of Ownership) calculation. Offshore has lower labor but higher shipping/risk. For Starlink, local is better for NPI and high-iteration parts; offshore is for stable, high-volume mechanicals."
    },
    {
        question: "SpaceX Question: Elon Musk famously says 'The best part is no part.' How would you, as a GSM, challenge an engineering design to remove a part from the supply chain entirely?",
        audio: "assets/q21.mp3",
        interviewer: "https://i.pravatar.cc/300?u=21",
        answer: "Look for assemblies with excessive fasteners or connectors. Suggest integrating multiple parts into a single casting or 3D-printed assembly. Focus on the 'Physics First' approach—if the function can be achieved without the part, eliminate it."
    },
    {
        question: "SpaceX Question: If you are given a cost reduction target of 30% for Starlink's user terminal antenna housing within 6 months, and the vendor says it's impossible, what is your first 30 days' plan?",
        audio: "assets/q22.mp3",
        interviewer: "https://i.pravatar.cc/300?u=22",
        answer: "Day 1-10: Deep dive into the should-cost model and teardown. Day 11-20: Identify 'over-spec' requirements with Engineering. Day 21-30: Re-bid to 'hungry' vendors or propose a joint 'Kaizen' event at the current factory to find waste."
    },
    {
        question: "How do you handle 'Contract Management' for long-lead items like specialized semiconductor equipment or large-scale stamping dies?",
        audio: "assets/q23.mp3",
        interviewer: "https://i.pravatar.cc/300?u=23",
        answer: "Include 'milestone-based payments.' Ensure SpaceX owns the IP and the physical tooling at all times. Set up 'Liquidated Damages' for delays that impact launch dates, but balance it with 'Incentive Bonuses' for early delivery."
    },
    {
        question: "Describe your experience with 'Vendor Performance Management.' What are the Top 3 KPIs you track for a high-priority SpaceX mechanical vendor?",
        audio: "assets/q24.mp3",
        interviewer: "https://i.pravatar.cc/300?u=24",
        answer: "1. On-Time Delivery (OTD). 2. Quality Yield (DPPM). 3. Technical Agility (Response time to Engineering changes). Cost is a given, but at SpaceX, velocity and quality are the lifeblood."
    },
    {
        question: "How do you manage 'Force Majeure' events in your contracts? How did you handle the supply chain disruptions during your time at Tesla or GM?",
        audio: "assets/q25.mp3",
        interviewer: "https://i.pravatar.cc/300?u=25",
        answer: "Focus on resilience. It's not just about the contract; it's about the relationship. Mention finding alternative logistics routes or even 'flying' parts (expediting) to keep the line running. Show you are 'hands-on' during crises."
    },
    {
        question: "What is your approach to 'Category Management' for mechanical hardware (fasteners, brackets, etc.)? How do you leverage volume across different SpaceX programs like Falcon 9 and Starlink?",
        audio: "assets/q26.mp3",
        interviewer: "https://i.pravatar.cc/300?u=26",
        answer: "Consolidate the tail-spend. Move from 'spot-buying' to 'blanket POs.' Use your Python skills to identify 'commonality' across programs so you can negotiate as 'One SpaceX' to maximize leverage."
    },
    {
        question: "How do you negotiate 'IP Rights' with a supplier who is co-developing a new manufacturing process for a Starlink component?",
        audio: "assets/q27.mp3",
        interviewer: "https://i.pravatar.cc/300?u=27",
        answer: "SpaceX should own the 'Design IP.' The supplier can keep their 'Process IP' if it's general, but anything funded by SpaceX or specific to Starlink must be owned or licensed exclusively to SpaceX. Protect the competitive advantage."
    },
    {
        question: "Tell me about a time you had to 'fire' a supplier. How did you manage the transition without stopping production?",
        audio: "assets/q28.mp3",
        interviewer: "https://i.pravatar.cc/300?u=28",
        answer: "It must be a 'clean break.' Ensure you have a 'bridge stock' of parts. Secure the tooling first. Have the new supplier ready and 'shadowing' the old one. Focus on minimizing the impact on the assembly line."
    },
    {
        question: "How do you approach 'Strategic Relationship Management' (SRM) with CEOs of Tier 1 vendors? How do you sell the 'SpaceX Vision' to get them to invest in your project?",
        audio: "assets/q29.mp3",
        interviewer: "https://i.pravatar.cc/300?u=29",
        answer: "Don't just talk about volume; talk about being part of history (Mars mission). Align their business goals with SpaceX's roadmap. Show them that succeeding with Starlink makes them the 'elite' in the industry."
    },
    {
        question: "Final Challenge: You have a critical part shortage, the vendor is on strike, and the next Starlink launch is in 72 hours. You have $1M budget and no restrictions. What is your move?",
        audio: "assets/q30.mp3",
        interviewer: "https://i.pravatar.cc/300?u=30",
        answer: "Exhaust all options: 1. Check every global warehouse/distributor. 2. Can Engineering 're-work' an older version of the part? 3. Can we 3D-print a temporary solution? 4. Buy out the strike (if possible/legal) or find the 'hidden' stock. Show extreme bias for action."
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
    if (audio.src.includes('assets/')) {
        audio.play().catch(e => console.log("Audio not found, but that's okay for now!"));
    }
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
