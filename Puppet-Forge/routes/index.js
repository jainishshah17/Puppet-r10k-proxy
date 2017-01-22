var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
/* GET home page. */
router.get('/v3/modules/:module', function(req, res, next) {
    var moduleName = req.param("module");
    var obj = require("../routes/module.json")
    console.log("Module name is :" + moduleName);

    res.setHeader('Content-Type', 'application/json');
    res.send(obj);
});


router.get('/v3/releases/:release', function(req, res, next) {
    var releaseName = req.param("release");
    var obj = require("../routes/release.json")
    console.log("Module name is :" + releaseName);

    res.setHeader('Content-Type', 'application/json');
    res.send(obj);
});


router.get('/v3/files/:file', function(req, res, next) {
    var file = req.param("file");

    console.log("Module name is :" + file);
    res.download(__dirname + '/puppetlabs-nginx-99.99.99.tar.gz');
    console.log("Module name is :" + file);
    // res.download('../routes/puppetlabs-nginx-99.99.99.tar.gz', 'puppetlabs-nginx-99.99.99.tar.gz');
});


module.exports = router;
