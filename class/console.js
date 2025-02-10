function afficher (text) {
    return console.log(text)
}
function afficherErreur (text) {
    return console.error(text)
}
function afficherTableau (text) {
    return console.table(text)
}
function afficherAttention (text) {
    return console.warn(text)
}

module.exports = { afficher, afficherErreur, afficherAttention, afficherTableau}