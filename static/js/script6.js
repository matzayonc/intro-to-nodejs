var couter = 0

$("#input").on("click", function (e) {

    console.log(e)

    var pos = { 
        x: parseInt(e.clientX - $("#input").offset().left),
        y: parseInt(e.clientY - $("#input").offset().top)
    }

    $("#counter").text(couter++)

    if(pos.x > 35 && pos.x < 365 && pos.y > 35 && pos.y < 365){

        var start = new Date()

        $.ajax({
            url: "",
            data: pos,
            dataType: "text",
            type: "POST",
            success: function (data) {
                var obj = JSON.parse(data)
    
                var now = new Date()
                
                var circle = $('<div class="circle"></div>')
                circle.text(parseInt((now.getTime() - start.getTime())/2))//parseInt(obj.time))
                circle.css({
                    top: $("#output").offset().top + parseInt(obj.y) - 35 + "px",
                    left: $("#output").offset().left + parseInt(obj.x) - 35 + "px",
                })
    
                $("#output").append(circle)
                
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
 
        })
    }
})