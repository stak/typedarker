import classNames from 'classnames'
import { KeyboardEventHandler } from 'react'

export type StrokeLog = {
  timeDown: number
  timeUp: number
}
export type WordRecord = StrokeLog[]

type Props = {
  word: string
  finger: string
  record: WordRecord
}

const Trial: React.FC<Props> = ({ word, finger, record }) => {
  const pos = record.length

  return (
    <div className="border-t-2 border-gray-600 px-1">
      <span className="text-xl font-mono text-gray-400">{word.slice(0, pos)}</span>
      <span className="text-xl font-mono text-white">{word.slice(pos)}</span>
      <hr className="opacity-0" />
      {word.length === record.length && <span>{record.at(-1)?.timeDown} ms</span>}
    </div>
  )
}

export default Trial
