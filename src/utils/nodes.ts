
export const initialNodes = [
    { id: 'root', position: { x: 0, y: 0 }, data: { label: 'Switch Central\n(No IP)' } },
    
    { id: 'a1', position: { x: -200, y: 100 }, data: { label: 'Agregação A1\n192.168.1.1/30' } },
    { id: 'a2', position: { x: 200, y: 100 }, data: { label: 'Agregação A2\n192.168.2.1/30' } },
  
    { id: 'e1', position: { x: -300, y: 200 }, data: { label: 'Borda E1\n192.168.10.1/27' } },
    { id: 'e2', position: { x: -100, y: 200 }, data: { label: 'Borda E2\n192.168.11.1/27' } },
    { id: 'e3', position: { x: 100, y: 200 }, data: { label: 'Borda E3\n192.168.12.1/27' } },
    { id: 'e4', position: { x: 300, y: 200 }, data: { label: 'Borda E4\n192.168.13.1/27' } },

    { id: 'h1', position: { x: -310, y: 300 }, data: { label: 'Host 1\n192.168.10.2' }, style: { width: 80 } },
    { id: 'h2', position: { x: -210, y: 300 }, data: { label: 'Host 2\n192.168.10.3' }, style: { width: 80 } },
    { id: 'h3', position: { x: -100, y: 300 }, data: { label: 'Host 3\n192.168.11.2' }, style: { width: 80 } },
    { id: 'h4', position: { x: 10, y: 300 }, data: { label: 'Host 4\n192.168.11.3' }, style: { width: 80 } },
    { id: 'h5', position: { x: 100, y: 300 }, data: { label: 'Host 5\n192.168.12.2' }, style: { width: 80 } },
    { id: 'h6', position: { x: 200, y: 300 }, data: { label: 'Host 6\n192.168.12.3' }, style: { width: 80 } },
    { id: 'h7', position: { x: 300, y: 300 }, data: { label: 'Host 7\n192.168.13.2' }, style: { width: 80 } },
    { id: 'h8', position: { x: 400, y: 300 }, data: { label: 'Host 8\n192.168.13.3' }, style: { width: 80 } },
];


export const initialEdges = [
  { id: 'root-a1', source: 'root', target: 'a1' },
  { id: 'root-a2', source: 'root', target: 'a2' },

  { id: 'a1-e1', source: 'a1', target: 'e1' },
  { id: 'a1-e2', source: 'a1', target: 'e2' },
  { id: 'a2-e3', source: 'a2', target: 'e3' },
  { id: 'a2-e4', source: 'a2', target: 'e4' },

  { id: 'e1-h1', source: 'e1', target: 'h1' },
  { id: 'e1-h2', source: 'e1', target: 'h2' },
  { id: 'e2-h3', source: 'e2', target: 'h3' },
  { id: 'e2-h4', source: 'e2', target: 'h4' },
  { id: 'e3-h5', source: 'e3', target: 'h5' },
  { id: 'e3-h6', source: 'e3', target: 'h6' },
  { id: 'e4-h7', source: 'e4', target: 'h7' },
  { id: 'e4-h8', source: 'e4', target: 'h8' },
];
