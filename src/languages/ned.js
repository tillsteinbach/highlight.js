/*
Language: NED
Author: Till Steinbach <till.steinbach@haw-hamburg.de>
Category: simulation
*/

function(hljs) {
  var NED_KEYWORDS = {
    keyword: 'network parameters types extends submodules gates connections ' +
    			'default',
    built_in: 'long double string gate channel',
    literal: 'true false nullptr NULL'
  };
  
  var UNITS = {
    className : 'units',
    variants: [
    	{ begin: 's' },
    	{ begin: 'm' },
    	{ begin: 'u' },
    	{ begin: 'n' },
    	{ begin: 'p' },
    	{ begin: 'Mbps' }
    ]
  };
  
  var STRINGS = {
    className: 'string',
    variants: [
    	{ begin: /"/, end: /"/ },
    	{ begin: /'/, end: /'/ }
    ]
  };
  
  var NUMBERS = {
    className: 'number',
    variants: [
      { begin: '\\b(\\d+(\\.\\d*)?|\\.\\d+)', contains : [UNITS] },
      { begin: hljs.C_NUMBER_RE, contains : [UNITS] }
    ]
  };
  
  var PACKAGE_DEF = {
    className: 'package',
    beginKeywords: 'package',
    end: ';'
  };
  
  var IMPORT_DEF = {
    className: 'import',
    beginKeywords: 'import',
    end: ';'
  };
  
  var ATTRIBUTE = {
    className: 'attribute',
    begin : '@',
    end : '\\)',
    contains : [
      STRINGS,
      NUMBERS,
      UNITS
    ]
  }
  
  var CONNECTION = {
    className: 'keyword',
    variants: [
      { begin: '<-->'},
      { begin: '<--'},
      { begin: '-->'}
    ]
  };

  return {
    aliases: ['ned'],
    case_insensitive: true,
    keywords: NED_KEYWORDS,
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      PACKAGE_DEF,
      IMPORT_DEF,
      STRINGS,
      NUMBERS,
      ATTRIBUTE,
      CONNECTION
    ]
  };
}
