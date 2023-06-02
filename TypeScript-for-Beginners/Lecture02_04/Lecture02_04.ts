/** Unknown Type */
// 개발자가 어떤 Type인지 모르는 경우, 모른다는 사실 자체도 Type Checker에게 알려줘야 한다.
// 이때 Unknown Type을 사용한다.
let a : unknown;

// Unknown Type의 경우 사용하기 위해서는 반드시 해당 객체의 Type에 대한 TypeScript의 확인 절차를 거쳐야 한다.
//아래 코드의 경우 a에 바로 1을 더하려고 시도했기 때문에 에러가 발생한다.
let b = a +1

// IF 조건을 통해 a의 Type이 number일 경우에만 해당 로직을 타도록 구성했다.
// IF 조건을 통해서 number Type이라는 점이 확인되었기 때문에 IF 조건의 실행문에서 
// a는 number로 간주되며 에러 없이 정상 작동한다.
if(typeof a === 'number') { 
    let c = a + 1 
}
// IF 조건을 통해 a가 string Type일 경우 대문자로 변경하는 로직을 타도록 했다.
// a는 string Type이라고 확인이 되었기 때문에 실행문 내의 a는 string Type으로 간주하며
// 대문자로의 변경도 에러 없이 작동한다.
// 동일한 a라는 변수가 조건문에 따라 각 조건문 내에서 다른 Type으로 간주되는 점에 주목하자.
if(typeof a === 'string') { 
    let d = a.toUpperCase()
}

/** Void Type */
// Void는 아무것도 return 하지 않는 Function을 대상으로 한다.

// hello()의 경우 console 출력은 하지만 실행 결과를 return 하는 값은 없다.
// 이와 같이 return 값이 없을 경우 TypeScript가 알아서 설정하는 Type이기 때문에
// 일반적으로는 일부러 명시해주는 경우는 별로 없다.
function hello() {
    console.log('x')
}

/** Never Type */
// Never는 Function이 절대로 Return 하지 않을 경우 사용하는 Type이다.
// hello()는 never Type이기 때문에 return 할 수 없다.
// 따라서 "X"를 반환하는 부분에서 에러가 발생하며 실행되지 않는다.
function hello(): never {
    return "X"
}

// hello2()는 return을 하는 것이 아닌 새로운 Error를 생성해서 Exception을 날린다. 
// return 없이 예외만 던지고 있기 때문에 에러가 발생하지 않으며 정상 작동 한다.
function hello2(): never {
    throw new Error("xxx")
}

// hello3()은 string 또는 number Type이 될 수 있는 name을 Parameter로 갖는다.
function hello3(name: string | number) {
    //if... else if를 통해 string, 혹은 number일 경우 각각 조건을 달았다.
    if(typeof name === 'string') {
        // 여기서의 name의 Type은 string이 된다.
        name    
    } else if(typeof name === 'number') {
        //여기서의 name은 number Type이 된다.
        name
    } else {
        // else 이하는 위 두가지 경우가 전부 아닐 경우에 오게되는 부분이다.
        // 즉 Parameter로 설정한 Type 이외의 형태로 값이 들어왔기 때문에 실행되어서는 안된다.
        // 여기서의 name은 never가 되며 여기로 올 경우 hello3()은 return 없이 그대로 종료된다.
        name
    }
}