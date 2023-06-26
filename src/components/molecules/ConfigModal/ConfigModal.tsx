/* eslint-disable no-unused-vars */
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
import { CiCircleCheck } from 'react-icons/ci'
import Title from '@/components/atoms/Title'
import Text from '@/components/atoms/Text'
import axios from 'axios'

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
  const [appName, setAppName] = useState<string>('')
  const [selectGuildId, setSelectGuildId] = useState<string>('')
  const [selectStatus, setSelectStatus] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const { bots } = useSelector((state: RootState) => state.bots)
  const { guilds } = useSelector((state: RootState) => state.guilds)

  const administratorGuilds = guilds.map((guild) => {
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

  const createApplication = async (event: any) => {
    event.preventDefault()
    setLoading(true)
    const data = await axios.post('/applications/create', {
      applicationId: appBeingCreated.id,
      guildId: selectGuildId,
      status: selectStatus,
      name: appName,
    })
    setLoading(false)
    setStep(3)
    console.log(data)
  }

  return (
    <ConfigModalWrapper id="config" color={bot?.color} ref={configModalRef}>
      <header>
        <div className="options">
          <div onClick={(e) => setStep(step - 1)} className="back">
            <FiArrowLeft
              style={
                step === 1 || step === 3
                  ? { display: 'none' }
                  : { display: 'block' }
              }
              className="icon"
            />
          </div>
          <div
            onClick={(e) => {
              setAppBeingCreated(null)
              console.log(appBeingCreated)
            }}
            className="close"
          >
            <IoMdClose className="icon" />
          </div>
        </div>
        {step !== 3 && (
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
            <div
              className="progression"
              style={{
                background: `${
                  (step === 2 && bot?.color) ||
                  (step === 1 &&
                    `linear-gradient(90deg, ${bot?.color} 0%, ${bot?.color} 53%, rgba(17, 17, 17, 1) 100%)`)
                }`,
                width: `${(step === 1 && '50%') || (step === 2 && '100%')} `,
              }}
            />
          </div>
        )}
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
              changeValue={(guild) => setSelectGuildId(guild.id)}
            />
            <SelectMenu
              menu={statusMenu}
              label="Status"
              changeValue={(status) => setSelectStatus(status.id)}
            />
          </div>
          <Button
            onClick={createApplication}
            color={bot?.color}
            icon="RiArrowRightLine"
            disabled={!!loading}
          >
            {loading ? 'Criando aplicação' : 'Criar aplicação'}
          </Button>
        </form>
      )}
      {step === 3 && (
        <div className="finish">
          <CiCircleCheck className="main-icon" />
          <Title fontSize="23px" className="title">
            Parabéns
          </Title>
          <div className="description">
            <Text fontSize="18px" center>
              Você concluiu a configuração inicial com sucesso.
            </Text>
            <Text fontSize="18px" center>
              Ainda é possível alterar as configurações na{' '}
              <span>Dashboard</span>
            </Text>
          </div>

          <Button
            onClick={(e) => ''}
            color={bot?.color}
            icon="RiArrowRightLine"
            disabled={appName.length < 2}
          >
            Continuar
          </Button>
        </div>
      )}
    </ConfigModalWrapper>
  )
}

export default ConfigModal
