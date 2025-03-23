// Virtues Data
const virtuesData = [
    { 
        name: "Temperance", 
        desc: "Eat not to dullness; drink not to elevation.",
        examples: [
            "Stop eating when no longer hungry, not when full",
            "Drink water between alcoholic beverages",
            "Choose nutrient-dense foods for most meals",
            "Take time to enjoy and appreciate each bite",
            "Prepare home-cooked meals instead of fast food"
        ],
        avoid: [
            "Eating until uncomfortably full",
            "Drinking to the point of impaired judgment",
            "Mindless snacking while watching screens",
            "Using food as a primary emotional comfort",
            "Skipping meals then overcompensating later"
        ]
    },
    { 
        name: "Digital Restraint", 
        desc: "Limit screen time to meaningful purposes; choose real-world experiences over digital distractions.",
        examples: [
            "Set specific time blocks for checking social media",
            "Keep phone in another room during meals",
            "Read a physical book instead of scrolling before bed",
            "Take a walk without your phone",
            "Have a device-free evening with friends or family"
        ],
        avoid: [
            "Checking your phone first thing upon waking",
            "Mindless scrolling during downtime",
            "Using multiple screens simultaneously",
            "Letting notifications interrupt conversations",
            "Using screens as your default leisure activity"
        ]
    },
    { 
        name: "Social Initiative", 
        desc: "Regularly initiate conversations with new people; take the first step in forming connections.",
        examples: [
            "Introduce yourself to someone new at an event",
            "Ask a thoughtful question to a colleague you don't know well",
            "Invite an acquaintance for coffee",
            "Join a group activity where you'll meet new people",
            "Follow up with someone you recently met"
        ],
        avoid: [
            "Staying exclusively with people you already know at gatherings",
            "Waiting for others to approach you first",
            "Declining invitations due to social anxiety",
            "Keeping conversations superficial",
            "Avoiding eye contact with strangers"
        ]
    },
    { 
        name: "Friendship Cultivation", 
        desc: "Maintain consistent contact with existing friends; nurture relationships with deliberate attention.",
        examples: [
            "Call or message a friend you haven't spoken to recently",
            "Remember and acknowledge a friend's important date",
            "Plan a specific get-together with a friend",
            "Listen actively when friends share their experiences",
            "Offer help to a friend without being asked"
        ],
        avoid: [
            "Letting months pass without contact",
            "Canceling plans repeatedly",
            "Dominating conversations about your own life",
            "Forgetting important events in friends' lives",
            "Only reaching out when you need something"
        ]
    },
    { 
        name: "Entrepreneurial Courage", 
        desc: "Take calculated risks in business; pursue opportunities that push beyond comfort zones.",
        examples: [
            "Pitch an idea or proposal to someone",
            "Research a business opportunity you've been considering",
            "Learn a new skill relevant to entrepreneurship",
            "Have a conversation with a successful entrepreneur",
            "Take a small financial risk with clear boundaries"
        ],
        avoid: [
            "Dismissing ideas before exploring them",
            "Letting fear of rejection prevent action",
            "Waiting for 'perfect' conditions before starting",
            "Choosing comfort over growth opportunities",
            "Not setting clear parameters for risks"
        ]
    },
    { 
        name: "Frugality", 
        desc: "Make no expense but to do good to others or yourself; waste nothing.",
        examples: [
            "Review expenses and identify unnecessary spending",
            "Use what you already have before buying new",
            "Find a creative way to reuse or repurpose something",
            "Share resources with others when possible",
            "Wait 24 hours before making non-essential purchases"
        ],
        avoid: [
            "Impulse buying without consideration",
            "Paying for convenience when it's not necessary",
            "Throwing away items that could be repaired",
            "Buying premium when standard would suffice",
            "Keeping subscriptions you rarely use"
        ]
    },
    { 
        name: "Commitment Completion", 
        desc: "Follow through on promises made to yourself with the same diligence as those made to others.",
        examples: [
            "Complete a task you committed to doing today",
            "Break a large commitment into actionable steps",
            "Review and progress on your written goals",
            "Honor time commitments you've made to yourself",
            "Finish what you start before beginning something new"
        ],
        avoid: [
            "Making vague commitments without specific plans",
            "Prioritizing others' needs while neglecting self-promises",
            "Starting new projects before completing current ones",
            "Allowing 'perfect' to be the enemy of 'done'",
            "Abandoning goals when they become challenging"
        ]
    },
    { 
        name: "Silence", 
        desc: "Speak not but what may benefit others or yourself; avoid trifling conversation.",
        examples: [
            "Listen fully before formulating your response",
            "Ask questions that deepen understanding",
            "Pause before speaking to consider your words",
            "Refrain from gossip or negative talk about others",
            "Choose quality conversation over filling silence"
        ],
        avoid: [
            "Interrupting others mid-thought",
            "Speaking just to fill silence",
            "Engaging in or encouraging gossip",
            "Making statements when questions would be better",
            "Offering opinions on matters you know little about"
        ]
    },
    { 
        name: "Focus", 
        desc: "Dedicate undivided attention to important tasks; resist the pull of distraction.",
        examples: [
            "Work on one task until a natural stopping point",
            "Turn off notifications during focused work",
            "Set a timer for dedicated concentration",
            "Create a distraction-free environment before starting",
            "Use the Pomodoro technique for sustained focus"
        ],
        avoid: [
            "Multitasking between several activities",
            "Allowing interruptions during important work",
            "Checking email or messages constantly",
            "Working with television or distracting media on",
            "Jumping between tasks without completing any"
        ]
    },
    { 
        name: "Tranquility", 
        desc: "Be not disturbed at trifles, or at accidents common or unavoidable.",
        examples: [
            "Take three deep breaths before responding to frustration",
            "Distinguish between what you can and cannot control",
            "Maintain perspective when small things go wrong",
            "Practice acceptance of unchangeable circumstances",
            "Find humor in minor inconveniences"
        ],
        avoid: [
            "Dwelling on past mistakes or problems",
            "Catastrophizing when small things go wrong",
            "Responding immediately when emotionally triggered",
            "Complaining about situations you cannot change",
            "Allowing minor setbacks to ruin your entire day"
        ]
    },
    { 
        name: "Worldly Curiosity", 
        desc: "Seek diverse experiences and perspectives; engage genuinely with different cultures and ideas.",
        examples: [
            "Learn about a culture or perspective different from your own",
            "Try food from a cuisine you're unfamiliar with",
            "Read news or content from international sources",
            "Have a conversation with someone from a different background",
            "Explore a new neighborhood, museum, or cultural event"
        ],
        avoid: [
            "Dismissing unfamiliar ideas without consideration",
            "Staying exclusively in familiar environments",
            "Consuming media that only reinforces existing views",
            "Making assumptions about others' experiences",
            "Avoiding uncomfortable cultural learning opportunities"
        ]
    },
    { 
        name: "Value Creation", 
        desc: "In all endeavors, focus on creating value for others as well as yourself.",
        examples: [
            "Offer a skill or knowledge that helps someone else",
            "Identify and fill a need without being asked",
            "Share useful information or resources with others",
            "Look for win-win opportunities in negotiations",
            "Improve something (process, product, environment) for users"
        ],
        avoid: [
            "Taking more than you contribute",
            "Focusing only on personal gain in transactions",
            "Withholding knowledge that could benefit others",
            "Creating work that doesn't solve real problems",
            "Engaging in zero-sum thinking"
        ]
    },
    { 
        name: "Humility", 
        desc: "Remain open to learning from all sources; acknowledge limitations while continuing to grow.",
        examples: [
            "Ask for and accept feedback graciously",
            "Acknowledge when you don't know something",
            "Give credit to others for their contributions",
            "Learn something new from an unexpected source",
            "Admit mistakes and take steps to correct them"
        ],
        avoid: [
            "Defending your position when proven wrong",
            "Dismissing opinions from those with less status",
            "Claiming credit for group accomplishments",
            "Speaking as an authority on unfamiliar topics",
            "Being unwilling to change your mind with new information"
        ]
    }
];

