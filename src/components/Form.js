import React from 'react'

export default function Form({firstName, setFirstName, cups, handleCupChanges, error, setStep}) {
    //https://react-hook-form.com/
  return (
    <div>
        <input 
            value={firstName} 
            onChange={(event) => setFirstName(event.target.value)} 
            placeholder="First Name" 
        />
            <br />
            <span>Kaffe</span>
                <input 
                    type="number"
                    value={cups} 
                    onChange={handleCupChanges} 
                />
            {error && <p>{error}</p>}
            <br />
            <button disabled={error} onClick={() => setStep('order')} >Nästa steg</button>
    </div>
  )
}