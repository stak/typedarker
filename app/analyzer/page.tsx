'use client'
import TextBox from './TextBox'
import SetButton from './SetButton'
import { KeyboardEventHandler, useEffect, useRef, useState } from 'react'
import Trial, { WordRecord } from './Trial'

const logEvent: KeyboardEventHandler = (e) => {
  if (e.type === 'keyup') {
    console.log('up: ' + e.key)
  } else if (e.type === 'keydown') {
    console.log('down: ' + e.key)
  }
}

export default function Tester() {
  const inputRef = useRef<HTMLInputElement>(null)
  const hiddenRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  // game state
  const [isStarted, setIsStarted] = useState(false)
  const [word, setWord] = useState('')
  const [finger, setFinger] = useState('')

  // game config
  const [wordInterval, setWordInterval] = useState(100)

  // records
  const [startTime, setStartTime] = useState(0)
  const [records, setRecords] = useState<WordRecord[]>([])
  const [record, setRecord] = useState<WordRecord>({
    strokes: [],
    word,
    finger,
    startTime,
  })

  const startOrStop = () => {
    setIsStarted(!isStarted)
    if (isStarted) {
      setTimeout(() => {
        inputRef?.current?.focus()
      }, 100)
    } else {
      setRecord({
        strokes: [],
        word,
        finger,
        startTime: 0,
      })
      hiddenRef?.current?.focus()
    }
  }

  const keyHandler: KeyboardEventHandler = (e) => {
    // game control
    if (e.type === 'keydown') {
      if ((isStarted && e.key === 'Escape') || (!isStarted && e.key === 'Enter')) {
        startOrStop()
        e.preventDefault()
        return false
      }
    }

    // typing logic
    if (isStarted && e.type == 'keydown') {
      const pos = record.strokes.length
      if (pos == word.length) {
        return // finished
      }

      const nextKey = word[pos]
      if (e.key.toUpperCase() === nextKey) {
        const t = Date.now()
        const newRecord = {
          strokes: [
            ...record.strokes,
            {
              timeDown: startTime ? t - startTime : 0,
              timeUp: -1, // TODO:
            },
          ],
          word,
          finger,
          startTime,
        }

        if (!pos) {
          setStartTime(t)
        }
        if (pos === word.length - 1) {
          setTimeout(() => {
            setRecords([...records, newRecord])
            setRecord({
              strokes: [],
              word,
              finger,
              startTime: 0,
            })
            setStartTime(0)
          }, wordInterval)
        }
        setRecord(newRecord)
      }
    }
  }

  return (
    <main className="min-h-screen p-24" onKeyDown={keyHandler} onKeyUp={keyHandler} tabIndex={-1}>
      <h2 className="mb-4 text-2xl">Tester</h2>
      <div>
        <form action="#" onSubmit={() => false}>
          <TextBox
            title="Keystrokes"
            placeholder="HOGEHOGE"
            text={word}
            disabled={isStarted}
            onChange={(e) => {
              if (isStarted) {
                e.preventDefault()
              } else {
                setWord(e.target.value.toUpperCase())
              }
            }}
            className="my-2"
            _ref={inputRef}
          />
          <TextBox
            title="Fingers"
            placeholder="79427942"
            text={finger}
            disabled={isStarted}
            onChange={(e) => {
              if (isStarted) {
                e.preventDefault()
              } else {
                setFinger(e.target.value)
              }
            }}
            className="my-2"
          />
          <SetButton isStarted={isStarted} onClick={startOrStop} />
          <input ref={hiddenRef} type="text" className="opacity-0" value="" readOnly={true} />
        </form>
      </div>
      {isStarted && <Trial record={record} />}
      {[...records].reverse().map((r) => (
        <Trial key={r.startTime} record={r} />
      ))}
    </main>
  )
}
