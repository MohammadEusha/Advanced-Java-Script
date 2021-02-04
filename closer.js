function StopWatch() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}
const clock1 = StopWatch()
console.log(clock1);
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = StopWatch()
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock1());