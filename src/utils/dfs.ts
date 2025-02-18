import { initialNodes } from './nodes';

class Node {
    id: string;
    left: Node | null;
    right: Node | null;
    last: Node | null;
    ip: string;

    constructor(id: string, ip: string) {
        this.id = id;
        this.ip = ip;
        this.left = null;
        this.right = null;
        this.last = null;
    }
}

const initializeNodes = () => {
    const nodeMap = new Map<string, Node>();

    initialNodes.forEach(({ id, data }) => {
        const ip = data.label.includes('\n') ? data.label.split('\n')[1] : '';
        nodeMap.set(id, new Node(id, ip));
    });

    nodeMap.get('root')!.right = nodeMap.get('a2') || null;
    nodeMap.get('root')!.left = nodeMap.get('a1') || null;

    nodeMap.get('a1')!.left = nodeMap.get('e1') || null;
    nodeMap.get('a1')!.right = nodeMap.get('e2') || null;

    nodeMap.get('a2')!.left = nodeMap.get('e3') || null;
    nodeMap.get('a2')!.right = nodeMap.get('e4') || null;

    nodeMap.get('e1')!.left = nodeMap.get('h1') || null;
    nodeMap.get('e1')!.right = nodeMap.get('h2') || null;

    nodeMap.get('e2')!.left = nodeMap.get('h3') || null;
    nodeMap.get('e2')!.right = nodeMap.get('h4') || null;

    nodeMap.get('e3')!.left = nodeMap.get('h5') || null;
    nodeMap.get('e3')!.right = nodeMap.get('h6') || null;

    nodeMap.get('e4')!.left = nodeMap.get('h7') || null;
    nodeMap.get('e4')!.right = nodeMap.get('h8') || null;

    nodeMap.get('a1')!.last = nodeMap.get('root') || null;
    nodeMap.get('a2')!.last = nodeMap.get('root') || null;

    nodeMap.get('e1')!.last = nodeMap.get('a1') || null;
    nodeMap.get('e2')!.last = nodeMap.get('a1') || null;
    nodeMap.get('e3')!.last = nodeMap.get('a2') || null;
    nodeMap.get('e4')!.last = nodeMap.get('a2') || null;

    nodeMap.get('h1')!.last = nodeMap.get('e1') || null;
    nodeMap.get('h2')!.last = nodeMap.get('e1') || null;

    nodeMap.get('h3')!.last = nodeMap.get('e2') || null;
    nodeMap.get('h4')!.last = nodeMap.get('e2') || null;

    nodeMap.get('h5')!.last = nodeMap.get('e3') || null;
    nodeMap.get('h6')!.last = nodeMap.get('e3') || null;

    nodeMap.get('h7')!.last = nodeMap.get('e4') || null;
    nodeMap.get('h8')!.last = nodeMap.get('e4') || null;

    return nodeMap;
}



export const findPath = (ipOrigin: string, ipDestiny: string) => {
    const nodeMap = initializeNodes();

    let originNode: Node | null = null;
    let destinationNode: Node | null = null;

    nodeMap.forEach((node)=> {
        if(node.ip === ipOrigin){
            originNode = node;
        }

        if(node.ip === ipDestiny){
            destinationNode = node;
        }
    });


    console.log(originNode, destinationNode);


    if (!originNode || !destinationNode) {
        return [];
    }

    const path: string[] = [];

    const dfs = (node: Node | null, visited: Set<string>) => {

        if(!node || visited.has(node.id)){
            return false;
        }

        visited.add(node.id);
        path.push(node.id);

        if(node.id === destinationNode!.id){
            return true;
        }

        if(node.id[0] === 'h'){
            dfs(node.last, visited);
        }

        if (node.id[0] === 'e') {
            console.log(node.id, node.ip.substring(0, 10), destinationNode!.ip.substring(0, 10));
            if (node.ip.substring(0, 10) !== destinationNode!.ip.substring(0, 10)) {
                dfs(node.last, visited)
            }else{
                if(node.left && node.left.ip == destinationNode!.ip){
                    dfs(node.left, visited);
                }else{
                    dfs(node.right, visited);
                }
            }
        } 


        if(node.id[0] === 'a') {
            const leftChildIP = node.left?.ip.substring(0, 10);
            const rightChildIP = node.right?.ip.substring(0, 10);
            const destinationIP = destinationNode!.ip.substring(0, 10);
        
            if (leftChildIP === destinationIP) {
                dfs(node.left, visited);
            } else if (rightChildIP === destinationIP) {
                dfs(node.right, visited);
            } else {
                dfs(node.last, visited); 
            }
        }

        if(node.id === "root"){
            dfs(node.right, visited);
            dfs(node.left, visited);
        } 
    }

    const visited = new Set<string>();
    dfs(originNode, visited);

    console.log(path)

    return path;

}
