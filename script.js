$(document).ready(function(){
    
    var pi = Math.PI;
    var numstar = 0;
    var size = 0;
    var randy;
    var s = 1;//speed
    
    function planet(deg, r){
        this.deg = deg;
        this.r = r;
    }
    var mercury = new planet(0, 65);
    var venus = new planet(0, 80);
    var earth = new planet(0, 100);
    var mars = new planet(0, 120);
    var jupiter = new planet(0, 150);
    var saturn = new planet(0, 185);
    var uranus = new planet(0, 220);
    var neptune = new planet(0, 260);
    var pluto = new planet(0, 300);
    
    function change(dom, obj, del){
        obj.deg+= (pi / del);
        $(dom).css("transform", "translate("+ ((Math.cos(obj.deg)*obj.r)-obj.r-3) +"px, "+ -(Math.sin(obj.deg)*obj.r) +"px)");
    }
    
    setInterval(function(){
        change(".mercury", mercury, 90/s);
        change(".venus", venus, 70/s);
        change(".earth", earth, 60/s);
        change(".mars", mars, 55/s);
        change(".jupiter", jupiter, 50/s);
        change(".saturn", saturn, 45/s);
        change(".uranus", uranus, 40/s);
        change(".neptune", neptune, 35/s);
        change(".pluto", pluto, 30/s);

        randy = Math.round(Math.random()*1000);
        if (randy == 618){
            console.log("Wow, new star has born!");
            $("body").append("<div class='star' id= star"+ numstar +">");
            $("#star"+ numstar +"").css("margin-top", ""+ Math.random()*(window.innerHeight) +"px");
            $("#star"+ numstar +"").css("margin-left", ""+ Math.random()*(window.innerWidth) +"px");
            size = 6;
            $("#star"+ numstar +"").css("width", ""+ size +"px");
            $("#star"+ numstar +"").css("height", ""+ size +"px");
            numstar++;
        }
    }, 40);
    
    for (var i=0; i<100; i++){
        $("body").append("<div class='star' id= star"+ numstar +">");
        $("#star"+ numstar +"").css("margin-top", ""+ Math.random()*(window.innerHeight) +"px");
        $("#star"+ numstar +"").css("margin-left", ""+ Math.random()*(window.innerWidth) +"px");
        size = (Math.random()*3)+3;
        $("#star"+ numstar +"").css("width", ""+ size +"px");
        $("#star"+ numstar +"").css("height", ""+ size +"px");
        numstar++;
    }

    $("#speedup").click(function(){
        if (s >= 1 && s != 5){
            s++;
        }
        else if (s >= 0 && s < 1){
            s+= 0.25;
        }
        $("#speed").html(s);
    });
    $("#speeddown").click(function(){
        if (s > 1){
            s--;
        }
        else if (s >= 0.25){
            s-= 0.25;
        }
        $("#speed").html(s);
    });
    $("#hide").click(function(){
        $(".menu").hide();
    });
});