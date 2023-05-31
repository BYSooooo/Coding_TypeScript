/**  Basic Type */
// ': + Type 이름' 의 형태로 Type을 명시할 수 있다.
let a : number = 1;
let b : string = "i1";
let c : boolean = true;

// 해당 Type으로만 구성된 Array를 선언하기 위해서는 Type 뒤에 []를 추가하면 된다.
// a_1의 경우 값이 Array 형태가 아니기 때문에 에러가 발생한다.
let a_1 : number[] = 1;
let b_1 : string[] = ["1", "2"]
let c_1 : boolean[] = [true, false, true];

// TypeScript가 추론 가능한 형태의 데이터 구조를 가지고 있다면 굳이 Type을 명시하지 않아도 된다.
let a_2 = [1];
let b_2 = ["12", "23"];
let c_2 = [true, false, true]

/**  Optional Type */
// 변수 내 Optional Parameter를 표현하기 위해서는 해당 변수 내부 Paramter의 Type을 명시해주면 된다.
// : {}를 통해서 Object Type임을 나타내고, 그 안에 내부 Paramter의 Type을 명시한다.
// Optional Type의 경우 Type 뒤에 ?를 표기하면 된다.
// 아래의 경우 age에 대한 데이터는 가지고 있지 않디면 Optional이기 때문에 에러는 발생하지 않는다.
const player : {
    name : string,
    age? : number
} = {
    name : "nico"
}

// player.age가 undefined 값일 수도 있다는 것을 TypeScript가 감지하고 
// 산술 비교를 통한 IF의 조건으로 사용할 수 없도록 에러를 발생시키며 작동을 막는다.
if(player.age < 10) { }
// player.age가 undefined가 아닌, 값이 존재하고 있다는 전제 조건을 and 조건으로 달아주었기 때문에
// 아래 코드는 에러 없이 정상 작동한다. 
if(player.age && player.age < 10) { }

/** Type Alias */
const player01 : { name : string, age? : number} = {
    name : "nico"
}
const player02 : { name : string, age? : number} = {
    name : "Hello", age : 25
}
// 동일한 Parameter 구조를 가지고 있는 여러 변수를 생성하고 싶을 경우 별칭을 사용해서 
// 불필요한 코드 반복을 줄일 수 있다.

// Alias는 이름 첫 글자를 대문자로 작성해야 한다.
type Player = { name : string, age?:number }

// 해당 별칭을 변수의 Type으로서 명시해주면 명시한 Type의 구조를 갖는 변수를 생성할 수 있게 된다.
const player03: Player = {
    name : "Park", age : 50
}
// Type Alias는 Object에만 국한되지 않으며 Alias 내부에 다시 Alias를 사용하는 것도 가능하다.
type Age = number;
type Player_2 = { name : string, age? : Age }

const player04 : Player_2 = {
    name : "Kim", age : undefined
}

/** Parameter Type _ Function */
// const, let 등 변수의 Type 지정 뿐만 아니라 Function의 Return 값에 대한 Type 지정도 가능하다.
// Parameter의 Type 지정도 변수에서의 예와 마찬가지로 :+Type으로 명시하면 된다.
function playerMaker(name : string) {
    return {
        name : name,

    }
}
// Parameter 형식이 맞지 않은 testPlayer01,02는 에러가 발생하며 실행되지 않는다.
const testPlayer01 = playerMaker(2)
const testPlayer02 = playerMaker()
const testPlayer03 = playerMaker("KIM")

/** Return Type _ Function */
// Return Type에 대한 지정은 ()뒤에 사용할 Type을 명시하면 된다.
function playerMaker02(name : string) : Player {
    return {
        name
    }
}

const testPlayer04 = playerMaker02("Park");
//type Player 구조를 가지고 있기 때문에 age 또한 정상적으로 데이터로써 인식한다.
testPlayer04.age = 25;

//Arrow Function의 경우 동일하게 () 뒤에 Type을 명시하는 방식으로 사용한다.
const playerMaker03 = (name : string) : Player => ({name : name});
const testPlayer05 = playerMaker03("John")
testPlayer05.age = 40
