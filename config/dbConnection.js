var mongodb = require('mongodb')

var connectionMongoDB = function () {
    var db = new mongodb.Db(
        'got'
        , new mongodb.Server(
            'localhost'
            , 27017
            , {}
        )
        , {}
    );
    return db
}

module.exports = function () {
    return connectionMongoDB
}