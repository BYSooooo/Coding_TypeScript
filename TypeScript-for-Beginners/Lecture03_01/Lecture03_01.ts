/** Overloading */
// Overloading은 하나의 Function이 서로 다른 다수의 Call Signature를 가질 때 발생한다.

// 이전에 만들었던 Call Signature이다.
type Add01 = (a: number, b: number) => number;

// Call Signature는 아래와 같은 방식으로도 만들 수 있다.
type Add02 = {
    (a: number, b: number) : number;
}

// 기존 Type에 Call Signature를 하나 더 추가했다.
// 추가한 Call Signature는 Argument b가 string Type으로 명시되어 있으며 나머지는 동일하다.
type Add03 = {
    (a: number, b: number) : number;
    (a: number, b: string) : number;
}

// b가 number, 혹은 string 둘 중 하나의 Type을 가질 수 있기 때문에 
// 단순 a + b를 시도할 경우 에러가 발생한다.
const add_Test: Add03 = (a, b) => a + b ;

// Function 내부에서 b의 Type을 조건으로 해서 b가 string일 경우 a를 return하도록 했다.

const add_Test_01: Add03 = (a, b) => {
    // Add03의 경우 return Type이 number이기 때문에 확정적으로 number Type인 a를 그대로 return 하는 건 문제가 없다.
    if(typeof b === "string") return a
    // IF 조건을 통해 b가 string인 경우는 걸러졌기 때문에 나머지 경우는 a가 number 인 경우뿐이다.
    // 따라서 a+b를 그대로 return 할 경우에도 에러가 발생하지 않는다.
    return a+b
}

// Config type은 path: string, state:object 구조를 갖는 Object 형태이다.
type Config = {
    path : string,
    state : object
}
// Push type은 2개의 Call Signature를 갖는다.
// 하나는 Argument가 string인 경우와 object type인 경우다.
// 이 중 Object Type인 경우엔 Config type의 형태로 들어오도록 Type을 명시했다.
// 즉 Object type으로 Argument가 들어온 경우, 
// 해당 Argument는 string, object Type으로 된 Property 구조를 가지고 있어야 한다.
type Push  = {
    (path : string ) : void
    (config : Config) : void
}

//const push는 Puhs Type으로 명시되어 있다.
// 즉 push가 Arugmnet로 받을 수 있는 것은 String, Object Type이다.
// 이제 들어온 Argument가 어떤 Type인지 TypeScript가 확인한 후 로직을 타도록 해야 한다.
const push: Push = (config) => {
    //config가 string인 경우 실행할 로직
    if(typeof config === "string") {
        // Route to Page 
        console.log(config)
    //config가 object인 경우
    } else {
    // coifng가 Object 인 경우엔 type Config에 해당하는 구조를 갖춰야 한다.
    // config.state, config.path 2개의 Property를 가지고 있어야 한다.
    console.log(config.path)
    }
}

// 2개의 Call Signature를 가지고 있는 type Add를 생성했다.
// 각 Call Signature는 서로 다른 갯수의 Parameter를 가지고 있다.
type Add = {
    (a: number, b: number, c: number) : number
    (a: number, b: number) : number
}

// add Function의 Type을 Add로 명시했을 경우 두 Call Signature가 모두 가지고 있으며 Type 또한 동일하다.
// 따라서 a,b에 대해서는 명확하게 number라고 TypeScript가 판단할 수 있지만 C에 대해서는 그렇지 않다.
// c는 없을수도 있고, 혹은 number 일수도 있기 때문에 이에 대해서는 Function 내에서 명시를 직접 해줘야 한다.
const add:Add = (a,b,c) => {
    return a + b
}

// Function 내에서 c에 대해서 Optional type으로 number type을 지정하면 에러 없이 정상 작동한다.
const add2: Add =(a, b, c?:number) => {
    return a + b
}