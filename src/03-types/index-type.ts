// ๐ข 2ํ๋ ๋ ์ฃผ์๊น๊ฒ ๋ค์ ๋ค์ด๋ณด๊ธฐ

interface Props {
    // ์ธ๋ฑ์ค ํ์
    /* 
        ํค๋ ๋ฌธ์์ด(string)๋ก ์ค๊ฒ ๋๊ณ  ๋์์ด ๋๋ ํ์์ string์ด๋ค.
        ๋ค๋ง, ์ธ๋ฑ์ค์ ํด๋นํ๋ key ํ์์ string์ด๋ number type๋ง ๊ฐ๋ฅํ๋ค.
    */
    [key: string]: string;
    /* ๋ค๋ฅธ ํค๋ ์กด์ฌํด๋ ์ข์ผ๋ ์ผ๋จ name์ด๋ผ๋ ํค์ ๊ทธ์ ํด๋นํ๋ ๊ฐ์ string ํํ๋ก์ ์กด์ฌํด์ผ ํ๋ค๋ ๊ฒ์ ๋ช์ */
    name: string;
}

const p: Props = {
    /* key๊ฐ number๋ก ์ ์ฝ์ด ๊ฑธ๋ฆฌ๋ฉด ๋ฌธ์์ด๋ก๋ ์ ์๊ฐ ๋ถ๊ฐ๋ฅํ๋ค. */
    a: 'd',
    b: 'e',
    c: '3',
    /* key๊ฐ string์ผ๋ก ์ ์ฝ์ด ๊ฑธ๋ฆฐ ์ํ์ด์ง๋ง, number๋ ์ ์๊ฐ ๊ฐ๋ฅํ๋ค.  */
    0: 'd',
    1: 'b',
    /* name์ด๋ผ๋ ํ์์ด ์กด์ฌ */
    name: 'John',
};

let keys: keyof Props; // keys๋ string|number ํ์์ด ๋๋ค

interface User {
    name: string;
    age: number;
    hello(msg: string): void;
}

let keysOfUser: keyof User;
keysOfUser = 'age'; // age | hello | name

let helloMethod: User['hello']; // ํน์  ํ์์ ๊ฐ์ ธ์ฌ ์ ์์.
helloMethod = function (msg: string) {};
