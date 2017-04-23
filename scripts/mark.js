var canvas = document.getElementById("map");
var img = new Image();   // Create new img element
img.src = 'assets/pin.png';

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function mark(x,y)
{
        var context = document.getElementById("map").getContext('2d');
        var pin = document.getElementById("mapPin").getContext('2d');
        context.fillStyle = "#000000";
        pin.fillStyle = "#000000";
        var p = context.getImageData(x, y, 1, 1).data; 
        var hex = ("000000" + (componentToHex(p[0]), componentToHex(p[1]), componentToHex(p[2]))).slice(-6);
        if(hex == "0000ff")
        {
           //pin.fillRect(x-1, y-1, 2, 2);
           //img.onload = function(){
                //
                //context.fillRect(0, 0, canvas.width, canvas.height);
                pin.clearRect(0,0,document.getElementById("mapPin").width,document.getElementById("mapPin").height);
                pin.drawImage(img, x-12, y-22);
            
                $.ajax({
                  url: '/cord',
                  type: 'POST',
                  data: {x:x, y:y}
                });
                console.log(x + ", " + y);
        }
}

function click(e)
{
    var mouseLoc = getMousePos(e);
    //console.log("X: " + mouseLoc.x + ", Y: " + mouseLoc.y);
    mark(mouseLoc.x, mouseLoc.y);
}

function getMousePos(e)
{
    var canvasArea = document.getElementById("map").getBoundingClientRect();
    return{ x: e.clientX - canvasArea.left, y: e.clientY - canvasArea.top};
}

window.addEventListener('click', click, false);