let container = document.getElementById("lettercont");
let totalwords, totalletters;

// Shift of the focus on textarea on load 

window.addEventListener("load", function () {
    totalwords = Paragraph();
    txtarea.focus();
    let selected = document.getElementById('1');
    selected.className = "selected";

});

let i = 1; //used to track id and To Pass from one <span> element to other
let rightcounter = 0, wrongcounter = 0;
let clockcounter = 0, timecounter; // clockcounter is used to triger the timer only once and timecounter is used to get the setInterval ID which in turn starts the counting of seconds. 
let second = 0, millisecond = 0;



let txtarea = document.querySelector("textarea");
let pretxtarea = ""; // Solution for one of the initil textarea bug
txtarea.value = "";// Solution for one of the initil textarea bug




// Masala of the site, handles all the typing process

txtarea.addEventListener("keydown", function (event) {

    let key = event.key;

    //  to exclude the Modifier and all the additional keys
    if (key == "Alt" || key == "Tab" || key == "F1" || key == "F2" || key == "F3" || key == "F4" || key == "F6" || key == "F7" || key == "F8" || key == "F9" || key == "F10" || key == "F11") {
        event.preventDefault();

    }


    setTimeout(() => {

        if (txtarea.value != pretxtarea) {


            // conditional statement for all the Backspace process. As its function is to erase the letters therefore it is kept seperate
            if (key === "Backspace") {

                // used to stop the triggring of any activity by backspace when first letter is selected
                if (i == 1) {

                }
                else {

                    let selected = document.getElementById(`${i}`);
                    let newselected = document.getElementById(`${i - 1}`);

                    if (newselected.className == "right space" || newselected.className == "right") {
                        rightcounter--;
                    }

                    else {
                        wrongcounter--;
                    }


                    if (newselected.innerText == " "||newselected.innerText == "") {
                        
                        newselected.className = "space selected";
                    }
                    else {
                        newselected.className = "selected";
                        

                    }
                    if (selected.innerText == " "||selected.innerText == "") {
                        selected.className = "space";
                        
                        
                        
                    }
                    else {
                        
                        selected.className = "";
                        

                        

                    }
                    --i;
                    pretxtarea = txtarea.value;

                }

            }


            // triggers the timer, register and check the typed letters, counts the right and wrong typed letters, Displays the result
            else {
                if (clockcounter == 0) {


                    timecounter = setInterval(() => {
                        if (millisecond == 1000) {
                            second++;
                            millisecond = 0
                        }
                        millisecond = millisecond + 100;

                    }, 100);
                    clockcounter++;

                }



                let selected = document.getElementById(`${i}`);

                // To make changes to the last letter as newselected element doesn't exist
                if (i < totalletters) {


                    let newselected = document.getElementById(`${i + 1}`);
                    if (newselected.innerText === ""||newselected.innerText === " ") {
                        newselected.className = "space selected";
                    }
                    else {
                        newselected.className = "selected";

                    }
                    selected.className = "";
                    ++i;


                }

                // Trrigers The Results
                else {
                    focusouttrigger = false;
                    clearInterval(timecounter);
                    setTimeout(() => {
                        let PercentageAccuracy = accuracy(rightcounter, wrongcounter) + "%";
                        let WPM = speed(totalwords, second, millisecond);
                        let result = document.createElement("div");
                        result.id = "result";

                        result.innerHTML = `
                    <div>Mistakes: ${wrongcounter} </div>
                    <div>Accuracy: ${PercentageAccuracy} </div>
                    <div>WPM: ${WPM} </div>`;

                        document.querySelector("body").appendChild(result);
                        txtarea.style.display = "none";


                    }, 1);
                }

                // counting right and wrong typed letters and  changing the display according it
                if (selected.innerText === ""||selected.innerText === " ") {

                    if (key === " ") {

                        selected.className = "right space";
                        ++rightcounter;


                    }
                    else {
                        selected.className = "wrong space";
                        ++wrongcounter;


                    }
                }

                else {

                    if (key == selected.innerText) {
                        selected.className = "right";
                        ++rightcounter;


                    }

                    else {
                        selected.className = "wrong";
                        ++wrongcounter;


                    }
                }
                pretxtarea = txtarea.value;
            }
        }
        //  to exclude the Modifier and all the additional keys
        else {


            event.preventDefault();
        }

    }, 1);



});

// Function to find accuracy

function accuracy(r, w) {

    return ((r / (r + w)) * 100).toFixed(1);
};


// Function for WPM

function speed(words, sec, milli) {

    let minutes = (sec + milli / 1000) / 60;
    return (words / minutes).toFixed(1);

}


// Function to put the Paragraph in DOM

function Paragraph() {
    let para = "You only live once, but living it happily is enough for one life.";

    let letters = para.split("");
    let words = para.split(" ");
    // let cnt = 1;
    container = document.querySelector('#lettercont');
    document.getElementById("txtcont").style.height = `${container.offsetHeight}px`;
    for (let iterator = 0; iterator < letters.length; iterator++) {
        let alphanum = words[iterator];
        // let l = alphanum.split("");
        let parentspan = document.createElement("span");

        parentspan.innerText=letters[iterator];
        parentspan.id=`${iterator+1}`;
        if(letters[iterator]==""||letters[iterator]==""){
            parentspan.className="space";
        }
        
        // for (let j = 0; j < alphanum.length; j++) {
            
        //     let childspan=document.createElement("span");
        //     childspan.innerText = l[j];
        //     childspan.id=`${cnt}`;
            
        //     parentspan.appendChild(childspan);
            
        //     cnt++;
            
        //     if (j+1 == alphanum.length) {
        //         let childspan=document.createElement("span");
        //         childspan.innerText = " ";
        //         childspan.id=`${cnt}`;
        //         childspan.className="space";
        //         parentspan.appendChild(childspan);
                
        //         cnt++;
                
        //     }
           

        // }
        
        container.appendChild(parentspan);


    }

    id3 = setInterval(() => {
        if (document.getElementById("txtcont").style.height != `${container.offsetHeight}px`) {
            document.getElementById("txtcont").style.height = `${container.offsetHeight}px`;
        }
        

    }, 500);

    totalletters = letters.length;

    return words.length;

}


// Function to restart the typing; resets all the counters ,timer,display and  remove the result

function Restart() {
    clockcounter = 0;
    clearInterval(timecounter);
    second = 0;
    millisecond = 0;
    rightcounter = 0;
    wrongcounter = 0;
    i = 1;
    txtarea.style.display = "inline";
    txtarea.focus();


    for (let iter = 0; iter < totalletters; iter++) {
        document.getElementById(`${iter + 1}`).className = '';

    }

    let selected = document.getElementById("1");
    selected.className = "selected";

    //to avoid error when element with result is not created 
    if (document.getElementById('result') != null)
        document.getElementById("result").remove();

}

// Restart trigger
let restart = document.getElementById("restartbtn");
restart.addEventListener("click", Restart);


let id3;
let focusouttrigger = true;
// to check whether textarea is focused or not and makes changes to display accordingly
txtarea.addEventListener("focusout", () => {
    if (i < totalletters || focusouttrigger) {
        let selected = document.getElementById(`${i}`);
        selected.className = "";

    }

});
txtarea.addEventListener("focus", () => {
    let selected = document.getElementById(`${i}`);
    selected.className = "selected";


});











