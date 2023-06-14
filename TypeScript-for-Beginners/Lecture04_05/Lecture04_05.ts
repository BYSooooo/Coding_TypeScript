/** Polymorhpism */
// 지금까지 배운 내용을 바탕으로 다형성을 활용해보자.
// 다형성을 응용해보기 위해 간단한 저장소 역할을 하는 Class와 Instance 생성을 해볼 것이다.

/** Part 01 */
// 저장공간의 형태를 지정하는 Class와 그 내부에서 실질적으로 저장 공간으로 활용될 object를 생성하고,
// 저장 공간으로 활용될 Object의 구조를 명시하는 Interface를 구현하는 것 부터 시작한다.

// 저장 공간을 담당할 Object는 string Type key와 해당 값에 대응하는 Value를 갖는 구조가 되게끔 Interface를 구현했다.
// 여기서 Generic <T> 를 정의하고 내부 Value 값을 해당 Generic의 Type이 되도록 했다.
// Generic은 가변적으로 변할 수 있기 때문에 Value Type 또한 <T>에 따라 유동적으로 변화할 것이다.
interface Storage_01<T> {
    [key:string]: T
}
// 저장소 역할을 Class와 실제 저장 공간으로서 값을 저장할 비어있는 Object stroage를 생성했다.
// LocalStroage01에서 정의한 Generic <T>는 private stroage의 Interface로 명시한 Stroage_01의 Generic <T>로 사용횔 것이다.
// LocalStroage01에서 정의한 Generic <T>는 최종적으로는 위의 [key:string] : T의 T가 되는 구조다.
class LocalStroage01<T> {
    private stroage: Storage_01<T> = {}
}

/** Part 02 */
// 이제 저장소 Class에 Method를 구현한다.
interface Storage_02<T> {
    [key:string]: T
}

class LocalStroage02<T> {
    private stroage: Storage_02<T> = {}
    // LocalStroage02<T>의 Generic <T>가 set에서 Argument로 받는 값 중 value의 Type 으로 명시될 것이다.
    // set은 stroage object에 key와 대응해서 value를 저장한다.
    set(key : string, value : T) {
        this.stroage[key] = value
    }
    // remove는 Argument로 받은 key를 기준으로 stroage Object에서 해당하는 값을 제거한다.
    remove(key : string) {
        delete this.stroage[key]
    }
    // get은 Argument로 받은 string Type key를 바탕으로 LocalStroage02에서 정의한 Generic <T>를 return Type으로 반환할 것이다.
    get(key : string): T {
        return this.stroage[key]
    }
    // clear는 stroage를 비어있는 Object로 재선언하며 값을 비우는 역할을 한다.
    clear() {
        this.stroage = {}
    }
}

// LocalStroage02를 통해 새로운 Instance를 생성했다.
// Generic <T>를 정의하는데 string Type으로 정의했다.
// 따라서 LocalStroage02 내부 stroage Object가 참조하는 Interface Stroage_02<T> 부분의 <T>도 string Type이 된다. 
const stringsStroage02 = new LocalStroage02<string>()
//get을 통해 Parameter로 전달할 경우 내부에서 반환하는 값은 Instance 생성시 지정한 <string>에 의해 string Type이 된다.
stringsStroage02.get("Hello")
// set은 key, value의 두개의 Argument를 요구하며 첫 번째 key는 string Type이 들어간다.
// value에 해당하는 두 번째 Argument는 set(key: string, value :T) 구조에서 T가 string Type이 들어가아 햔다. 
stringsStroage02.set("Key01", "")

// Generic을 boolean으로 했을 때도 위와 마찬가지 로직을 거친다.
const booleanStroage02 = new LocalStroage02<boolean>();
// get을 통해 key를 string Type으로 작성해야 하며,
// return Type은 역시 위의 로직을 따라 boolean Type이 된다.
booleanStroage02.get("XXX")
