import React from 'react'
import 'style/base.sass'
import Header from './components/Header'
import Hero from './components/Hero'
import Widget from './components/Widget'
import Actions from './components/Actions'
import Media from './components/Media'
import Start from './components/Start'
import Footer from './components/Footer'
import 'style/state.sass'

const App = () => {
 return (
  <div className='App'>
   <Header />
   <main>
    <Hero />
    <Widget />
    <Actions />
    <Media />
    <Start />
   </main>
   <Footer />
  </div>
 )
}

export default App
