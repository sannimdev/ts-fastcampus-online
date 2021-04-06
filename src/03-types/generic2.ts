class LocalDB<T> {
    constructor(private localStorageKey: string) {}

    add(v: T) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(v));
    }

    get(): T {
        const v = localStorage.getItem(this.localStorageKey);
        return v ? JSON.parse(v) : null;
    }
}

interface User {
    name: string;
}

const userDb = new LocalDB<User>('user');
userDb.add({ name: 'jay' });
// userDb.add('hello'); // 'string' 형식의 인수는 'User' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
const userA = userDb.get();
userA.name;
