class newregex {
    constructor(inregex) {
        this.inregex = inregex
    }
    
    test () {
        return this.inregex + "it's work"
    }

    static rl () {
        return "\n"
    }
    static idk () {
        return "."
    }
}

module.exports = newregex