console.log("Hello")

// 변수의 타입 명시 방법
let a:number = 10; // 숫자, number
let b:string = "Hello"; // 문자열, string
let c:boolean = true; // false, Bollean 참, 거짓
let d:number[] = [1, 2, 3, 4]; // 배열, Array
let e:Person = { name : "Tom", age : 35}; // 객체, Object
//..
interface Person {
    name:string;
    age:number;
}

a = 50;
b = "50";

//..
console.log("a=" + a, ", type of " + typeof a)
console.log("b=" + b, ", type of " + typeof b)
console.log("c=" + c, ", type of " + typeof c)
console.log("d[0]=" + d[0], ", type of " + typeof d)
console.log("e.name=" + e.name, ", e.age=" + e.age, ", type of " + typeof e)

// 예시

let columnLength = 10; // 길이를 cm단위며, number로 지정
//.. 개발 진행 과정
//.. 개발 진행 과정
//.. 개발 진행 과정
//.. 개발 진행 과정
//.. 개발 진행 과정
//.. 개발 진행 과정
//.. 개발 진행 과정
//.. 개발 진행 과정
//.. 개발 진행 과정
//.. 개발 진행 과정
//.. 개발 진행 과정
//.. 개발 진행 과정
//.. 개발 진행 과정
columnLength = 30;

//.. 개발 진행 과정
//.. 개발 진행 과정
//.. 개발 진행 과정
//.. 개발 진행 과정
let addLength = columnLength + 5;
let meterLength = addLength / 10;

//.. 개발 진행 과정
//.. 개발 진행 과정
//.. 개발 완료
console.log(addLength)
console.log(meterLength)


//-------
// 메서드의 타입 명시 방법
function add(x:number, y:number):number {
    return x + y;
}