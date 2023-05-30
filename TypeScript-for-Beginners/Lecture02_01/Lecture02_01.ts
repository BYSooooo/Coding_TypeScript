// let a는 String Type이라는 TypeScript의 추론이 발생한다.
let a = "Hello";
// 동일한 String Type 내에서 데이터 변경이 발생할 경우 Error는 발생하지 않는다.
a = "bye"
// String type의 a를 number Type으로 변경하려 할 경우 Error가 발생한다.
a = 1

// b의 Type을 명시적으로 Boolean Type으로 선언했기 때문에 
// String Type으로 값을 선언할 경우 Error가 발생한다.
let b : boolean = "x"
// Boolean Type의 false라는 값을 가질 경우 Error는 발생하지 않는다.
let b_1 : boolean = false;

// c의 경우 number로만 이루어진 Array라는 것을 TypeScript가 추론한다.
let c = [1,2,3]
// number로만 이루어진 Array에 String Type의 값을 넣으려고 시도할 경우 Error가 발생한다.
c.push("1")

// 만약 init Data가 없어 추론이 불가능할 경우에는 Type을 명시해야 한다.
let c_1 : number[] = [];
// c_1의 경우 number[]로 Type을 명시했기 때문에 number만 그 안에 들어갈 수 있다.
// 따라서 c_1에 String Type의 값을 넣으려고 시도할 경우 에러가 발생한다.
c_1.push("1");