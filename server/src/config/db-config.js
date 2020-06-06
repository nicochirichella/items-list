var dbConfigLocal = {
    client: 'mongo',
    connection: {
        url     : 'mongodb://localhost:27017/',
        user     : '',
        password : '',
        database : 'mongd_db',
    } //TODO ADD to .env
};

var dbConfigProd = {
    client: 'mongo',
    connection: {
        url     : 'mongodb://mongo-db:27017/',
        user     : '',
        password : '',
        database : 'mongd_db',
    } //TODO ADD to .env
};

switch (process.env['DB_ENV']){
    case "production":
        module.exports = dbConfigProd;
        break;
    default:
        module.exports = dbConfigLocal;
        break;
}