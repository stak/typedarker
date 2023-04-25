import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

import { WordRecord } from './Trial'
import { memo } from 'react'

type Props = {
  record: WordRecord
}

const recordToData = (record: WordRecord) => {
  const data = []
  return record.strokes.map((s, i) => ({
    timeDown: s.timeDown,
    stroke: record.word.at(i),
  }))
}

const SumTimeChart: React.FC<Props> = ({ record }) => {
  const data = recordToData(record)

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart barGap={0} barCategoryGap={0} data={data}>
        <Bar dataKey="timeDown" fill="#6664b8" isAnimationActive={false} />
        <XAxis dataKey="stroke" interval={0} />
        <YAxis />
        <Tooltip
          wrapperStyle={{ backgroundColor: '#222', border: 0, top: -90, outline: 'none' }}
          contentStyle={{ backgroundColor: '#222', border: 0 }}
          cursor={{ fill: '#fff', opacity: '0.2' }}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default memo(SumTimeChart)
