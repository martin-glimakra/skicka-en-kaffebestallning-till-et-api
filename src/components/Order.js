import React from 'react'

export default function Order({firstName, cups}) {
    
    const sendPostRequest = ({firstname, cups}) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            firstname: firstName,
            cups: cups
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
  return (
    <div>
        <h2>Information:</h2>
        <p>Ditt namn: {firstName} </p>
        <p>Hur mycket kaffe: {cups} </p>
        <button onClick={() => sendPostRequest({
            firstName: firstName,
            cups: cups
        })}>Skicka iväg till en databas någonstans</button>
    </div>
  )
}