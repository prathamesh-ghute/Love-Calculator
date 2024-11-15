let submit = document.querySelector("#submit")
submit.addEventListener("submit",function(event){
    // event.preventDefault();
    alert("you entered succesfully");
});

let name1 = document.querySelector("#name");
let crush = document.querySelector("#crush");

submit.addEventListener("click",function(){
    let myName = name1.value;
    let crushName = crush.value;
    let length1= myName.length;
    let length2 = crushName.length;
    console.log(length1);
    console.log(length2);
    let length = (length1*length2);
    if (length>=100){
        length=100;
    }
    let love = (length/100)*100;
    if (name1.value ==="" && crush.value===""){
        name1.value="prathamesh";
        crush.value="noCrush";
        love="null";
    }
    alert(`${name1.value} & ${crush.value} love is : ${love}%`);

    name1.value="";
    crush.value="";
});

