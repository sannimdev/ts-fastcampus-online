export interface Hello {
    text: string;
}

export const user = {
    name: 'user1',
};

export class A /* export default의 경우 class의 이름이 의미가 없어진다 */ {
    /* 단, default로는 하나만 내보낼 수 있음. */
    a() {}
}

type d = Hello & { hi(): void };

export default d;
