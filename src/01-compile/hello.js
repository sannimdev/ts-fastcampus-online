/* es5의 호환을 위해 let으로 선언한 변수는 var로 선언된 것을 확인할 수 있다. */
var hello = 'hello';
var hello2 = 'hello2';
// 무사히 컴파일이 된 모습이다.
var timeoutPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('1 sec');
    }, 1000);
});
timeoutPromise.then(console.log);
