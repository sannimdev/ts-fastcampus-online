interface DB<T> {
    add(v: T): void;
    get(): T;
}

class D<T> implements DB<T> {
    add(v: T): void {
        throw new Error('Method not implemented.');
    }
    get(): T {
        throw new Error('Method not implemented.');
    }
}

interface JSONSerializer {
    serialize(): string;
}

// T는 JSONSerializer의 하위 타입이다.
class LocalDB<T extends JSONSerializer> implements DB<T> {
    constructor(private localStorageKey: string) {}

    add(v: T) {
        // T라는 제네릭 타입은 또 JSONSerializer를 상속받고 있으므로 serialize라는 메서드를 갖고 있음을 보장함.
        localStorage.setItem(this.localStorageKey, JSON.stringify(v.serialize()));
    }

    get(): T {
        const v = localStorage.getItem(this.localStorageKey);
        return v ? JSON.parse(v) : null;
    }
}

interface Vegetable {
    v: string;
}

interface Meat {
    m: string;
}

interface Cart2<T> {
    // T는 무조건 Vegitable이나 Meat의 하위 타입이어야 함. (ex: string은 T의 타입으로 쓰일 수 없음)
    getItem(): T extends Vegetable ? Vegetable : Meat;
}
const cart1: Cart2<Vegetable> = {
    getItem() {
        return {
            v: '',
        };
    },
};

cart1.getItem;
