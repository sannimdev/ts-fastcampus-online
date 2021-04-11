// 📢 2회독 때 주의깊게 다시 들어보기

interface Props {
    // 인덱스 타입
    /* 
        키는 문자열(string)로 오게 되고 대응이 되는 타입은 string이다.
        다만, 인덱스에 해당하는 key 타입은 string이나 number type만 가능하다.
    */
    [key: string]: string;
    /* 다른 키도 존재해도 좋으나 일단 name이라는 키와 그에 해당하는 값은 string 형태로서 존재해야 한다는 것을 명시 */
    name: string;
}

const p: Props = {
    /* key가 number로 제약이 걸리면 문자열로는 정의가 불가능하다. */
    a: 'd',
    b: 'e',
    c: '3',
    /* key가 string으로 제약이 걸린 상태이지만, number도 정의가 가능하다.  */
    0: 'd',
    1: 'b',
    /* name이라는 타입이 존재 */
    name: 'John',
};

let keys: keyof Props; // keys는 string|number 타입이 된다

interface User {
    name: string;
    age: number;
    hello(msg: string): void;
}

let keysOfUser: keyof User;
keysOfUser = 'age'; // age | hello | name

let helloMethod: User['hello']; // 특정 타입을 가져올 수 있음.
helloMethod = function (msg: string) {};
