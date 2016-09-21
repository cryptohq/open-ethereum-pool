var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
exec("~/open-ethereum-pool/build/bin/open-ethereum-pool config.json", puts);
