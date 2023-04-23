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
    timeDown: s.timeDown,
    stroke: record.word.at(i),
  }))
}

const TrialChart: React.FC<Props> = ({ record }) => {
  const data = recordToData(record)
  console.log('render')

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={data}>
        <Bar dataKey="timeDown" fill="#8884d8" />
        <XAxis dataKey="stroke" />
        <YAxis />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default memo(TrialChart)
