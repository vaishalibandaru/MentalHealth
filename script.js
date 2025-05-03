document.addEventListener('DOMContentLoaded', () => {
    // Daily Affirmations Button
    const affirmationButton = document.querySelector('.affirmation-button');
    const affirmationMessage = document.querySelector('.affirmation-message');
    
    const affirmations = [
        "You are enough just as you are.",
        "You have the power to change your story.",
        "Today is full of possibilities.",
        "Your feelings are valid.",
        "You are capable of amazing things."
    ];

    affirmationButton.addEventListener('click', () => {
        const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
        affirmationMessage.textContent = randomAffirmation;
        affirmationMessage.style.opacity = 1;

        // Fade out the message after 5 seconds
        setTimeout(() => {
            affirmationMessage.style.opacity = 0;
        }, 5000);
    });

    // Stress Buster Button
    const stressBusterButton = document.querySelector('.stress-buster-button');
    stressBusterButton.addEventListener('click', () => {
        alert("Quick Stress Relief Techniques:\n1. Try a 5-minute breathing exercise: inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds.\n2. Take a moment to stretch your body and release tension.\n3. Step outside and connect with nature.");
    });
    // Daily Check-In
    const dailyCheckInForm = document.querySelector("#daily-check-in");
    const stressLevelInput = document.querySelector("#stress-level");
    const checkInResult = document.querySelector("#check-in-result");

    dailyCheckInForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const stressLevel = parseInt(stressLevelInput.value, 10); // Ensure it's a number
        if (stressLevel >= 1 && stressLevel <= 10) {
        checkInResult.textContent = `Your stress level is ${stressLevel}. Remember to take care of yourself today!`;
        } else {
            checkInResult.textContent = "Please enter a stress level between 1 and 10.";
        }
        stressLevelInput.value = ""; // Clear input
    });

    // Grounding Techniques
    const groundingButton = document.querySelector("#grounding-button");
    const groundingList = document.querySelector("#grounding-list");
    const groundingSteps = [
        "Name 5 things you can see.",
        "Name 4 things you can touch.",
        "Name 3 things you can hear.",
        "Name 2 things you can smell.",
        "Name 1 thing you can taste."
    ];

    groundingButton.addEventListener("click", () => {
        groundingList.innerHTML = ""; // Clear previous list
        groundingSteps.forEach((step) => {
            const listItem = document.createElement("li");
            listItem.textContent = step;
            groundingList.appendChild(listItem);
        });
    });
    // Mindfulness Button
    const mindfulnessButton = document.querySelector('.mindfulness-button');
    mindfulnessButton.addEventListener('click', () => {
        alert("Mindfulness & Meditation Exercises:\n1. Sit comfortably and focus on your breath. Inhale deeply through your nose and exhale slowly through your mouth.\n2. Try a body scan: bring your attention to different parts of your body, noticing any sensations.\n3. Listen to a guided meditation. Spend a few minutes in quiet reflection.");
    });

    // To-Do List
    const addTodoButton = document.getElementById('add-todo');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addTodoButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText) {
            const listItem = document.createElement('li');
            listItem.textContent = todoText;
            todoList.appendChild(listItem);
            todoInput.value = '';
        }
    });

    // Positive Affirmation Cards
    const affirmationCardButton = document.querySelector('.affirmation-card-button');
    const affirmationCardMessage = document.querySelector('.affirmation-card-message');
    const affirmationCards = [
        "You are capable of amazing things.",
        "You deserve to be happy.",
        "Believe in yourself.",
        "You have the power to create change.",
        "Your potential is limitless."
    ];

    function getRandomAffirmationCard() {
        return affirmationCards[Math.floor(Math.random() * affirmationCards.length)];
    }

    if (affirmationCardButton && affirmationCardMessage) {
        affirmationCardButton.addEventListener('click', () => {
            affirmationCardMessage.textContent = getRandomAffirmationCard();
        });
    }

    // Gratitude Journal
    const addGratitudeButton = document.getElementById('add-gratitude');
    const gratitudeInput = document.getElementById('gratitude-input');
    const gratitudeList = document.getElementById('gratitude-list');

    if (addGratitudeButton && gratitudeInput && gratitudeList) {
        addGratitudeButton.addEventListener('click', () => {
            const gratitudeText = gratitudeInput.value.trim();
            if (gratitudeText) {
                const listItem = document.createElement('li');
                listItem.textContent = gratitudeText;
                gratitudeList.appendChild(listItem);
                gratitudeInput.value = '';
            }
        });
    }

    // Reflection Prompts
    const reflectionPrompts = [
        "What made you smile today?",
        "What challenges did you face today, and how did you handle them?",
        "What are you looking forward to tomorrow?",
        "What is something you learned about yourself today?",
        "Who or what are you grateful for today?"
    ];
    const reflectionButton = document.getElementById('reflection-prompt');
    const reflectionMessage = document.querySelector('.reflection-message');

    if (reflectionButton && reflectionMessage) {
        reflectionButton.addEventListener('click', () => {
            const randomPrompt = reflectionPrompts[Math.floor(Math.random() * reflectionPrompts.length)];
            reflectionMessage.textContent = randomPrompt;
        });
    }

    // Mood Tracking
    const saveMoodButton = document.getElementById('save-mood');
    const moodSelect = document.getElementById('mood-select');
    const moodList = document.getElementById('mood-list');

    if (saveMoodButton && moodSelect && moodList) {
        saveMoodButton.addEventListener('click', () => {
            const mood = moodSelect.value;
            if (mood) {
                const listItem = document.createElement('li');
                listItem.textContent = `Today, you felt: ${mood}`;
                moodList.appendChild(listItem);
                moodSelect.value = '';
            }
        });
    }
});
