# gulp-css-flipper

Easily create ltr or rtl css files in gulp tasks. This is a wrapper around the [Twitter css-flip library](https://github.com/twitter/css-flip)

## Usage

1. Include gulp-css-flipper in your package.json dependencies `npm install gulp-css-flipper --save-dev`
1. Use it like any other gulp plugin

```
var flipper = require('gulp-css-flipper');

gulp.src('/styles/*.css')
    .pipe(flipper())
    .pipe(gulp.dest('/dist/css/'))
```

## css-flip help

Please follow the docs at the [Twitter css-flip library](https://github.com/twitter/css-flip) GitHub for more info on how to use flip.
