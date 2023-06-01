/** ReadOnly Type */
// readonly는 해당 데이터를 일기전용으로 만들어 변경할 수 없도록 만든다.
// 변경을 시도할 경우 TypeScript에서 에러를 표시하며 방지한다.
type Age = number;
type Name = string;
//해당 Property 앞에 표기해줌으로써 선언할 수 있다.
type Player = { readonly name : Name, age? : Age }

const playerMaker = (name : string) : Player => ({name});
const nico = playerMaker("nico")
// readonly Type의 값을 변경하려고 시도했기 때문에 아래 코드는 에러를 발생시키며 작동하지 않는다.
nico.name = "Las"

//readonly는 Property 뿐만 아니라 다른 요소에도 적용이 가능하다.
const numbers : readonly number[] = [1,2,3,4]
//push를 통해 readonly Type의 Array 값을 변경하려고 시도했으므로 에러가 발생한다.
numbers.push(1)

const names : readonly string[] = ["1","2"]
// map()과 같이 Array의 값을 변경하지 않는 Method의 경우 자유롭게 사용이 가능하다.
names.push("3")
names.map(name => console.log(name))

/** Tuple Type */
// Tuple은 여러개의 값을 가질 수 있는 순차적인 자료 구조를 의미한다.
// string, number, boolean Type의 Element를 가지고 있는 Array를 TypeScript를 통해
// 로직으로 생성하려고 하면 다음과 같다.
const sampleArray = ["A", 12, false];

// player_01의 경우 [string, number, boolean] 이라는 순서로 Type과 값을 갖는 Tuple구조이다.
// 하지만 값을 비어있는 Array로 선언했기 때문에 에러가 발생한다.
const player_01 : [string, number, boolean] = []
// player_02는 명시한 Type과 갯수를 맞춰 값을 지정했기 때문에 에러가 발생하지 않는다.
const player_02 : [string, number, boolean] = ["A", 1, true]
//Tuple로 지정한 Type을 벗어난 값을 설정하려고 한다면 에러가 발생한다.
//아래의 경우 string Type임에도 number 값을 지정하려고 했기 때문에 에러가 발생한다.
player_02[0] = 1

//Tuple과 readonly를 응용하면 다음과 같이 구성할 수 있다.
const player_03 : readonly [string, number, boolean] = ["B", 2, false]

// type이 같을지라도 readonly type이기 때문에 변경이 불가능하다.
// 이와 같은 방식을 통해 변경하지 말아야 할 데이터를 효과적으로 보호할 수 있다.
player_03[0] = "hi"

/** undefined, null Type */
// Javascript에서의 것과 동일한 성격을 갖는다.
let a : undefined = undefined
let b : null = null

/** any Type */
// 비어 있는 값을 넣을 경우 기본적으로 any Type으로 간주한다.
// Type 설정을 통한 데이터에 대한 검증이나 보호로부터 빠져나가려고 할 때 사용한다.
// array_01의 경우 비어있는 Array로 되어 있는데 Type에 대한 명시도 없기 때문에 Any로 간주한다.
const array_01 = [];

// Type 추론 이외에도 직접 Type을 명시함으로써 사용할 수 있다.
const array_02 : any[] = [1,2,3,4,5]
const array_03 : any = false
// any Type으로 지정할 경우 일반적인 javascript에서와 같이 Type을 통한 데이터 보호가 불가능해진다.
// 아래의 경우 Array와 Boolean의 합산임에도 에러가 발생하지 않는다.
array_02 + array_03