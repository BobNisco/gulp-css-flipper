var path = require('path');
var through2 = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var flip = require('css-flip');
var File = require('vinyl');

module.exports = function () {

    var stream = through2.obj(function(file, enc, cb) {
        if (file.isNull()) {
            return cb(null, file);
        }

        if (file.isStream()) {
            return cb(new PluginError('gulp-css-flipper', 'Streaming not supported'));
        }

        var str = file.contents.toString('utf8');

        file.contents = new Buffer(flip(str));

        this.push(file);

        return cb();
    });

    return stream;
};