// App State
let currentWeekIndex = 0;
let trackingData = [];
let notes = {};
let notificationsEnabled = false;

// DOM Elements
const currentWeekElement = document.getElementById('current-week');
const virtueNameElement = document.getElementById('virtue-name');
const virtueDescElement = document.getElementById('virtue-desc');
const successExamplesList = document.getElementById('success-examples');
const avoidExamplesList = document.getElementById('avoid-examples');
const examplesContainer = document.getElementById('examples-container');
const toggleExamplesButton = document.getElementById('toggle-examples');
const dayCellsContainer = document.getElementById('day-cells');
const virtueNotesElement = document.getElementById('virtue-notes');
const virtueListElement = document.getElementById('virtue-list');
const prevWeekButton = document.getElementById('prev-week');
const nextWeekButton = document.getElementById('next-week');
const notificationSwitch = document.getElementById('notification-switch');
const notificationModal = document.getElementById('notification-modal');
const allowNotificationsButton = document.getElementById('allow-notifications');
const denyNotificationsButton = document.getElementById('deny-notifications');

// Initialize the app
function initializeApp() {
    // Load data from local storage
    loadData();
    
    // Render the UI
    updateWeekDisplay();
    updateVirtueDisplay();
    renderDayCells();
    renderVirtueList();
    
    // Set up event listeners
    setupEventListeners();
    
    // Check for notification permission
    checkNotificationPermission();
}

