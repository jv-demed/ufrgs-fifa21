export function runSearch(search){
    const parts = search.split(' ');
    const prefix = parts[0];
    const data = parts.slice(1).join(' ');
    return [prefix, data];
}

export function searchPlayers(table, data){
    const result = table.searchByName(data);
    console.log(result);
    return {
        name: 'Players',
        list: result
    };
}