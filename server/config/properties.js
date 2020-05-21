require('dotenv').config()

const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    mongo: {
        host: process.env.MONGO_HOSTNAME,
        port: process.env.MONGO_PORT,
        db: process.env.MONGO_DB
    }
};

module.exports = {
    PORT: config.port,
    DB: `mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.db}`,
    CONFIG: config
}
