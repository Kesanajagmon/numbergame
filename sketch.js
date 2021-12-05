var form;
var correct = 0;



function preload(){

}
function setup(){
    createCanvas(600,600);

    

    form = new Form();

}
function draw(){
   
    //text("Your score is " + correct,200,500);
    text("This is 1st part so we this is not a complete game and have a less difficulty level.",5,15);
    text("This even have some bugs . So these bugs will be gotten fixed in 2nd part and the next level will also be hard.",5,35)

   
 //if(correct!==5){
 //form.display();
 //}


 form.display();


}