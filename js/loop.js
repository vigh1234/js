function test()
{   
    // alert(new Date().getDate())
    var car=["bmw", "volvo", "saab","ford","fiat","audi"];
    let text="Please locate where 'locate' occurs";
    let index = text.lastIndexOf("locate");
    document.getElementById("demo").innerHTML = index; 

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let size = fruits.length;
    document.getElementById("dem").innerHTML = size;

    let tr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById("h1").innerHTML =tr.length;
    
    var arr=["bmw", "volvo", "saab","ford","fiat","audi"];
    document.getElementById("h2").innerHTML =arr.toString();

    var arr=["bmw", "volvo", "saab","ford","fiat","audi"];
    document.getElementById("h3").innerHTML =arr.join("@@");

    const fruit = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo1").innerHTML = fruits;
    fruit.pop();
    document.getElementById("demo2").innerHTML = fruit;
    document.getElementById("demo3").innerHTML = fruit;
    fruit.push("kiwi");
    document.getElementById("demo4").innerHTML = fruit;
    
    const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo5").innerHTML = fruit1;

    fruit1.splice(2, 0, "Lemon", "Kiwi","hsd");
    document.getElementById("demo6").innerHTML = fruit1;

    const fruit2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruit2.slice(2,4);
    document.getElementById("demo7").innerHTML = fruit2 + "<br><br>" + citrus;

    const person={
        firstname:"Leo",
        lastname:"Messi",
        fullname: function(){
            return this.firstname + " " + this.lastname
        }
    };
    document.getElementById('abc').innerHTML=person.fullname();

    let fuctn = (a,b) => a*b;
    
    document.getElementById('hlo').innerHTML=fuctn(4,5);
    // for (var i=car.length;i>=0;i--)
    // {
    //     console.log(car[i]);
    // }
    // for(var i=1;i<=100;i++)
    // console.log(i);
}