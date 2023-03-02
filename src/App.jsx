import React from 'react'
import Header from './component/header/header'
import Nav from './component/nav/nav'
import About from './component/form/form'

import Services from './component/Upbookings/upbookings'
import Portfolio from './component/Roomtype/roomtype'

const App = () => {
  return (
    <>
    <Header />
      <Portfolio/>
      
       <Nav/>
       <About/>
       {/* <Experience/> */}
       

        <Services/>
       

    </>
  )
}

export default App