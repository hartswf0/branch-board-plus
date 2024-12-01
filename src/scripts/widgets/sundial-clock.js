export class SundialClock {
    constructor() {
        this.timer = null;
    }

    render() {
        const template = document.getElementById('sundial-clock-template');
        const widget = template.content.cloneNode(true).querySelector('.widget');
        const display = widget.querySelector('.clock-display');

        const updateClock = () => {
            const now = new Date();
            display.textContent = now.toLocaleTimeString('en-US', {
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit'
            });
        };

        updateClock();
        this.timer = setInterval(updateClock, 1000);

        return widget;
    }
}
