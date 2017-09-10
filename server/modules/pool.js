var pg = require('pg');

var config = {
    database: 'timlohmann',
    host: 'localhost',
    port:5432,
    max: 10,
    idleTimeoutMillis: 3000
};

module.exports = pg.Pool(config);