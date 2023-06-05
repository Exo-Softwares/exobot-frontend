import Title from '@/components/atoms/Title'
import { DashWrapper } from './Dash.styled'
import { Icon } from '@/components/atoms/Icon'
import Text from '@/components/atoms/Text'
import Field from '@/components/atoms/Field'

const Dash = () => {
  return (
    <DashWrapper>
      <Title fontSize="30px" weight="regular" className="content-title">
        Dashboard<span>.</span>
      </Title>

      <div className="general-container">
        <div className="content-section">
          <div className="app-profile">
            <div className="app-avatar">
              <Icon
                nameIcon="IoMdAddCircle"
                propsIcon={{ className: 'icon' }}
              />
            </div>
            <div className="app-info">
              <Title className="title" fontSize="24px">
                Nome da aplicação
              </Title>
              <Text className="id">
                <Icon nameIcon="AiFillTags" /> ID DA APLICAÇÃO
              </Text>
            </div>
          </div>
          <div className="app-info">
            <Field label="Servidor" value="Nenhum" />
          </div>
          <div className="app-info">
            <Field label="Plano" value="Standard" />
            <Field label="Situação" value="Pago" />
          </div>
        </div>
        <div className="content-section">
          <div className="server-info">
            <Title weight="regular">Nome do servidor</Title>
            <div className="info">
              <div className="app-info">
                <Field label="Membros" value="1000" />
                <Field label="Categorias" value="3" />
              </div>
              <div className="app-info">
                <Field label="Cargos" value="22" />
                <Field label="Canais de voz" value="10" />
              </div>
              <div className="app-info">
                <Field label="Canais de texto" value="4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashWrapper>
  )
}

export default Dash
