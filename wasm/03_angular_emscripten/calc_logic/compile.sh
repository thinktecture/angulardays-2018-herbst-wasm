# source ./emsdk_env.sh --build=Release

emcc calc.c -s "EXTRA_EXPORTED_RUNTIME_METHODS=['ccall']" -o calc.html