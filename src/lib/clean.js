/**
 *	clean.js: @org.slashlib/jsbatchrun-fs
 *
 *  @module jsbatchrun-fs/clean
 *
 *//*
 *  © 2021, slashlib.org.
 *
 *  clean.js  is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty  of  MERCHANTABILITY  or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 */
"use strict";

/**
 *  Moduletable
 *  @ignore
 */
const _m = {
  lang:     require( "jsbatch-lang"    ),
  strings:  require( "jsbatch-strings" ),
  path:     require( "path"            ),
  grunt:    require( "grunt"           )
};

/**
 *  Stringtable initializer
 *  @ignore
 */
function _init_STRINGS() {
  const clean   = "clean";
  const usage = `${ _m.strings.TAB3 } jsbr fs ${ clean } [options] [directories]`;

  const strings = {
    CONFIG:                   "config",     // remove, if version of jsbatch-strings >= 0.0.2
    CMDUSAGE:                 usage,
    ERR_MSG_MISSING_FILE:     "Missing option. Command npm clean requires '--file' {string}",
    GRUNT_PLUGIN_CLEAN:       "grunt-contrib-clean",
    GRUNT_TASK_CLEAN:         clean,
    ID_VALUE:                 clean,
    NO_WRITE:                 "no-write"
  };
  return Object.assign( strings, _m.strings );
}

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = _init_STRINGS();

/**
 *  Run 'fs clean'.
 *
 *  @param  {object}  args
 *  @return {Promise} which resolves after having successfully run the clean task
 *                    on all directories.
 */
function invoke( args ) {
  if ( ! _m.lang.exists( args )) {
       return Promise.reject( new ReferenceError( "Missing parameter 'args'."));
  }
  else return new Promise(( resolve, reject ) => {
    _m.grunt.task.init  = function() {};
    _m.grunt.loadNpmTasks( _STRINGS.GRUNT_PLUGIN_CLEAN );

    if (( ! args.file ) ||
        (( ! _m.lang.isString( args.file )) &&
         ( ! Array.isArray( args.file )))) {
           return reject( new Error( _STRINGS.ERR_MSG_MISSING_FILE ));
    }
    else   args.file = ( _m.lang.isString( args.file )) ? [ args.file ] : args.file;

    const dirs    = Array.isArray( args.args ) ? args.args : [ ];
    const failed  = [ ];
    const promise = dirs.reduce(( promise, dir, index ) => {
      // reset errorcount & warncount
      _m.grunt.fail.errorcount = 0;
      _m.grunt.fail.warncount  = 0;

      return promise.then(() => {
        return new Promise(( resolve /*, reject */) => {
          const tasks = [ _STRINGS.GRUNT_TASK_CLEAN ];
          _m.grunt.config.init( config( dir, args ));
          _m.grunt.tasks( tasks, { force: true }, () => {
            /* istanbul ignore if */
            if ( _m.grunt.fail.errorcount > 1 ) {
                 failed.push({ index, dir })
                 _m.grunt.log.error( dir );
            }
            else _m.grunt.log.ok( dir );
            // always resolve!
            resolve();
          });
        });
      });
    }, Promise.resolve())

    // finally resolve or reject our promise ...
    promise.then(( /*v*/ ) => {
                   /* istanbul ignore if */
                   if ( failed.length > 0 ) { reject( failed ); }
                   else resolve(); },
                 /* istanbul ignore next */
                 ( error ) => { reject( error )});
  });
}

/**
 *  Returns a grunt configuration for npm clean
 *  @param  {string}  projectdir
 *  @return {object}  grunt configuration
 */
function config( projectdir, args ) {
        projectdir  = projectdir ? projectdir : ".";
        args        = args       ? args       : { };
        args.file   = args.file  ? args.file  : [ ];

  const src         = args.file.map(( node ) => {
                        return _m.path.join( projectdir, node );
                      });
  const options     = { force: true };
  if ( args.nowrite ) {
       options[ _STRINGS.NO_WRITE ] = true;
  }

  return { clean: { target: { options, src }}};
}

/**
 *  Help string for 'npm clean' command
 *
 *//* eslint-disable-next-line no-unused-vars */
function help( cmdstr, args ) {
  return `${ _STRINGS.USAGE }\n\r${ _STRINGS.CMDUSAGE }

options:
  --file <string>   file or directory to be deleted [mandatory]
                    (the option can be passed in multiple times)

  ${ _STRINGS.USAGEOPTS }

arguments:
  one or more directories, which hold package.json files.
  ${ _STRINGS.USAGEARGS }`;
}

// Module exports:
Object.defineProperty( module.exports, _STRINGS.CONFIG,  {
  value:    config,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.HELP,    {
  value:    help,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.ID,      {
  value:    _STRINGS.ID_VALUE,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.INVOKE,  {
  value:    invoke,
  writable: false, enumerable: true, configurable: false });
