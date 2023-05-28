/* Stats Section (Mainly used at Home) */

/* Style Import */
import { StatsWrapper } from './Stats.styled'

const Stats = () => {
  return (
    <StatsWrapper>
      <section>
        <div className="info-wrapper">
          <div className="info-container">
            <h1>Usuários</h1>
            <div className="stats-container">
              <div />
              <p>
                200+ contas registradas<span>.</span>
              </p>
            </div>
          </div>
          <div className="info-container">
            <h1>Comunidades</h1>
            <div className="stats-container">
              <div />
              <p>
                350+ comunidades cadastradas<span>.</span>
              </p>
            </div>
          </div>
          <div className="info-container">
            <h1>Latência</h1>
            <div className="stats-container">
              <div />
              <p>
                25ms tempo de resposta<span>.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </StatsWrapper>
  )
}

export default Stats
