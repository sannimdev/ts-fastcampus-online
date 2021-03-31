interface TV {
    // 인터페이스는 구현하지 않고 어떠한 행위를 한다고 기술만 한다.
    turnOn(): boolean /* 반환형 */;
    turnOff(): void;
}

const myTV: TV = {
    turnOn() {
        return true;
    },
    turnOff() {},
};

function tryTurnOn(tv: TV) {
    tv.turnOn();
}
tryTurnOn(myTV);

/*  행위를 작성하지 않고 인터페이스가 가져야 할 속성만 작성한다.    */
interface Cell {
    row: number;
    col: number;
    piece?: Piece; // piece는 board의 해당 위치에 없을 수도 있다. (Optional 속성)
}

interface Piece {
    move(from: Cell, to: Cell): boolean;
}

function createBoard() {
    const cells: Cell[] = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
            cells.push({ row, col });
        }
    }
    return cells;
}

const board = createBoard();
board[0].piece = {
    move(from: Cell, to: Cell) {
        // 💬 구문 생략
        return true;
    },
};
