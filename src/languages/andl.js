/*
Language: ANDL
Author: Till Steinbach <till.steinbach@haw-hamburg.de>
Category: simulation
*/

function(hljs) {
  var ANDL_KEYWORDS = {
    keyword: 'Network Generationparameter EthernetCable Networkname Cycle Ticklength CanBus '+
    	'Delay Datarate Ecu CanNode Bandwidth Errors Heterogeneous Message Period Payload ' +
    	'CANid BE Receiver Rec Gateway Connections Switch Can Port to Cable',
    built_in: '',
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
    	{ begin: 'byte' }
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
    aliases: ['andl 2ned'],
    case_insensitive: true,
    keywords: ANDL_KEYWORDS,
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
