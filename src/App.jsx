import { useState } from 'react'
import './App.css';
import { CurrencyContext } from './Context/CurrencyContext';
import Routing from './Componenets/Routing/Routing';

function App() {

  const [currency, setCurrency] = useState('usd'); //we write usd this is a default curr

  return (
    <>
      <CurrencyContext.Provider value={{currency, setCurrency}}>
        <Routing />
      </CurrencyContext.Provider>
    </>
  )
}

export default App
