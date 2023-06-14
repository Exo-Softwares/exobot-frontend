import { ChangeEvent } from 'react'
import { z } from 'zod'
import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  input {
    width: 100%;
    margin-top: 4px;
    background: #212121;
    padding: 0.4em 0.2em 0.4em 0.6em;
    border: none;
    color: white;
    outline: none;
    font-size: 18px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors.cardOutline};
  }

  .error {
    margin-top: 5px;
    color: #a3453e;
  }
`

interface InputProps {
  label: string
  type?: string
  value: string
  required?: boolean
  maxLength?: number
  minLength?: number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  label,
  type,
  value,
  required,
  onChange,
  maxLength,
  minLength,
}: InputProps) => {
  const inputValidation = z
    .string()
    .min(minLength || 0, {
      message: `O campo precisa de pelo menos ${minLength} caracteres`,
    })
    .max(maxLength || 999)

  const result = inputValidation.safeParse(value)
  if (!result.success && value.length > 0) {
    // handle error then return
    console.log()
  }

  return (
    <InputWrapper>
      <label>
        {label}
        {required && <span>*</span>}
      </label>
      <input
        onChange={onChange}
        type={type}
        value={value}
        maxLength={maxLength}
      />
      <p className="error">
        {!result.success && value.length > 0 && result.error.errors[0].message}⠀
      </p>
    </InputWrapper>
  )
}

export default Input
