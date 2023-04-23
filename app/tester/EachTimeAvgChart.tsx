import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import { WordRecord } from './Trial'
import { memo, useMemo } from 'react'

type Props = {
  record: WordRecord
}

const recordToData = (record: WordRecord) => {
  const data = []

  const avg =
    record.strokes.length > 1 ? record.strokes.at(-1)!.timeDown / (record.strokes.length - 1) : 0

  return record.strokes.map((s, i) => {
    const d = {
      offset: i ? s.timeDown - record.strokes[i - 1].timeDown - avg : 0,
      gain: 0,
      loss: 0,
      stroke: record.word.at(i),
    }
    if (d.offset < 0) {
      d.gain = -Math.round(d.offset)
    } else {
      d.loss = -Math.round(d.offset)
    }
    return d
  })
}

const EachTimeAvgChart: React.FC<Props> = ({ record }) => {
  const data = recordToData(record)

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart barGap={0} barCategoryGap={0} data={data}>
        <Bar dataKey="gain" stackId="offset" fill="#338833" isAnimationActive={false} />
        <Bar dataKey="loss" stackId="offset" fill="#cc84d8" isAnimationActive={false} />
        <XAxis dataKey="stroke" interval={0} />
        <YAxis domain={[-100, 100]} />
        <Tooltip
          wrapperStyle={{ backgroundColor: '#222', border: 0, top: -120 }}
          contentStyle={{ backgroundColor: '#222', border: 0 }}
          cursor={{ fill: '#fff', opacity: '0.2' }}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default memo(EachTimeAvgChart)
