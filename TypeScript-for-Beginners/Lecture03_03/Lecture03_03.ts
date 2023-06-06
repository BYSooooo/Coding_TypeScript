/** Generic Type Re-Cap */
// Generic Type에 대해 정리한다.

// 일반적으로 Call Signature를 통해 Parameter의 Type과 return Type에 대해 정의할 수 있다.
// SapmleType은 number[] 형태로 받아서 number Type을 Return 하는 Call Signature를 가지고 있다.
type SampleType = {
    (param : number[]) : number
}

const sampleFunc : SampleType = (data) => data[0]
// number[]를 가지고 있는 a는 정상 작동한다.
const a = sampleFunc([1,2,3,4]);

//만약 Parameter의 Type이 number[]이외의 다른 Type으로 들어올 경우엔 아래와 같이 계속 추가해줘야 한다.
type SampleType02 = {
    (param : number[]) : number
    (param: string[]) : string
    (param : string|number[]) : string|number[]
}
// 이처럼 Type의 형태가 추가될 때마다 계속 반복해서 추가하는 것도 경우의 수가 많아지면 현실적으로 불가능해진다.
// 만약 들어오는 Parameter Type을 알 수 없을 경우엔 이 처럼 미리 Call Signature를 작성할 수 없다.

// 이럴 경우 Generic Type을 사용하면 Parameter에 맞춰 자동으로 추론한 결과를 Type으로 명시할 수 있다.
// 먼저 Generic Type이라는 것을 < >를 앞에 표기해서 정의하고 
// Call Signature에서 Type으로써 명시해줌으로써 사용할 수 있다.
type SampleType03 = <T>(data: T[]) => T

const sampleFunc03: SampleType03 = (data) => data[0]

//아래 처럼 다양한 형태의 Type을 가진 Parameter가 들어와도 추론을 통해 대응할 수 있게 된다.
const b = sampleFunc03([1,2,3,4])
const c = sampleFunc03(["a","b","c"])
const d = sampleFunc03([false, "a", 1, null])

// 다양한 Type에 대응한다는 점에서 any Type과 유사할 수도 있으나
// any Type의 경우 type이 any 하나로 고정된다.
type SampleType04 = (data : any[]) => any
const sampleFunc04: SampleType04 = (data) => data[0]

// const e, f는 전부 any type이 된다.
// 일단 코드상으로는 문제가 없으며 아래의 경우도 에러는 발생하지 않는다.
const e = sampleFunc04(["1",1, true])
const f = sampleFunc04([false, 25, "Hello"])

// string Type에만 적용되는 toUpperCase()를 사용했을 경우, f는 any Type이기 때문에 코드상으로는 문제가 없어 에러가 발생하지 않는다.
// 그러나 실행 시 Error가 발생하게 된다. sampleFunc04를 거쳐 반환되는 값은 boolean인 false이기 때문이다.
f.toUpperCase()
// Generic Type을 사용한 d의 경우 에러가 발생한다.
// d의 Type은 (string | number | boolean | null) 이기 때문에
// string에만 적용되는 toUpperCase()를 사용하기 위해서는 typeof 조건 등으로 string 일때만 실행되도록 해야 한다.
// 따라서 any를 사용했을 때와 달리 코드 상으로도 문제를 확인하고 대처할 수 있다.
d.toUpperCase()

//Generic Type을 사용하기 위해서는 < >로 정의하고 내부에서 명시해서 사용한다.
type SampleType05 = <T>(data : T[]) => T

// 만약 복수의 Generic Type을 사용하고 싶다면 < >에 ,로 구분해서 추가하고
// 적용할 부분에서 Type을 명시해주면 된다.
type SampleType06 = <T,V> (data01 : T[], data02 : V[]) => T
const sampleFunc06: SampleType06 = (data) => data[0]

// const g의 경우 하나의 Argument만 사용했기 때문에 에러가 발생한다.
const g = sampleFunc06([1,"hello", false]);
// const h의 경우 2개의 Argument가 있어 정상 작동한다.
// 각각의 Argument는 내부 Element의 Type에 맞춰 유동적으로 Type을 갖게 된다.
const h = sampleFunc06([1,"false", false], 
                        ["hello", 230, true])
