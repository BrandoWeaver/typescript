import React from 'react'

function Child1({name,age,gender}) {
  return (
    <div >
        <h2>Child1 Info:</h2>
        <p>Name: {name.name}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
    </div>
    
  )
}

export default Child1