var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    cir_rad = 20;

    screen_width = screen.width;

    n_Height = screen.width - 70;
    n_Width = screen.width - 300;

    if(screen_width < 992) {
        document.getElementById("myCanvas").width = n_Width;
        document.getElementById("myCanvas").height = n_Height;
        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        console.log("my_touchstart");
        //Addictonal Activity start
        color = document.getElementById("color_Input").value;
        cir_width = document.getElementById("width_Input").value;
        cir_rad = document.getElementById("radius_Input").value;
        //Addictonal Activity ends
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        console.log("my_touchmove");
         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

         console.log("Last X coord: " + last_position_of_x);
         console.log("Last Y coord: " + last_position_of_y);
         ctx.moveTo(last_position_of_x, last_position_of_y);
         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth = cir_width;
         console.log("Current X coord: " + current_position_of_mouse_x);
         console.log("Current Y coord: " + current_position_of_mouse_y);
         ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, cir_rad, 0, 2*Math.PI);
         ctx.stroke();
    }

    function clearArea() {

        ctx.clearRect(0,0,canvas.width,canvas.height);
    
    }

