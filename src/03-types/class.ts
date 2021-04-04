interface User {
    name: string;
}

interface Product {
    id: string;
    price: number;
}

interface Store {
    [key: string]: Product;
}

class Cart {
    // TS에서는 body 안에 정의가 필요하다.
    /*
     접근제한자 
        - private(해당 클래스 내부에서만 접근)
        - protected: instance에서는 접근할 수 없으나 Cart라는 클래스를 상속받았을 때 해당 클래스에서는 접근할 수 있음.
        - public (혹은 생략한 경우에도 public으로 간주한다.)
    */
    protected user: User;
    store: Store;

    // ES6에서는 constructor를 통해서만 property를 정의할 수 있다.
    constructor(
        /*public 여기서 접근제한자를 정의해도 된다*/ user: User
        /*private store: object = {}*/
    ) {
        this.user = user;
        this.store = {} as Store;
    }

    put(id: string, product: Product) {
        this.store[id] = product;
    }

    get(id: string) {
        return this.store[id];
    }
}

class PromotionCart extends Cart {
    addPromotion() {
        this.user; // protected로 선언되어 있으면 접근할 수 있다.
    }
}

const cart2 = new PromotionCart({ name: 'tom' });
cart2.put; // => 상속받은 메서드도 다 사용할 수 있다.

// 두 개의 instance(Cart)는 모두 2개의 속성과 행위를 가진다.
const cartJohn = new Cart({ name: 'john' });
const cartJay = new Cart({ name: 'jay' });
