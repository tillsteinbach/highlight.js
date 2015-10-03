/*
Language: OMNeT++ INI
Author: Till Steinbach <till.steinbach@haw-hamburg.de>
Category: simulation
*/

function(hljs) {
  var INI_KEYWORDS = {
    keyword: 'include ',
    built_in: 'check-signals cmdenv-autoflush cmdenv-config-name cmdenv-ev-output ' +
    		'cmdenv-event-banner-details cmdenv-event-banners cmdenv-express-mode ' +
    		'cmdenv-extra-stack cmdenv-interactive cmdenv-message-trace cmdenv-module-messages ' +
    		'cmdenv-output-file cmdenv-performance-display cmdenv-runs-to-execute ' +
    		'cmdenv-status-frequency configuration-class constraint cpu-time-limit ' +
    		'debug-on-errors debug-statistics-recording debugger-attach-command ' +
    		'debugger-attach-on-error debugger-attach-on-startup debugger-attach-wait-time ' +
    		'description eventlog-file eventlog-message-detail-pattern eventlog-recording-intervals ' +
    		'experiment-label extends fingerprint fname-append-host load-libs max-module-nesting ' +
    		'measurement-label module-eventlog-recording ned-path network num-rngs output-scalar-file ' +
    		'output-scalar-file-append output-scalar-precision output-vector-file output-vector-precision ' +
    		'output-vectors-memory-limit outputscalarmanager-class outputvectormanager-class ' +
    		'parallel-simulation param-record-as-scalar parsim-communications-class ' +
    		'parsim-debug parsim-filecommunications-prefix parsim-filecommunications-preserve-read ' +
    		'parsim-filecommunications-read-prefix parsim-idealsimulationprotocol-tablesize ' +
    		'parsim-mpicommunications-mpibuffer parsim-namedpipecommunications-prefix ' +
    		'parsim-nullmessageprotocol-laziness parsim-nullmessageprotocol-lookahead-class ' +
    		'parsim-synchronization-class partition-id print-undisposed realtimescheduler-scaling ' +
    		'record-eventlog repeat replication-label result-dir result-recording-modes rng-class ' +
    		'runnumber-width scalar-recording scheduler-class sectionbasedconfig-configreader-class ' +
    		'seed-set sim-time-limit simtime-scale snapshot-file snapshotmanager-class ' +
    		'tkenv-default-config tkenv-default-run tkenv-extra-stack tkenv-image-path ' +
    		'tkenv-plugin-path total-stack typename user-interface vector-max-buffered-values ' +
    		'vector-record-eventnumbers vector-recording vector-recording-intervals warmup-period ' +
    		'warnings with-akaroa',
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
  
  var SECTION_NAME = {
    className: 'name',
    keywords: {
    	keyword: 'config',
    	built_in: 'General',
  	},
     begin: '\\b[^\\]]+\\b'
  };
  
  var SECTION = {
  	className: 'class',
    begin: '\\[',
    end: '\\]',
    contains: [
    	SECTION_NAME
    ]
  };
  
  var COMMENT = {
  	className: 'comment',
    begin: '#',
    end: '$'
  };
  
  var NUMBERS = {
    className: 'number',
    variants: [
      { begin: '\\b((0x)?\\d+(\\.\\d*)?|\\.\\d+)', contains : [UNITS] },
      { begin: hljs.C_NUMBER_RE, contains : [UNITS] }
    ]
  };

  var VAR = {
    className: 'variable',
    keywords: {
    	keyword: 'step',
    	built_in: '',
  	},
    variants: [
      {begin: /\$[\w\d#@][\w\d_]*/, contains : [NUMBERS, UNITS]},
      {begin: /\$\{(.*?)}/, contains : [NUMBERS, UNITS]}
    ]
  };

  return {
    aliases: ['ini'],
    case_insensitive: true,
    lexemes : '[a-zA-Z][a-zA-Z0-9_\\-]*',
    keywords: INI_KEYWORDS,
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      STRINGS,
      NUMBERS,
      COMMENT,
      SECTION,
      VAR
    ]
  };
}
