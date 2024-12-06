import React from 'react'
import { useParams } from 'react-router-dom'

const hobbies = [
  { id: 1, name: 'Photography', description: 'Capture moments with a camera.' },
  { id: 2, name: 'Cycling', description: 'Ride a bicycle through different terrains.' },
  { id: 3, name: 'Gaming', description: 'Play video games for fun and skill.' },
  { id: 4, name: 'Reading', description: 'Dive into fictional and non-fictional worlds.' }
]

export default function HobbyDetail() {
  const { hobbyId } = useParams();
  const hobby = hobbies.find(h => h.id === parseInt(hobbyId));

  if (!hobby) {
    return <p>Hobby not found!</p>
  }

  return (
    <div>
      <h1>{hobby.name}</h1>
      <p>{hobby.description}</p>
    </div>
  )
}
