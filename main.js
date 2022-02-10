/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/

//Starter code for Button 1 click
    // You will need to call this function when Button 1 is clicked
    // You will need to modiffy the body of this function as described in the assignment Readme
function button1Clicked() {
    let myRand = Math.random()*100; // the number we want to show up in the random_num div

    // put myRand into div
    let button = document.getElementById("random_num");
    button.innerHTML = myRand;

}

// when Button 2 is clicked the circle changes color.
// If the circle is blue, clicking Button 2 should make it green. 
// If the circle is green, clicking Button 2 should make it blue
function button2Clicked() {

    let button = document.getElementById("cir");

    if (circle.style.fill == green) {
        button.style.fill = blue;
    } else {
        button.style.fill = green;
    }

}

// declare variables with cont and let
// event handler and event listener 
    // events -> what user does with web page
    // listener -> looks for user's interaction 