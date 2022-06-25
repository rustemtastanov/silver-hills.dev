const gulp 									= require("gulp");
const { series, parallel }	= require("gulp");
const gulpLoadPlugins 			= require("gulp-load-plugins");
const autoprefixer					= require("autoprefixer");
const assets								= require("postcss-assets");
const browserSync						= require("browser-sync");
const del										= require("del");
const sprites								= require("postcss-sprites")["default"];
const spritesUpdateRule			= require("postcss-sprites")["updateRule"];
const postcss								= require("postcss");
const cssnano								= require("cssnano");
const pxtorem								= require("postcss-pxtorem");
const historyFallback				= require("connect-history-api-fallback");
const routes								= [];
const uglify								= require("gulp-uglify-es").default;
const comments							= require("postcss-discard-comments");
const imagemin							= require("imagemin");
const babel									= require("gulp-babel");

const $ = gulpLoadPlugins();

const reload = browserSync["reload"];

const jqueryInside = true;


const APP = {
	tmp: {
		path:			".tmp",
		fonts:		".tmp/fonts",
		images:		".tmp/img",
		styles:		".tmp/css",
		scripts:	".tmp/js"
	},
	src: {
		path:				"src",
		fonts:			"src/fonts",
		images:			"src/img",
		samples:		"src/samples",
		scripts:		"src/scripts",
		styles:			"src/styles",
		views:			"src/views",
		components: "src/components"
	},
	dst: {
		path:			"build",
		fonts:		"build/fonts",
		images:		"build/img",
		samples:	"build/samples",
		scripts:	"build/js",
		styles:		"build/css"
	}
};

function htmlRu(cb) {
	return gulp.src(APP["src"]["views"] + "/ru/*.html")
		.pipe(
			$.nunjucksRender({
				path: [APP["src"]["views"], APP["src"]["components"]],
				envOptions: {
					tags: {
						variableStart:  "{{{",
						variableEnd:    "}}}"
					}
				}
			}))
		.pipe(
			$.typograf({
				disableRule:  ["ru/other/phone-number", "ru/number/comma", "ru/date/fromISO"],
				locale:       ["ru", "en-US"]
			}))
		.pipe(gulp.dest(APP["tmp"]["path"] + "/ru/"))
		.pipe(reload({stream: true}));
	cb();
}

function htmlKz(cb) {
	return gulp.src(APP["src"]["views"] + "/kz/*.html")
		.pipe(
			$.nunjucksRender({
				path: [APP["src"]["views"], APP["src"]["components"]],
				envOptions: {
					tags: {
						variableStart:  "{{{",
						variableEnd:    "}}}"
					}
				}
			}))
		.pipe(
			$.typograf({
				disableRule:  ["ru/other/phone-number", "ru/number/comma", "ru/date/fromISO"],
				locale:       ["ru", "en-US"]
			}))
		.pipe(gulp.dest(APP["tmp"]["path"] + "/kz/"))
		.pipe(reload({stream: true}));
	cb();
}

function styles(cb) {
	return gulp.src([APP["src"]["styles"] + "/*.scss", APP["src"]["components"] + "/**/*.scss"])
		.pipe($.plumber({errorHandler: $.notify.onError("Ошибка: <%= error.message %>")}))
		// .pipe($.sourcemaps.init())
		.pipe(
			$.sass.sync({
				outputStyle: 	"expanded",
				precision:		10,
				includePaths: ["."],
			}).on("error", $.sass.logError))
		.pipe(
			$.postcss([
				assets({
					basepPath:		APP["src"]["path"] + "/",
					cachebuster:	true,
					loadPaths:		[APP["src"]["images"] + "/"],
				}),
				sprites({
					stylesheetPath: "./" + APP["tmp"]["styles"],
					spritePath:     "./" + APP["tmp"]["images"],
					filterBy(image) {
						// Allow only png files
						if (!/\/?sprites\/.*\.png$/.test(image["url"])) {
							return Promise.reject();
						}
						return Promise.resolve();
					},
					hooks: {
						onUpdateRule(rule, token, image) {
							// Use built-in logic for background-image & background-position
							spritesUpdateRule(rule, token, image);
							["width", "height"].forEach((prop) => {
								rule.insertAfter(rule["last"], postcss.decl({
									prop,
									value: image["coords"][prop] + "px",
								}));
							});
						}
					}
				}),
				pxtorem({
					propWhiteList: [
						"font", "font-size", "line-height",
						"margin", "margin-top", "margin-right", "margin-bottom", "margin-left",
						"padding", "padding-top", "padding-right", "padding-bottom", "padding-left",
						"left", "right", "top", "bottom",
						"width", "height", "min-width", "max-width", "max-height", "min-height",
						"border-radius", "border-top-left-radius", "border-top-right-radius", "border-bottom-left-radius", "border-bottom-right-radius",
						"border-width", "border-left-width", "border-right-width", "border-top-width", "border-bottom-width", "border",
						"transform", "transform-origin",
						"background-size", "background-position"
					],
				}),
				autoprefixer(),
			]))
		// .pipe($.sourcemaps.write())
		.pipe(gulp.dest(APP["tmp"]["styles"]))
		.pipe(reload({stream: true}));
	cb();
}

