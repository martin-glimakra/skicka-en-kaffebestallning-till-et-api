import React from 'react'
import { useState } from 'react'
import Form from './components/Form'
import Order from './components/Order'
export default function App() {
    
const [firstName, setFirstName] = useState('')
const [cups, setCups] = useState(1)
const [error, setError] = useState(null)
const [step, setStep] = useState('form')


const handleCupChanges = (event) => {
    if(event.target.value > 0){
            setCups(event.target.value)
            setError(null)
    }
    else {
        setError('du måste beställa minst en kopp kaffe')
        setCups(0)
    }
}

  if(step === 'form'){
  return( 
    <Form 
      firstName={firstName} 
      setFirstName={setFirstName} 
      cups={cups} 
      setCups={setCups}
      handleCupChanges={handleCupChanges}
      error={error}
      setError={setError}
      setStep={setStep}
    /> 
  )
} else if (step === 'order'){
return(
    <Order
      firstName={firstName}
      cups={cups}
    />
  )
}
}