$(document).ready(function() {
    generateNews();
})

function copy(id) {
    $('body').append('<textarea id="clip_area"></textarea>');
    var clip_area = $('#clip_area');

    clip_area.text($("#" + id).text());
    clip_area.select();
    document.execCommand('copy');
    clip_area.remove();

    popupDialog();
}

function popupDialog() {
    $("#popupDialog").show();
    setTimeout('pdClose()', 2000);
}
function pdClose() {
    $("#popupDialog").fadeOut();
}

function popupWindow() {
    $("#overlay").show();
    $("#overlay").css("height", (document.body.scrollHeight + "px")); // scrollHeight 為網頁全高
    $("#popupWindow").fadeIn(280);
    $("#popupWindow").css("height", "100%");
    $("#popupWindow").css("top", document.body.scrollTop + "px"); // scrollTop 為可視範圍的高度(相較於原點)
    $("body").css("overflow", "hidden");
}
function closeWindow() {
    $("#overlay").hide();
    $("#popupWindow").hide();
    $("body").css("overflow", "auto");
}

/* 調整 header 的差 */
function jumpTo(Id){
    document.body.scrollTo(0, document.getElementById(Id).offsetTop - 120);
}

function generateNews() {
    News.forEach(article => {
        var newElement = '<article class="col-lg-6 col-md-12"><div class="textContainer">';
        for (var key in article) {
            if (key == "Title") newElement += "<h3>" + article[key] + "</h3>";
            else if (key == "Target") newElement += "<p> 目的: " + article[key] + "</p>";
            else if (key == "Time") newElement += "<p> 時程: " + article[key] + "</p>";
            else if (key == "Template") newElement += "<p><a href=" + article[key] + " target='_blank'> 範例網站 </a></p>";
            else if (key == "Other") {
                newElement += "<p> 其他資源: </p>";
                for (var data in article[key]) {
                    newElement += "<p><a class='tab' href=" + article[key][data] + " target='_blank'>" + data + "</a></p>";;
                }
            }
            else if (key == "Description") newElement += "<p> 說明: " + article[key] + "</p>";
        }
        newElement += "</div></article>";
        $("#rowNews").append(newElement);
    })
}
/* News 模板
<article class="col-lg-6 col-md-12">
    <div class="textContainer">
        <h3> First Work </h3>
        <p> 目的: 練習 html, css </p>
        <p> 時程: 1個星期 </p>
        <p><a href="https://www.thelalu.com.tw/zh-tw/Explore" target="_blank"> 範例網站 </a></p>
        <p> 其他資源: </p>
        <p><a class="tab" href="https://www.sololearn.com/learning" target="_blank"> Sololearn </a></p>
        <p><a class="tab" href="https://www.w3schools.com/" target="_blank"> W3School </a></p>
    </div>
</article>
*/
