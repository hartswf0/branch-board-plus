export class LeafQR {
    constructor() {
        this.qrLibLoaded = false;
    }

    async loadQRLibrary() {
        if (this.qrLibLoaded) return;
        
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/qrcode@1.4.4/build/qrcode.min.js';
            script.onload = () => {
                this.qrLibLoaded = true;
                resolve();
            };
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    async render() {
        await this.loadQRLibrary();

        const template = document.getElementById('leaf-qr-template');
        const widget = template.content.cloneNode(true).querySelector('.widget');
        const input = widget.querySelector('.qr-input');
        const preview = widget.querySelector('.qr-preview');
        const generateBtn = widget.querySelector('.generate-qr-btn');

        generateBtn.addEventListener('click', () => {
            const text = input.value.trim();
            if (text) {
                preview.innerHTML = ''; // Clear previous QR
                window.QRCode.toCanvas(preview, text, {
                    width: 200,
                    height: 200,
                    colorDark: "#2c1810", // bark color
                    colorLight: "#f0fdf4" // leaf background
                });
            } else {
                alert('Please enter a URL or text');
            }
        });

        return widget;
    }
}
