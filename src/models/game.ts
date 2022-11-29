export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push('spade_' + i);
            this.stack.push('hearts_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
        }
        this.shuffle();
    }
    
    shuffle() {
        let currentIndex = this.stack.length, randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
    
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
    
            // And swap it with the current element.
            [this.stack[currentIndex], this.stack[randomIndex]] = 
            [this.stack[randomIndex], this.stack[currentIndex]];
        }
        return this.stack;
    }      
}