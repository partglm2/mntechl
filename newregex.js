class newregex {
    constructor(inregex) {
        this.inregex = inregex
    }
    
    static test (inreg) {
        return inreg + newregex.rl + "it's work"
    }
     
    static pattern (inreg) {
        return `^${inreg}$`
    }

    static rl () {
        return "\n"
    }
    static idk () {
        return "."
    }

    static ou () {
        return "|"
    }

    static hm (num) {
        return "{num}"
    }
}

module.exports = newregex