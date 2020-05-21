const express = require('express')
const app = express()
const db = require('./config/dataBase');
const log = require('morgan')('dev');
const bodyParser = require('body-parser');
const compositionRoutes = require('./api/composition/composition.routes');
var config = require('./config/properties').CONFIG;

//init dataBase config
db();
//initialise express router
var router = express.Router();
//configure bodyparser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });
// configure app.use()
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// Error handling
app.use(function (_, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    next();
});

// use express router
app.use('/api', router);
// call routings
compositionRoutes(router);

// // intialise server
// app.listen(4040, (req, res) => {
//     console.log(`Server is running on 4040 port.`);
// })

app.listen(config.port, () => {
    console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
});