function scripts(cb) {
	return gulp.src(APP["src"]["scripts"] + "/*.js")
		.pipe(
			$.plumber({
				errorHandler: $.notify.onError("Error: <%= error.message %>")
			}))
		// .pipe($.sourcemaps.init())
		// .pipe($.sourcemaps.write("."))
		.pipe(gulp.dest(APP["tmp"]["scripts"]))
		.pipe(reload({stream: true}));
	cb();
}

function pwa(cb) {
	return gulp.src([APP["src"]["path"] + "/manifest.json", APP["src"]["path"] + "/sw.js"])
		.pipe(gulp.dest(APP["tmp"]["path"]))
		.pipe(gulp.dest(APP["dst"]["path"]))
		.pipe(reload({ stream: true }));
	cb();
}

function renderRu(cb) {
	return gulp.src(APP["tmp"]["path"] + "/ru/*.html")
		.pipe(
			$.prettify({
				indent_inner_html: true,
				preserve_newlines: true,
				unformatted: ["pre", "code"],
				indent_size: 2,
				eol: "\r\n"
			}))
		.pipe(
			$.useref({
				searchPath: [APP["tmp"]["path"], APP["src"]["path"], "."],
				noAssets: false
			}))
		.pipe(gulp.dest(APP["dst"]["path"] + "/ru/"));
	cb();
}

function renderKz(cb) {
	return gulp.src(APP["tmp"]["path"] + "/kz/*.html")
		.pipe(
			$.prettify({
				indent_inner_html: true,
				preserve_newlines: true,
				unformatted: ["pre", "code"],
				indent_size: 2,
				eol: "\r\n"
			}))
		.pipe(
			$.useref({
				searchPath: [APP["tmp"]["path"], APP["src"]["path"], "."],
				noAssets: false
			}))
		.pipe(gulp.dest(APP["dst"]["path"] + "/kz/"));
	cb();
}

function clean(cb) {
	del.sync([APP["tmp"]["path"], APP["dst"]["path"]]);
	cb();
}

function livereload(cb) {
	browserSync({
		notify: false,
		port: 9000,
		// tunnel: true,
		ghostMode: false,
		server: {
			baseDir: [APP["tmp"]["path"], APP["src"]["path"]],
			middleware: [
				historyFallback()
			],
			middleware: function(req, res, next) {
				routes.forEach(function(route, i, arr) {
					if (req["url"]==="/" + route) {
						req["url"] = "/" + req["url"] + ".html";
					}
				});
				return next();
			},
			routes: {
				"/bower_components":  "bower_components",
				"/node_modules":      "node_modules"
			}
		}
	});

	gulp.watch([APP["src"]["components"] + "/**/*.scss", APP["src"]["styles"] + "/**/*.scss"], styles);
	gulp.watch([APP["src"]["components"] + "/**/*.js", APP["src"]["scripts"] + "/*.js"], scripts);
  gulp.watch([APP["src"]["views"] + "/ru/*.html", APP["src"]["views"] + "/layouts/*.html", APP["src"]["components"] + "/**/*.html"], htmlRu);
  gulp.watch([APP["src"]["views"] + "/kz/*.html", APP["src"]["views"] + "/layouts/*.html", APP["src"]["components"] + "/**/*.html"], htmlKz);
  gulp.watch([APP["src"]["path"] + "/manifest.json"], pwa);

	gulp.watch([
		APP["src"]["scripts"] + "/*.js",
		APP["src"]["images"]  + "/*.*",
		APP["src"]["samples"] + "/*.*",
		APP["src"]["fonts"]   + "/*.*"
	]).on("change", reload);

	cb();
}

const gwebp = require('gulp-webp');

function webp(cb) {
	return gulp.src("src/orig/*.+(png|jpg)")
		.pipe(gwebp())
		.pipe(gulp.dest("src/orig"));
}

function images(cb) {
	return gulp.src("src/orig/*.+(png|jpg)")
		.pipe($.imagemin([
			$.imagemin.gifsicle({
				interlaced: true
			}),
			$.imagemin.mozjpeg({
				quality:      75, 
				progressive:  true
			}),
			$.imagemin.optipng({
				optimizationLevel: 5
			}),
			$.imagemin.svgo({
				plugins: [
					{removeViewBox: true},
					{cleanupIDs:    false}
				]
			})]))
		.pipe(gulp.dest("src/orig"));
}

