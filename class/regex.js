class newregex {
    static test (inreg) {
        return inreg + this.rl() + "it's work"
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
    
    static di() {
        return "\\d";
    }
    
    static le() {
        return "\\w";
    }

    static sp() {
        return "\\s";
    }

    static mi(n) {
        return `{${n},}`;
    }

    static be(n, m) {
        return `{${n},${m}}`;
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
    
    static testregex (pattern, test) {
        const reg = RegExp(pattern)
        return reg.test(test)
    }
}

module.exports = newregex