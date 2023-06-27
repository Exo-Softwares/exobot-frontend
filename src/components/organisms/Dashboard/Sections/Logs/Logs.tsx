import { Title } from '@/components/atoms/Title'
import { LogsWrapper } from './Logs.styled'
import { Text } from '@/components/atoms/Text'
import Input from '@/components/atoms/Input'
import Table, { TableData } from '@/components/atoms/Table'
import SelectMenu from '@/components/atoms/SelectMenu'
import { statusMenu } from '@/data/statusMenu'
import Button from '@/components/atoms/Button'

const Logs = () => {
  // Changes log's
  const changesLogTableHeaders = ['Alteração', 'Usuário', 'Data']
  const changesLogTableRows: TableData[] = [
    {
      message: 'Nome do servidor alterado para "nome do servidor"',
      user: 'gfrNca',
      date: '26/09/2004',
    },
    {
      message: 'Nome do servidor alterado para "nome do servidor"',
      user: 'gfrNca',
      date: '26/09/2004',
    },
    {
      message: 'Nome do servidor alterado para "nome do servidor"',
      user: 'gfrNca',
      date: '26/09/2004',
    },
    {
      message: 'Nome do servidor alterado para "nome do servidor"',
      user: 'gfrNca',
      date: '26/09/2004',
    },
  ]

  return (
    <LogsWrapper>
      <div className="section-title">
        <Title>
          Logs<span>.</span>
        </Title>
        <div className="description">
          É recomendado o uso de um PC para esta seção.
        </div>
      </div>

      <div className="section-content">
        <div className="log-wrapper">
          <header className="log-header">
            <Text>Alterações</Text>
            <Input
              placeholder="Filtrar por usuário"
              value={''}
              maxLength={999}
              minLength={0}
            />
          </header>
          <Table rows={changesLogTableRows} headers={changesLogTableHeaders} />
        </div>
      </div>
      <div className="section-content">
        <div className="log-wrapper">
          <header className="log-header">
            <Text>Configurar logs do servidor</Text>
          </header>
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
      </div>
    </LogsWrapper>
  )
}

export default Logs
