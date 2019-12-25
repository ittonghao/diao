var a_w = window.screen.width
var a_h = window.screen.height
console.log(a_h);
$(".warp1").css({
    "height":a_h-60 +"px"    
})
$(".an_niu").click(function(){
    var t = this
    var an_niu_index = $(this).index()
    $(".an_niu").each(function(index,xxx){
        if(an_niu_index == index) {
            var cur_src = $(xxx).find("img").attr("src")
            if(cur_src.indexOf("_a") == -1) {
                $(xxx).find("img").attr("src",cur_src.replace(".png","_a.png"))
            }
        }else {
            var cur_src = $(xxx).find("img").attr("src")
            $(xxx).find("img").attr("src",cur_src.replace("_a",""))
        }
    })
    $(".kandan").click(function(){
        location.href = "kandian.html "
    })
  
    $(".tiao>div").each(function (index , aaa) {
        if ($(t).index() == index) {
            $(aaa).css({
                "display": "block"
            })
        } else {
            $(aaa).css({
                "display": "none"
            })
        }
    })
})
$(".fanhui_img").click(function(){
    location.href = "index1.html"
})
$(".sousuo_1").click(function(){
    location.href = "sousuo.html"
})
$(".quxiao").click(function(){
    location.href = "index1.html"
})

$(".lunbo_tu").click(function() {
    location.href = "shipinxiangqing.html"
})
$(".xiangqing_tiaozhuan").click(function(){
    location.href = "index1.html"
})
