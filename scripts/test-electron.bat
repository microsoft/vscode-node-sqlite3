@echo off
setlocal

pushd %~dp0\..

set ELECTRON_RUN_AS_NODE=1 

call .\node_modules\.bin\electron .\test\support/createdb.js
call .\node_modules\.bin\electron .\node_modules\.bin\mocha -R spec --timeout 480000

popd

endlocal