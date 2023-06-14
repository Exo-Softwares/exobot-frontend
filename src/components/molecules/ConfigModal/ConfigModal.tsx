import { Application as ApplicationProps } from '@/types/application'
import { useState } from 'react'
import { ConfigModalWrapper } from './ConfigModal.styled'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { IoMdAddCircle } from 'react-icons/io'
import Input from '@/components/atoms/Input'
import Button from '@/components/atoms/Button'

const ConfigModal = (appBeingCreated: ApplicationProps) => {
  // Steps
  const [step, setStep] = useState(1)

  // App Data
  const [appName, setAppName] = useState('')

  const { bots } = useSelector((state: RootState) => state.bots)

  const bot = bots.find((bot) => bot.id === appBeingCreated.botId)

  return (
    <ConfigModalWrapper color={bot?.color}>
      <header>
        <div className="steps">
          <div className="step active">1</div>
          <div className="step">2</div>
          <div className="step">3</div>
        </div>
      </header>
      {step === 1 && (
        <form>
          <div className="app-profile">
            <div className="app-avatar">
              <IoMdAddCircle className="icon" />
            </div>
            <div className="form-control">
              <Input
                onChange={(e) => setAppName(e.target.value)}
                value={appName}
                label="Nome da aplicação"
                maxLength={18}
                minLength={2}
              />
            </div>
          </div>
          <Button
            onClick={(e) => setStep(step + 1)}
            color={bot?.color}
            icon="RiArrowRightLine"
            disabled={appName.length < 2}
          >
            Próximo
          </Button>
        </form>
      )}
    </ConfigModalWrapper>
  )
}

export default ConfigModal
