export class TreeRingTimer {
    constructor() {
        this.duration = 25 * 60; // 25 minutes
        this.remainingTime = this.duration;
        this.timer = null;
    }

    render() {
        const template = document.getElementById('tree-ring-timer-template');
        const widget = template.content.cloneNode(true).querySelector('.widget');
        
        const display = widget.querySelector('.timer-display');
        const startBtn = widget.querySelector('.start-btn');
        const resetBtn = widget.querySelector('.reset-btn');

        display.textContent = this.formatTime(this.remainingTime);

        startBtn.addEventListener('click', () => {
            if (!this.timer) {
                this.timer = setInterval(() => {
                    this.remainingTime--;
                    display.textContent = this.formatTime(this.remainingTime);

                    if (this.remainingTime <= 0) {
                        clearInterval(this.timer);
                        this.timer = null;
                        display.textContent = 'Time\'s up!';
                    }
                }, 1000);
                startBtn.textContent = 'Pause';
            } else {
                clearInterval(this.timer);
                this.timer = null;
                startBtn.textContent = 'Start';
            }
        });

        resetBtn.addEventListener('click', () => {
            clearInterval(this.timer);
            this.timer = null;
            this.remainingTime = this.duration;
            display.textContent = this.formatTime(this.remainingTime);
            startBtn.textContent = 'Start';
        });

        return widget;
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
}
