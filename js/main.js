require('reveal.js/lib/js/head.min.js');
require('reveal.js/lib/js/classList.js');

var Reveal = require('reveal.js');

Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,
	transition: 'slide', // none/fade/slide/convex/concave/zoom
});

require('reveal.js/plugin/markdown/marked.js');
require('reveal.js/plugin/markdown/markdown.js').initialize();
