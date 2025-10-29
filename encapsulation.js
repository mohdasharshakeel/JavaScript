function clickLimiter() {
  let click = 0;
  return function () {
    if (click < 5) {
      click++;
      console.log(`Button clicked ${click} times`);
    } else {
      console.log(`Limit reached`);
    }
  };
}

let limiter = clickLimiter();

limiter();
limiter();
limiter();
limiter();
limiter();
limiter();
