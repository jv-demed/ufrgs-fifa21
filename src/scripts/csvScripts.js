import { HashTable } from "./hashTable";

export function csvToHashTable(name, file, setTable, setIsLoading, setTime){
    const startTime = new Date().getTime();
    const reader = new FileReader();
    setIsLoading(true);
    reader.onload = (e) => {;
        const lines = defaultLines(e.target.result);
        const table = new HashTable(name, parseInt(lines.length / 0.7));
        lines.forEach(line => {
            const values = getValues(line);
            if(name == 'Jogadores'){
                table.insert(values[0], [values[1], values[2]]);
            }else if(name == 'Avaliações'){
                const key = values[1];
                if(table.contains(key)){
                    const existingValues = table.get(key);
                    existingValues.push([values[0], values[2]]);
                }else{
                    table.insert(key, [[values[0], values[2]]]);
                }
            }
        });
        setTable(table);
        setIsLoading(false);
        const endTime = new Date().getTime();
        setTime(prevTime => prevTime + (endTime - startTime));
    };
    reader.readAsText(file);
}

function getValues(line){
    const values = [];
    let currentValue = '';
    let withinQuotes = false;
    for(let j = 0; j < line.length; j++){
        const char = line[j];
        if(char === '"' && (line[j - 1] === ',' || j === 0)){
            withinQuotes = true;
        }else if(char === '"' && withinQuotes){
            withinQuotes = false;
        }else if(char === ',' && !withinQuotes){
            values.push(currentValue.trim());
            currentValue = '';
        }else{
            currentValue += char;
        }
    }
    values.push(currentValue.trim());
    return values;
}

function defaultLines(result){
    const lines = result.split('\n');
    lines.shift();
    lines.pop();
    return lines;
}