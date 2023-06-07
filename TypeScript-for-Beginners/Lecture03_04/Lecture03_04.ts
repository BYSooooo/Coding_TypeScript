/** Conclusions */
// Generic Type의 실제 사용에 대해 좀더 알아본다.

// 지금까지 Call Signature에 Generic을 사용했을 때 다음과 같은 구조로 작성했었다.
type SuperPrint = <T>(a:T[]) => T
const superPrint: SuperPrint = (a) => a[0]

// 일반적으로 Call Signature를 직접 생성해서 적용하는 경우보다는 다른 Package나 Library를
// 사용할 때 그 안에 담겨 있는 Call Signature를 사용하는 경우가 대부분이다.
// 실제 많이 접하는 경우 중 하나로 Function 단계에서 위의 과정을 한 단계로 줄여서 구현하면 다음과 같다.
function superPrint01<T>(a: T[]) {
    // Argument a의 Type을 Generic으로써 앞에서 정의하고 내부에서 명시한다.
    // 그 후 superPrint와 같이 return 값으로 a의 첫 번째 index 값을 반환한다. 
    return a[0]
}

// const a의 경우 정상적으로 작동하는 것을 확인할 수 있다.
const a = superPrint01([false,"123", 123])

// 보통 TypeScript가 알아서 Type을 추론하도록 두는 것이 좋지만
// 구체적으로 Generic 위치에 들어갈 Type을 명시해야 할 필요성이 있을 경우엔 다음과 같이 할 수 있다.
const b = superPrint01<number>([132, 24, 23])
// const b_1의 경우 Generic 위치에 boolean Type이 들어가도록 명시했기 때문에
// number[] 형태의 Argument는 들어갈 수 없으며 에러가 발생한다.
const b_1 = superPrint01<boolean>([132,24,23])

// Generic을 통해 다양한 Type에 대응할 수 있다.
type Player<Extra> = {
    name : string
    //extraInfo 라는 Property의 경우 Generic으로 설정했다.
    extraInfo : Extra
}

// string Type의 favFood라는 Property를 갖는 Object Type으로 Generic이 구성되도록 했다.
// 이 경우 <Extra> = {favFood : string}이 된다.
const player01 : Player<{favFood : string}> = {
    name : "player01",
    // 해당 구조에 맞춰 작성하면 에러 없이 작동한다.
    extraInfo : {
        favFood : "Kimchi"
    }
}

// 만약 Generic에 들어갈 Type의 구조가 복잡해지거나 별도로 분리해서 관리하고 싶을 경우
// 아래와 같이 따로 선언 후 명시할 수도 있다.
type Player02Extra = {
    favFood : string
}
// Player<Player02Extra> = Player<{favFood : string}>가 된다.
type CustomPlayer = Player<Player02Extra>
const player02 : CustomPlayer = {
    name : "player02",
    extraInfo : {
        favFood : "Mandu"
    }
}

// 공통된 여러 Type을 가지고 있으며 그 안애 부분적으로 변화하는 Property 구조를 가진 경우
// Generic을 통해 하나의 Type으로 재사용 하면서 대응할 수 있게 된다.
type PlayerOrigin<E> = {
    name : string,
    extraInfo : E
}
// extend_01의 경우 extraInfo에 {hobby : string}이 들어가며 
const extend_01 : PlayerOrigin<{hobby : string}> = {
    name : "player 01",
    extraInfo : {
        hobby : "Running"
    }
}
// extended_02의 경우 extraInfo는 null이 된다.
const extended_02 : PlayerOrigin<null> = {
    name : "player 02",
    extraInfo : null
}
// PlayerOrigin이라는 하나의 Type에 Generic을 활용함으로써
// 일일히 새로운 type을 생성하지 않고도 여러 Type에 대응할 수 있게 되었다.

// Generic은 Function, Call Signature 이외에 다양한 부분에서 활용할 수 있는데
// 기본적으로 TypeScript의 Basic Type은 대부분 Generic으로 되어 있다.
// 아래의 Array의 경우 Interface Array<T> 가 기본 구조이며 <T> 자리에 number Type이 들어가면서
// number Type으로만 구성된 Array를 생성하게 된다.
type Sample = Array<number>

let sample : Sample = [1,2,3,4]