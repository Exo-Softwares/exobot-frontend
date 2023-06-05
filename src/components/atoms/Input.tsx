import { ChangeEvent } from 'react'
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
`

interface InputProps {
  label: string
  type?: string
  value?: string
  required?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ label, type, value, required, onChange }: InputProps) => {
  return (
    <InputWrapper>
      <label>
        {label}
        {required && <span>*</span>}
      </label>
      <input onChange={onChange} type={type} value={value} />
    </InputWrapper>
  )
}

export default Input
