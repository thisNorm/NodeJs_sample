// Generics

// Echo Command
// 아래와 같이 각 타입별 메서드를 구현한다면, 너무 많은 메서드를 정의해야 한다.
function identity(arg: number): number {
    return arg;
}

function identity2(arg: string): string {
    return arg;
}

function identity3(arg: boolean): boolean {
    return arg;
}
//...

// 잘못하여 any타입을 사용한다면, 타입 검증의 목적을 달성하기 어려움
// function identity(arg: any): any {
// //...
// arg = "10";
// //
//     return arg;
// }

let arg = 10;
identity(arg);

// 비효율적인 코드 해결 방법
// Use Generics
function identityWithGenerics1<Type>(arg: Type): Type {
    return arg;
}
// Use Generics general version "T"
function identityWithGenerics2<T>(arg: T): T {
    return arg;
}
// Use Generics multiple version "T"+"U"
function identityWithGenerics3<T, U>(arg: T, arg2: U): [T, U] {
    return [arg, arg2];
}

// Type이라는 키워드가 해당 함수 내 동일한 키워드들을 통일시킴
let input = "10";
const result = identityWithGenerics(input);
console.log("type of input : " + typeof input);
console.log("type of result : " + typeof result);
console.log("result of using generics : " + result);

const result2 = identityWithGenerics3(20, "Hello");
console.log(result2);


// 간단 테스트 패턴 연습
function identityWithGenerics<Type>(arg: Type): Type {
    return arg;
}
function isNumber(value: any) {
    return typeof value === 'number' && !isNaN(value);
}
function isString(value: any) {
    return typeof value === 'string';
}

// given - 테스트에 필요한 초기 데이터를 설정 -> Mock 모의객체를 만들어서사용 하게 된다.
const testValue1: number = 20;
const testValue2: string = "Hi";
const testValue3: number[] = [1, 20];

// when1 - 테스트를 실행하는 부분
const numberIdentity = identityWithGenerics(testValue1)

// then1 - 결과를 검증하고 출력하는 부분
console.log(`Input type is : ${typeof testValue1}`);
console.log(`Output type is : ${typeof numberIdentity}`);
console.log(`Is number : ${isNumber(numberIdentity)}`); // true

// when2
const stringIdentity = identityWithGenerics(testValue2)

// then2 - 결과를 검증하고 출력하는 부분
console.log(`Input type is : ${typeof testValue2}`);
console.log(`Output type is : ${typeof stringIdentity}`);
console.log(`Is string : ${isString(stringIdentity)}`); // ture

// when3
const arrayIdentity = identityWithGenerics(testValue3)

// then3 - 결과를 검증하고 출력하는 부분
console.log(`Input type is : ${typeof testValue3}`);
console.log(`Output type is : ${typeof arrayIdentity}`);
console.log(`Is array : ${Array.isArray(arrayIdentity)}`); // ture