// Load data from local storage
function loadData() {
    const storedData = localStorage.getItem('virtues-tracker-data');
    
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        currentWeekIndex = parsedData.currentWeekIndex || 0;
        trackingData = parsedData.trackingData || initializeTrackingData();
        notes = parsedData.notes || {};
        notificationsEnabled = parsedData.notificationsEnabled || false;
    } else {
        trackingData = initializeTrackingData();
    }
    
    // Update notification switch state
    notificationSwitch.checked = notificationsEnabled;
}

// Initialize tracking data
function initializeTrackingData() {
    return Array.from({ length: 13 }, (_, i) => ({
        weekIndex: i,
        days: Array(7).fill(null)
    }));
}

// Save data to local storage
function saveData() {
    const dataToSave = {
        currentWeekIndex,
        trackingData,
        notes,
        notificationsEnabled
    };
    
    localStorage.setItem('virtues-tracker-data', JSON.stringify(dataToSave));
}

// Update the week display (Week X)
function updateWeekDisplay() {
    currentWeekElement.textContent = `Week ${currentWeekIndex + 1}`;
}

// Update the virtue display
function updateVirtueDisplay() {
    const currentVirtue = virtuesData[currentWeekIndex];
    
    // Update name and description
    virtueNameElement.textContent = currentVirtue.name;
    virtueDescElement.textContent = currentVirtue.desc;
    
    // Update examples
    successExamplesList.innerHTML = '';
    avoidExamplesList.innerHTML = '';
    
    currentVirtue.examples.forEach(example => {
        const li = document.createElement('li');
        li.textContent = example;
        successExamplesList.appendChild(li);
    });
    
    currentVirtue.avoid.forEach(example => {
        const li = document.createElement('li');
        li.textContent = example;
        avoidExamplesList.appendChild(li);
    });
    
    // Update notes
    const noteKey = `virtue_${currentWeekIndex}`;
    virtueNotesElement.value = notes[noteKey] || '';
}

// Render day cells
function renderDayCells() {
    dayCellsContainer.innerHTML = '';
    
    const currentWeekData = trackingData[currentWeekIndex];
    
    for (let i = 0; i < 7; i++) {
        const cell = document.createElement('div');
        cell.className = 'day-cell';
        cell.textContent = i + 1;
        cell.dataset.day = i;
        
        // Apply appropriate class based on tracking status
        if (currentWeekData.days[i] === true) {
            cell.classList.add('success');
        } else if (currentWeekData.days[i] === false) {
            cell.classList.add('failure');
        }
        
        // Add click event
        cell.addEventListener('click', () => toggleDayStatus(i));
        
        dayCellsContainer.appendChild(cell);
    }
}

// Toggle the status of a day
function toggleDayStatus(dayIndex) {
    const currentWeekData = trackingData[currentWeekIndex];
    
    // Cycle through: null -> true -> false -> null
    if (currentWeekData.days[dayIndex] === null) {
        currentWeekData.days[dayIndex] = true;
    } else if (currentWeekData.days[dayIndex] === true) {
        currentWeekData.days[dayIndex] = false;
    } else {
        currentWeekData.days[dayIndex] = null;
    }
    
    // Update the UI and save
    renderDayCells();
    saveData();
}

// Render the full list of virtues
function renderVirtueList() {
    virtueListElement.innerHTML = '';
    
    virtuesData.forEach((virtue, index) => {
        const li = document.createElement('li');
        li.className = 'virtue-item';
        if (index === currentWeekIndex) {
            li.classList.add('active');
        }
        
        const numberSpan = document.createElement('span');
        numberSpan.className = 'virtue-item-number';
        numberSpan.textContent = `${index + 1}.`;
        
        const nameSpan = document.createElement('span');
        nameSpan.className = 'virtue-item-name';
        nameSpan.textContent = ` ${virtue.name}: `;
        
        const descDiv = document.createElement('div');
        descDiv.className = 'virtue-item-desc';
        descDiv.textContent = virtue.desc;
        
        li.appendChild(numberSpan);
        li.appendChild(nameSpan);
        li.appendChild(descDiv);
        
        // Add click event to switch to this virtue
        li.addEventListener('click', () => {
            switchToVirtue(index);
        });
        
        virtueListElement.appendChild(li);
    });
}

