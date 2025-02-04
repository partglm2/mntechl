const fs = require('fs')
const fr = require('./class/traduction')

// Récupère le deuxième argument (index 2, car 0 = node, 1 = start.js)
const scriptToRun = process.argv[2];

function tolog (input) {
    if (process.argv[3] == "log") {
        console.log(input);
    }
}

if (!scriptToRun) {
    console.error("Erreur : Vous devez spécifier un fichier à exécuter !");
    process.exit(1);
}

fs.readFile(scriptToRun, 'utf-8', (err, data) => {
    let dictionnaire = Object.getOwnPropertyNames(fr).filter(prop => typeof fr[prop] === "function" && prop !== "length" && prop !== "name" && prop !== "prototype");
    let dic = []
    dictionnaire.forEach(words =>{
        const wordtoexecute = `fr.${words}`
        const executed = eval(wordtoexecute + "()")
        if (wordtoexecute.includes('fr.test')) return
        if (wordtoexecute.includes('rx.test')) return
        dic.push({wordtoexecute, executed})
    })

    let code = data

    dic.forEach(({wordtoexecute, executed}) => {
        tolog({wordtoexecute, executed});
        code = code.replace(new RegExp(`\\b${wordtoexecute}\\b`, "g"), executed);
    })

    eval(code);
});