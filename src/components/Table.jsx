import styled from 'styled-components';
import { getHeader } from '../scripts/tableScripts';

const TableStyled = styled.table`
    border: 1px solid #ddd;
    border-collapse: collapse;
    width: 100%;
    th,td{
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }
    th{
        //background-color: #f2f2f2;
    }
    tr:hover{
        //background-color: #f5f5f5;
    }
`

export function Table({ name, list }){
    return(
        <TableStyled>
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
        </TableStyled>
    )
}