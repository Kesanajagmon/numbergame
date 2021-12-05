class Form{
    constructor(){
        this.q1 = createElement("h2");
        this.q2 = createElement("h2");
        this.q3 = createElement("h2");
        this.q4 = createElement("h2");
        this.q5 = createElement("h2");
        this.a1 = createButton("17");
        this.a2 = createButton("16");
        this.a3 = createButton("18");
        this.a4 = createButton("19");
        this.a5 = createButton("55");
        this.a6 = createButton("60");
        this.a7 = createButton("65");
        this.a8 = createButton("60");
        this.a9 = createButton("2292");
        this.a10 = createButton("3592");
        this.a11 = createButton("2592");
        this.a12 = createButton("2342");
        this.a13 = createButton("0.5");
        this.a14 = createButton("0.1");
        this.te = createElement("h1");
        this.a15 = createButton("0.3");
        this.a16 = createButton("0.5599");
        this.a17 = createButton("12");
        var correct = 0
        this.a18 = createButton("13");
        this.a19 = createButton("15");
        this.a20 = createButton("17"); 
    }
    display(){
        console.log(correct);
        this.q1.html("3 , 5 , 8 , 12 , _ ");
        this.q1.position(20,20);
        this.q2.html("50 , 45 , 55 , 50 , _ ");
        this.q2.position(20,120);
        this.a1.position(250,45);
        this.a2.position(300,45);
        this.a3.position(350,45);
        this.a4.position(400,45);
        this.a5.position(250,145);
        this.a6.position(300,145);
        this.a7.position(350,145);
        this.a8.position(400,145);
        this.a9.position(250,245);
        this.a10.position(300,245);
        this.a11.position(350,245);
        this.a12.position(400,245);
        this.a13.position(250,345);
        this.a14.position(300,345);
        this.a15.position(350,345);
        this.a16.position(400,345);
        this.a17.position(250,445);
        this.a18.position(300,445);
        this.a19.position(350,445);
        this.a20.position(400,445);
        this.q3.html("1 , 2 , 6 , 48 , _ ");
        this.q3.position(20,220);
        this.q4.html("1 , 2 , 2 , 1 , _ ");
        this.q4.position(20,320);
        this.q5.html("9 , 7 , 11 , 9 , _ ");
        this.q5.position(20,420);
        this.a1.mousePressed(()=>{
            correct = correct+1
        });
        this.a6.mousePressed(()=>{
            correct = correct+1
        });
        this.a11.mousePressed(()=>{
            correct = correct+1
        });
        this.a13.mousePressed(()=>{
            correct = correct+1
        });
        this.a18.mousePressed(()=>{
            correct = correct+1
        });
        this.te.html("Your score is "+correct);
        this.te.position(400,500);
    }
}
