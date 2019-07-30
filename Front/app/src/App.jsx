import React, { useState } from 'react'

const App = () => {
  const [clock, setClock] = useState("Pas d'horaire")

  const getClock = () => {
    fetch('http://localhost:5001/clock/get')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        return data
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="App">
      <h1>Clock</h1>
      <span>{clock}</span>
      <br /> <br />
      <button onClick={() => getClock()}>Get</button>
    </div>
  )
}

export default App
