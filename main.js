/**
 * @author Leviathenn
 */
const fs = require("fs")

let debugEnabled = false;


if(process.argv.length < 2){
    console.log("Error: Map file not specified!");

}else

if(fs.existsSync("debugger")){
    debugEnabled = true
}

/**console.log(`
    Runtime Data:
Debug: ${debugEnabled}
ArgumentCount: ${process.argv.length}
ExitCode: 0
`)
**/

//process.exit(0);

const map = process.argv[2]
if(fs.existsSync(`map/${map}.ucmp`)){
    //Map exist, prepare for loading...
}else{
    console.log(`Error: Map ${map} does not exit!`)
    process.exit(1)
}