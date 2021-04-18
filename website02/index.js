$(document).ready(function() {
    $('.main-carousel').flickity({
        // options
        wrapAround: true,
        autoPlay: 5000
    });

    // 顯示鼠標位置
    /*$("html").click(function(e){
        console.log(e.pageX+", "+e.pageY)
    })*/
})

function showReadMore(element) {
    var target = $("#" + element.id);
    $("#readMore").css({"width": target.width(), "height": target.height(), "left": target.offset().left, "top": target.offset().top});
    $("#readMore").fadeIn(300);
}

function hideReadMore() {
    $("#readMore").hide();
}

var css = "index(distortion).css";
function changeCSS(){
    var temp = $("#css").attr("href");
    $("#css").attr("href", css);
    css = temp;
    $("#btnChangeCSS").val("No distortion");
}
