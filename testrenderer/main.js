/**
 * @author Leviathenn
 */

$(document).ready(function (){
    $.ajax({
        url: "s.cmp",
        success: function (response) {
            const eachLine = response.split("\n");
            lineIndex = 0
            eachLine.forEach(line => {
                if(line.startsWith(">")){
                    mainSplit = line.split(">");
                    mainInfo = mainSplit[1].split('/')
                    mainID = mainInfo[0];
                    cords = mainInfo[1].split('.');
                    xcord = cords[0];
                    ycord = cords[1];
            

                    /**$(".alr").append(`<h1>
                    mainId: ${mainID}  
                    cords: ${cords[0]}, ${cords[1]}
                    xcord: ${xcord}
                    ycord: ${ycord}
                    </h1>
                    <br>
                    **/`)
                
                           
                }
            });
        }
    });
})