export class PineconeDice {
    constructor() {
        this.diceTypes = {
            '6': () => Math.floor(Math.random() * 6) + 1,
            '20': () => Math.floor(Math.random() * 20) + 1,
            '100': () => Math.floor(Math.random() * 100) + 1
        };
    }

    render() {
        const template = document.getElementById('pinecone-dice-template');
        const widget = template.content.cloneNode(true).querySelector('.widget');
        const resultDisplay = widget.querySelector('.dice-result');
        const diceTypeSelect = widget.querySelector('.dice-type');
        const rollButton = widget.querySelector('.roll-dice-btn');

        rollButton.addEventListener('click', () => {
            const selectedDiceType = diceTypeSelect.value;
            const rollFunction = this.diceTypes[selectedDiceType];
            
            if (rollFunction) {
                const result = rollFunction();
                resultDisplay.textContent = `Rolled a ${selectedDiceType}-sided die: ${result}`;
                
                // Add a fun rolling animation
                resultDisplay.classList.add('rolling');
                setTimeout(() => {
                    resultDisplay.classList.remove('rolling');
                }, 500);
            }
        });

        return widget;
    }
}
