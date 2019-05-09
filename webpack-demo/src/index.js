// import _ from 'lodash'

// function component () {
//   var element = document.createElement('div')

//   // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ')

//   return element
// }

// document.body.appendChild(component())

import { cube } from './math.js'
import net from 'net'
import fs from 'fs'
import Buffer from 'Buffer'
import path from 'path'

console.log('net is ', net)
console.log('fs is ', fs)
console.log('Buffer is ', Buffer)
console.log('path is ', path)

function component () {
  var element = document.createElement('pre')

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n')

  return element
}
document.body.appendChild(component())
