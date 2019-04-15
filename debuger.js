global.x = 5

var a = 1
setTimeout(() => {
  a = 2
  debugger
  a = 3
  console.log('world')
}, 1000)
console.log('hello')

// node inspect debuger.js

// help
// cont, c               Resume execution
// next, n               Continue to next line in current file
// step, s               Step into, potentially entering a function
// out, o                Step out, leaving the current function
// backtrace, bt         Print the current backtrace
// list                  Print the source around the current line where execution
//                       is currently paused
