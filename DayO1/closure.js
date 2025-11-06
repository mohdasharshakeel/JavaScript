function count() {
    let privateCounter = 0;
    return function () {
        privateCounter++;
        console.log(privateCounter)

    }

}

let counter = count();
counter();
counter();
counter();
