import React from 'react'
import Form from './Form'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Update from './Update'

const App = () => {
  return (
    <>
    <h1>Fontent 😎</h1>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/update/:id' element={<Update/>} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App