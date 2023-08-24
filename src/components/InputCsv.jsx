import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { convertCsvToArray } from '../scripts/csvScripts';
import { AiOutlineUpload, AiOutlineCheck } from 'react-icons/ai';

const InputCsvStyled = styled.label`
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    gap: 10px;
    justify-content: center;
    padding: 10px;
    width: 30%;
    .icon{
        font-size: 1.2rem;
    }
`;

export function InputCsv({ name, table, setData }){
    
    const [file, setFile] = useState();

    useEffect(() => {
        if(file){
            setData(file)
        }
    }, [file]);

    return(
        <InputCsvStyled>
            <span>{name}</span>
            {table ?
                <AiOutlineCheck className='icon' /> :
                <AiOutlineUpload className='icon' />
            }
            <input type='file' 
                accept='.csv' 
                onChange={(e) => {
                    const selectedFile = e.target.files[0];
                    setFile(selectedFile);
                }} 
                style={{ display: 'none' }} 
            />
        </InputCsvStyled>
    );
}