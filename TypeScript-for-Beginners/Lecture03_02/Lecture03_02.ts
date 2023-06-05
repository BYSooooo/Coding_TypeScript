/**Polymorphism */
// Poly(Many) + Morphis (structure)의 합성어로 유동적으로 다양한 구조로 변화하는 특성을 의미한다.

// number[]를 Parameter로 받는 Call Signature가 있다고 가정하자.
type SuperPrint = {
    (arr: number[]) : void
}
// superPrint는 SuperPrint Type으로 명시했다.
// 이 함수는 Parameter로 number[]를 받아서 하나씩 console에 출력하게 된다.
const superPrint : SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

// 만약 SuperPrint에 Boolean Type의 값이 들어올 수도 있다고 한다면 다음과 같이 변경해야 한다.
type SuperPrint02 = {
    (arr: number[]) : void
    (arr: boolean[]) : void

}
const superPrint02 : SuperPrint02 = (arr) => {
    arr.forEach(i => console.log(i))
}
// 아래와 같이 number[], boolean[]의 Parameter를 받아도 정상작동하게 된다.
superPrint02([1,2,3,4,5])
superPrint02([false, true, false])

// 이제 기존 SuperPrint에 number[], boolean[]에 더해 string[] Type도 들어올 수 있다고 한다면
// 다음과 같이 또 변경해줘야 한다.
type SuperPrint03 = {
    (arr: number[]) : void
    (arr: boolean[]) : void
    (arr : string[]) : void

}
const superPrint03 : SuperPrint03 = (arr) => {
    arr.forEach(i => console.log(i))
}
superPrint03([1,2,3,4,5])
superPrint03([false, true, false])
superPrint03(["a", "b", "c"])
// 위와 같은 로직으로 구성하면 정상적으로 작동은 하나, 이 과정이 계속 반복될 경우
// 코드가 반복되며 복잡해지고 가독성이 떨어지게 된다.
// 이처럼 다양한 Type을 갖는 경우에 효율적으로 대응해야 하는 상황에서 Generic Type을 사용한다.

/** Generic Type */
// Generic Type은 지금까지 사용한 number, string, booelan, unknown 등 고정적인 Type(=concrete Type)이 아닌
// 유동적으로 변경될 수 있는 Type을 의미한다.
// 어떤 Type이 Call Signature로 들어올지 확실하지 않은 경우 Generic Type을 사용한다.

//위의 type SuperPrint이 다양한 Type에 대응하도록 하기 위해 Generic Type을 사용하면 다음과 같다.
type SuperPrint04 = {
    // Generic Type은 < >를 사용해 Call Signature앞에 붙이며 내부의 이름은 임의로 정할 수 있다.
    // 일반적으로는 <T>, <V> 등으로 사용한다.
    <TypePlaceholder>(arr: TypePlaceholder[]): void   
}
const superPrint04 : SuperPrint04 = (arr) => {
    arr.forEach(i => console.log(i))
}

// 아래와 같이 다양한 Type으로 Parameter가 들어와도 Generic Type으로 지정하면
// 각각의 Type을 다 Call Signature로 대응하지 않아도 TypeScript가 알아서 Type을 추론하게 된다.
superPrint04([1,2,3,4,5])
superPrint04([false, true, false])
superPrint04(["a", "b", "c"])
superPrint04([false, "1", 5,4])

// 이제 Parameter로 들어온 Array의 첫 번째 Index의 Value를 반환하는 Call Signature이 필요한 경우를 가정한다.
type SuperPrint05 = {
    // Return Type은 Parameter로 들어온 Array의 첫 번째 Index가 되는데 
    // Array의 Element Type은 Generic Type인 Potato로써 유동적으로 변경될 것이다.
    // 따라서 Return Type 또한 유동적으로 변하게 될 Potato가 된다.
    <Potato>(arr: Potato[]): Potato
}
// Paremeter arr을 받아서 arr의 첫 번째 Index 값을 돌려준다.
const superPrint05 : SuperPrint05 = (arr) => arr[0];

// const a의 Type은 number가 된다.
const a = superPrint05([1,2,3,4,5]) 
// const b의 Type은 boolean이 된다.
const b = superPrint05([true, false, true])
const c = superPrint05(["a", "b", "c"])
// Parameter의 Type이 (number | boolean | string)[] 형태이기 때문에 
// const d의 Type은 (number | boolean | string)가 된다.
const d = superPrint05([1, 2, true, false, "Hello"])