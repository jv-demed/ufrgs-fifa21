export function getHeader(name){
    if(name == 'Players' || name == 'Tops' || name == 'Tags'){
        return [
            'Fifa ID',
            'Nome',
            'Posições',
            'Média',
            'Notas'
        ]
    }else if(name == 'Users'){
        return [
            'Fifa ID',
            'Nome',
            'Nota G.',
            'N. Notas',
            'Nota'
        ]
    }
}