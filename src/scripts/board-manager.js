import { TreeRingTimer } from './widgets/tree-ring-timer.js';
import { SundialClock } from './widgets/sundial-clock.js';
import { BarkText } from './widgets/bark-text.js';
import { RockSlideMeter } from './widgets/rockslide-meter.js';
import { LeafQR } from './widgets/leaf-qr.js';
import { BranchoutPicker } from './widgets/branchout-picker.js';
import { PineconeDice } from './widgets/pinecone-dice.js';
import { LeafPoll } from './widgets/leafpoll.js';

export class BoardManager {
    constructor() {
        this.board = document.getElementById('board');
        this.boardName = null;
    }

    createBoard(name) {
        this.boardName = name;
        this.board.innerHTML = `<h2>Board: ${name}</h2>`;
    }

    addWidget(type) {
        if (!this.boardName) {
            alert('Please create a board first!');
            return;
        }

        const widgetMap = {
            'tree-ring-timer': TreeRingTimer,
            'sundial-clock': SundialClock,
            'bark-text': BarkText,
            'rockslide-meter': RockSlideMeter,
            'leaf-qr': LeafQR,
            'branchout-picker': BranchoutPicker,
            'pinecone-dice': PineconeDice,
            'leafpoll': LeafPoll
        };

        const WidgetClass = widgetMap[type];
        if (WidgetClass) {
            const widget = new WidgetClass();
            this.board.appendChild(widget.render());
        }
    }
}
