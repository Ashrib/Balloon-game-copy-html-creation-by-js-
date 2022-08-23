                // --------creating  html-----------
var getBody = document.getElementById("body");
var gameOverDiv = document.createElement("div"); // create game over div (body's 1st child)
gameOverDiv.setAttribute("id" , "game-over");
gameOverDiv.appendChild(document.createTextNode("Game over"));
getBody.appendChild(gameOverDiv);

var containerDiv = document.createElement("div"); // create container div (body's 2nd child)
containerDiv.setAttribute("id", "container");
getBody.appendChild(containerDiv);

var titleDiv = document.createElement("div"); // create title div (container's 1st child)
titleDiv.setAttribute("id","game-title");
titleDiv.appendChild(document.createTextNode("Match The Balloons"));
containerDiv.appendChild(titleDiv);

var startDiv = document.createElement("div"); // create start div (container's 2nd child)
startDiv.setAttribute("id", "game-starts");
containerDiv.appendChild(startDiv);

var colorMatchDiv = document.createElement("div");// create color-match div (start div's 1st child)
colorMatchDiv.setAttribute("id" , "match-color");
colorMatchDiv.appendChild(document.createTextNode("Pop the Balloon of this color"));// match div text
var colorBox = document.createElement("div");
colorBox.setAttribute("id", "color-to-match");
colorMatchDiv.appendChild(colorBox);
startDiv.appendChild(colorMatchDiv);

var pointsBox = document.createElement("div");// create points div (start div's 2nd child)
pointsBox.setAttribute("id" , "points");
startDiv.appendChild(pointsBox);

var scoreDiv = document.createElement("div");// create score div (points div's 1st child)
scoreDiv.setAttribute("id", "scores");
scoreDiv.appendChild(document.createTextNode("Your Score : ")); // text of score
var scoreUpdate = document.createElement("span"); // child span
scoreUpdate.setAttribute("id" , "score-update");
scoreDiv.appendChild(scoreUpdate);
pointsBox.appendChild(scoreDiv);

var livesDiv = document.createElement("div");// create lives div (points div's 2nd child)
livesDiv.setAttribute("id", "lives");
livesDiv.appendChild(document.createTextNode("lives: "));
var liveCount = 0;
for(var i=0; i<=4; i++) {  // creating 5 live hearts by loop
    liveCount++;
    var live = document.createElement("div");
    live.setAttribute("class","live");
    live.setAttribute("id",liveCount);
    livesDiv.appendChild(live)
}
pointsBox.appendChild(livesDiv);

var balloonsContainer = document.createElement("div"); // create balloon-box div (container's 3rd child)
balloonsContainer.setAttribute("id", "balloon-box");
containerDiv.appendChild(balloonsContainer);

var balloonsCount = 0;
for(var a=0; a<=26; a++) { // creating 27 balloons with loop
    balloonsCount++;
    var createBalloon = document.createElement("div");
    createBalloon.setAttribute("class", "balloon");
    createBalloon.setAttribute("onClick","matchBalloon(id)");
    createBalloon.setAttribute("id","balloon-"+balloonsCount);
    balloonsContainer.appendChild(createBalloon)
};
                    // ---------html ends---------

                    
// Filling random colors in balloons
var colors = ["#84cc16", "#22c55e","#ef4444", "#fde047", "#8b5cf6", "#ec4899", "#fb923c"];
var ids = ["balloon-1","balloon-2", "balloon-3", "balloon-4", "balloon-5", "balloon-6", "balloon-7","balloon-8", "balloon-9", "balloon-10", "balloon-11", "balloon-12", "balloon-13", "balloon-14","balloon-15", "balloon-16", "balloon-17", "balloon-18", "balloon-19", "balloon-20","balloon-21", "balloon-22", "balloon-23", "balloon-24", "balloon-25", "balloon-26", "balloon-27"];
 
for(var i = 0; i < ids.length; i++) {
    var randomColor = colors[ Math.floor(Math.random() * colors.length) ];
    var rndmBalloon = ids[i];
    var getBalloon = document.getElementById(rndmBalloon);
    getBalloon.style.backgroundColor = randomColor;
};
// color for match
var colorBox = document.getElementById("color-to-match");
colorBox.style.backgroundColor = colors[ Math.floor(Math.random() * colors.length) ];


// Match the balloon
var score = 0;
document.getElementById("score-update").innerText = score;
var wrongScore = 0;

function matchBalloon(v) {
    var theBal = document.getElementById(v);
    var clickedBalloon = document.getElementById(v).style.backgroundColor;
    
    if(clickedBalloon === colorBox.style.backgroundColor) {
        document.getElementById(v).style.backgroundColor = colors[ Math.floor(Math.random() * colors.length) ];
        document.getElementById(v).style.transition = "1s";
        document.getElementById("score-update").innerText = ++score;
        theBal.animate([    //animation on correct balloon
        { transform: 'translateY(0px)'},
        { transform: 'translateY(-800px)'},
        { transform: 'translateX(0px)'},
        { transform: 'translateY(-30px)'},
        { transform: 'translateY(10px)'},
        { transition: 'transfor1s ease'}
        ],{
            duration: 1000
        });
    }
    else{
        ++wrongScore;
        for(var i = 0; i < wrongScore; i++) { // game lives
            document.getElementById(wrongScore).style.display = "none";
        }; 
    };
    colorBox.style.backgroundColor = colors[ Math.floor(Math.random() * colors.length) ];
    if(wrongScore === 5) {
        document.getElementById("game-over").style.display = "flex";
    };
};
