function run(q){
    if( q == 1)
        map(document.getElementById("mapData").value);
            
    if( q == 2)
    {
        $.get( "./assets/out.txt", function( data ) {
            document.getElementById("dataForm").style.visibility = "hidden"; 
            document.getElementById("load").style.visibility = "block"; 
            console.log("Data!");
        })
        .done(function(data) {
        map(data);
        });
    }
}

function map(a){
    
    document.getElementById("map").style.display = "block"; 
            
    var rawMap = a;
    var mapArray = new Array();
    
    mapArray = rawMap.split(" ");
            
    var canvas = document.getElementById("map").getContext('2d');
    var imgData = canvas.createImageData(864, 635904 / 864);
            
    for(var i = 0; i < imgData.data.length; i+= 4)
    {
        imgData.data[i] = 149;
        imgData.data[i+1] = 165;
        imgData.data[i+2] = 166;
        imgData.data[i+3] = 255 - mapArray[i/4];
            
    }
    
    document.getElementById("load").style.visibility = "hidden";         
    canvas.putImageData(imgData, 0, 0);   
}

