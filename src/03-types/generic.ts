function createPromise<T /*타입의 파라미터, 타입 변수라고도 함.*/>(x: T, timeout: number) {
    return new Promise<T>((resolve /*: (v: T) => void*/, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeout);
    });
}

createPromise(1, 100).then((v) => console.log(v));
createPromise('abcd', 100).then((v) => console.log(v));
createPromise({}, 100).then((v) => console.log(v));

function createTuple2<T, U>(v: T, v2: U): [T, U] {
    return [v, v2];
}
function createTuple3<T, U, V>(v: T, v2: U, v3: V): [T, U, V] {
    return [v, v2, v3];
}
const t1 = createTuple2('user1', 1000);
