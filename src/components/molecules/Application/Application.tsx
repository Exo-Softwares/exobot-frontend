import Text from '@/components/atoms/Text'
import Title from '@/components/atoms/Title'
import useProducts from '@/hooks/useProducts'
import { Application as ApplicationProps } from '@/types/application'
import React from 'react'
import { BsStars } from 'react-icons/bs'
import { MdOutlineAddCircle } from 'react-icons/md'
import { SiSmartthings } from 'react-icons/si'
import { ApplicationWrapper } from './Application.styled'

interface AppProps {
  application: ApplicationProps
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void
}

const Application = ({ application, onClick }: AppProps) => {
  const { bots } = useProducts()

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
              <Title>{application.name}</Title>
              <div className="type">{bot?.name}</div>
            </div>
            <Text fontSize="1em">
              Clique para entrar na <span>Dashboard</span>
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
              <Title>Criar aplicação</Title>
              <div className="type">{bot?.name}</div>
            </div>
            <Text fontSize="1em">
              Clique pra começar a <span>configurar a sua nova aplicação</span>
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
