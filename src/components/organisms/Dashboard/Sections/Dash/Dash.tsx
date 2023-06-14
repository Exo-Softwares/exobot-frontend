import Title from '@/components/atoms/Title'
import { DashWrapper } from './Dash.styled'
import Text from '@/components/atoms/Text'
import Field from '@/components/atoms/Field'
import { IoMdAddCircle } from 'react-icons/io'
import { AiFillTags } from 'react-icons/ai'

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
              <IoMdAddCircle className="icon" />
            </div>
            <div className="app-data">
              <Title className="title" fontSize="24px" center>
                Nome da aplicação
              </Title>
              <Text className="id" center>
                <AiFillTags className="icon" />
                ID DA APLICAÇÃO
              </Text>
            </div>
          </div>
          <div className="field-group">
            <Field label="Servidor" value="Nenhum" />
          </div>
          <div className="field-group">
            <Field label="Plano" value="Standard" />
            <Field label="Situação" value="Pago" />
          </div>
        </div>
        <div className="content-section">
          <div className="server-info">
            <Title weight="regular">Nome do servidor</Title>
            <div className="info">
              <div className="field-group">
                <Field label="Membros" value="1000" />
                <Field label="Categorias" value="3" />
              </div>
              <div className="field-group">
                <Field label="Cargos" value="22" />
                <Field label="Canais de voz" value="10" />
              </div>
              <div className="field-group">
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
