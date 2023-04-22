'use client'
import Image from 'next/image'
import TextBox from './TextBox'
import SetButton from './SetButton'
import { useState } from 'react'

export default function Tester() {
  const [isStarted, setIsStarted] = useState(false)

  return (
    <main className="min-h-screen p-24">
      <h2 className="mb-4 text-2xl">Tester</h2>
      <div>
        <form action="#" onSubmit={() => false}>
          <TextBox title="Keystrokes" placeholder="HOGEHOGE" className="my-2" />
          <TextBox title="Fingers" placeholder="79427942" className="my-2" />
          <SetButton
            isStarted={isStarted}
            onClick={() => {
              setIsStarted(!isStarted)
            }}
          />
        </form>
      </div>
    </main>
  )
}
