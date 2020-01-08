import React, { FC, ComponentProps } from 'react'

export const Input: FC<InputProps> = ({ onChange, label, ...props }) => (
  <>
    {label && (
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.id}>
        {label}
      </label>
    )}
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      onChange={e => onChange(e.target.value)}
      {...props}
    />
  </>
)

interface InputProps extends ComponentProps<'input'> {
  label?: string
  onChange?: any
}
