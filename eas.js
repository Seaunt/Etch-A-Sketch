$(document).ready(function(){
    for (i=0;i<10000;i++){
        $('#container').append("<div id='grid_squares'></div>");
    };
});

function newGrid() {
    var grid_size = prompt("Enter new grid size here");
    $("#container").empty();
    
    for (i = 0; i < grid_size*grid_size; i++){
        $('#container').append("<div id='grid_squares'></div>");
    };
        
    var gridHW = (600/ grid_size);
        $('div div').css('width', gridHW);
        $('div div').css('height', gridHW);
};

function newStyle(){
    var style_type = prompt("Enter a style","'RGB' or 'BLACK'").toUpperCase();
    //empty something
    
    switch(style_type) {
        case 'BLACK':
            $("div div").hover(function(){
                $(this).css('background-color','black');
            });
        break;
       
        case 'RGB':           
            $("div div").hover(function() {
               
                var r = Math.floor((Math.random() * 254) + 1);
                var g = Math.floor((Math.random() * 254) + 1);
                var b = Math.floor((Math.random() * 254) + 1);
              
                $(this).css("background-color",'rgb('+r+','+g+','+b+')');
            });
        break;
        
        default:
            confirm("Please press the Style button again and enter a STYLE");
    };
};

function resetGrid(){
    $('div div').css("background-color", "white");
};