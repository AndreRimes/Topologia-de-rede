import React, { useState } from 'react';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { initialEdges } from '@/utils/nodes';

interface NetworkGraphProps {
  nodes: any[];
  onPing: (origin: string, destination: string) => void;
  activePath: string[];
}

const NetworkGraph: React.FC<NetworkGraphProps> = ({ nodes, onPing, activePath }) => {
  const getEdgeStyle = (id: string) => ({
    stroke: activePath.includes(id) ? 'lime' : 'black',
    strokeWidth: activePath.includes(id) ? 4 : 2,
  });

  return (
    <div className="flex flex-col items-center justify-center basis-1/2 h-full p-10">
      <h1 className="text-xl font-bold mb-4">Topologia de Rede - Projeto 2</h1>
      <div className="w-full h-full border-2 border-gray-300 rounded-md">
        <ReactFlow
          nodes={nodes}
          edges={initialEdges.map(edge => ({
            ...edge,
            style: getEdgeStyle(edge.id),
            label: edge.weight.toString(), // Add this line to display the weight
            labelStyle: { fill: 'black', fontSize: 12 } // Optional: customize label style
          }))}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

export default NetworkGraph;
