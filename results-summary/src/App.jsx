import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Summary from './components/Summary'
import reactionIcon from './assets/icon-reaction.svg'
import memoryIcon from './assets/icon-memory.svg'
import verbalIcon from './assets/icon-verbal.svg'
import visualIcon from './assets/icon-visual.svg'

function App() {
  const firstCardData = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": reactionIcon,
      "color": "light-red-custom"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": memoryIcon,
      "color": "orangey-yellow-custom"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": verbalIcon,
      "color": "green-teal-custom"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": visualIcon,
      "color": "cobalt-blue-custom"
    }
  ];
  const secondCardData = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": reactionIcon,
      "color": "light-red-custom"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": memoryIcon,
      "color": "orangey-yellow-custom"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": verbalIcon,
      "color": "green-teal-custom"
    }
  ];

  return (
    <>
      <main className='bg-white min-h-screen'>
        <div className='grid grid-cols-1 lg:grid-cols-2 min-h-screen space-y-5 lg:space-y-0 space-x-0 lg:space-x-4 md:py-5 lg:py-0 px-0 lg:px-5'>
          <Summary data={firstCardData}/>
          <Summary data={secondCardData}/>
        </div>
      </main>
    </>
  )
}

export default App
