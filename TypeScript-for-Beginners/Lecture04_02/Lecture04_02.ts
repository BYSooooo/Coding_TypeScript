/** Interfaces  */

/** Part 01 */
// 기존에 사용했던 Type을 활용하면 다음과 같다. 
// 이 방식을 정리하면 Object의 Property 구조를 미리 설정하는데 Type을 사용했다고 정리할 수 있다.
type Player01 = {
    nickName : string,
    healthBar : number
}
const player01 : Player01 = {
    nickName : "nick01", healthBar : 10
}

// Object 구조를 규정하는 것 이외에도 Type Alias 방식으로 사용할 수 있다.
// Concrete Type 그 자체로 선언한 후 Type 명시를 통해 적용 가능하다.
type Food01 = string
// 아래 코드의 경우 const kimchi : string 구조와 똑같은 의미라고 볼 수 있다.
const kimchi :Food01 = "delicious"

/** Part 02 */
// Type을 통해 Property로 들어오는 Type과 값을 제한할 수도 있다.
// Team02의 경우 string Type "red", "blue", "yellow" 중 하나의 값만 들어올 수 있다.
type Team02 = "red" | "blue" | "yellow"
// HealthBar02의 경우 number Type의 1,5, 10 값만 들어올 수 있다.
type HealthBar02 = 1 | 5 | 10

type Player02 = {
    nickName : string
    team : Team02
    healthBar : HealthBar02
}

// player02의 경우 team은 위에서 설정한 3개의 값중 하나가 아니기 때문에 에러가 발생하며
// healthBar는 Type과 값 모두 일치하지 않기 때문에 에러가 발생한다.
const player02 : Player02 = {
    nickName: "player 02",
    team : "Green",
    healthBar : "10"
}
// Type 정의 시 설정한 조건을 충족하는 player02_01의 경우 정상 작동 한다.
const player02_01 : Player02 = {
    nickName: "player 02",
    team : "red",
    healthBar : 10
}

/** Part 3 */
// Type의 사용에 대해 정리하면 아래와 같다.
// Type Alias를 통한 Concrete Type 지정
type NickName = string
// 특정 Contrete Type 내에서 들어오는 값에 대한 범위 지정
type Team03 = "red" | "blue" | "yellow"
type HealthBar03 = 1 | 5 | 10
// Object 구조에서 내부 Property의 Type 설정
type Player03 = {
    nickName : NickName
    team : Team03
    healthBar : HealthBar03
}
// Interface의 경우 Object 내부 Property의 Type을 미리 지정하는 점에서 Type과 유사하다.
// 그러나 Type의 경우 위의 경우 처럼 다양한 용도로 사용할 수 있으나 Interface의 경우 오직 Object구조를 미리 짜는 용도로만 사용할 수 있다.
// 아래 Player03_01의 경우 type을 interface로 바꾸고 "="을 삭제한 것을 제외하고 위 Player03과 동일하다.
interface Player03_01 {
    nickName : NickName
    team : Team03
    healthBar : HealthBar03
}
// type 자리에 interface를 적용해도 그대로 작동한다.
const player03_01 : Player03_01 = {
    nickName: "player 02",
    team : "red",
    healthBar : 10
}

/** Part 04 */
interface User04 {
    name : string
}
// Interface는 그 구조와 사용법이 Class와 유사하다.
// 아래처럼 string Type name을 가진 User04 Interface를 Player04가 상속받도록 할 수 있다.
interface Player04 extends User04 {
}
// User04에서 지정한 name Property를 player04에서도 사용할 수 있다.
const player04 : Player04 = {
    name : "Player Name 01"
}

/** Part 05 */
// Inteface는 동일한 이름을 사용함으로써 구조를 쌓아나갈 수 있다.
interface User05 {
    name : string
}

interface User05 {
    nickName : string
}

interface User05 {
    healthBar : number
}
// User05는 위에서 각각 3번 선언되었으며 선언할 때마다 각기 다른 Property 구조를 갖도록 설계했다.
// const user05는 User05로 명시되었는데 위에서 따로 선언한 Property 구조가 합쳐진 형태로 
// 전부 사용할 수 있는 구조로 되어 있다.
const user05 : User05 = {
    name : "User",
    nickName : "NickName",
    healthBar : 10
}
// 반면 Type의 경우 동일한 이름으로 중복해서 사용할 경우 duplicate Error가 발생하며 작동하지 않는다.
type User06 = {
    name : string
}
type User06 = {
    nickName : string
}