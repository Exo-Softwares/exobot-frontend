import styled from 'styled-components'

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
  table-layout: auto;

  thead {
    z-index: 1;
    position: relative;
  }

  th,
  td {
    padding: 10px;
    padding: 25px 20px;
    word-wrap: break-word;
  }

  th {
    background-color: black;
    text-align: left;
    font-weight: bold;
  }

  tr {
    padding: 30px;

    &:nth-child(even) {
      background-color: #141414;
    }

    &:nth-child(odd) {
      background-color: #0d0d0d;
    }

    &:hover {
      color: white;
    }
  }

  tbody {
    tr {
      position: relative;
      overflow: hidden;
      backdrop-filter: blur(90px);

      &:hover {
        &::after {
          opacity: 0.8;
        }
      }

      &::after {
        content: '';
        opacity: 0;
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 100%;
        filter: blur(100px);
        right: -40px;
        background: #635f5f;
        z-index: -1;
        transition: 0.2s all;
      }
    }
  }
`

export interface TableData {
  message?: string
  user?: string
  channel?: string
  date?: string
  minWidth?: string
}

interface TableProps {
  headers: string[]
  rows: TableData[]
}

const Table = ({ headers, rows }: TableProps) => {
  return (
    <div className="table" style={{ overflowX: 'auto', maxHeight: '590px' }}>
      <TableWrapper>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.message && (
                <td style={{ width: 'fit-content' }}>{row?.message}</td>
              )}
              {row.user && (
                <td style={{ width: 'fit-content' }}>{row?.user}</td>
              )}
              {row.channel && (
                <td style={{ width: 'fit-content' }}>#{row?.channel}</td>
              )}
              {row.date && (
                <td style={{ width: 'fit-content' }}>{row?.date}</td>
              )}
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </div>
  )
}

export default Table
