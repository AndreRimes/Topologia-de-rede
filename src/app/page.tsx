"use client";

import Form from '@/components/Form';
import '@xyflow/react/dist/style.css';
import React, { useState } from 'react';
import { initialNodes, initialEdges} from '@/utils/nodes';
import { findPath } from '@/utils/dfs';
import NetworkGraph from '@/components/Graph';

const timePerWeightUnit = 100;

export default function Home() {
  const [nodes, setNodes] = React.useState(initialNodes);
  const [activePath, setActivePath] = useState<string[]>([]);
  const [result, setResult] = useState<string | undefined>(undefined);

  const executePing = (origem: string, destino: string) => {
    const nodePath = findPath(origem, destino);
    const path = [];
  
    let pathWeightSum = 0;
  
    for (let i = 1; i < nodePath.length; i++) {
      let edgeId = nodePath[i - 1] + '-' + nodePath[i];
  
      if (nodePath[i - 1][0] === 'h' && nodePath[i][0] === 'e') {
        edgeId = nodePath[i] + '-' + nodePath[i - 1];
      }
  
      if (nodePath[i - 1][0] === 'e' && nodePath[i][0] === 'a') {
        edgeId = nodePath[i] + '-' + nodePath[i - 1];
      }
  
      if (nodePath[i - 1][0] === "a" && nodePath[i] === "root") {
        edgeId = nodePath[i] + '-' + nodePath[i - 1];
      }
  
      path.push(edgeId);
      const edge = initialEdges.find((e) => e.id === edgeId);
      if (edge) {
        pathWeightSum += edge.weight;
      }
    }
  
    const time = pathWeightSum * timePerWeightUnit;
  
    path.forEach((edgeId, index) => {
      setTimeout(() => {
        setActivePath((prev) => [...prev, edgeId]);
        if (index === path.length - 1) {
          setTimeout(() => {
            setActivePath([]);
            setResult(`64 bytes from ${destino} time= ${time}ms`);
          }, 1000);
        }
      }, index * 1000);
    });
  };

  return (
    <div className='flex flex-row items-center justify-center w-screen h-screen p-5'>
      <NetworkGraph nodes={nodes} activePath={activePath} onPing={executePing}  />
      <Form onPing={executePing}  result={result}/>
    </div>
  );
}
