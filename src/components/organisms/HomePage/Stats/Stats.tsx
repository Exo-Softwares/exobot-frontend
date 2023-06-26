/* Stats Section (Mainly used at Home) */

/* Style Import */
import { Title } from '@/components/atoms/Title'
import { StatsWrapper } from './Stats.styled'
import { Text } from '@/components/atoms/Text'

const Stats = () => {
  return (
    <StatsWrapper>
      <section>
        <div className="info-wrapper">
          <div className="info-container">
            <Title className="medium-title thin purple-themed white-colored">
              Usuários<span>.</span>
            </Title>
            <div className="stats-container">
              <Text className="reason-text">
                <div />
                200+ contas registradas.
              </Text>
            </div>
          </div>
          <div className="info-container">
            <Title className="medium-title thin purple-themed white-colored">
              Comunidades<span>.</span>
            </Title>
            <div className="stats-container">
              <Text className="reason-text">
                <div />
                350+ comunidades cadastradas.
              </Text>
            </div>
          </div>
          <div className="info-container">
            <Title className="medium-title thin purple-themed white-colored">
              Latência<span>.</span>
            </Title>
            <div className="stats-container">
              <Text className="reason-text">
                <div />
                25ms tempo de resposta.
              </Text>
            </div>
          </div>
        </div>
      </section>
    </StatsWrapper>
  )
}

export default Stats
