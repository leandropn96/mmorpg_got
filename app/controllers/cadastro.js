module.exports.cadastro = function (application, req, res) {
    res.render('cadastro');
}

module.exports.catastrar = function (application, req, res) {
    res.send('cadastrado');
}