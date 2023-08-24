import { murmurHash3 } from './murmurHash3';
import { Trie } from './trie';

export class HashTable{

    constructor(name, size){
        this.name = name;
        this.size = size;
        this.count = 0;
        this.table = new Array(size);
    }

    getSize(){
        return this.size;
    }

    hash(key){
        const byteArray = key.toString().split('').map(char => char.charCodeAt(0));
        return murmurHash3(byteArray) % this.size;
    }

    insert(key, value){
        const index = this.hash(key);
        if(!this.table[index]){
            this.table[index] = [];
        }
        this.table[index].push({ key, value });
        this.count++;
    }

    get(key){
        const index = this.hash(key);
        if(!this.table[index]){
            return undefined;
        }
        for(const item of this.table[index]){
            if(item.key === key){
                return item.value;
            }
        }
        return undefined;
    }

    contains(key){
        const index = this.hash(key);
        if(!this.table[index]){
            return false;
        }
        for(const item of this.table[index]){
            if(item.key === key){
                return true;
            }
        }
        return false;
    }

    forEach(callback){
        for(let i = 0; i < this.size; i++){
            if(this.table[i]) {
                for(const item of this.table[i]){
                    callback(item.key, item.value);
                }
            }
        }
    }

    createTrie(prefix){
        const trie = new Trie();
        for(let i = 0; i < this.size; i++) {
            if(this.table[i]){
                for(const item of this.table[i]){
                    const playerName = item.value[0];
                    if(playerName.includes(prefix)){
                        trie.insert(playerName, item.value);
                    }
                }
            }
        }
        return trie;
    }

    searchByName(substring){
        const matchingPlayers = [];
        this.forEach((key, value) => {
            const playerName = value[1];
            if(playerName.includes(substring)){
                matchingPlayers.push(value);
            }
        });
        return matchingPlayers;
    }

}