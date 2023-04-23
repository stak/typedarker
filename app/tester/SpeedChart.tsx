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
  LineChart,
  Line,
  ReferenceLine,
} from 'recharts'

import { WordRecord } from './Trial'
import { memo } from 'react'

type Props = {
  record: WordRecord
}

const recordToData = (record: WordRecord) => {
  const data = []
  return record.strokes.map((s, i) => ({
    kpm: i ? Math.round((i / (s.timeDown / 1000)) * 60) : 0,
    stroke: record.word.at(i),
  }))
}

const SpeedChart: React.FC<Props> = ({ record }) => {
  const data = recordToData(record)
  const avgKpm = data.at(-1)?.kpm

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart barGap={0} barCategoryGap={0} data={data}>
        <Line dataKey="kpm" fill="#6664b8" isAnimationActive={false} />
        <ReferenceLine y={1200} label="target" stroke="red" />
        <ReferenceLine y={avgKpm} label="you" stroke="blue" />
        <XAxis dataKey="stroke" interval={0} />
        <YAxis domain={[0, 2000]} />
        <Tooltip
          wrapperStyle={{ backgroundColor: '#222', border: 0, top: -90 }}
          contentStyle={{ backgroundColor: '#222', border: 0 }}
          cursor={{ fill: '#fff', opacity: '0.2' }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default memo(SpeedChart)
