import type { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error: string | boolean
  id: string
}

export function Input({ id, label, error, className, ...rest }: InputProps) {
  return (
    <div className="mb-2 flex flex-col gap-2">
      <label className="block text-lg font-medium text-gray-700" htmlFor={id}>
        {label}
      </label>
      <input
        aria-describedby={`${id}-error`}
        aria-invalid={error ? true : undefined}
        className={`input-text w-100 ${className}`}
        id={id}
        {...rest}
      />
      {error && (
        <p className="text-sm text-red-500" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  )
}
