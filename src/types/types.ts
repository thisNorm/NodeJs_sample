//The primitives
const str:string = "Hello"; // string - 문자열, "" 로 감싸서 표현
const num:number = 10; // number - 숫자, int, double 등 세부 타입은 없음
const bool:boolean = true; // boolean - 논리, true:false, 1:0

console.log(str.length); // 5
console.log(str.toUpperCase()); // HELLO

// String, Number, Boolean 는 타입 명시법과 다르니 주의
const wrapperStr = new String(num);


// Array
// ----- 배열의 초기화 방법
let array0fNumbers1:number[];
array0fNumbers1 = [5];
array0fNumbers1 = [5, 10, 30];
// [5], [5, 5, 10, 30] XXX
// [5, 10, 30] OOO

console.log(array0fNumbers1[0]); // 5
console.log(array0fNumbers1[1]); // 10
console.log(array0fNumbers1[2]); // 30

let array0fNumbers2: Array<number>;
array0fNumbers2 = [6];
array0fNumbers2 = [6, 8, 20];
console.log(array0fNumbers2[2]); // 20

// 해당 타입 요소만 허용 되는 배열 = 튜플이므로 선언 주의
// let singleNumberTuple: [number];
// singleNumberTuple = [5];


// 함수의 명시적 타입 지정 방법 (매개변수 / Parameter)
function greeter(name:string):string {
    return "Hello, " + name;
}
console.log(greeter("Tom"));


// 객체 타입
const car = {
    color: 'red',
    model: 'Sedan',
    manufacturer: 'Toyota'
}

console.log(car.color);

// 구분자를 , 또는 ; 로 사용 할 수 있음
function printOutput(pt: {x: number, y:number}) {
    console.log("The X value is : " + pt.x);
    console.log("The Y value is : " + pt.y);
}

// 객체의 선택적 속성 지정 방법
function printName(user: { first:string, last?:string}) {
    if (user.last !== undefined) {
        console.log("Your First name is " + user.first.toUpperCase());
        console.log("Your Last name is " + user.last.toUpperCase());
    } else {
        console.log("Your name is " + user.first.toLowerCase());
    }
}

printName({ first: "Bob" });

// Any 타입
let object: any = { x: 0 };

object.foo();
object();
object.bar = 100;
object = "hello";
const n: number = object;
