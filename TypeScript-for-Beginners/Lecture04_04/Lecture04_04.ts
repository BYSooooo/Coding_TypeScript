/** Recap */
// Type, Interfaee를 중심으로 지금까지 한 내용을 정리하려고 한다.

/** Part 01 */
// Type은 다양한 용도로 사용이 가능하다.
type Player01_0 =  { }      // Object의 구조를 정의하는 용도
type Player01_1 = string    // Type Alias 방식으로 Type 그 자체를 지칭하는데 사용하는 용도
type Player01_2 = "1" | "2" // 특정 값이나 Type을 범위를 한정하는 용도

/** Part 02 */
// Object의 구조를 정의하는 용도로서의 Type은 Interface와 유사한 기능을 한다. 
// 야래의 Type, Interface는 name이라는 string Type Property를 가지며
// 각각 const 변수 선언 시 Type 명시에 활용되었다.

// Type 정의 및 명시
type Player02_A = {
    name: string
}
const player02_A: Player02_A = {
    name: "player 02"
}
// Interface를 통한 Object 구조 정의 및 사용
interface Player02_B {
    name:string
}
const player02_B: Player02_B = {
    name : "Player 02"
}
// const Player02_A, Player02_B 구현부만 Type인지 Interface인지 구분하기 어려울 정도로
// 유사한 사용법과 기능을 가지고 있음을 알 수 있다.

/** Part 03 */
// Object의 구조를 설명하는 역할로써 Interface, Type은 매우 유사하나 사용할 수 있는 기능에는 차이가 있다.
// 예시로서, 아래는 name Property를 가지고 있는 Type과 Interface에 각각 lastName Property를 새롭게 추가하는 경우이다.

type Player03_A = {
    name: string
}
// Type의 경우 기존 Type에 Property를 추가하려면 별개의 새로운 Type을 만든 후,
// " & "를 통해서 기존 Type에 넣을 Property를 추가하는 방식으로 구현해야 한다.
type Player03_AA = Player03_A & {
    lastName: string
}
const player03_A: Player03_AA = {
    name: "Player 03",
    lastName : "Last Name"
}
// Interface의 경우 extends 상속을 통해서 새로운 Interface에 추가할 Property를 추가하는 방식을 사용한다.
interface Player03_B {
    name:string
}
interface Player03_BB extends Player03_B {
    lastName : string
}
const player03_B: Player03_BB = {
    name : "Player 03",
    lastName : "Last Name"
}

/** Part 04 */
// 위의 경우에 더해 Interface와 type 차이점은 re-opened의 가능 여부이다.
// name Property를 가지고 있는 Type과 Interface에 health라는 Property를 추가하는 경우를 예로 들어본다.
// Type의 경우 동일한 이름의 Type을 다시 선언해서 Property를 추가할 경우 
// Identifier Duplicate 에러가 발생한다.
// 이미 Type에 대한 정의가 이루어졌기 때문에 동일한 이름을 사용해서 Property를 추가하는 방식은 사용할 수 없다.
type Player04_A = {
    name: string
}
type Player04_A = {
    health: number
}
// Interface의 경우 동일한 Interface를 다시 선언해서 추가하려고 하는 Property를 작성하는 방식으로
// 기존에 사용하던 Interface를 그대로 계속 사용할 수 있다.
interface Player04_B {
    name:string
}
interface Player04_B {
    health: number
}

// interface Player04_B는 두번 선언되었고 각각 name, health Property를 갖는 구조로 되어 있다.
// 그 결과 const player04_AB는 name과 health Property 둘다를 갖는 구조를 가지게 되었다.
const player04_AB : Player04_B = {
    name: "This is Name",
    health : 10
}

/** Part 05 */
// Type과 Interface는 abstract Class를 대체하는 용도로써 둘 다 사용이 가능하다.
// firstName Property를 갖는 Type과 Interface를 생성한 후 
// 아래 예시는 User05_A, User05_B라는 일반 클래스에 implements 방식으로 상속해서 abstract Class를 대체해서 사용하는 구조다.
type Player05_A = {
    firstName : string
}
interface Player05_B {
    firstName : string
}

class User05_A implements Player05_A {
    constructor(
        public firstName : string
    ) {}
}
class User05_B implements Player05_B {
    constructor (
        public firstName: string
    ) {}
}
