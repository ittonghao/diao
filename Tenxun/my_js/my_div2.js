var  xxx = ""
for (var i = 0;i<sb.length;i++) { 
    var aaa = sb[i]
    xxx += `
    <div class="shu_jia"><img src="`+ aaa.my_img + `" alt="">
    <span>` +aaa.di_er + `</span>
    <div>` + aaa.di_san + `</div></div>
`
}
$(".jb").append($(xxx))