class newregex {
    static test (inreg) {
        return inreg + newregex.rl() + "it's work"
    }
     
    static pt (inreg) {
        if (inreg.includes("|[")) {
            return `^(${inreg})$`
        }else{
            return `^${inreg}$`
        }
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
        return `{${num}}`
    }

    static rt (part) {
        return `[${part}]`
    }

    static to (start, end) {
        return `${start}-${end}`
    }
    
    static test (pattern, test) {
        const reg = RegExp(pattern)
        return reg.test(test)
    }
}

module.exports = newregex