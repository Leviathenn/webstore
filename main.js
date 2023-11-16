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

let writeString;

const mapf = process.argv[2]
if(fs.existsSync(`map/${mapf}.ucmp`)){
    //Map exist, prepare for loading..."
    if(debugEnabled){
        console.log(`[-] Map ${mapf} exist! Prepairing to compile...`);
    
    }else{
        //Don't log
    }
    const dumpFile = `map/${mapf}.cmp`
    fs.writeFileSync(dumpFile, "");
    const map = fs.readFileSync(`map/${mapf}.ucmp`);
    const mapData = map.toString().split(" ");
    mapData.forEach(id =>{
        const mainId = id.split(':')
        
        switch (parseInt(mainId)) {
            case 1:
                const picture = fs.readFileSync("icons/grass.png");
                writeString += `:-+@$@
${picture}
$#$+_-`
                
                break;
            case 2:
                const picturez = fs.readFileSync("icons/cobblestone.png");
                writeString += `:-+@$@
${picturez}
$#$+_-`
                fs.writeFileSync(`map/${mapf}.cmp`, writeString)
                break;
            default:
                console.log(`Error: id: ${id} does not exist.`)
                process.exit(1)
                
                break;
        }
    })

}else{
    console.log(`Error: Map ${map} does not exit!`)
    process.exit(1)
}

