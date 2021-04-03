/*열거형*/

enum StarbucksGrade {
    // 직접 숫자를 할당하는 것이 안전하다. (왜냐하면 중간에 요소가 삽입돼 버리면 수치가 바뀌기 때문에 주의해야 한다.)
    WELCOME, // = 0 또는 "WELCOME"
    GREEN, // = 1 또는 "GREEN"
    GOLD, // = 2 또는 "GOLD"
}

function getDiscount(v: StarbucksGrade): number {
    switch (v) {
        case StarbucksGrade.WELCOME:
            return 0;
        case StarbucksGrade.GREEN:
            return 5;
        case StarbucksGrade.GOLD:
            return 10;
    }
}

console.log(getDiscount(StarbucksGrade.GREEN));
console.log(getDiscount(StarbucksGrade.GREEN));
console.log(StarbucksGrade);

// StarbucksGrade를 출력했을 때는 다음과 같이 객체로 구성된다.
const starbucksGrade = {
    '0': 'WELCOME',
    '1': 'GREEN',
    '2': 'GOLD',
    WELCOME: 0,
    GREEN: 1,
    GOLD: 2,
};

/**
=> JS로 컴파일되었을 때 출력되는 코드
var StarbucksGrade;
(function (StarbucksGrade) {
    StarbucksGrade[StarbucksGrade["WELCOME"] = 0] = "WELCOME";
    StarbucksGrade[StarbucksGrade["GREEN"] = 1] = "GREEN";
    StarbucksGrade[StarbucksGrade["GOLD"] = 2] = "GOLD";
})(StarbucksGrade || (StarbucksGrade = {}));
function getDiscount(v) {
    switch (v) {
        case StarbucksGrade.WELCOME:
            return 0;
        case StarbucksGrade.GREEN:
            return 5;
        case StarbucksGrade.GOLD:
            return 10;
    }
}
console.log(getDiscount(StarbucksGrade.GREEN));
console.log(getDiscount(StarbucksGrade.GREEN));
console.log(StarbucksGrade);
//# sourceMappingURL=enum.js.map
 */
