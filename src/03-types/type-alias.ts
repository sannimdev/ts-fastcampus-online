interface User {
    name: string;
}

interface Action {
    do(): void;
}

type UserAction = User & Action;

function createUserAction(): UserAction {
    return {
        do() {},
        name: '',
    };
}

type StringOrNumber = string | number;
type Arr<T> = T[]; // 제네릭과의 결합도 가능하다.
type P<T> = Promise<T>;

type User2 = {
    name: string;
    login(): boolean;
};

class UserImpl implements User2 {
    // 인터페이스가 아닌데 인터페이스처럼 구현하는 식으로 작성할 수도 있다.
    name: string;
    login(): boolean {
        throw new Error('Method not implemented.');
    }
}

type UserState = 'PENDING' | 'APPROVED' | 'REJECTED';

function checkUser(user: User2): UserState {
    if (user.login()) {
        return 'APPROVED';
    } else {
        return 'REJECTED';
    }
}
