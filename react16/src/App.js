import React, { Suspense, useState, useEffect } from 'react'


import Redux from './Redux'
import Ref from './Ref'


const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));
// import OtherComponent from './OtherComponent'
// import AnotherComponent from './AnotherComponent'






function MyComponent () {

  const [a, setA] = useState(1)

  setTimeout(() => {
    setA(2)
  }, 1000);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>

      <Redux />
      <Ref a={a} />
    </div>
  )
}

function App () {
  return (
    <div className='App'>

      <MyComponent />

    </div>
  )
}

export default App
