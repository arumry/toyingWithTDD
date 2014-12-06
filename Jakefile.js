var lint = require('./build/lint/lint-runner');

desc('default');
task('default', ['lint'], function(){
	console.log('Default task');
});


desc("Lint the code");
task("lint", [], function() {
	var files = new jake.FileList();
	files.include("lib/*.js");
	files.include("test/*.js");
	files.include("build/*.js");
	files.include("./*.js");
	files.exclude("node_modules");
	var options = {
		node: true
	};

	var globals = {
		describe: false
	};
	var pass = lint.validateFileList(files.toArray(), options, globals);
	if (!pass) fail("Lint failed");
});


