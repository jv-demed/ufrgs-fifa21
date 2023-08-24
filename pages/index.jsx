import { useEffect, useState } from 'react';
import { LoadFiles } from '../src/components/LoadFiles';
import { SearchArea } from '../src/components/SearchArea';
import { HashTable } from '../src/scripts/hashTable';

export default function Home(){

    const [playerTable, setPlayerTable] = useState();
    const [ratingTable, setRatingTable] = useState();

    const [searchPlayerTable, setSearchPlayerTable] = useState();

    //console.log(searchPlayerTable);
    //console.log(ratingTable);

    useEffect(() => {
        if(playerTable && ratingTable){
            const table = new HashTable('Busca Jogadores', (playerTable.getSize() / 0.7));
            playerTable.forEach((key, value) => {
                const rat = ratingTable.get(key);
                let average = 0;
                if(rat){
                    rat.forEach(score => {
                        average += parseFloat(score[1]);
                    });
                    average /= rat.length;
                }
                table.insert(key, [
                    key,
                    value[0],
                    value[1],
                    average,
                    rat ? rat.length : 0
                ]);
            });
            setSearchPlayerTable(table);
        }
    }, [playerTable, ratingTable]);
    
    return(
        <main className='container'>
            <LoadFiles 
                playerTable={playerTable}
                setPlayerTable={setPlayerTable}
                ratingTable={ratingTable}
                setRatingTable={setRatingTable}
            />
            <SearchArea 
                playerTable={searchPlayerTable}
            />
        </main>
    )
}