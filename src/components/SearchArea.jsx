import styled from 'styled-components';
import { useState } from 'react';
import { InputText } from './InputText';
import { Button } from './Button';
import { runSearch, searchPlayers } from '../scripts/searchScripts';
import { Table } from './Table';

const SearchAreaStyled = styled.section`
    background-color: #343541;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
    padding: 10px;
    width: 100%;
    .search{
        gap: 5px;
        width: 100%;
    }
`

export function SearchArea({ playerTable }){

    const [search, setSearch] = useState('');
    const [result, setResult] = useState({});

    return(
        <SearchAreaStyled>
            <form className='search flexR'
                onSubmit={(e) => {
                    e.preventDefault();
                    const [prefix, data] = runSearch(search);
                    if(prefix == 'player'){
                        setResult(searchPlayers(playerTable, data));
                    }
                }}
            >
                <InputText type='text' 
                    placeholder='Buscar...'
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
                <Button>Buscar</Button>
            </form>
            {result.list ?
                <Table 
                    name={result.name} 
                    list={result.list}
                /> : ''
            }
        </SearchAreaStyled>
    )
}