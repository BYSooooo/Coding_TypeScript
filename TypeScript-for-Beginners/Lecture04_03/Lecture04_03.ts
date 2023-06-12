/** Interface Part Two */
// Interface에 대해 좀 더 알아본다. 우선 추상 메소드에 대해 다시 복습하면서 시작한다.

/** Part 01 */
// 추상 메소드인 User01을 생성했다. 생성자를 통해 firstName과 lastName Property를 갖는 기본적인 구조이다.
abstract class User01 {
    constructor(
        protected firstName : string,
        protected lastName : string
    ) {}
}

/** Part 02 */
// 추상 클래스는 내부에 추상 메소드를 가질 수 있다.
abstract class User02 {
    constructor(
        protected firstName : string,
        protected lastName : string
    ) {}
    // sayHi()는 string Type Argument를 받아 string Type Return 값을 갖는 구조를 갖는다.
    abstract sayHi(name : string):string
    // fullName()은 Argument 없이 string Type Return 값만 갖는다. 
    abstract fullName() : string
}
// abstract Class User02 를 상속받는 Player02 클래스이다.
// 추상 클래스에서 정의한 추상 메소드 fullName(), sayHi()에 대한 구체적인 로직을 구현해야 한다.
class Player02 extends User02 {
    fullName() {
        // User02의 Property가 portected 접근 제어자를 가지고 있기 때문에 User02를 상속받는 Player02는 
        // this를 통해 각 Property로 접근할 수 있다.
        // 만약 private일 경우에는 이런 방식으로 접근할 수 없다.
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string) {
        return `Hello ${name}. My Name is ${this.fullName}`
    }   
}
// 추상 클래스로는 아래와 같이 Instance를 생성할 수 없다.
const user02 = new User02()

/** Part 03 */
// 추상 클래스를 생성할 때 사용하는 abstract는 JavaScript에서는 없는 기능이다.
// 따라서 TypeScript에서 추상 클래스를 사용할 경우, JavaScript로 Complie하게 되면 일반 Class로 변환되어 Compile이 이루어진다.
// 뿐만 아니라 상속에 사용하는 extends는 JavaScript에서 상속 시 사용하는 기능이기 때문에 
// Complie된 JavaScript 상에서는 일반 클래스를 일반 클래스가 상속받는 구조로 변경된다.
// 따라서 상속받는 자식 클래스의 가이드라인으로써 역할하는 추상 클래스의 기능을 Compile된 JavaScript 상에서도 구현되도록 하려면
// Interface가 선택지가 될 수 있다.

// Interface도 추상 클래스와 동일하게 Object나 Class를 구성하는 가이드라인 역항르 한다.
// abstract class User02를 Interface로 바꾸면 아래와 같다.
interface User03 {
    firstName : string,
    lastName : string
    sayHi(name : string):string
    fullName() : string
}

// Interface는  JavaScript로 Compile 될 시 코드 상에 나타나지 않는다.
// 따라서 Interface를 상속받는 클래스를 생성할 때도 다른 기능을 사용해야 하는데 그것이 implements이다.
// implements는 JavaScript에서 사용되지 않으며, 
// Player03의 경우 JavaScript 상에서는 class Player 03 {... } 형태로만 구현된다.
class Player03 implements User03 {
    constructor(
        // Interface에서는 constructor()에 private, protected를 사용할 수 없고 오직 public만 가능하다.
        public firstName : string,
        public lastName : string
    ){}
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name : string) {
        return `Hello ${name}. My Name is ${this.fullName}`
    }
}

/** Part 04 */
// Interface는 다중 상속이 가능하다.
interface User04 {
    firstName : string,
    lastName : string
    sayHi(name : string):string
    fullName() : string
}
interface Human{
    health : number
}
// Player04는 User04, Human 2개의 Interface를 상속 받았기 때문에 
// constructor()에서 health를 생성하지 않으면 에러가 발생한다. 
class Player04 implements User04, Human {
    constructor(
        public firstName : string,
        public lastName : string,
        public health : number
    ){}
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name : string) {
        return `Hello ${name}. My Name is ${this.fullName}`
    }
}

/** Part 05 */
// Interface는 Type 역할로도 사용이 가능하다.
interface User05 {
    firstName : string,
    lastName : string
    sayHi(name : string):string
    fullName() : string
}

//makeUser05()는 2가지 방향으로 User05를 사용했다.
// 1-1. Argument의 Type으로 User05를 명시했다. -> 1-2
// 2-1. makeUser05의 Return Type으로 User05를 명시했다. -> 2-2
function makeUser05(user: User05): User05{
    return {
        // 2-2 : Interface를 Return Type으로 명시했을 경우 
        // Instance 생성 없이 Return 이하에 해당 Interface에서 구성한 구조를 구현하면 된다.
        firstName : "??",
        lastName : "???",
        sayHi : () => "???",
        fullName : () => "????"
    }
}
// 1-1. Interface를 Argument의 Type으로 명시했을 경우
// Argument에서 해당 Interface의 구조를 구현해주면 된다.
makeUser05({
    firstName : "FName",
    lastName : "LName",
    fullName : () => "xx",
    sayHi : (name) => "name" 
 })