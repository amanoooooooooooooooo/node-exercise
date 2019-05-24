

function main () {
    "use strict";

    function factorial2 (n, total = 1) {
        if (n === 1) return total;
        console.log(arguments)
        // console.log('callee', arguments.callee)
        // console.log('caller', arguments.callee.caller)
        // console.trace()
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
        // if (n === 2) debugger
        return factorial2(n - 1, n * total);
    }

    factorial2(50)
}
main()