const express = require('express');

// const responseHandler = require('./responseHandler');
// const appConfig = require('./app.config');

const app = express();
const router = express.Router();

// const logger = require('./src/logger');

// const routeBuilder = require('./routes/index.routes');

require('./passport');

createMiddleware(swaggerDocument, app, (err, middleware) => {


    // routeBuilder(app, router);

    // responseHandler.handleError(app);
});


app.listen(appConfig.PORT, () => {
    logger.info(`API is started. The port is ${appConfig.PORT}.`);
});

