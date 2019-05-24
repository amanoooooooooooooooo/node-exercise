

function main () {
    // "use strict";

    // a = 2
    // console.log('a ', a)
    function factorial1 (n) {
        if (n === 1) return 1;
        console.log(arguments)
        console.log(factorial1.callee)
        console.log(factorial1.caller)
        // console.log('callee', arguments.callee)
        // console.log('caller', arguments.callee.caller)
        // console.trace()
        // const used = process.memoryUsage().heapUsed / 1024 / 1024;
        // console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
        // if (n === 2) debugger
        return n * factorial1(n - 1);
    }

    function factorial2 (n, total = 1) {
        if (n === 1) return total;
        console.log(arguments)
        // console.log('callee', arguments.callee)
        // console.log('caller', arguments.callee.caller)
        // console.trace()
        // const used = process.memoryUsage().heapUsed / 1024 / 1024;
        // console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
        // if (n === 2) debugger
        return factorial2(n - 1, n * total);
    }



    factorial1(10)
    // factorial2(10)
}
main()