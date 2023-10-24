class Player {

    id = -1;
    name = "";
    matches = [];
    strengths = {
        forehand: 0,
        backhand: 0,
        serve: 0,
        slice: 0,
        volley: 0,
    };

    constructor(id, name) {
        this.id = id;
        this.name = name
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getMatches() {
        return this.matches;
    }

    addMatch(opponent, outcome) {
        this.matches.push({opponent: opponent, outcome: outcome});
    }

    addStrengths(forehand, backhand, serve, slice, volley) {
        this.strengths.forehand = forehand;
        this.strengths.backhand = backhand;
        this.strengths.serve = serve;
        this.strengths.slice = slice;
        this.strengths.volley = volley;
    }

    getStrengths() {
        return this.strengths;
    }

} export default Player;
