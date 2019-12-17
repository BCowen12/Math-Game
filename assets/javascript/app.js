window.onload = function(){
    $("#start").on("click", start);
}


var correct = 0;
var incorrect = 0;
var unanswered = 0;
var num = 0;
var time = 0;
var qNum = 0;
var timer;
var index = [];


//this is a list of questions, answers, and the correct answer.
var questions = [
    {
        q: "0+1",
        a1: "1",
        a2: "-1",
        a3: "3",
        a4: "5",
        aIndex: "0"
    },
    {
        q: "0+5",
        a1: "-2",
        a2: "5",
        a3: "2",
        a4: "-3",
        aIndex: "1"
    },
    {
        q: "0-3",
        a1: "4",
        a2: "-4",
        a3: "-3",
        a4: "3",
        aIndex: "2"
    },
    {
        q: "10+2",
        a1: "2",
        a2: "15",
        a3: "-2",
        a4: "12",
        aIndex: "3"
    },
    {
        q: "3-5",
        a1: "1",
        a2: "-1",
        a3: "-2",
        a4: "5",
        aIndex: "2"
    },
    {
        q: "5+2",
        a1: "7",
        a2: "5",
        a3: "2",
        a4: "-3",
        aIndex: "0"
    },
    {
        q: "9-4",
        a1: "9",
        a2: "13",
        a3: "3",
        a4: "5",
        aIndex: "3"
    },
    {
        q: "7+5",
        a1: "12",
        a2: "5",
        a3: "2",
        a4: "-3",
        aIndex: "0"
    },
    {
        q: "4-9",
        a1: "1",
        a2: "5",
        a3: "-3",
        a4: "-5",
        aIndex: "3"
    },
    {
        q: "7+2",
        a1: "9",
        a2: "12",
        a3: "2",
        a4: "5",
        aIndex: "0"
    },
    {
        q: "2-9",
        a1: "1",
        a2: "-7",
        a3: "3",
        a4: "-5",
        aIndex: "1"
    },
    {
        q: "3+8",
        a1: "-5",
        a2: "5",
        a3: "2",
        a4: "11",
        aIndex: "3"
    },
    {
        q: "4-1",
        a1: "3",
        a2: "-2",
        a3: "5",
        a4: "14",
        aIndex: "0"
    },
    {
        q: "2-6",
        a1: "-2",
        a2: "5",
        a3: "-4",
        a4: "8",
        aIndex: "2"
    },
    {
        q: "9+4",
        a1: "13",
        a2: "5",
        a3: "14",
        a4: "12",
        aIndex: "0"
    },
    {
        q: "3-7",
        a1: "-5",
        a2: "5",
        a3: "2",
        a4: "-4",
        aIndex: "3"
    },
    {
        q: "2+9",
        a1: "11",
        a2: "-7",
        a3: "13",
        a4: "10",
        aIndex: "0"
    },
    {
        q: "5+6",
        a1: "10",
        a2: "11",
        a3: "12",
        a4: "-1",
        aIndex: "1"
    },
    {
        q: "7+6",
        a1: "9",
        a2: "14",
        a3: "13",
        a4: "12",
        aIndex: "2"
    },
    {
        q: "8+4",
        a1: "12",
        a2: "13",
        a3: "14",
        a4: "6",
        aIndex: "0"
    },
    {
        q: "7+2",
        a1: "1",
        a2: "8",
        a3: "7",
        a4: "9",
        aIndex: "3"
    },
    {
        q: "7-9",
        a1: "-2",
        a2: "5",
        a3: "2",
        a4: "-3",
        aIndex: "0"
    },
    {
        q: "6+8",
        a1: "16",
        a2: "15",
        a3: "14",
        a4: "2",
        aIndex: "2"
    },
    {
        q: "4+5",
        a1: "-1",
        a2: "9",
        a3: "8",
        a4: "6",
        aIndex: "1"
    },
    {
        q: "9+9",
        a1: "16",
        a2: "17",
        a3: "18",
        a4: "0",
        aIndex: "2"
    },
    {
        q: "7+7",
        a1: "14",
        a2: "15",
        a3: "12",
        a4: "17",
        aIndex: "0"
    },
    {
        q: "8+8",
        a1: "14",
        a2: "19",
        a3: "16",
        a4: "15",
        aIndex: "2"
    },
    {
        q: "9-4",
        a1: "-2",
        a2: "5",
        a3: "2",
        a4: "-3",
        aIndex: "1"
    }
]

function start(){
    $("#restart").html("");
    $("#instructions").html("");
    correct = 0;
    incorrect = 0;
    num = 0;
    time = 30;
    $("#score").html(`Right: ${correct}<br>Wrong: ${incorrect}`);
    timer = setInterval(count, 1000);
    index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
    ask();
}

function ask(){
    qNum = Math.floor(Math.random() * (index.length));
    num = index[qNum];
    remove(index, num);
    $("#start").html("");
    $("#solution").html("");

    //set the question
    $("#question").html(`<h1>${questions[num].q}</h1>`);

    //set the answers
    $("#q1").html(`<button class=ans value="0">${questions[num].a1}</button>`);
    $("#q2").html(`<button class=ans value="1">${questions[num].a2}</button>`);
    $("#q3").html(`<button class=ans value="2">${questions[num].a3}</button>`);
    $("#q4").html(`<button class=ans value="3">${questions[num].a4}</button>`);
    
    $("#time").html(`Time Remaining: ${time} Seconds`);

    $(".ans").on("click", choice);
}


function count(){
    if(time > 0){
        time --;
        $("#time").html(`Time Remaining: ${time} Seconds`);
    } else{
        clear();
        timeout();
    }
}

function timeout(){
    clearInterval(timer);
    again();
}

function choice(c){
    var value = $(this).attr("value");
    if(value === questions[num].aIndex){
        clear();
        correct++;
        $("#score").html(`Right: ${correct}<br>Wrong: ${incorrect}`);
        ask();
    }else{
        clear();
        incorrect++;
        $("#score").html(`Right: ${correct}<br>Wrong: ${incorrect}`);
        setTimeout(ask, 2000);
    }
}

function clear(){
    $("#question").html("");
    $("#q1").html("");
    $("#q2").html("");
    $("#q3").html("");
    $("#q4").html("");
}

function again(){
    clear();
    clearInterval(timer);
    $("#score").html("");
    $("#question").html(`<h2>All Done! Here's How You Did:</h2>
    <h2>Correct: ${correct}</h2>
    <h2>Incorrect: ${incorrect}</h2>`);
    $("#restart").html(`<button type="button" class="btn btn-primary btn-lg">Try Again?</button>`);
    $("#restart").on("click", start);
}

function remove(arr, num){
    var i = arr.indexOf(num);
    arr.splice(i, 1);
    index = arr;
}