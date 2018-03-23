/*eslint-env browser*/
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};
//STEP 1
/*function clickFunction() {
    "use strict";
    window.alert("I have been clicked");
}
*/
//STEP 2
   /* var btnstep2 = window.document.getElementById("step2").onclick = function () {
     window.alert("I have been clicked");
        }
*/
//STEP 3
/*function msgFunction() {
    "use strict";
    window.alert("I have been clicked");
}
    var btnstep3 = window.document.getElementById("step3");
    btnstep3.addEventListener("click", msgFunction);
*/
//STEP 4
/*
    var btnstep4 = window.document.getElementById("step4");
    btnstep4.addEventListener("click", function () {
        window.alert("I have been clicked");
    })
*/
//STEP 5
    /*function step5() {
    "use strict";
    var btnstep5 = window.document.getElementById("step5");
    btnstep5.addEventListener("click", function () {
        window.alert("I have been clicked");
    });
}
window.addEventListener("load", step5);
*/
//STEP 6
/*var link = window.document.getElementById("redirect");

link.addEventListener("click", function (e) {
    "use strict";
    e.preventDefault();
    window.alert("clicked on: visit google");
});
*/
//STEP 7
/*
var veronica = $("veronica");
var step7 = $("step7");
  
step7.addEventListener("click", function () {
    "use strict";
    step7.disabled = true;
    window.alert(veronica.value);
});
*/
//STEP 8
var newpage = $("step8");
newpage.addEventListener("click", function () {
    "use strict";
    window.open('newpage.html', 'google', 'width=300,height=300');
});

//STEP 9
function boo() {
    "use strict";
    window.console.log("Learning JavaScript is fun!");
}

var btnstop = $("stop");
var btnstart = $("start");
var id;
btnstart.addEventListener("click", function () {
    "use strict";
    id = window.setInterval(boo, 2000);
});


btnstop.addEventListener("click", function () {
    "use strict";
    window.clearInterval(id);

});
   
//STEP 10
var car;
var btnSelect = $("btnSelect");

var select = $("select");
select.addEventListener("change", function () {
    "use strict";
    car = select.value;
});

btnSelect.addEventListener("click", function () {
    "use strict";
    window.alert(car);
});









