import React, { useState } from 'react';
import { MyButton } from './component';
import './App.css';
          
function App() {

  /**
 * Now that you've declared `MyButton`, you can nest
 * it into another component
 */

  return (
    <>
      <h1>Welcome to my app</h1>
      <MyButton />
    </>
  )
}

export default App
