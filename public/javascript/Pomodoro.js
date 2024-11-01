document.addEventListener('DOMContentLoaded', function() {
    initPomodoro();
});

const card = document.getElementById('carddd'),
      frontTimerDisplay = document.getElementById('pomodoro-time'),
      backTimerDisplay = document.getElementById('break-time'),
      startButton = document.getElementById('pomodoro-start'),
      stopPomodoroButton = document.getElementById('pomodoro-stop'),
      resetButton = document.getElementById('pomodoro-reset'),
      flipButton = document.getElementById('flip'),
      stopBreakButton = document.getElementById('stopBreak'),
      goBackButton = document.getElementById('GoBack');

let isRunning = false,
    pomodoroTimer = null,
    breakTimer = null,
    currentTime = 1500, // 25 minutes for the Pomodoro
    breakTime = 300; // 5 minutes for the break

function initPomodoro() {
    startButton.addEventListener('click', startPomodoro);
    stopPomodoroButton.addEventListener('click', stopPomodoro);
    resetButton.addEventListener('click', resetPomodoro);
    flipButton.addEventListener('click', () => {
        if (!breakTimer) startBreakAutomatically();
    });
    stopBreakButton.addEventListener('click', stopBreak);
    goBackButton.addEventListener('click', returnToPomodoroAutomatically);
}

function startPomodoro() {
    if (!isRunning) {
        isRunning = true;
        if (!pomodoroTimer) {
            pomodoroTimer = setInterval(updatePomodoroTimer, 1000);
        }
        updateTimerDisplay(currentTime, frontTimerDisplay);
    }
}

function stopPomodoro() {
    clearInterval(pomodoroTimer);
    pomodoroTimer = null;
    isRunning = false;
}

function stopBreak() {
    clearInterval(breakTimer);
    breakTimer = null;
    updateTimerDisplay(breakTime, backTimerDisplay); // Reset the display after stopping
}

function resetPomodoro() {
    stopPomodoro(); 
    currentTime = 1500; // Reset to 25 minutes
    breakTime = 300; // Reset to 5 minutes
    updateTimerDisplay(currentTime, frontTimerDisplay);
    updateTimerDisplay(breakTime, backTimerDisplay);
}

function updatePomodoroTimer() {
    currentTime--;
    updateTimerDisplay(currentTime, frontTimerDisplay);
    if (currentTime <= 0) {
        clearInterval(pomodoroTimer);
        pomodoroTimer = null;
        // Optionally start break automatically or leave for manual start
    }
}

function startBreakAutomatically() {
    if (!breakTimer) {
        card.classList.add("animation");
        breakTimer = setInterval(() => {
            breakTime--;
            updateTimerDisplay(breakTime, backTimerDisplay);
            if (breakTime <= 0) {
                clearInterval(breakTimer);
                breakTimer = null;
                returnToPomodoroAutomatically();
            }
        }, 1000);
    }
}

function returnToPomodoroAutomatically() {
    card.classList.remove("animation");
    stopBreak();
    resetPomodoro();
    startPomodoro();
}

function updateTimerDisplay(time, displayElement) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    displayElement.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}