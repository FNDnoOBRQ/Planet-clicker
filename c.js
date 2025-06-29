document.getElementById("space").src = "bg.jpg";

console.warn("Please check your internet conection.");
let planet = document.getElementById("somethingholder");
let points = parseInt(localStorage.getItem("points")) || 0;
// let points = 0;


//Reset points button's  functions


let mouseTimer;
document.getElementById("restart").addEventListener('mousedown', function(){
    mouseTimer = window.setTimeout(mouseOn, 1500);
});
document.getElementById("restart").addEventListener('mouseup', function(){
    mouseTimer = window.clearTimeout(mouseTimer);
});
function mouseOn(){
    points = 0;
    saveData();
}


document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.code === 'KeyV') 
    {
        points = 10000;
        saveData();
    }
});

// let additionalPoints = parseInt(localStorage.getItem("additionalPoints"))||0;
let additionalPoints = 0;
// let countofpoints = parseInt(localStorage.getItem("countofpoints")) || 1;
let countofpoints = 1;

// let priceB1 = parseInt(localStorage.getItem("priceB1")) || 50;
// let priceB2 = parseInt(localStorage.getItem("priceB2")) || 100;
// let priceB3 = parseInt(localStorage.getItem("priceB3")) || 200;
// let priceB4 = parseInt(localStorage.getItem("priceB4")) || 5000;
let priceB1 = 50;
let priceB2 = 100;
let priceB3 = 200;
let priceB4 = 5000;

// let swich = parseInt(localStorage.getItem("swich")) || 0;
let swich = 0;


//Zmienne do odznak.........
let firstClick = true;
let firstAutoClick = true;
let hasPl2 = true;
let hasPl3 = true;
let hasPl4 = true;
let hasPl5 = true;
let hasSolled = true;
let buy = true;
let win = true;




const buttonAuto = document.getElementById("Autoclicker");
const buttonPower = document.getElementById("morePower");
const buttonNextLevel = document.getElementById("nextLevel");
const buttonEnd = document.getElementById("buyTheGame");

let planeta = document.createElement("img");
planeta.src = "planeta1.png";
const placeHolder = document.getElementById("somethingholder");
placeHolder.appendChild(planeta);




function saveData(){
    localStorage.setItem("points", points);
    localStorage.setItem("additionalPoints", additionalPoints);
    localStorage.setItem("countofpoints", countofpoints);
    localStorage.setItem("priceB1", priceB1);
    localStorage.setItem("priceB2", priceB2);
    localStorage.setItem("priceB3", priceB3);
    localStorage.setItem("priceB4", priceB4);
    localStorage.setItem("swich", swich);
    localStorage.setItem("count", count);
    localStorage.setItem("bonus", bonus);
    localStorage.setItem("inv", inv);
    localStorage.setItem("firstClick", firstClick);
    localStorage.setItem("firstAutoClick", firstAutoClick);
    localStorage.setItem("hasPl2", hasPl2);
    localStorage.setItem("hasPl3", hasPl3);
    localStorage.setItem("hasPl4", hasPl4);
    localStorage.setItem("hasPl5", hasPl5);
    localStorage.setItem("hasSolled", hasSolled);
    localStorage.setItem("buy", buy);
    localStorage.setItem("win", win);
}


planet.addEventListener('click', function(){
    points += countofpoints;
    let temp = document.createElement("p");
    temp.textContent =  `+${countofpoints}`;
    document.body.appendChild(temp);
    temp.style.position = "absolute";
    temp.style.transition = "0.3s";
    temp.style.color = "ghostwhite";
    temp.style.top = "25px";
    temp.style.left = "180px";
    for (let i = 1; i < 55; i++){
        temp.style.top = `${temp.offsetTop + i}px`;
    }
    setTimeout(()=>{document.body.removeChild(temp)},200);
    saveData();
});


// console.log(parseInt(localStorage.getItem("points")));


// First button


// let count = parseInt(localStorage.getItem("count")) || 0;
let count = 0;
let hasFirstTimeOn = true;

//Pierwszy sposób zdobywania punktów||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// function auto(){
//     if(count < 10 && points >= priceB1){
//         count++;
//         if(hasFirstTimeOn == true){
//             points -= priceB1;
//              additionalPoints++;
//             setInterval(autoClick, 1000);
//         }
//         else{
//             points -= priceB1;
//             additionalPoints++;
//         }
//         hasFirstTimeOn = false;
//         priceB1 = Math.round(priceB1 + (priceB1 / 10 * count));

