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
  return record.strokes.map((s, i) => ({
    time: i ? s.timeDown - record.strokes[i - 1].timeDown : 0,
    stroke: record.word.at(i),
  }))
}

const EachTimeChart: React.FC<Props> = ({ record }) => {
  const data = recordToData(record)

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart barGap={0} barCategoryGap={0} data={data}>
        <Bar dataKey="time" fill="#8884d8" isAnimationActive={false} />
        <XAxis dataKey="stroke" interval={0} />
        <YAxis domain={[0, 200]} />
        <Tooltip
          wrapperStyle={{ backgroundColor: '#222', border: 0, top: -90 }}
          contentStyle={{ backgroundColor: '#222', border: 0 }}
          cursor={{ fill: '#fff', opacity: '0.2' }}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default memo(EachTimeChart)
