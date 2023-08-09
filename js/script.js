///画面フェードイン
$(function() {
	$('body').fadeIn(1000); //1秒かけてフェードイン！
});

//カウントダウンタイマー
let sec = 30;                       // カウントダウンする秒数

const hoissuru = document.getElementById("end"); //開始・終了時の音

const game_bgm = document.getElementById("bgm"); //BGM

const startAudio = document.getElementById("start_audio");


function startText(){
    $("#hantei").text("READY...");
    setTimeout(function(){
        $("#hantei").text("GO!");
    },2000);

};


$("#start").on("click", function(){
    startAudio.play();
    $(".start_button").hide();
    $(".count, .score, .rains, .container").removeClass("first");
    startText();
    setTimeout(function(){
        hoissuru.play();
        game_bgm.play();
    },2000);
    setTimeout(function(){
        $("#hantei").text(" ");
        playAudio();
    },3000);

    let dt = new Date();               // 開始日時を設定
    console.log("Start: ", dt);
    let endDt = new Date(dt.getTime() + sec * 1000); // 終了時刻を開始日時+カウントダウンする秒数に設定
    console.log("End : ", endDt);


    let cnt = sec;                     // 1秒おきにカウントダウン
    let id = setInterval(function(){    
    cnt--;
    $("#countDown").text(cnt);


    dt = new Date();                // 現在日時と終了日時を比較
    if(dt.getTime() >= endDt.getTime()){
        clearInterval(id);
        $("#hantei").text("Finish!");
        hoissuru.play();
        const score_modal = function(){
            $(".modal_container").addClass('active');
            $(".modal_content_p").html("あなたの得点は<span>"+ score + "</span>点です！");
            if(score<10){
                $(".score_level").html("< 音感センスなし〜 >");
            }else if(score<15){
                $(".score_level").html("< まあ普通かな >");
            }else if(score<20){
                $(".score_level").html("< なかなかやるやん >");
            }
            else if(score<25){
                $(".score_level").html("< 音感センスあり！ >");
            }
            else if(score<30){
                $(".score_level").html("< お主、只者ではないな >");
            }
            else{$(".score_level").html("< 神すぎる！>");}
            return false;
        };
        setTimeout(score_modal, 3000);                      //finishしてから3秒後にモーダル表示  
    }
    }, 1000);

});

//スコア
let score = 0;




// audioArrに音源を入れていく
const button = document.getElementById('button'),
    audioArr = [
        './audio/do__piano.mp3',
        './audio/re__piano.mp3',
        './audio/mi__piano.mp3',
        './audio/fa__piano.mp3',
        './audio/so__piano.mp3',
        './audio/ra__piano.mp3',
        './audio/si__piano.mp3'
    ];

const audio = new Audio()





