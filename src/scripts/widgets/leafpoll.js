export class LeafPoll {
    constructor() {
        this.pollOptions = [];
    }

    render() {
        const template = document.getElementById('leafpoll-template');
        const widget = template.content.cloneNode(true).querySelector('.widget');
        const questionInput = widget.querySelector('.poll-question');
        const pollOptionsContainer = widget.querySelector('.poll-options');
        const addOptionBtn = widget.querySelector('.add-option-btn');
        const createPollBtn = widget.querySelector('.create-poll-btn');

        // Add initial two options
        const initialOptions = pollOptionsContainer.querySelectorAll('.poll-option');
        this.pollOptions = Array.from(initialOptions).map(input => input.value);

        // Add option button
        addOptionBtn.addEventListener('click', () => {
            const newOptionInput = document.createElement('input');
            newOptionInput.type = 'text';
            newOptionInput.classList.add('poll-option');
            newOptionInput.placeholder = `Option ${this.pollOptions.length + 1}`;
            
            newOptionInput.addEventListener('input', () => {
                this.updatePollOptions();
            });

            pollOptionsContainer.appendChild(newOptionInput);
            this.updatePollOptions();
        });

        // Update poll options on input
        initialOptions.forEach(input => {
            input.addEventListener('input', () => {
                this.updatePollOptions();
            });
        });

        // Create poll button
        createPollBtn.addEventListener('click', () => {
            const pollQuestion = questionInput.value.trim();
            const validOptions = this.pollOptions.filter(opt => opt.trim() !== '');

            if (!pollQuestion) {
                alert('Please enter a poll question');
                return;
            }

            if (validOptions.length < 2) {
                alert('Please add at least two options');
                return;
            }

            // In a real app, this would create a poll in a backend or local storage
            const pollResults = validOptions.map(option => ({
                option,
                votes: 0
            }));

            console.log('Poll Created:', {
                question: pollQuestion,
                options: pollResults
            });

            alert(`Poll "${pollQuestion}" created with ${validOptions.length} options`);
        });

        return widget;
    }

    updatePollOptions() {
        const optionInputs = document.querySelectorAll('.poll-option');
        this.pollOptions = Array.from(optionInputs)
            .map(input => input.value)
            .filter(value => value.trim() !== '');
    }
}