//     }
// }
// function autoClick(){
//     points += additionalPoints;
//     saveData();
//     let temp = document.createElement("p");
//     temp.textContent =  `+${additionalPoints}`;
//     document.body.appendChild(temp);
//     temp.style.position = "absolute";
//     temp.style.transition = "0.3s";
//     temp.style.color = "rgb(27, 147, 212)";
//     temp.style.top = "25px";
//     temp.style.left = "210px";
//     for (let i = 1; i < 55; i++){
//         temp.style.top = `${temp.offsetTop + i}px`;
//     }
//     setTimeout(()=>{document.body.removeChild(temp)},200);
// }


//Drugi sposób zdobywania punktów||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


function auto(){
    if(count < 10 && points >= priceB1){
        count++;
        points -= priceB1;
        additionalPoints = 1;
        autoClick();
        priceB1 = Math.round(priceB1 + (priceB1 / 10 * count));

    }
}
function autoClick(){
    setInterval(()=>{
        points += additionalPoints;
        saveData();
        let temp = document.createElement("p");
        temp.textContent =  `+${additionalPoints}`;
        document.body.appendChild(temp);
        temp.style.position = "absolute";
        temp.style.transition = "0.3s";
        temp.style.color = "rgb(27, 147, 212)";
        temp.style.top = "25px";
        temp.style.left = "210px";

        for (let i = 1; i < 55; i++){
            temp.style.top = `${temp.offsetTop + i}px`;
        }
        setTimeout(()=>{document.body.removeChild(temp)},200);
    },(1000))
}

// second button


// let bonus = parseInt(localStorage.getItem("bonus")) || 0;
let bonus = 0;

let bonuscount = 0;
function increase(){
    if(bonus < 9 && points >= priceB2){
        bonus++;
        points -= priceB2;
        priceB2 = Math.floor(priceB2 + priceB2*`0.${bonus}`);
        countofpoints += 1;
        saveData();
    }

}

// third button 



// let inv = parseInt(localStorage.getItem("inv")) || 1;
let inv = 1;

let hasRun = true;
function levelUp(){
    if(inv < 5 && points >= priceB3){
        placeHolder.removeChild(planeta);
        document.getElementById("space").src = `bg${inv}.jpg`;
        inv += 1;
        points -= priceB3;
        priceB3 = priceB3*1.5;
        planeta.src = `planeta${inv}.png`;
        placeHolder.appendChild(planeta);
        switch(inv){
            case 2:
                placeHolder.style.maxWidth = `515px`;
                placeHolder.style.maxHeight = `515px`;
                break;
            case 3:
                placeHolder.style.maxWidth = `527px`;
                placeHolder.style.maxHeight = `524px`;
                break;
            case 4:
                placeHolder.style.maxWidth = `533px`;
                placeHolder.style.maxHeight = `533px`;
                break;
            case 5:
                placeHolder.style.maxWidth = `546px`;
                placeHolder.style.maxWidth = `545px`;
                break;
        }
        saveData();
    }
    if(inv == 5 && hasRun){
        document.getElementById("StarWars").play();
        hasRun = !hasRun;
    }

}

// fourth button 

function over(){
    // window.close();
    if(points >= priceB4 && swich === 0){
        swich = 1;
        points -= priceB4;
        saveData();
    }

}
// update segment

function updatecolors(){
    if (count < 10){buttonAuto.textContent = ` Auto clicker    ${Math.round(priceB1)}`;};
    if(count >= 10){
        buttonAuto.textContent = ` Sold out!`;
        buttonAuto.style.textAlign = "center";
        buttonAuto.style.color = "crimson";
    };


    if (bonus < 9){buttonPower.textContent = ` More power   ${Math.round(priceB2)}`;};
    if(bonus >= 9){
        buttonPower.textContent = ` Sold out!`;
        buttonPower.style.textAlign = "center";
        buttonPower.style.color = "crimson";
    };

    if(inv < 5){buttonNextLevel.textContent = "Next level " + Math.round(priceB3)};
    if(inv >= 5){
        buttonNextLevel.textContent = "Sold out!";    
        buttonNextLevel.style.textAlign = "center";
        buttonNextLevel.style.color = "crimson";
    }

    if(swich == 0){buttonEnd.textContent = ` Complete?    ${Math.round(priceB4)}`};
    if(swich == 1){
        buttonEnd.textContent = "Completed!";    
        buttonEnd.style.textAlign = "center";
        buttonEnd.style.color = "#03AC13";
    }
    // borders Changes__--__--__--__:|
    if(points >= priceB1 && count < 10){buttonAuto.style.borderRight = `10px solid yellowgreen`;}else{buttonAuto.style.borderRight = `1px solid black`;}
    if(points >= priceB2 && bonus < 9){buttonPower.style.borderRight = `10px solid yellowgreen`;}else{buttonPower.style.borderRight = `1px solid black`;}
    if(points >= priceB3 && inv < 5){buttonNextLevel.style.borderRight = `10px solid yellowgreen`;}else{buttonNextLevel.style.borderRight= `1px solid black`;}
    if(points >= priceB4 && swich == 0){buttonEnd.style.borderRight = `10px solid yellowgreen`;}else{buttonEnd.style.borderRight = `1px solid black`;}

}
setInterval(updatecolors, 1);

