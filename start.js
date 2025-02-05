const fs = require('fs')
const fr = require('./class/traduction')

// Récupère le deuxième argument (index 2, car 0 = node, 1 = start.js)
const scriptToRun = process.argv[2];

function tolog (input) {
    if (process.argv[3] == "--log") {
        console.log(input);
    }
}

if (!scriptToRun) {
    console.error("Erreur : Vous devez spécifier un fichier à exécuter !");
    process.exit(1);
}

async function tips (data) {
    const a = await fs.promises.readFile("class/tips.txt", 'utf-8')
    console.log(a)

    const c = await fs.promises.writeFile('class/tipsshow.txt', "1", 'utf-8')
    
    process.exit(1)
}
async function tipsfunc () {
    const b = await fs.promises.readFile("class/tipsshow.txt", 'utf-8')
    if (b == '0') {
        tips(b)
    }
}
if (process.argv[4] !== "--noTips") {
    tipsfunc();
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