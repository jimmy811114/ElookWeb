/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var count = 0;

function showBanner() {
    if (count == images.length) {
        count = 0;
    }
    document.getElementById('banner').style.backgroundImage = images[count];
    count++;
}

function sendMessage() {
    var mydate = new Date();
    var t = mydate.toLocaleString();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    if (name.length == 0 || email.length == 0 || message.length == 0) {
        alert('有資料尚未填寫');
        return;
    }
    var msg = "\n" + name + "\n";
    msg += email + "\n";
    msg += message + "\n";
    msg += t;

    document.getElementById('result').innerHTML = '傳送中...';
    $("#sendBtn").fadeOut();
    $.post('https://script.google.com/macros/s/AKfycbxX-T2UPsHdLInY1xBygymCysZhEU-dAahaPSVsn733VxjhxtE/exec',
            {msg: msg},
            function (e) {
                document.getElementById('result').innerHTML = '我們已經收到您的訊息';
                $("#name").fadeOut();
                $("#email").fadeOut();
                $("#message").fadeOut();
            });
}

$(function () {
    /* 按下GoTop按鈕時的事件 */
    $('#gotop').click(function () {
        $('html,body').animate({scrollTop: 0}, 'slow');   /* 返回到最頂上 */
        return false;
    });

    /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#gotop').fadeIn();
        } else {
            $('#gotop').fadeOut();
        }
    });
});

setInterval("showBanner()", "5000");

