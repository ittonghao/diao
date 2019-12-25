// 第一页面
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

// 第二页面

var lll = ""
for (var i = 0;i<wc.length;i++) { 
    var jjj = wc[i]
    lll += `
    <div class="tu_img">
                        <img src="`+ jjj.tu +`" alt="">
                        <div class="qqq">
                            <div class="zuo">
                                <span class="b1"></span>
                                <span class="b2">
                                    <div>狐狸游戏</div>
                                    <div>王者游戏</div>
                                </span>
                            </div>
                            <div class="you">
                                <div><img src="./my_img/er_img/n3.png" alt=""></div>
                                <div><img src="./my_img/er_img/n2.png" alt=""></div>
                                <div><img src="./my_img/er_img/n1.png" alt=""></div>
                            </div>
                        </div>
                    
                </div>
`
}
$(".duan_shipin").append($(lll))

// 第三页面

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
