/** "lib" */
// 
// 하단에 작성한 document, localStroage, window가
// Browser Enviroment 환경에서 사용하는 JavaScript API라는 것을 TypeScript가 인지하도록 하기 위해선
// tsconfig.json의 "lib" 부분에서 "DOM" 환경임을 표기해주어야 한다.
// 만약 "DOM"이 빠져 있다면 아래의 document, localStroage, window는 Any Type으로 지정된다.

// "lib" : ["ES6", "DOM"]
document // : Document
localStorage // : Storage
window // : Window & typeof globalThis

// "lib" : ["ES6"]
document // : any
localStorage // :any
window // : any
