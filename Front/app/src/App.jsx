import React, { useState } from 'react'

const App = () => {
  const [clock, setClock] = useState("Pas d'horaire")
  const getClock = () => {
    fetch('https://localhost:5001/clock/get')
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(data => {
        setClock(data)
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
