import { Application as ApplicationProps } from '@/types/application'
import { ApplicationWrapper } from './Application.styled'
import React from 'react'
import { MdOutlineAddCircle } from 'react-icons/md'
import { BsStars } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import Title from '@/components/atoms/Title'
import Text from '@/components/atoms/Text'

interface AppProps {
  application: ApplicationProps
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void
}

const Application = ({ application, onClick }: AppProps) => {
  const { bots } = useSelector((state: RootState) => state.bots)

  const bot = bots.find((bot) => bot.id === application.botId)

  return (
    <ApplicationWrapper onClick={onClick} color={bot?.color}>
      <div className="icon-container">
        {!application.expiredAt && <MdOutlineAddCircle className="icon" />}
      </div>
      <div className="content">
        <div className="title">
          <Title>{!application.expiredAt && 'Criar aplicação'}</Title>
          <div className="type">{bot?.name}</div>
        </div>
        <Text fontSize="1em">
          Clique pra começar a configurar a sua nova aplicação
        </Text>
      </div>

      <div className="new-badge">
        <BsStars className="icon" />
      </div>
    </ApplicationWrapper>
  )
}

export default Application
