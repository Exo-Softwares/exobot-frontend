import styled from 'styled-components'

interface FieldProps {
  label: string
  value?: string
}

const FieldWrapper = styled.div`
  label {
    font-size: 16px;
    color: white;

    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`

const Field = ({ label, value }: FieldProps) => {
  return (
    <FieldWrapper>
      <label>
        {label}
        <span>:</span>
      </label>
      <p>{value}</p>
    </FieldWrapper>
  )
}

export default Field
