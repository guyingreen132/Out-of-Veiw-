function setup() {
    createCanvas(300,100);
}

var x=0;

function draw() {
    background(74, 74, 74);
    ellipse(x,50,100,100);
    x=x+3;
    if(x>209) {window.close();}
}