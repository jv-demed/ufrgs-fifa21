import styled from 'styled-components';
import { getHeader } from '../scripts/tableScripts';

const TableStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: end;
    table{
        border: 1px solid #ddd;
        border-collapse: collapse;
        width: 100%;
    }
    th,td{
        border-bottom: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }
`

export function Table({ name, list }){
    return(
        <TableStyled>
            <span>Resultados: {list.length}</span>
            <table>
                <tbody>
                    <tr>
                        {getHeader(name).map(col => {
                            return(
                                <th key={col}>{col}</th>
                            )
                        })}
                    </tr>
                    {list.map(lines => {
                        return(
                            <tr key={`l${lines[0]}`}>
                                {lines.map((col, i) => {
                                    return(
                                        <td key={`${lines[0]}-${i}(${col})`}>
                                            {col}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </TableStyled>
    )
}