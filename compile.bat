cd Release
del out.js
del script.js
cd ..
java -jar closure-compiler-v20200719.jar --js "JS/**.js" --js "!JS/GPU/**gpu-browser.min.js" --compilation_level BUNDLE --language_in ECMASCRIPT_2019 --language_out ECMASCRIPT_2019 --js_output_file Release/out.js
java -jar closure-compiler-v20200719.jar --js "Release/out.js"  --compilation_level ADVANCED --language_in ECMASCRIPT_2019 --language_out ECMASCRIPT_2019 --js_output_file Release/script.js
cd Release
del out.js
cd ..