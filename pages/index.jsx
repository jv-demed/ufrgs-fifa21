import { useEffect, useState } from 'react';
import { LoadFiles } from '../src/components/LoadFiles';
import { SearchArea } from '../src/components/SearchArea';
import { HashTable } from '../src/scripts/hashTable';
import { createPlayerTable, createUserTable } from '../src/scripts/createHashs';

export default function Home(){

    const [isLoading, setIsLoading] = useState(false);
    const [time, setTime] = useState(0);

    const [playerTable, setPlayerTable] = useState();
    const [ratingTable, setRatingTable] = useState();
    const [tagTable, setTagTable] = useState();

    const [searchPlayerTable, setSearchPlayerTable] = useState();
    const [searchUserTable, setSearchUserTable] = useState();

    useEffect(() => {
        if(playerTable && ratingTable){
            setSearchPlayerTable(createPlayerTable(playerTable, ratingTable, setIsLoading, setTime));
        }
    }, [playerTable, ratingTable]);

    useEffect(() => {
        if(ratingTable && searchPlayerTable){
            setSearchUserTable(createUserTable(ratingTable, searchPlayerTable, setIsLoading, setTime));
        }
    }, [searchPlayerTable]);
    
    return(
        <main className='container'>
            <LoadFiles 
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                time={time}
                setTime={setTime}
                playerTable={playerTable}
                setPlayerTable={setPlayerTable}
                ratingTable={ratingTable}
                setRatingTable={setRatingTable}
                tagTable={tagTable}
                setTagTable={setTagTable}
            />
            <SearchArea 
                playerTable={searchPlayerTable}
                ratingTable={ratingTable}
                userTable={searchUserTable}
                tagTable={tagTable}
            />
        </main>
    )
}