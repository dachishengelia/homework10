import React from 'react'
import { Link } from 'react-router-dom'

const hobbies = [
  { id: 1, name: 'Photography', description: 'Capture moments with a camera.' },
  { id: 2, name: 'Cycling', description: 'Ride a bicycle through different terrains.' },
  { id: 3, name: 'Gaming', description: 'Play video games for fun and skill.' },
  { id: 4, name: 'Reading', description: 'Dive into fictional and non-fictional worlds.' }
]

export default function Hobbies() {
  return (
    <div>
      <h1>Hobbies</h1>
      {hobbies.map(hobby => (
        <div key={hobby.id} className="hobby-card">
          <h2>{hobby.id}. {hobby.name}</h2>
          <p>{hobby.description}</p>
          <Link to={`/hobbies/${hobby.id}`}>
            <button>Open</button>
          </Link>
        </div>
      ))}
    </div>
  )
}