function updateScore(){
    document.getElementById("scoreCount").textContent = `+ ${count}/s`;
    if(points < 10000000){
        document.getElementById("score").textContent = `Score: ${points}`;
    }
    else{
        document.getElementById("score").textContent = `Score: infinity`;
    }
}
setInterval(updateScore, 1);





function achivements(){
    const placeForIt = document.getElementById("achievement");

    // first click achievement
    planet.addEventListener('click', function(){
        while(firstClick){
            let obj = document.createElement("div");
            obj.textContent = "Intresting...";
            placeForIt.appendChild(obj);
            let gr = document.createElement("img");
            gr.src = 'intresting1.png';
            obj.appendChild(gr);
            firstClick = !firstClick;
        }
    });

    // first Auto click achievemn
    if(additionalPoints >= 1){
        while(firstAutoClick){
            let obj = document.createElement("div");
            obj.textContent = "Is there someone helping you?";
            obj.style.color = "#40E0D0";
            placeForIt.appendChild(obj);
            firstAutoClick = !firstAutoClick;
            let gr = document.createElement("img");
            gr.src = 'mouse1.png';
            obj.appendChild(gr);
        }
    }

    // next planet achievement

    if(inv == 2){
        while(hasPl2){
            let obj = document.createElement("div");
            obj.textContent = "You have invaded the Earth";
            obj.style.color = "#DB0007";
            placeForIt.appendChild(obj);
            let gr = document.createElement("img");
            gr.src = 'Earth1.png';
            obj.appendChild(gr);
            hasPl2 = !hasPl2;
        }
    }
    if(inv == 3){
        while(hasPl3){
            let obj = document.createElement("div");
            obj.textContent = "You have invaded the Cheese planet";
            obj.style.color = "#DB0007";
            placeForIt.appendChild(obj);
            let gr = document.createElement("img");
            gr.src = 'Cheese1.png';
            obj.appendChild(gr);
            hasPl3 = !hasPl3;
        }
    }
    if(inv == 4){
        while(hasPl4){
            let obj = document.createElement("div");
            obj.textContent = "You have invaded the Char";
            obj.style.color = "#DB0007";
            placeForIt.appendChild(obj);
            let gr = document.createElement("img");
            gr.src = 'Char1.png';
            obj.appendChild(gr);
            hasPl4 = !hasPl4;
        }
    }
    if(inv == 5){
        while(hasPl5){
            let obj = document.createElement("div");
            obj.textContent = "You have invaded thr \"Lords of the worlds\"";
            obj.style.color = "#DB0007";
            placeForIt.appendChild(obj);
            let gr = document.createElement("img");
            gr.src = 'starWars1.png';
            obj.appendChild(gr);
            hasPl5 = !hasPl5;
        }
    }

    // buy all things
    if(count == 10 && countofpoints == 10 && inv == 5){
        while(buy){
            let obj = document.createElement("div");
            obj.textContent = "Money doesn't matter!";
            obj.style.color = "#E4D00A";
            placeForIt.appendChild(obj);
            let gr = document.createElement("img");
            gr.src = 'money1.png';
            obj.appendChild(gr);
            buy = !buy;
        }
    }

    // Win the game
    if(inv == 5 || swich == 1){
        while(win){
            let obj = document.createElement("div");
            obj.textContent = "Congratulation. You have won this game!!!";
            obj.style.color = "#03AC13";
            placeForIt.appendChild(obj);
            let gr = document.createElement("img");
            gr.src = 'soluting1.png';
            obj.appendChild(gr);
            win = !win;
        }}
}
setInterval(achivements, 1);



let wakeLock = null;

async function requestWakeLock() {
  try {
    wakeLock = await navigator.wakeLock.request('screen');
    console.log('Wake Lock active');

    wakeLock.addEventListener('release', () => {
      console.log('Wake Lock liberated');
    });
  } catch (err) {
    console.error(`${err.name}, ${err.message}`);
  }
}

requestWakeLock();