// Switch to a different virtue
function switchToVirtue(index) {
    // Save current notes
    saveNotes();
    
    // Update current index
    currentWeekIndex = index;
    
    // Update UI
    updateWeekDisplay();
    updateVirtueDisplay();
    renderDayCells();
    renderVirtueList();
    
    // Save the change
    saveData();
    
    // Update notifications if enabled
    if (notificationsEnabled) {
        scheduleNotifications();
    }
}

// Save the current notes
function saveNotes() {
    const noteKey = `virtue_${currentWeekIndex}`;
    notes[noteKey] = virtueNotesElement.value;
    saveData();
}

// Set up event listeners
function setupEventListeners() {
    // Navigation buttons
    prevWeekButton.addEventListener('click', () => {
        saveNotes();
        currentWeekIndex = (currentWeekIndex - 1 + 13) % 13;
        updateWeekDisplay();
        updateVirtueDisplay();
        renderDayCells();
        renderVirtueList();
        saveData();
        
        if (notificationsEnabled) {
            scheduleNotifications();
        }
    });
    
    nextWeekButton.addEventListener('click', () => {
        saveNotes();
        currentWeekIndex = (currentWeekIndex + 1) % 13;
        updateWeekDisplay();
        updateVirtueDisplay();
        renderDayCells();
        renderVirtueList();
        saveData();
        
        if (notificationsEnabled) {
            scheduleNotifications();
        }
    });
    
    // Toggle examples
    toggleExamplesButton.addEventListener('click', () => {
        if (examplesContainer.classList.contains('hidden')) {
            examplesContainer.classList.remove('hidden');
            toggleExamplesButton.textContent = 'Hide Examples';
        } else {
            examplesContainer.classList.add('hidden');
            toggleExamplesButton.textContent = 'Show Examples';
        }
    });
    
    // Save notes when textarea changes
    virtueNotesElement.addEventListener('blur', saveNotes);
    
    // Notification switch
    notificationSwitch.addEventListener('change', () => {
        if (notificationSwitch.checked) {
            requestNotificationPermission();
        } else {
            disableNotifications();
        }
    });
    
    // Notification modal buttons
    allowNotificationsButton.addEventListener('click', () => {
        requestNotificationPermissionAPI();
        notificationModal.classList.add('hidden');
    });
    
    denyNotificationsButton.addEventListener('click', () => {
        notificationModal.classList.add('hidden');
        notificationSwitch.checked = false;
    });
}

// Check notification permission
function checkNotificationPermission() {
    if (!('Notification' in window)) {
        // Notifications not supported
        notificationSwitch.checked = false;
        notificationSwitch.disabled = true;
        return;
    }
    
    if (Notification.permission === 'granted') {
        // We already have permission, restore notifications if they were enabled
        if (notificationsEnabled) {
            scheduleNotifications();
        }
    } else if (Notification.permission !== 'denied') {
        // We haven't asked yet
        if (notificationsEnabled) {
            // Show modal to request permission
            notificationModal.classList.remove('hidden');
        }
    }
}

// Request notification permission (show modal first)
function requestNotificationPermission() {
    if (!('Notification' in window)) {
        return;
    }
    
    if (Notification.permission === 'granted') {
        enableNotifications();
    } else if (Notification.permission !== 'denied') {
        notificationModal.classList.remove('hidden');
    } else {
        // Permission was denied
        notificationSwitch.checked = false;
        alert('Notification permission was denied. Please enable notifications in your browser settings to receive daily reminders.');
    }
}

// Request notification permission API call
function requestNotificationPermissionAPI() {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            enableNotifications();
        } else {
            notificationSwitch.checked = false;
        }
    });
}

// Enable notifications
function enableNotifications() {
    notificationsEnabled = true;
    notificationSwitch.checked = true;
    saveData();
    scheduleNotifications();
}

// Disable notifications
function disableNotifications() {
    notificationsEnabled = false;
    notificationSwitch.checked = false;
    saveData();
    
    // Clear any scheduled notifications
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
            type: 'CLEAR_NOTIFICATIONS'
        });
    }
}

// Schedule notifications for the current virtue
function scheduleNotifications() {
    if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) {
        return;
    }
    
    const currentVirtue = virtuesData[currentWeekIndex];
    
    navigator.serviceWorker.controller.postMessage({
        type: 'SCHEDULE_NOTIFICATIONS',
        data: {
            virtueName: currentVirtue.name,
            virtueDesc: currentVirtue.desc
        }
    });
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);
