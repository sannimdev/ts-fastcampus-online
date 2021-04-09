interface User {
    name: string;
}

interface Action {
    do(): void;
}

/* intersection */
function createUserAction(u: User, a: Action): User & Action {
    return { ...u, ...a };
}

const u = createUserAction({ name: 'Jay' }, { do() {} });

// function compare(x: string, y: string)
// function compare(x: number, y: number)
function compare(x: string | number, y: string | number) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x === y ? 0 : x > y ? 1 : -1;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.localeCompare(y);
    }
    throw Error('not supported type');
}

const v = compare(1, 2);
// const w = compare('a', 2);
const x = compare('a', 'b');
console.log(v, x);
console.log([3, 2, 1].sort(compare));
console.log(['c', 'b', 'a'].sort(compare));

function isAction(v: User | Action): v is Action {
    // 타입가드 만들기
    return (<Action>v).do !== undefined;
}

function process(v: User | Action) {
    // if ((<Action>v).do) {
    //     (<Action>v).do(); // um...🙄
    // }
    if (isAction(v)) {
        v.do();
    } else {
        console.log(v.name);
    }
}
