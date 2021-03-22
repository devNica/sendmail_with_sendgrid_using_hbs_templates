const express = require('express');
const testRouter = require('./routes/test.router');

const routes = ()=>{
    const app = express();
    testRouter(app);
    return app;
}

module.exports = routes;


