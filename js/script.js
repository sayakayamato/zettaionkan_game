
//カウントダウンタイマー
let sec = 30;                       // カウントダウンする秒数

const hoissuru = document.getElementById("end"); //開始・終了時の音


function startText(){
    $("#hantei").text("READY...");
    setTimeout(function(){
        $("#hantei").text("GO!");
    },2000);

};


$("#start").on("click", function(){
    $(".start_button").hide();
    $(".count, .score, .rains, .container").removeClass("first");
    startText();
    setTimeout(function(){
        hoissuru.play();
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
            $(".modal_content_p").html("あなたの得点は" + score + "点です！");
            return false;
        };
        setTimeout(score_modal, 3000);                      //finishしてから3秒後にモーダル表示  
    }
    }, 1000);

});

//スコア
let score = 0;
// let viewScoore = document.querySelector(".score");



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

// button.addEventListener('click', function () {
//     playAudio();
// }, false);    //このfalseとは？



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
            $("#hantei").text(" ");
        },1000);
    };

    function huseikaiText(){
        $("#hantei").text("×不正解...");
        setTimeout(function(){
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