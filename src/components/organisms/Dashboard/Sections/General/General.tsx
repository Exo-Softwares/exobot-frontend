import Title from '@/components/atoms/Title'
import { GeneralWrapper } from './General.styled'

const General = () => {
  return (
    <GeneralWrapper>
      <Title fontSize="30px" weight="regular" className="content-title">
        Configurações gerais<span>.</span>
      </Title>

      <div className="general-container">
        <div className="content-section">
          <div className="input-group">
            <div className="input-control">
              <label>
                Nome da aplicação<span>*</span>
              </label>
              <input />
            </div>
            <div className="input-control">
              <label>
                Prefixo<span>*</span>
              </label>
              <input />
            </div>
            <div className="input-control">
              <label>Descrição da aplicação</label>
              <input />
            </div>
            <div className="input-control">
              <label>Canal de atualização</label>
              <input />
            </div>
          </div>
          <button className="save-button">Salvar</button>
        </div>
      </div>
    </GeneralWrapper>
  )
}

export default General
