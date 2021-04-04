interface Person {
    name: string;
    say(message: string): void;
}

interface Programmer {
    writeCode(requirement: string): string;
}

// 추상 클래스
// 특정 필드만 구현하지 않는 형태
abstract class Korean implements Person {
    // 하위 타입에서 해당 속성을 가지도록 함.
    public abstract jumin: number;

    constructor(public name: string) {}

    say(msg: string) {
        console.log(msg);
    }

    // 다음에 상속받는 하위 클래스에서 정의하면 된다.
    abstract loveKimchi(): void;
}

class KoreanProgrammer extends Korean implements Programmer {
    constructor(public name: string, public jumin: number) {
        super(name); // 부모 클래스의 생성자를 호출해 준다.
    }
    say(message: string): void {
        console.log(message);
    }

    writeCode(requirement: string): string {
        console.log(requirement);
        return requirement + '...';
    }

    loveKimchi() {
        console.log('love kimchi 😍');
    }
}

// 추상클래스는 인스턴스를 만들 수 없다는 것에 유의하기

const gildong = new KoreanProgrammer('길동', 12345);
const gilsun = new KoreanProgrammer('길순', 12321);
