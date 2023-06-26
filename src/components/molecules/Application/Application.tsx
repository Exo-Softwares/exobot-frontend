import { Application as ApplicationProps } from '@/types/application'
import { ApplicationWrapper } from './Application.styled'
import React from 'react'
import { MdOutlineAddCircle } from 'react-icons/md'
import { SiSmartthings } from 'react-icons/si'
import { BsStars } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { Title } from '@/components/atoms/Title'
import { Text } from '@/components/atoms/Text'

interface AppProps {
  application: ApplicationProps
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void
}

const Application = ({ application, onClick }: AppProps) => {
  const { bots } = useSelector((state: RootState) => state.bots)

  const bot = bots.find((bot) => bot.id === application.botId)

  return (
    <>
      {application.expiredAt && (
        <ApplicationWrapper onClick={onClick} color={bot?.color}>
          <div className="icon-container">
            <SiSmartthings className="icon" />
          </div>
          <div className="content">
            <div className="title">
              <Title className="medium-title">{application.name}</Title>
              <div className="type">{bot?.name}</div>
            </div>
            <Text>
              Clique para entrar na <strong>Dashboard</strong>
            </Text>
          </div>
          <div className="background"></div>
        </ApplicationWrapper>
      )}

      {!application.expiredAt && (
        <ApplicationWrapper onClick={onClick} color={bot?.color}>
          <div className="icon-container">
            <MdOutlineAddCircle className="icon" />
          </div>
          <div className="content">
            <div className="title">
              <Title className="medium-title">Criar aplicação</Title>
              <div className="type">{bot?.name}</div>
            </div>
            <Text>
              Clique pra começar a{' '}
              <strong>configurar a sua nova aplicação</strong>
            </Text>
          </div>

          <div className="new-badge">
            <BsStars className="icon" />
          </div>
          <div className="background"></div>
        </ApplicationWrapper>
      )}
    </>
  )
}

export default Application
