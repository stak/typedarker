import classNames from 'classnames'

type Props = {
  isStarted: boolean
  onClick: () => void
}

const SetButton: React.FC<Props> = ({ isStarted, onClick }) => {
  const bgColor = isStarted ? 'bg-indigo-800' : 'bg-slate-800'
  const label = isStarted ? 'Exit (Esc)' : 'Start (Enter)'

  return (
    <button
      type="button"
      className={classNames('w-full px-4 py-1 outline-none', bgColor)}
      onClick={onClick}>
      {label}
    </button>
  )
}

export default SetButton
