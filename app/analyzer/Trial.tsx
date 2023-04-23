import { memo } from 'react'
import SumTimeChart from './SumTimeChart'
import EachTimeChart from './EachTimeChart'
import EachTimeAvgChart from './EachTimeAvgChart'
import SpeedChart from './SpeedChart'

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
        <div>
          <span className="mx-4">{record.strokes.at(-1)!.timeDown} ms</span>
          <span className="mx-4">
            {Math.round(pos / (record.strokes.at(-1)!.timeDown / 1000)) * 60} kpm
          </span>
        </div>
      )}
      <div className="flex">
        <div className="h-40 w-80">
          <SumTimeChart record={record} />
        </div>
        <div className="h-40 w-80">
          <SpeedChart record={record} />
        </div>
        <div className="h-40 w-80">
          <EachTimeChart record={record} />
        </div>
        <div className="h-40 w-80">
          <EachTimeAvgChart record={record} />
        </div>
      </div>
    </div>
  )
}

export default memo(Trial)
