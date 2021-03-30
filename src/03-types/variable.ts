var score1 = 0;
let score2 = 200;
const defaultScore = 0;

function outer() {
    // var score = 1;

    if (true) {
        var score = 11; // var는 if 블록 안뿐만 아니라 outer scope 안에서 사용 가능하다.

        let letScore = 11; // let 키워드는 블록 안에서만 유효하다. 즉, if문 블록 밖에서는 접근할 수 없다.
        let letScoreAny; // 어떠한 타입(any)도 값으로 받을 수 있는 상태이다.
        letScoreAny = 333;
        let letScoreNumber: number; // 타입 어노테이션(annotation) 지정한 경우
        // letScoreNumber = 'a'; // 불가능
        letScoreNumber = 222;

        const lockedScore = 1; // 상수는 한 번 정해지면 변하지 않는다.  (따라서 선언과 동시에 값을 할당해야 한다.)
        // lockedScore = 333; // 상수인데 어떻게 다시 값을 할당해...
    }

    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i); // 😅 의도한 값은 0, 1, 2였겠지만 JS가 그렇게 호락호락하지 않다. (3, 3, 3)
        }, 100);
    }

    for (let z = 0; z < 3; z++) {
        setTimeout(function () {
            // for문 안에서 블록 단위의 scope를 가지므로 순회될 때마다 각각의 다른 공간을 가진다.
            console.log(z); //순회될 때마다 각각의 다른 공간에 할당됨 (0, 1, 2)
        }, 100);
    }

    function inner() {
        // 변수가 inner scope에서 사용되지 않아서 IDE에서 사용되지 않은 변수로 뜬다.
        var score = 0;
    }
    // inner 함수 안에 있는 값인 score에 접근할 수 없다.
    inner();
    console.log(score /* outer scope에 선언된 score이다. */);
}

outer();
