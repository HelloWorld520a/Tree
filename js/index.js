$(document).ready(function () {
    setTimeout(() => {
        showFirst();
        $(".alert-button-confirm").click(function () {
            dismiss();
        });
    }, 2000);

    audioAutoPlay("bg-audio");
});

function confirm(title, message, image, confirmText, cancelText, confirm, cancel) {
    var html = '<div class="alert-div"><div class="alert-main-div"><div class="alert-title">' + title + '</div><div class="alert-message">' + message + '</div><img src="img/' + image + '" alt="" class="alert-image"></div><div class="alert-child-div"><div class="alert-button-div"><button type="button" class="alert-button-confirm">' + confirmText + '</button><button type="button" class="alert-button-cancel">' + cancelText + '</button></div></div></div>';
    $(".main-div").html(html);
    show();
    $(".alert-button-confirm").click(function () {
        dismiss(confirm);
    });
    $(".alert-button-cancel").click(function () {
        dismiss(cancel);
    });
}

function confirmWithoutTitle(message, image, confirmText, cancelText, confirm, cancel) {
    var html = '<div class="alert-div"><div class="alert-main-div"><br><div class="alert-message">' + message + '</div><br><img src="img/' + image + '" alt="" class="alert-image"></div><div class="alert-child-div"><div class="alert-button-div"><button type="button" class="alert-button-confirm">' + confirmText + '</button><button type="button" class="alert-button-cancel">' + cancelText + '</button></div></div></div>';
    $(".main-div").html(html);
    show();
    $(".alert-button-confirm").click(function () {
        dismiss(confirm);
    });
    $(".alert-button-cancel").click(function () {
        dismiss(cancel);
    });
}

function alertWithoutTitle(message, image, confirmText, confirm) {
    var html = '<div class="alert-div"><div class="alert-main-div"><br><div class="alert-message">' + message + '</div><br><img src="img/' + image + '" alt="" class="alert-image"></div><div class="alert-child-div"><div class="alert-button-div"><button type="button" class="alert-button-confirm">' + confirmText + '</button></div></div></div>';
    $(".main-div").html(html);
    show();
    $(".alert-button-confirm").click(function () {
        dismiss(confirm);
    });
}

function show() {
    $(".alert-div").animate({
        opacity: '1',
        top: '80px',
    }, 200, function () {
        // $(".main-div").css('background', "#AAAAAA");
    });
}

function dismiss(callback) {
    // $(".main-div").css('animation', 'color-dismiss 0.1s')
    // $(".main-div").css('-webkit-animation', 'color-dismiss 0.1s')
    $(".alert-div").animate({
        opacity: '0',
    }, 100, function () {
        // $(".main-div").css('background', "#FFFFFF");
        $(".alert-div").remove();
        callback();
    });
}

function showFirst() {
    confirm("?????? ", "??????????????????????????????????????????", "??????.gif", '????????????', '????????????', function () {
        showAgree()
    }, function () {
        showSecond();
    });
}

function showAgree() {
    confirmWithoutTitle("????????????????????????~~???????????????????????????", "??????.gif", "?????????", "???????????????", function () {
        showResult("?????????????????????????????????????????????", "??????.gif")
    }, function () {
        showDisagree();
    })
}

function showDisagree() {
    showResult("???????????????????????????...", "?????????.gif")
}

function showResult(message, image) {
    var html = '<br><br><br><h2 style="text-align: center">' + message + '</h2><br><div style="width: 100%; height: 260px;"><img src="img/' + image + '" style="height: 260px; margin: auto; position: absolute; left: 0px; right: 0px"></div><br><div style="text-align: center"><button type="button" class="alert-button-restart">????????????</button></div>';
    $(".main-div").html(html);
    $(".alert-button-restart").click(function () {
        restart();
    })
}

function restart() {
    showFirst();
}

function showSecond() {
    alertWithoutTitle("?????????......??????????????????......", "??????.gif", "??????", function() {
        showThird();
    })
}


function showThird() {
    confirmWithoutTitle('???????????????????????????<br>??????????????????<br>?????????????????????????????????<br>?????????????????????<br>???????????????????????????<br>??????????????????????????????<br>?????????????????????<br>????????????????????????<br>......<br>??????????????????????????????', '??????.gif', '???????????????', '???????????????', function () {
        showAgree();
    }, function () {
        showFourth()
    })
}

function showFourth() {
    alertWithoutTitle('??????????????????????????????????????????<br>?????????????????????????????????????????????<br>??????????????????????????????????????????<br>????????????????????????????????????<br>????????????????????????????????????<br>????????????????????????????????????<br>???????????????????????????', '??????.gif', '??????', function () {
        showFifth();
    })
}

function showFifth() {
    confirmWithoutTitle('??????????????????????????????????????????????????????????????????<br>????????????????????????????????????????????????<br>????????????????????????????????????????????????', '????????????.gif', "???????????????????????????????????????????????????", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?????????????????????&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", function () {
        showAgree();
    }, function () {
        showDisagree();
    })
}

function audioAutoPlay(id) {
    var audio = document.getElementById(id);
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
        audio.play();
    }, false);
    document.addEventListener('YixinJSBridgeReady', function () {
        audio.play();
    }, false);
}
