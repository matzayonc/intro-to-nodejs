$("#input").on("click", function (e) {

    $.ajax({
        url: "",
        data: { 
            x: parseInt(e.clientX - $("#input").offset().left),
            y: parseInt(e.clientY - $("#input").offset().top)
         },
        dataType: "text",
        type: "POST",
        success: function (data) {
            var obj = JSON.parse(data)

            var now = new Date()
            
            var circle = $('<div class="circle"></div>')
            circle.text(now.getTime() - parseInt(obj.time))
            circle.css({
                top: $("#output").offset().top + parseInt(obj.y) - 25 + "px",
                left: $("#output").offset().left + parseInt(obj.x) - 25 + "px",
            })

            $("#output").append(circle)
            
        },
        error: function (xhr, status, error) {
            console.log(xhr);
        },
    });
})