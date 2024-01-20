import { useState } from 'react'
import RandomBG from './assets/colors/AppBg'
import './App.css'
import QuoteBox from './components/QuoteBox'

function App() {
  
  
  return (
    <div id="App" style={RandomBG()}>
      <QuoteBox />
    </div>
  )
}

export default App
