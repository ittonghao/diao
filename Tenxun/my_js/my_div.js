var  xxx = ""
for (var i = 0;i<diao.length;i++) { 
    var aaa = diao[i]
    xxx += `
    <div class="shu_jia"><img src="`+ aaa.my_img + `" alt="">
    <span>` +aaa.di_er + `</span>
    <div>` + aaa.di_san + `</div></div>
`
}
$(".duoduo1").append($(xxx))


var nnn = ""
for (var i = 0;i<diao.length;i++) { 
    var aaa = diao[i]
    nnn += `
    <div class="shu_jia"><img src="`+ aaa.my_img + `" alt="">
    <span>` +aaa.di_er + `</span>
    <div>` + aaa.di_san + `</div></div>
`
}
$(".duoduo2").append($(nnn))