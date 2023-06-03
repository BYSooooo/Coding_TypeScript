/** Call Signature */
// 기본적으로 Function에서 로직을 구현하기 위해서는 Argument에 대한 Type을 명시해야 한다.
// add01의 경우 a,b가 Number Type임이 지정되어 있고 Return은 a+b이기 때문에 
//그 Return의 Type도 Number라고 TypeScript가 추론하게 된다,
function add01(a: number ,b : number) {
    return a + b
}

// Arrow Function에서도 명시한 Argument Type과 로직에 맞춰 
// TypeScript가 Return Type을 추론하는 과정은 동일하게 진행된다.
const add02 = (a: number, b: number) => a + b

// Call Signature는 위처럼 Function을 작성하기 이전에 Argument Type과 Return Type을 
// 미리 지정해 놓음으로써 Function을 어떻게 호출해야 하는지 알려주는 것을 말한다.
// Function이 어떻게 구현될 것인지가 아닌 Argument, Return에 대한 Type 명시임에 유의한다.
// Add의 경우 a, b에 대한 Type 및, Return Type을 number로 명시했다.
type Add = (a: number, b: number) => number

// add03은 Function 내부에서 Type 명시가 잆이도 에러 없이 작동한다.
// Function Type을 Add로 명시했는데 Add에서 Argument, Return Type에 대해
// Type에 대한 명시가 다 이루어졌기 때문에 add03 Function 내부에서는 별도의 명시 없이도
// TypeScript가 Type을 추론할 수 있는 것이다.
const add03: Add = (a,b) => a + b