exports.pwa = series(
	pwa
)

exports.webp = series(
	webp
)

exports.images = series(
	images
)

exports.default = series(
	parallel(htmlRu, htmlKz, styles, scripts, pwa), 
	livereload
);

exports.build = series(
	clean,
	series(
		parallel(htmlRu, htmlKz, styles, scripts, pwa), 
		renderRu,
		renderKz,
		parallel(

			//минификация CSS
			series(function(cb) {
				return gulp.src(APP["dst"]["styles"] + "/*.css")
					.pipe(
						$.rename(function(path) {
							path["basename"] = path["basename"].replace(".min", "");
							return path;
						}))
					.pipe(gulp.dest(APP["dst"]["styles"]));
				cb();
			}, function(cb) {
				return gulp.src(APP["dst"]["styles"] + "/*.min.css")
					.pipe(
						$.postcss([
							comments({
								removeAllButFirst: true
							}),
							cssnano({
								autoprefixer: false,
								minifyFontValues: false,
								discardUnused: false,
								zindex: false
							})
						]))
					.pipe(gulp.dest(APP["dst"]["styles"]));
				cb();
			}),

			//минификация JS
			series(function(cb) {
				return gulp.src([APP["dst"]["scripts"] + "/vendors.min.js", APP["dst"]["scripts"] + "/apps.min.js"])
					.pipe(babel({
						presets: ["@babel/env"]
					}))
					.pipe(
						$.rename(function(path) {
							path["basename"] = path["basename"].replace(".min", "");
							return path;
						}))
					.pipe(gulp.dest(APP["dst"]["scripts"]));
				cb();
			}, function(cb) {
				return gulp.src([APP["dst"]["scripts"] + "/vendors.min.js", APP["dst"]["scripts"] + "/apps.min.js"])
					.pipe($.uglify())
					// .pipe(uglify())
					.pipe(gulp.dest(APP["dst"]["scripts"]));
				cb();
			}),

			//минификация ИЗОБРАЖЕНИЙ
			// function(cb) {
			// 	return gulp.src(APP["src"]["images"] + "/**/*.+(png|jpg)")
			// 		.pipe($.imagemin([
			// 			$.imagemin.gifsicle({
			// 				interlaced: true
			// 			}),
			// 			$.imagemin.mozjpeg({
			// 				quality:      75, 
			// 				progressive:  true
			// 			}),
			// 			$.imagemin.optipng({
			// 				optimizationLevel: 5
			// 			}),
			// 			$.imagemin.svgo({
			// 				plugins: [
			// 					{removeViewBox: true},
			// 					{cleanupIDs:    false}
			// 				]
			// 			})]))
			// 		.pipe(gulp.dest(APP["dst"]["images"]));
			// 	cb();
			// },

			// function(cb) {
			// 	return gulp.src(APP["src"]["samples"] + "/**/*.+(png|jpg)")
			// 		.pipe($.imagemin([
			// 			$.imagemin.gifsicle({
			// 				interlaced: true
			// 			}),
			// 			$.imagemin.mozjpeg({
			// 				quality:      75, 
			// 				progressive:  true
			// 			}),
			// 			$.imagemin.optipng({
			// 				optimizationLevel: 5
			// 			}),
			// 			$.imagemin.svgo({
			// 				plugins: [
			// 					{removeViewBox: true},
			// 					{cleanupIDs:    false}
			// 				]
			// 			})]))
			// 		.pipe(gulp.dest(APP["dst"]["samples"]));
			// 	cb();
			// },

			//extras
			function(cb) {
				return gulp.src([
					APP["src"]["path"] + "/**/*.*",
					"!" + APP["src"]["path"]        + "/**/*.html", 
					"!" + APP["src"]["components"]  + "/**/*.*",
					"!" + APP["src"]["styles"]      + "/**/*.*",
					"!" + APP["src"]["scripts"]     + "/**/*.*",
					"!" + APP["src"]["images"]      + "/inline/*.*",
					"!" + APP["src"]["images"]      + "/sprites/*.*",
					"!" + APP["src"]["images"]      + "/svg/*.*"
				], {
					dot: true
				})
					.pipe(gulp.dest(APP["dst"]["path"]));
				cb();
			},

			function(cb) {
				return gulp.src(APP["tmp"]["images"] + "/*.*")
					.pipe(gulp.dest(APP["dst"]["images"]));
				cb();
			}
		)
	)
);