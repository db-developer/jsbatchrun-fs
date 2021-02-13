/**
 *	index.js: @org.slashlib/jsbatchrun-fs
 *
 *  @module jsbatchrun-fs
 *
 *//*
 *  © 2021, slashlib.org.
 *
 *  index.js is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty  of  MERCHANTABILITY  or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

/**
 *  Moduletable
 *  @ignore
 */
const _m = {
  // import 'lang' helpers from jsbatchrun
  lang:     require( "jsbatch-lang" ),
  // import command 'clean' from its own module
  clean:    require( "./clean"      )
};

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS =  {
  EXPORTS:    "exports",  // module "mount point" for plugin command registry
  PLUGIN_ID:  "fs"        // plugin id aka "command name"
};

/**
 *  Registry for fs commands
 *  @ignore
 */
const _REGISTRY = _m.lang.registry( _STRINGS.PLUGIN_ID );

// clean
Object.defineProperty( _REGISTRY.cmd, _m.clean.id,       {
  value:    _m.clean.invoke,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( _REGISTRY.help, _m.clean.id,      {
  value:    _m.clean.help,
  writable: false, enumerable: true, configurable: false });

// Module exports:
Object.defineProperty( module, _STRINGS.EXPORTS,         {
  value:    _REGISTRY,
  writable: false, enumerable: true, configurable: false });
