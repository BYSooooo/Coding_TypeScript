/** Classes  */
// TypeScript 에서 Class를 사용해본다.
// TypeScfript에서는 일반적인 Java 등에서 생성자에 사용하는 this.??? = ??? 와 같은 코드르 작성할 필요가 없다.
// constructor() 내부에 작성하면 알아서 해당 작업을 진행해준다.
class Player {
    constructor (
        private firstName : string,
        private lastName : string,
        public nickName : string
    ) {}
}

// class를 통해 아래와 같이 새로운 instance를 만들 수 있다.
const player_01 = new Player("FName", "LName","NName")

// private 상태로 되어 있는 Property의 경우 외부에서 접근할 수 없다.
// firtName의 경우 Private이기 때문에 에러가 발생하나 nickName의 경우 public이기 때문에 에러가 발생하지 않는다.
player_01.firstName
player_01.nickName

// Abstract Class
// 추상 클래스는 다른 클래스 들이 상속받아 사용할 수 있는 클래스를 의미한다.
// 단어 그대로 추상적인 클래스로써 직접 Instance를 생설할 수는 없으며 상속 받아서 사용해야 한다.
abstract class User {
    constructor (
        private firstName : string,
        private lastName : string,
        public nickName : string
    ) {}
}
// 추상 클래스인 User를 상속 받아 Player01이라는 클래스를 생성했다.
class Player01 extends User {

}
// 추상 클래스로는 Instance를 생성할 수 없기 때문에 const test는 에러가 발생한다.
const test = new User("FName", "LName", "NName")
// 상속 받은 Player01로는 Instance 생성이 가능하다.
const player01 = new Player01("FName", "LName", "NName");

// Method
// Method는 Class 내부의 Function를 의미한다.
abstract class User_02 {
    constructor (
        private firstName : string,
        private lastName : string,
        public nickName : string
    ) {}
    // firstName, lastName을 합쳐서 반환하는 getFullName()이라는 Method를 새롭게 생성했다.
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
// getFullName()이 포함된 User_02를 상속 받아 Player_02 Class를 생성한 후 player02라는 Instance를 생성했다.
class Player_02 extends User_02 { }
const player02 = new Player_02("John", "Smith", "Joshy");
// User_02를 상속받았기 때문에 player02에서 getFullName() Method를 아래와 같이 사용할 수 있다.
player02.getFullName()

// Abstract Method
// 추상 클래스의 경우 일반 클래스 뿐만 아니라 추상 메소드를 안에 생성할 수 있다.
// 추상 메소드는 추상 클래스를 상속받은 클래스들이 구현해야 할 메소드를 의미하며 이 경우 Method를 구현하는 것이 아닌,
// Call Signature를 생성한다고 보면 된다.
abstract class User_03 {
    constructor (
        private firstName : string,
        private lastName : string,
        private nickName : string
    ) {}
    // 일반 Method의 경우 자체 로직이 구현되어 있다.
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    // Abstract Method의 경우 형태만 구현되어 있다.
    // Abstract는 이처럼 Class 뿐망 아니라 Method, class 등 여러 부분에서 사용이 가능하다.
    abstract getNickName() : void
}
// 추상 메소드가 포함된 추상 클래스를 상속받은 경우 해당 자식 클래스는 추상 메소드도 반드시 구현해야 한다.
// Player_03의 경우 getNickName()에 대한 구현이 안되있기 때문에 에러가 발생한다.
class Player_03 extends User_03 {

}
// Player_03_01의 경우 User_03을 상속받아 getNickName()을 선언했다.
// Player_03_01은 getNickName을 상속 받아 nickName을 출력하는 메소드로 구현하려고 한다.
// 그러나 nickName이 Private 상태로, 외부에서 접근이 불가능하므로 
// Player_03_01의 경우 this.nickName을 읽을 수 없어 에러가 발생한다.
class Player_03_01 extends User_03 {
    getNickName() {
        console.log(this.nickName)       
    }
}

// protected
// private의 경우 외부에서 해당 Property에 대한 접근을 막음으로서 해당 데이터를 보호한다.
// 외부에서 해당 Property로 접근하는 것은 그대로 막되, Class Player_03_01과 같이 상속받은 클래스에서는 사용하려고 할 때
// Private가 아닌 protected를 사용해야 한다.
abstract class User_04 {
    constructor (
        private firstName : string,
        private lastName : string,
        protected nickName : string // private -> protected
    ) {}
    abstract getNickName(): void
}
// protected에 대해서는 상속받은 Class에서는 접근할 수 있기 때문에 
// Player_04에서는 this.nickName으로 해당 값을 읽어들일 수 있다.
class Player_04 extends User_04 {
    getNickName(): void {       
        console.log(this.nickName)
    }
}
const player04 = new Player_04("John", "Smith", "Joshy");
// protected는 아래의 경우 처럼 상속받은 Class 내부가 아닌 외부에서는 접근할 수 없다.
player04.nickName
