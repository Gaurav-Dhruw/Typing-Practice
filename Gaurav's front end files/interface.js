let about = document.getElementById("about");
let goback = document.getElementById("goback");

let abtcont;
let abtus=document.getElementById("aboutus");
let aboutus = "This is the free real estate."
let letters = aboutus.split("");
let counter = 0;

let parent1=document.getElementById("parentcontainer1");
let parent2=document.getElementById("parentcontainer2");
let parent3=document.getElementById("aboutus");
let id1,id2;
about.addEventListener("click", () => {
    abtcont = document.getElementById("aboutcont");
    about.style.display="none";
    goback.style.display="inline";
    parent1.style.display="none";
    parent2.style.display="none";
    parent3.style.display="flex";
    if (document.getElementById('result') != null)
        document.getElementById("result").style.display="none";

    id1 = setInterval(() => {

        let span = document.createElement("span");
        span.innerText = `${letters[counter]}`;
        abtcont.appendChild(span);
        counter++
        if (counter == letters.length) {
            clearInterval(id1);
            
            let span = document.createElement("span");
            span.innerText = `|`;
            abtcont.appendChild(span);
            id2=setInterval(() => {
                console.log("if");

                if (span.style.visibility == "visible")
                    span.style.visibility  = "hidden";
                else
                    span.style.visibility  = "visible";


            }, 500);
        }
    
    }, 50);
    
});

goback.addEventListener("click", () => {
    about.style.display="inline";
    goback.style.display="none";
    parent1.style.display="flex";
    parent2.style.display="flex";
    parent3.style.display="none";
    clearInterval(id1);
    clearInterval(id2);
    
    counter = 0;
    abtcont.remove();
    abtus.firstElementChild.innerHTML=`<div id="aboutcont"></div>`;

    if (document.getElementById('result') != null)
        document.getElementById("result").style.display="flex";
});
