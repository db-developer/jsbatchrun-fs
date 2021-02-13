/**
 *  © 2021, slashlib.org.
 *
 */ // use nodes default assertions
"use strict";
const expect  = require( "expect.js"    );
const lang    = require( "jsbatch-lang" );

describe( "04.10.index.spec.js - Testing module 'lib/index.js'", () => {
  const fs    = require( "../../lib" );

  describe( "Testing exports of module 'npm'", () => {
    it( "Module export should be a function", () => {
        expect( fs ).not.to.be( undefined );
        expect( fs ).not.to.be( null      );
        expect( fs ).to.be.an(  "object"  );
    });
  });
  describe( "Testing module 'fs'", () => {
    it( "should return an 'object' which is a valid registry", () => {
        expect( lang.isRegistry( fs )).to.be.ok();
    });
  });
});
