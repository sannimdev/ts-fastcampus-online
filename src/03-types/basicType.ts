/* typescript는 다음과 같은 타입을 지원한다. */

// 자바스크립트의 기본자료형
let numValue: number;
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
let anyValue: any;

// 자바스크립트의 객체
let objValue: object;
let symbolValue: symbol; // ES6부터 선보인 symbol 타입

numValue = 3.5; // 숫자만 입력할 수 있고 문자로 입력하게 되면 오류를 발생시킨다.
stringValue = 'hello'; // 큰따옴표도 가능.
stringValue = `${numValue}`; // 템플릿 리터럴. expression을 사용할 수 있고 문자로 변환된다.
booleanValue = true; // true/false

undefinedValue = undefined; // 보통은.. 변수의 타입으로 undefined를 지정하지는 않는다...
undefinedValue = null; // 상호적으로 구분없이 할당할 수 있었다. 🙄 그러나 엄연히 다르다.
nullValue = undefined; // 와우..
numValue = undefined; // 모든 타입의 하위 타입으로는 undefined, null이 있으므로 지정할 수 있다.
anyValue = {}; // 모든 타입의 상위 타입은 any이므로 그 어떠한 유형도 지정할 수 있다.

// objValue = "33"; // 객체는 어떠한 형태로의 객체는 할당이 가능하다. 그러나 기본자료형 할당은 불가능하다.
objValue = {};
objValue = { name: 'jay' };
objValue = new String('hello'); // wrapper 타입에 관한 value값.
String('hello'); // 이게 바로 string wrapper에서 프린트하여 나온 값이다.
stringValue = String('haha');

symbolValue = Symbol(); // 심벌은 유니크한 값이다.
{
    symbolValue: 'hello'; // 심벌의 키로써 사용할 수 있다.
}

// 배열 타입([]) 정의하기

let nameList: string[];
nameList = ['영희', '철수', '길동'];
nameList.push('hello'); // 배열에 관해 어떠한 조작도 가능하지만 문자열만 삽입이 가능하다.

// 별도의 타입을 정의하지 않고  객체의 키와 그에 해당하는 유형을 인라인으로 정의하기
let user1: { name: string; score: number } = { name: 'gildong', score: 100 };
// 그러나 이러한 타입이 반복적으로 사용된다면 interface나 type으로 정의한다.

// 투플 사용하기 (배열의 원소가 2개 이상)
let tuple2: [number, string];
tuple2 = [100, 'gildong'];

let tuple3: [number, number, number];
tuple3 = [100, 80, 90];
