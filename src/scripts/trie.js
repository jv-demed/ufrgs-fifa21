class TrieNode{
    constructor(){
        this.children = new Map();
        this.values = [];
    }
}

export class Trie{
    constructor(){
        this.root = new TrieNode();
    }

    insert(word, value) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
            node.values.push(value);
        }
    }

    search(substring) {
        let results = [];
        let node = this.root;

        for (const char of substring) {
            if (!node.children.has(char)) {
                return results;
            }
            node = node.children.get(char);
            results.push(...node.values);
        }

        // Recolher valores de nós filhos para buscar todas as substrings possíveis
        const stack = [node];
        while (stack.length > 0) {
            const currentNode = stack.pop();
            results.push(...currentNode.values);

            for (const childNode of currentNode.children.values()) {
                stack.push(childNode);
            }
        }
        results = [...new Set(results)];
        return results;
    }
}