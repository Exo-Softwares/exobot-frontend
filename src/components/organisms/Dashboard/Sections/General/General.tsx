import Title from '@/components/atoms/Title'
import { GeneralWrapper } from './General.styled'
import Input from '@/components/atoms/Input'
import SelectMenu from '@/components/atoms/SelectMenu'
import { statusMenu } from '@/data/statusMenu'
import Button from '@/components/atoms/Button'

const General = () => {
  return (
    <GeneralWrapper>
      <Title fontSize="30px" weight="regular" className="content-title">
        Configurações gerais<span>.</span>
      </Title>

      <div className="content-section">
        <div className="input-group">
          <Input
            value=""
            onChange={(e) => console.log(e.target.value)}
            label="Nome da aplicação"
            required
          />
          <Input label="Prefixo" required value="" />
          <Input label="Descrição da aplicação" value="" />
          <Input label="Canal de atualização" value="" />
          <SelectMenu
            menu={statusMenu}
            label="Status"
            changeValue={(e) => console.log(e)}
          />
        </div>
        <Button color="purple" icon="RiArrowRightLine">
          Salvar
        </Button>
      </div>
    </GeneralWrapper>
  )
}

export default General
