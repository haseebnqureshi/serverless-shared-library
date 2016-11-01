'use strict';

const fs = require('fs');
const path = require('path');
const browserify = require('browserify');
const uglify = require('uglify-js');

class SharedLibrary {
  constructor(serverless) {
    this.serverless = serverless;
    this.service = serverless.service;
    this.servicePath = this.service.serverless.config.servicePath;
    this.hooks = {
      'before:deploy:initialize': () => { this.start() },
      'before:offline:start':  () => { this.start() }
    }
  }
  start() {

    //first getting our filepaths
    let sourceDirpath = path.join( path.dirname(this.servicePath), 'lib' );
    let targetFilepath = path.join( this.servicePath, 'lib.js' );

    //packing our source and piping into our target filepath
    let writeStream = fs.createWriteStream(targetFilepath);
    let b = browserify(sourceDirpath, {
      standalone: 'nodeModules' //need standalone to work node side
    }).bundle();
    b.on('error', console.error);
    b.pipe(writeStream);
  }
}

module.exports = SharedLibrary;
