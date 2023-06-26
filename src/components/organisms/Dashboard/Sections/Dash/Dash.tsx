import Title from '@/components/atoms/Title'
import { DashWrapper } from './Dash.styled'
import { Text } from '@/components/atoms/Text'
import Field from '@/components/atoms/Field'
import { IoMdAddCircle } from 'react-icons/io'
import { AiFillTags } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const Dash = () => {
  const { applicationActive, applications } = useSelector(
    (state: RootState) => state.applications,
  )

  const { bots } = useSelector((state: RootState) => state.bots)

  const { guilds } = useSelector((state: RootState) => state.guilds)

  const application = applications.find(
    (v) => v.id === applicationActive.applicationId,
  )

  const guild = guilds.find((v) => v.id === applicationActive.guild.id)

  const bot = bots.find((v) => v.id === application?.botId)

  const channelText = applicationActive.guild.channels.filter(
    (v: any) => v.type === 0,
  )

  const categories = applicationActive.guild.channels.filter(
    (v: any) => v.type === 4,
  )

  const channelVoice = applicationActive.guild.channels.filter(
    (v: any) => v.type === 2,
  )

  return (
    <DashWrapper>
      <div className="section-title">
        <Title fontSize="30px" weight="regular" className="content-title">
          Dashboard<span>.</span>
        </Title>
      </div>

      <div className="section-content">
        <div className="app-profile">
          <div className="app-avatar">
            <IoMdAddCircle className="icon" />
          </div>
          <div className="app-data">
            <Title className="title" fontSize="24px" center>
              {application?.name}
            </Title>
            <Text className="id">
              <AiFillTags className="icon" />
              {application?.id}
            </Text>
          </div>
        </div>
        <div className="dash-info">
          <div className="field-group">
            <Field label="Servidor" value={guild.name} />
          </div>
          <div className="field-group">
            <Field label="Bot" value={bot?.name} />
            <Field label="Situação" value="Pago" />
          </div>
        </div>
      </div>

      <div className="section-content">
        <div className="server-info">
          <Title weight="regular">{guild.name}</Title>
          <div className="info">
            <div className="field-group">
              <Field label="Membros" value="1000" />
              <Field label="Categorias" value={categories.length} />
            </div>
            <div className="field-group">
              <Field
                label="Cargos"
                value={applicationActive.guild.roles.length}
              />
              <Field label="Canais de voz" value={channelVoice.length} />
            </div>
            <div className="field-group">
              <Field label="Canais de texto" value={channelText.length} />
            </div>
          </div>
        </div>
      </div>
    </DashWrapper>
  )
}

export default Dash
