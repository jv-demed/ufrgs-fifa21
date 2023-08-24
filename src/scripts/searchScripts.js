import { quickSort } from "./quickSort";

export function runSearch(search) {
    const parts = search.split(' ');
    const prefix = parts[0];
    let data = parts.slice(1).join(' ');
    const numberMatch = prefix.match(/\d+/);
    if(numberMatch){
        const index = numberMatch.index;
        const word = prefix.substring(0, index);
        const number = parseInt(numberMatch[0]);
        return [[word, number], data];
    }
    return [prefix, data];
}

export function searchPlayers(table, data){
    const result = table.searchByName(data);
    return {
        name: 'Players',
        list: result
    };
}

export function searchUsers(table, data){
    const result = table.get(data);
    const ordened = quickSort(result, 4);
    const limited = ordened.slice(0, 20);
    return {
        name: 'Users',
        list: limited
    };
}

export function searchTops(table, num, data){
    const cleaned = data.replace(/'/g, '');
    const result = table.searchByPosition(cleaned);
    const matchingPlayers = [];
    for(const player of result){
        if(player[4] >= 1000){
            matchingPlayers.push(player);
        }
    }
    const ordened = quickSort(matchingPlayers, 3);
    const limited = ordened.slice(0, num);
    return {
        name: 'Tops',
        list: limited
    };
}

export function searchTags(table, tagTable, data){
    const regex = /'([^']+)'/g;
    const tags = [];
    let match;
    while((match = regex.exec(data)) !== null){
        tags.push(match[1]);
    }
    const matchingPlayers = [];
    table.forEach((key, value) => {
        let allTagsMatch = true;
        for(let i = 0; i < tags.length; i++){
            if(!tagTable.containsTag(key, tags[i])){
                allTagsMatch = false;
                break;
            }
        }
        if(allTagsMatch){
            matchingPlayers.push(value);
        }
    });
    const ordened = quickSort(matchingPlayers, 3);
    return {
        name: 'Tags',
        list: ordened
    };
}