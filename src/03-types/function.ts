function add(x: number, y: number): /* 반환 타입을 명시할 수도 있음 */ number {
    return x + y;
}

// 숫자 타입이 아니면 인자로 보낼 수 없음.
// add(1,"2");
const result = add(1, 2);

function buildUserInfo(name = '홍길동', email = 'gildong@exmple.com') {
    return { name, email };
}

const user = buildUserInfo();

const add2 = (a: number, b: number): /*반환타입 명시도 가능 */ number => a + b; // 화살표 함수로 작성할 수도 있음.

// 함수의 오버로딩
interface Storage {
    a: string;
}
interface ColdStorage {
    b: string;
}
// 구현부 없음 (오버로드 시그니처)
function store(type: '통조림'): Storage;
function store(type: '아이스크림'): ColdStorage;
// 구현체 (함수 오버로딩)
function store(type: /* Union Type */ '통조림' | '아이스크림') {
    if (type === '통조림') {
        return { a: '통조림' };
    } else if (type === '아이스크림') {
        return { b: '아이스크림' };
    } else {
        throw new Error('Unsupported Type');
    }
}

const s = store('아이스크림');
console.log(s);
