const fs = require('fs')
const fr = require('./class/traduction')

// Récupère le deuxième argument (index 2, car 0 = node, 1 = start.js)
const scriptToRun = process.argv[2];

if (!scriptToRun) {
    console.error("Erreur : Vous devez spécifier un fichier à exécuter !");
    process.exit(1);
}

fs.readFile(scriptToRun, 'utf-8', (err, data) => {
    let dictionnaire = Object.getOwnPropertyNames(fr).filter(prop => typeof fr[prop] === "function" && prop !== "length" && prop !== "name" && prop !== "prototype");
    let dic = []
    Object.keys(dictionnaire).forEach(words =>{
        const wordtoexecute = `fr.${words}`
        const executed = wordtoexecute
        dic.push({wordtoexecute, executed})
    })

    let code = data

    for (const [motFr, motJs] of Object.entries(dic)) {
        code = code.replace(new RegExp(`\\b${motFr}\\b`, "g"), motJs);
    }

    eval(code);
});