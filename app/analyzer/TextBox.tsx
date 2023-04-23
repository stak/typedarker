import classNames from 'classnames'
import { RefObject } from 'react'

type Props = {
  title: string
  placeholder: string
  text: string
  className?: string
  disabled?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  _ref?: RefObject<HTMLInputElement>
}

const TextBox: React.FC<Props> = ({
  title,
  placeholder,
  text,
  disabled,
  onChange,
  className,
  _ref,
}) => {
  return (
    <div className={classNames('relative', className)}>
      <label
        htmlFor="name"
        className="absolute -top-2 left-2 inline-block bg-black px-1 text-xs font-medium text-gray-400 outline-none">
        {title}
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="block w-full rounded-md border-0 py-1.5 px-2 bg-black text-gray-200 ring-1 ring-inset ring-gray-600 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-800 uppercase font-mono text-xl outline-none"
        placeholder={placeholder}
        ref={_ref}
        value={text}
        disabled={!!disabled}
        onChange={onChange}
      />
    </div>
  )
}

export default TextBox