const playAudio = function () {

    const num = Math.floor(Math.random() * audioArr.length);
    if (num == audioArr.length) {
        num = audioArr.length - 1;   //この一行だけイマイチ理解できない〜
    }
    audio.src = audioArr[num];       //ランダムに音を鳴らす
    audio.play();

    console.log(num);

    //正解、不正解だったときの処理
    const seikaiPlay = document.getElementById("seikai");      //正解の効果音
    const huseikaiPlay = document.getElementById("huseikai");  //不正解の効果音

    function seikaiText(){
        $("#hantei").text("◯正解！");
        setTimeout(function(){
            $(".keys").removeClass("active_keys");
            $("#hantei").text(" ");
        },1000);
    };

    function huseikaiText(){
        $("#hantei").text("×不正解...");
        setTimeout(function(){
            $(".keys").removeClass("active_keys");
            $("#hantei").text(" ");
        },1000);
    };

    
    $(window).on("keyup",function(e){
        switch(num){
            case 0:
                if(e.keyCode == 78) {
                    audio.src = audioArr[0];
                    audio.play();
                    seikaiPlay.play();
                    seikaiText();
                    $("#keyC").removeClass("none_keys");
                    $("#keyC").addClass("active_keys");
                    score+=2;
                    $("#scoreUp").text(score);
                    $(window).off();
                }
                else{
                    $(this).css('background-color','rgb(237, 140, 98)');
                    huseikaiPlay.play();
                    huseikaiText();
                    score--;
                    $("#scoreUp").text(score);
                    $(window).off();
                }
                break;
            case 1:
                if(e.keyCode == 74) {
                    audio.src = audioArr[1];
                    $(this).css('background-color','rgb(237, 140, 98)');
                    audio.play();
                    seikaiPlay.play();
                    seikaiText();
                    $("#keyD").removeClass("none_keys");
                    $("#keyD").addClass("active_keys");
                    score+=2;
                    $("#scoreUp").text(score);
                    $(window).off();
                }
                else{
                    $(this).css('background-color','rgb(237, 140, 98)');
                    huseikaiPlay.play();
                    huseikaiText();
                    score--;
                    $("#scoreUp").text(score);
                    $(window).off();
                }
                break;
            case 2:
                if(e.keyCode == 75) {
                    audio.src = audioArr[2];
                    $(this).css('background-color','rgb(237, 140, 98)');
                    audio.play();
                    seikaiPlay.play();
                    seikaiText();
                    $("#keyE").removeClass("none_keys");
                    $("#keyE").addClass("active_keys");
                    score+=2;
                    $("#scoreUp").text(score);
                    $(window).off();
                }
                else{
                    $(this).css('background-color','rgb(237, 140, 98)');
                    huseikaiPlay.play();
                    huseikaiText();
                    score--;
                    $("#scoreUp").text(score);
                    $(window).off();
                }
                break;
            case 3:
                if(e.keyCode == 76) {
                    audio.src = audioArr[3];
                    $(this).css('background-color','rgb(237, 140, 98)');
                    audio.play();
                    seikaiPlay.play();
                    seikaiText();
                    $("#keyF").removeClass("none_keys");
                    $("#keyF").addClass("active_keys");
                    score+=2;
                    $("#scoreUp").text(score);
                    $(window).off();
                }
                else{
                    $(this).css('background-color','rgb(237, 140, 98)');
                    huseikaiPlay.play();
                    huseikaiText();
                    score--;
                    $("#scoreUp").text(score);
                    $(window).off();
                }
                break;
            case 4:
                if(e.keyCode == 186) {
                    audio.src = audioArr[4];
                    $(this).css('background-color','rgb(237, 140, 98)');
                    audio.play();
                    seikaiPlay.play();
                    seikaiText();
                    $("#keyG").removeClass("none_keys");
                    $("#keyG").addClass("active_keys");
                    score+=2;
                    $("#scoreUp").text(score);
                    $(window).off();
                }
                else{
                    $(this).css('background-color','rgb(237, 140, 98)');
                    huseikaiPlay.play();
                    huseikaiText();
                    score--;
                    $("#scoreUp").text(score);
                    $(window).off();
                }
                break;
            case 5:
                if(e.keyCode == 70) {
                    audio.src = audioArr[5];
                    $(this).css('background-color','rgb(237, 140, 98)');
                    audio.play();
                    seikaiPlay.play();
                    seikaiText();
                    $("#keyA").removeClass("none_keys");
                    $("#keyA").addClass("active_keys");
                    score+=2;
                    $("#scoreUp").text(score);
                    $(window).off();
                }
                else{
                    $(this).css('background-color','rgb(237, 140, 98)');
                    huseikaiPlay.play();
                    huseikaiText();
                    score--;
                    $("#scoreUp").text(score);
                    $(window).off();
                }
                break;
            case 6:
                if(e.keyCode == 86) {
                    audio.src = audioArr[6];
                    $(this).css('background-color','rgb(237, 140, 98)');
                    audio.play();
                    seikaiPlay.play();
                    seikaiText();
                    $("#keyB").removeClass("none_keys");
                    $("#keyB").addClass("active_keys");
                    score+=2;
                    $("#scoreUp").text(score);
                    $(window).off();
                }
                else{
                    $(this).css('background-color','rgb(237, 140, 98)');
                    huseikaiPlay.play();
                    huseikaiText();
                    score--;
                    $("#scoreUp").text(score);
                    $(window).off();
                }
                break;
            }
        setTimeout(function(){
            playAudio();
        },800);
    });
    
    
;}



// キーボードを押した時の音の設定

$(window).on("keydown",function(e){
    if(e.keyCode == 78) {
        console.log("ド");
        audio.src = audioArr[0];
        audio.play();
    }
    else if(e.keyCode == 74){
        console.log("レ");
        audio.src = audioArr[1];
        audio.play();
    }
    else if(e.keyCode == 75){
        console.log("ミ");
        audio.src = audioArr[2];
        audio.play();
    }
    else if(e.keyCode == 76){
        console.log("ファ");
        audio.src = audioArr[3];
        audio.play();
    }
    else if(e.keyCode == 186){
        console.log("ソ");
        audio.src = audioArr[4];
        audio.play();
    }
    else if(e.keyCode == 70){
        console.log("ラ");
        audio.src = audioArr[5];
        audio.play();
    }
    else if(e.keyCode == 86){
        console.log("シ");
        audio.src = audioArr[6];
        audio.play();
    }
}); 

