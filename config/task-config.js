/* eslint-disable */
const gulp = require('gulp');
const logger = require('blendid/gulpfile.js/lib/compileLogger')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin;

module.exports = {
  html: {
    htmlmin: {
      collapseWhitespace: false
    }
  },
  images      : true,
  fonts       : true,
  static      : true,
  svgSprite   : true,
  ghPages     : false,
  stylesheets : true,

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      app: ["./main.ts"],
    },
    provide: {
      // $: "jquery",
      // jQuery: "jquery",
      // "window.jQuery": "jquery",
      // angular: "angular",
      // "window.angular": "angular"
    },
    extensions: ['.ts', '.tsx', 'js', 'jsx'],
    loaders: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          'awesome-typescript-loader'
        ],
      },
    ],
    development: {
      plugins: (webpack) => {
        return [
          new webpack.DefinePlugin({
            "PRODUCTION": JSON.stringify(false),
            "PREFIX": JSON.stringify(process.env.PREFIX || ''),
          }),
        ]
      }
    },
    production: {
      definePlugin: {
        "PRODUCTION": JSON.stringify(true),
        "PREFIX": JSON.stringify(process.env.PREFIX || ''),
      }
    }
  },

  browserSync: {
    server: {
      // should match `dest` in
      // path-config.json
      baseDir: 'public'
    }
  },

  production: {
    rev: true,
  },

  additionalTasks: {
    initialize(gulp, PATH_CONFIG, TASK_CONFIG) {
      gulp.task('webpack:production', (callback) => {
        const webpackConfig = require('blendid/gulpfile.js/lib/webpack-multi-config')('production')
        
        // bundled webpack UglifyJsPlugin not support es6
        // we need to explicit load from official UglifyJsPlugin
        webpackConfig.plugins = webpackConfig.plugins.map((plugin) => {
          // replace blendid default UglifyJsPlugin
          if (plugin instanceof webpack.optimize.UglifyJsPlugin) {
            return new UglifyJSPlugin()
          }
          return plugin
        })

        // webpackConfig.plugins.push(new WebpackBundleSizeAnalyzerPlugin('../webpack-bundle-size-analyzer.txt'));
        webpack(webpackConfig, (err, stats) => {
          logger(err, stats)
          callback()
        })
      })
    },
  }
}
