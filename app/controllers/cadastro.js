module.exports.cadastro = function (application, req, res) {
    res.render('cadastro', { validacao: {}, dadosForm: {} });
}

module.exports.cadastrar = function (application, req, res) {

    var data = req.body

    req.assert('nome', 'Nome não pode ser zazio').notEmpty()
    req.assert('usuario', 'Usuário não pode ser zazio').notEmpty()
    req.assert('senha', 'Sennha não pode ser zazio').notEmpty()
    req.assert('casa', 'Casa não pode ser zazio').notEmpty()

    var error = req.validationErrors();
    if (error) {
        res.render('cadastro', { validacao: error, dadosForm: data })
        return
    }

    res.send('cadastrado');
}