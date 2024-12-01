export class RockSlideMeter {
    constructor() {
        this.audioContext = null;
        this.microphone = null;
        this.analyser = null;
        this.isMonitoring = false;
    }

    render() {
        const template = document.getElementById('rockslide-meter-template');
        const widget = template.content.cloneNode(true).querySelector('.widget');
        const displayElement = widget.querySelector('.sound-level-display');
        const startButton = widget.querySelector('.start-monitoring-btn');

        startButton.addEventListener('click', async () => {
            if (!this.isMonitoring) {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    this.microphone = this.audioContext.createMediaStreamSource(stream);
                    this.analyser = this.audioContext.createAnalyser();
                    this.microphone.connect(this.analyser);
                    
                    this.analyser.fftSize = 512;
                    const bufferLength = this.analyser.frequencyBinCount;
                    const dataArray = new Uint8Array(bufferLength);

                    const updateSoundLevel = () => {
                        this.analyser.getByteFrequencyData(dataArray);
                        const averageVolume = dataArray.reduce((sum, value) => sum + value, 0) / bufferLength;
                        const decibels = 20 * Math.log10(averageVolume);
                        
                        displayElement.textContent = `${Math.round(decibels)} dB`;
                        
                        if (this.isMonitoring) {
                            requestAnimationFrame(updateSoundLevel);
                        }
                    };

                    this.isMonitoring = true;
                    startButton.textContent = 'Stop Monitoring';
                    updateSoundLevel();
                } catch (error) {
                    console.error('Error accessing microphone:', error);
                    alert('Unable to access microphone. Please check permissions.');
                }
            } else {
                this.stopMonitoring();
                startButton.textContent = 'Start Monitoring';
            }
        });

        return widget;
    }

    stopMonitoring() {
        this.isMonitoring = false;
        if (this.audioContext) {
            this.audioContext.close();
            this.audioContext = null;
        }
        this.microphone = null;
        this.analyser = null;
    }
}
