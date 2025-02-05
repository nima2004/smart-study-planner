// Change Quote
document.getElementById('new-quote-btn').addEventListener('click', () => {
    const quotes = [
        "Believe you can and you're halfway there.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Don’t let yesterday take up too much of today."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
});

// Flashcard Add Logic
document.getElementById('add-flashcard-btn').addEventListener('click', () => {
    const front = document.getElementById('flashcard-front').value;
    const back = document.getElementById('flashcard-back').value;

    if (front && back) {
        const card = document.createElement('li');
        card.textContent = front;
        card.addEventListener('click', () => {
            card.textContent = card.textContent === front ? back : front;
        });
        document.getElementById('flashcard-list').appendChild(card);

        document.getElementById('flashcard-front').value = '';
        document.getElementById('flashcard-back').value = '';
    }
});
// Get references to the audio element and buttons
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const stopBtn = document.getElementById('stop-btn');

// Function to toggle play/pause
playPauseBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "Pause Music";
    } else {
        audio.pause();
        playPauseBtn.textContent = "Play Music";
    }
});

// Function to stop music
stopBtn.addEventListener('click', function() {
    audio.pause();
    audio.currentTime = 0;  // Reset audio to the beginning
    playPauseBtn.textContent = "Play Music";
});

document.getElementById('toggle-focus').addEventListener('click', function() {
    document.body.classList.toggle('focus-mode');
    const isFocusMode = document.body.classList.contains('focus-mode');
    this.textContent = isFocusMode ? 'Exit Focus Mode' : 'Enter Focus Mode';
});