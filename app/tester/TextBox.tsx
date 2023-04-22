import classNames from 'classnames'

type Props = {
  title: string
  placeholder: string
  className?: string
}

const TextBox: React.FC<Props> = ({ title, placeholder, className }) => {
  return (
    <div className={classNames('relative', className)}>
      <label
        htmlFor="name"
        className="absolute -top-2 left-2 inline-block bg-black px-1 text-xs font-medium text-gray-400">
        {title}
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="block w-full rounded-md border-0 py-1.5 px-2 bg-black text-gray-200 ring-1 ring-inset ring-gray-600 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-red-600 uppercase font-mono text-xl"
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextBox
