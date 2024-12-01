export class BarkText {
    constructor() {
        this.text = '';
    }

    render() {
        const template = document.getElementById('bark-text-template');
        const widget = template.content.cloneNode(true).querySelector('.widget');
        const textarea = widget.querySelector('textarea');

        textarea.addEventListener('input', (event) => {
            this.text = event.target.value;
            this.saveToLocalStorage();
        });

        // Load saved text from localStorage
        const savedText = localStorage.getItem('barkText');
        if (savedText) {
            textarea.value = savedText;
            this.text = savedText;
        }

        return widget;
    }

    saveToLocalStorage() {
        localStorage.setItem('barkText', this.text);
    }
}
