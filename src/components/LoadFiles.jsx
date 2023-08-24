import styled from 'styled-components';
import { useState } from 'react';
import { csvToHashTable } from '../scripts/csvScripts';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { InputCsv } from './InputCsv';

const LoadFilesStyled = styled.section`
    align-items: center;
    background-color: #343541;
    border-radius: 5px;
    display: flex;
    padding: 10px;
    width: 100%;
    .inputs{
        gap: 5px;
        justify-content: space-between;
        width: 85%;
    }
    .load{
        align-items: center;
        gap: 8px;
        justify-content: flex-end;
        width: 15%;
        div{
            justify-content: center;
            width: 50%;
            .icon{
                animation: spin 0.4s linear infinite;
                font-size: 1.2rem;
            }
        }
        span{
            text-align: end;
            width: 50%;
        }
    }
    @keyframes spin{
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

export function LoadFiles({ 
    playerTable,
    setPlayerTable,
    ratingTable,
    setRatingTable,
}){

    const [isLoading, setIsLoading] = useState(false);
    const [time, setTime] = useState(0);

    return(
        <LoadFilesStyled>
            <div className='inputs flexR'>
                <InputCsv 
                    name='Jogadores'
                    table={playerTable}
                    setData={(file) => {
                        csvToHashTable('Jogadores', file, setPlayerTable, setIsLoading, setTime);
                    }}
                />
                <InputCsv 
                    name='Avaliações'
                    table={ratingTable}
                    setData={(file) => {
                        csvToHashTable('Avaliações', file, setRatingTable, setIsLoading, setTime);
                    }}
                />
                <InputCsv 
                    name='Anotações'
                />
            </div>
            <div className='load flexR'>
                <div className='flexR'>
                    {isLoading ?
                        <AiOutlineLoading3Quarters className='icon' /> : ''
                    }
                </div>
                <span>{time}ms</span>
            </div>
        </LoadFilesStyled>
    )
}