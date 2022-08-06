# jsbatchrun-fs #

do filesystem tasks with this [jsbatchrun](https://www.npmjs.com/package/jsbatchrun) plugin.

[![npm version](https://img.shields.io/npm/v/jsbatchrun-fs?color=blue)](https://www.npmjs.com/package/jsbatchrun-fs)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![jsdoc](https://img.shields.io/static/v1?label=jsdoc&message=%20api%20&color=blue)](https://jsdoc.app/)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/)
[![codecov](https://codecov.io/gh/db-developer/jsbatchrun-fs/branch/master/graph/badge.svg)](https://codecov.io/gh/db-developer/jsbatchrun-fs)
[![Build Status](https://travis-ci.com/db-developer/jsbatchrun-fs.svg?branch=master)](https://travis-ci.com/db-developer/jsbatchrun-fs)
[![dependencies](https://img.shields.io/librariesio/release/npm/jsbatchrun-fs)](https://libraries.io/)

jsbatchrun-fs uses [grunt](https://gruntjs.com/) for accessing files in a platform independent manner.

## content ##

* Usage (see further down this page)
  * [Getting started guide](#getting-started)
  * [Usage and examples](#usage)
  * [jsbr fs clean](docs/fs.clean.md)

* Developers
  * [Testing jsbatchrun-fs](docs/grunt.md#testing)
  * [Code coverage of tests for jsbatchrun-fs](docs/grunt.md#code-coverage)
  * [Build jsbatchrun-fs from scratch](docs/grunt.md#building)
  * [NPM integration of jsbatchrun-fs](docs/grunt.md#npm_integration)
  * [Frameworks used for testing, building, etc.](docs/frameworks.md)
  * [API of package jsbatchrun-fs](docs/api.index.md) (self generated with jsbatchrun-fs)

## getting started ##

### install ###

This guide assumes, that you are familiar with the use of [npm](https://npmjs.com "Homepage of npm").  

<code>npm install jsbatchrun-fs --save</code>

### prerequisites ###

This plugin requires [jsbatchrun](https://www.npmjs.com/package/jsbatchrun).  

Install [jsbatchrun-fs]() in your [jsbatchrun](https://www.npmjs.com/package/jsbatchrun)
project. Check jsbatchrun for loading and configuring plugins.

## usage ##

This plugin provides you with the following commands

* <code>&gt; jsbr fs clean ...</code> [for removing files and directories from a list of target
  directories. (Help)](docs/fs.clean.md)
