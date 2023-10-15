
canvas = document.getElementById("my_canvas") //returns (canvas)
ctx = canvas.getContext("2d")

color = "red";

ctx.beginPath()
ctx.lineWidth = 5 //border width
ctx.strokeStyle = color //border color

// arc(x of center, y of center, radius, start angle of the arc, end angle of arc )
ctx.arc(200, 300, 40, 0, 2* Math.PI)// creates a circle in the computer's memory
ctx.stroke() //draws on the canvas(screen)

canvas.addEventListener("mousedown", mymousedown)
function mymousedown(e){ //The Perimiter containts the name of the events which is mousedown that trigged the function{
    color = document.getElementById("color_box").value;
    console.log(color)
    mouse_x = e.clientX - canvas.offsetLeft
    mouse_y = e.clientY - canvas.offsetTop

    console.log("X , " + mouse_x + " Y , " + mouse_y)

    circle(mouse_x , mouse_y)
}

function circle (mouse_x , mouse_y){
ctx.beginPath()
ctx.lineWidth = 5
ctx.strokeStyle = color

ctx.arc(mouse_x,mouse_y , 40, 0, 2* Math.PI)
ctx.stroke()
}

function clear_area(){
ctx.clearRect(0,0,canvas.width, canvas.height)
}
