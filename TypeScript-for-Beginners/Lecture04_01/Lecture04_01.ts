/** Recap */
// TypeScript의 Class를 활용해서 keyword를 입력해서 definition을 반환하는 Class를 만들어 본다.

// Java의 Map과 같이 key, value쌍의 구조를 가지고 있는 Type을 먼저 생성한다.
// 아래와 같은 구조는 Property의 이름은 모르나 Type은 알고 있을 경우 사용한다.
// Words01은 일종의 {key:string, value:string} 구조를 갖는 Type이 될 것이다.
type Words01 = {
    // [key: string]은 key 값이 string Type임을 의미하며
    // : string 은 value 값이 string Type임을 의미한다.
	[key : string] : string  
}
// 양쪽 모두 string Type이므로 test01은 정상 작동한다.
const test01 : Words01 = {
    "key01" : "value01",
    "key02" : "value02"
}
// 만약 key에 해당하는 값의 Type을 변경하고 싶다면 아래와 같이 변경하면 된다.
// Words02의 경우 key 역할을 하는 값은 number Type으로 명시했다.
// [] 내부 key에 대한 명칭은 정해진 것은 없으며 임의로 작성이 가능하다.
type Words02 = {
	[whataver : number] : string
}
// test02의 경우 Key에 해당하는 값이 string Type이므로 Words02의 구조와 맞지 않아 에러가 발생한다.
const test02 : Words02 = {
	"key01" : "value01",
	"key02" : "value02"
}
// test02_01의 경우 Key에 해당하는 값이 number Type이므로 정상 작동 한다.
const test02_01 : Words02 = {
    1 : "value01",
    2:  "value02"
}

/** Part 01 */
// string: string 구조의 Type을 생성한 후 이 Type을 활용해서 단어들을 저장할 Dict Class를 생성한다.
type Words03 = {
    [key: string] : string
}

// Dict03 Class는 내부에 {string Type key : string Type value} 형태를 갖는 private words를 가지고 있다.
// constructor를 통해서 해당 Class를 새롭게 호출했을 시 word를 비어있는 Object (= { })로 생성하도록 했다.
class Dict03 {
    private words : Words03
    constructor() {
        this.words = {}
    }
}
// Word03 Class는 생성자를 가지고 있으며 term, def 구조로 되어 있다.
class Word03 {
    constructor (
        public term : string,
        public def : string
    ) {}
}
// Word03(term, def) 구조에 맞춰 sting 값을 입력하면 에러 없이 작동한다.
const kimchi01 = new Word03("kimchi", "Korea Food");

/** Part 02 */
type Words04 = {
    [key: string] : string
}

// Dict 04 Class 내부에 값을 넣기 위한 add() Method를 새롭게 추가했다.
class Dict04 {
    // words는 key : value 형태를 갖고 있다.
    private words : Words04
    // 생성자를 통해 새로 호출될 경우 빈 Object를 생성하도록 했다.
    constructor() {
        this.words = {}
    }
    // add는 Words04의 형태 (= term, def 구조)를 가지고 있는 Argument를 받는다.
    add(word: Word04) {
        // 만약 words에 term이 없다면
        if(this.words[word.term] === undefined) {
            // term이 곧 def가 되도록 한다.
            // key, value 형태로 저장한다고 보면 된다.
            this.words[word.term] = word.def
        }
    }
}
class Word04 {
    constructor (
        public term : string,
        public def : string
    ) {}
}
const kimchi02 = new Word04("kimchi", "Korea Food");

/** Part 03 */
type Words05 = {
    [key: string] : string
}
class Dict05 {
    private words : Words05
    constructor() {
        this.words = {}
    }
    // 이부분에서 짚고 넘어가야 할 부분이 있는데
    // Argument의 Type을 명시하는데 class를 사용할 수 있다는 점이다.
    // 일반적인 string, number 등의 Type뿐만 아니라 구조를 갖춘 class 자체도 Type으로 활용할 수 있다는 점에 주목하자.
    add(word: Word05) {
        if(this.words[word.term] === undefined) {
            this.words[word.term] = word.def
        }
    }
    // key에 해당하는, 다시 말해 "kimchi"에 해당하는 term을 Arugment로 받는 def() Method를 생성했다.
    // add에서 저장 했을 시 word.term이 곧 word.def로 저장되게 했으므로 만약 words.term을 반환하게 된다면
    // 실제 반환 값은 word.def가 될 것이다.
    // words는 private 로써 Class 내부에서만 접근할 수 있다는 점을 참고하자.
    def(term: string) {
        return this.words[term]
    }
}

class Word05 {
    constructor (
        public term : string,
        public def : string
    ) {}
}
const kimchi03 = new Word05("kimchi", "Korea Food");
// 새로운 Dict05를 생성했다.
// constructor를 통해 Dict05 내부의 private words는 key : value 구조를 갖춘 비어있는 Object가 될 것이다.
const dict = new Dict05()
// add()를 통해서 term, def 구조를 갖춘 const kimchi03을 전달한다.
// add()를 통해서 words 내부에 term에 해당하는 값이 없다면 def로 저장할 것이다.
dict.add(kimchi03);
// def()룰 통해서 term을 전달했다.
// return 으로 term을 반환하나 term의 경우 def로 치환되어 저장되어 있기 때문에 반환되는 값은 "Korea Food"가 된다.
dict.def("kimchi")