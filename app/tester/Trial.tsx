import { memo } from 'react'
import TrialChart from './TrialChart'

export type StrokeLog = {
  timeDown: number
  timeUp: number
}
export type WordRecord = {
  startTime: number
  word: string
  finger: string
  strokes: StrokeLog[]
}

type Props = {
  record: WordRecord
}

const Trial: React.FC<Props> = ({ record }) => {
  const pos = record.strokes.length

  return (
    <div className="border-t-2 border-gray-600 px-1">
      <span className="text-xl font-mono text-gray-600">{record.word.slice(0, pos)}</span>
      <span className="text-xl font-mono text-white">{record.word.slice(pos)}</span>
      <hr className="opacity-0" />
      {record.word.length === record.strokes.length && (
        <span>{record.strokes.at(-1)?.timeDown} ms</span>
      )}
      <div className="h-20">
        <TrialChart record={record} />
      </div>
    </div>
  )
}

export default memo(Trial)
