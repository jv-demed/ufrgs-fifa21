import { HashTable } from "./hashTable";

export function createPlayerTable(playerTable, ratingTable, setIsLoading, setTime){
    const startTime = new Date().getTime();
    setIsLoading(true);
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
    setIsLoading(false);
    const endTime = new Date().getTime();
    setTime(prevTime => prevTime + (endTime - startTime));
    return table;
}

export function createUserTable(ratingTable, searchPlayerTable, setIsLoading, setTime){
    const startTime = new Date().getTime();
    setIsLoading(true);
    const table = new HashTable('Busca Usuários', 10000);
    ratingTable.forEach((key, values) => {
        const player = searchPlayerTable.get(key)
        values.forEach(value => {
            if(table.contains(value[0])){
                const existingValues = table.get(value[0]);
                existingValues.push([
                    player[0], 
                    player[1],
                    player[3],
                    player[4],
                    value[1]
                ]);
            }else{
                table.insert(value[0], [[
                    player[0],
                    player[1],
                    player[3],
                    player[4],
                    value[1]
                ]]);
            }
        })
    });
    setIsLoading(false);
    const endTime = new Date().getTime();
    setTime(prevTime => prevTime + (endTime - startTime));
    return table;
}