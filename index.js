(function () {
    (async () => {

        console.log('1');

        setTimeout(() => console.log('5'));

        await Promise.resolve();

        setTimeout(() => console.log('7'));

        console.log('4');

    })();

    setTimeout(() => console.log('6'));

    console.log('2');
}());

console.log('3');

