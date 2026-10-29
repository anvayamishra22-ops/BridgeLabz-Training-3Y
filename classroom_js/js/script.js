//console.log("Hello World");
//{
    //let a = "hello";
    //console.log(a);
//console.log(a);
//let username = "Anvaya";
//console.log(username.trim());
//console.log(username.toUpperCase());
//console.log(username.toLowerCase());
//console.log(username.includes("Mishra"));
//console.log(username.trim().toUpperCase().split(""));

//let password = "anvaya@123";
//function checkPassword(password) {
//    let pwd = password.trim();

//    if (pwd.length < 6) return false;

//    let upper = false;
//    let lower = false;
//    let digit = false;
//    let special = false;

//     for (let i = 0; i < pwd.length; i++) {
//        let ch = pwd.charAt(i);

//        if (ch >= "A" && ch <= "Z") {
//            upper = true;
//        } else if (ch >= "a" && ch <= "z") {
//            lower = true;
//        } else if (ch >= "0" && ch <= "9") {
//            digit = true;
//        } else {
//            special = true;
//        }
//    }
//     

//}

// function fogetPassword() {
//    let otp=Math.floor(1000 + Math.random() * 9000);
//    return otp;
//}
//console.log(fogetPassword());
//function generateHexColor() {
//    let arr=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  //  let hexColor = "#";
    //for (let i = 0; i < 6; i++) {
      //  let randomNum = Math.floor(Math.random() * arr.length);
        //hexColor += arr[randomNum];
 //   }
 //   console.log(hexColor);
//}
//function generateHexColor() {
//    document.body.style.backgroundColor = hexColor;
//}
//genrateHexColor(); 
//explicit type conversion
// let strnumber="123";
// let number=Number(strnumber);
// console.log(number);
// console.log(typeof number);

// let number=123;
// let strnumber=String(number);
// console.log(strnumber);
// console.log(typeof strnumber);

//function declaration
// function add(a,b){
//     let result = a+b;
//     console.log("result is: ",result);
//     // return result;
// }
// console.log(add(10,20));

//funtion expression/annumous function
// let add=function(a,b){
//     let result = a+b;
//     return result;
// }
// console.log(add(10,20));

//Arrow function
// let add=(a,b)=>{
//     let result = a+b;
//     return result;
// }
// console.log(add(10,20));

// let add=(a,b)=> a+b
// let mul=(a,b)=> a*b
// console.log(add(10,20))

//higer order finction => function as a parameter and Add function call as call back function
// function calculate(a,b,callback){
//     let result = callback(a,b);
//     // console.log("result is: ",result);
//     return result;
// }

// console.log(calculate(50,20,add));
// console.log(calculate(50,10,mul));


//let arr=[1,2,3,4,5];
//map()
// let fun= (a)=> a*2
// let result=arr.map(fun);
// let result=arr.map(a=> a*2);
// console.log(result);
// console.log(arr);

// let res=arr.map(x=>x*x)
// console.log(res)

// let even=arr.filter(x=>x%2==0)
// console.log(even)

//let arr3=["Apple","mango","banana","grapes","apple","AppLe"]
//let res=arr3.filter(x=>x.toLocaleLowerCase()!="apple")
//let apple=arr3.filter(x=>x.toLocaleLowerCase()=="apple")
//let res1=arr3.filter(x=>x.length>5)
//let res2=arr3.filter(x=>x.charAt(0).toLocaleLowerCase()=="a")
//console.log(res2)
//console.log(res1)
//console.log(apple)
//console.log(res)

// function fun(a,a){
//     console.log("hello");
// }
// fun(10,20);

// console.log(this)
// hoisting:var,function declaration
// console.log(b);
// var b="hello";

// b();
// var b= ()=>{
//     console.log("fun")
// }

// let student = {
//     id: 101,
//     name: "raj",
//     marks: 90,
//     address: {
//         city: "Mathura",
//         pincode: 567893
//     },
//     displayInfo: function () {
//         console.log(`my name is ${this.name} and got marks ${this.marks}`);
//     }
// }

// let query = "city";

// console.log(student["address"][query]);
// console.log(student.address.city);

// student.displayInfo();

let listOfStudents = [
    {
        id: 101,
        name: "raj",
        marks: 90
        gender: "male"
    },
    {
        id: 102,
        name: "ram",
        marks: 85
        gender: "male"
    },
    {
      id: 103,
      name: "ravi",
      marks: 95
      gender: "male"
    },
    {
      id: 104,
      name: "ramesh",
      marks: 80
      gender: "male"
    },
    {
      id: 105,
      name: "radhika",
      marks: 75
      gender: "female"
    }
];
"my id is 101 and name is raj and marks is 90"
"my id is 102 and name is ram and marks is 85"
"my id is 103 and name is ravi and marks is 95"
"my id is 104 and name is ramesh and marks is 80"
"my id is 105 and name is radhika and marks is 75"

 

