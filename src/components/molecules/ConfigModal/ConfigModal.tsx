import { Application as ApplicationProps } from '@/types/application'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { ConfigModalWrapper } from './ConfigModal.styled'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { IoMdAddCircle, IoMdClose } from 'react-icons/io'
import Input from '@/components/atoms/Input'
import Button from '@/components/atoms/Button'
import { FiArrowLeft } from 'react-icons/fi'
import SelectMenu from '@/components/atoms/SelectMenu'
import { statusMenu } from '@/data/statusMenu'

interface ConfigModalProps {
  appBeingCreated: ApplicationProps
  setAppBeingCreated: Dispatch<SetStateAction<ApplicationProps | null>>
}

const ConfigModal = ({
  appBeingCreated,
  setAppBeingCreated,
}: ConfigModalProps) => {
  // Steps
  const [step, setStep] = useState(1)

  // App Data
  const [appName, setAppName] = useState('')

  const { bots } = useSelector((state: RootState) => state.bots)
  const { guilds } = useSelector((state: RootState) => state.guilds)

  console.log(guilds)

  const administratorGuilds = guilds
    .filter((guild) => guild.permissions === 2147483647)
    .map((guild) => {
      return { id: guild.id, name: guild.name }
    })

  const bot = bots.find((bot) => bot.id === appBeingCreated.botId)

  const configModalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        configModalRef.current &&
        !configModalRef.current.contains(event.target as Node)
      ) {
        setAppBeingCreated(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <ConfigModalWrapper color={bot?.color} ref={configModalRef}>
      <header>
        <div className="options">
          <div onClick={(e) => setStep(step - 1)} className="back">
            <FiArrowLeft
              style={step === 1 ? { display: 'none' } : { display: 'block' }}
              className="icon"
            />
          </div>
          <div onClick={(e) => setAppBeingCreated(null)} className="close">
            <IoMdClose className="icon" />
          </div>
        </div>
        <div className="steps">
          <div
            className={`step ${step === 1 && 'active'} ${
              step > 1 && 'completed'
            }`}
          >
            1
          </div>
          <div
            className={`step ${step === 2 && 'active'} ${
              step > 2 && 'completed'
            }`}
          >
            2
          </div>
          <div className={`step ${step === 3 && 'active'}`}>3</div>
          <div
            className="progression"
            style={{
              background: `${
                (step === 3 && bot?.color) ||
                (step === 2 &&
                  `linear-gradient(90deg, ${bot?.color} 0%, ${bot?.color} 53%, rgba(17, 17, 17, 1) 100%)`)
              }`,
              width: `${
                (step === 1 && '30%') ||
                (step === 2 && '70%') ||
                (step === 3 && '100%')
              } `,
            }}
          />
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
      {step === 2 && (
        <form>
          <div className="form-group">
            <SelectMenu
              label="Selecionar servidor"
              menu={administratorGuilds}
            />
            <SelectMenu menu={statusMenu} label="Status" />
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
