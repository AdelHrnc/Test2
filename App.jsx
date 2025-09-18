import React, { useState } from 'react'
import './index.css'

export default function App() {
  const [screen, setScreen] = useState('home')

  const Back = () => (
    <div style={{ marginTop: 18 }}>
      <button className="btn small" onClick={() => setScreen('home')}>← Back</button>
    </div>
  )

  if (screen === 'home') {
    return (
      <div className="container">
        <h1 className="title">CSTDRC Framework</h1>
        <p className="subtitle">Creative Support Technology Design Recommendations for
Children (CSTDRC) Framework</p>

        <div className="button-row">
          <button className="btn large blue" onClick={() => setScreen('cognitive')}>Cognitive</button>
          <button className="btn large purple" onClick={() => setScreen('socio')}>Socio-Emotional</button>
          <button className="btn large orange" onClick={() => setScreen('physical')}>Physical</button>
        </div>
      </div>
    )
  }

  if (screen === 'cognitive') {
    return (
      <div className="container cognitive">
        <h2>Cognitive</h2>

        <div className="card-row">
          <button className="card" onClick={() => setScreen('idea')}>
            <h3>Enabling Idea Generation</h3>
            <p>Tools and prompts to help kids generate ideas.</p>
          </button>

          <button className="card" onClick={() => setScreen('execute')}>
            <h3>Structure and Executing Ideas</h3>
            <p>Support to structure, plan, and execute an idea.</p>
          </button>
        </div>

        <Back />
      </div>
    )
  }

  if (screen === 'idea') {
    return (
      <div className="container">
        <h2>Enabling Idea Generation</h2>
        <p>This is a placeholder page. Port any content from the Java app here — images, text, examples, or interactive widgets.</p>
        <Back />
      </div>
    )
  }

  if (screen === 'execute') {
    return (
      <div className="container">
        <h2>Structure and Executing Ideas</h2>
        <p>Placeholder: itinerary, steps, examples and any interactive tools you want to add.</p>
        <Back />
      </div>
    )
  }

  if (screen === 'socio') {
    return (
      <div className="container">
        <h2>Socio-Emotional (Coming Soon!)</h2>
        <Back />
      </div>
    )
  }

  if (screen === 'physical') {
    return (
      <div className="container">
        <h2>Physical (Coming Soon!)</h2>
        <Back />
      </div>
    )
  }

  return null
}
