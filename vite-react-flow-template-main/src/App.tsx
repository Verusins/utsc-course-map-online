

import React, { useEffect, useState, useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';

import './updatenode.css';

const initialNodes = [
  {
    id: 'a1',
    draggable: false,
    sourcePosition: 'right',
    type: 'input',
    data: { label: 'EESA09' },
    position: { x: 0, y: 0 },
  },
  {
    id: 'a2',
    draggable: false,
    sourcePosition: 'right',
    targetPosition: 'bottom',
    data: { label: 'MATA30' },
    position: { x: 0, y: 100 },
  },
  {
    id: 'a3',
    draggable: false,
    type: 'input',
    sourcePosition: 'top',
    data: { label: 'PHYA10' },
    position: { x: 0, y: 200 },
  },
  {
    id: 'b1',
    draggable: false,
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'EESB03' },
    position: { x: 250, y: 0 },
  },
  {
    id: 'b2',
    draggable: false,
    type: 'input',
    sourcePosition: 'right',
    data: { label: 'STAB22'},
    position: { x: 250, y: 100 },
  },
  {
    id: 'b3',
    draggable: false,
    type: 'input',
    sourcePosition: 'right',
    data: { label: 'EESB15' },
    position: { x: 250, y: 200 },
  },
  {
    id: 'b4',
    draggable: false,
    type: 'input',
    sourcePosition: 'right',
    data: { label: 'EESB18' },
    position: { x: 250, y: 300 },
  },
  {
    id: 'c1',
    draggable: false,
    type: 'input',
    sourcePosition: 'right',
    data: { label: 'EESC03' },
    position: { x: 500, y: 0 },
  },
  {
    id: 'c2',
    draggable: false,
    type: 'input',
    sourcePosition: 'right',
    data: { label: 'EESC13' },
    position: { x: 500, y: 100 },
  },
  {
    id: 'c3',
    draggable: false,
    type: 'output',
    targetPosition: 'left',
    data: { label: 'EESC19' },
    position: { x: 500, y: 200 },
  },
  {
    id: 'c4',
    draggable: false,
    type: 'output',
    targetPosition: 'left',
    data: { label: 'EESC25' },
    position: { x: 500, y: 300 },
  },
  {
    id: 'd1',
    draggable: false,
    type: 'output',
    targetPosition: 'left',
    data: { label: 'EESD06' },
    position: { x: 750, y: -50 },
  },
  {
    id: 'd2',
    draggable: false,
    type: 'output',
    targetPosition: 'left',
    data: { label: 'EESD31' },
    position: { x: 750, y: 50 },
  },
  {
    id: 'd3',
    draggable: false,
    type: 'output',
    targetPosition: 'left',
    data: { label: 'ESTD19' },
    position: { x: 750, y: 150 },
  },
  {
    id: 'd4',
    draggable: false,
    type: 'output',
    targetPosition: 'left',
    data: { label: 'EESD28' },
    position: { x: 750, y: 250 },
  },
];

const initialEdges = [
  {
    id: 'a3-a2',
    source: 'a3',
    type: 'bezier',
    target: 'a2',
  },
  {
    id: 'a1-b1',
    source: 'a1',
    type: 'bezier',
    target: 'b1',
    animated: true,
  },
  {
    id: 'a2-b1',
    source: 'a2',
    type: 'bezier',
    target: 'b1',
    animated: true,
  },
  {
    id: 'b1-c3',
    source: 'b1',
    type: 'bezier',
    target: 'c3',
    animated: true,
  },
  {
    id: 'b1-c4',
    source: 'b1',
    type: 'bezier',
    target: 'c4',
    animated: true,
  },
  {
    id: 'a1-c4',
    source: 'a1',
    type: 'bezier',
    target: 'c4',
    animated: true,
  },
  {
    id: 'b1-d1',
    source: 'b1',
    type: 'bezier',
    target: 'd1',
    animated: true,
  },
  {
    id: 'b1-d2',
    source: 'b1',
    type: 'bezier',
    target: 'd2',
    animated: true,
  },
  {
    id: 'b2-d2',
    source: 'b2',
    type: 'bezier',
    target: 'd2',
    animated: true,
  },
  {
    id: 'b2-d3',
    source: 'b2',
    type: 'bezier',
    target: 'd3',
    animated: true,
  },
  {
    id: 'a2-d4',
    source: 'a2',
    type: 'bezier',
    target: 'd4',
    animated: true,
  },
  {
    id: 'b2-d4',
    source: 'b2',
    type: 'bezier',
    target: 'd4',
    animated: true,
  },
];

const HorizontalFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), []);

  const [nodeHidden, setNodeHidden] = useState(false);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === 'b1') {
          // when you update a simple type you can just update the value
          node.hidden = nodeHidden;
        }

        return node;
      })
    );
    setEdges((eds) =>
      eds.map((edge) => {
        if (edge.id === 'a1-b1') {
          edge.hidden = nodeHidden;
        }

        return edge;
      })
    );
  }, [nodeHidden, setNodes, setEdges]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      attributionPosition="bottom-left" 
    >
      <div className="updatenode__controls">
        <div className="updatenode__checkboxwrapper">
          <label>Hidden EESB03:</label>
          <input
            type="checkbox"
            checked={nodeHidden}
            onChange={(evt) => setNodeHidden(evt.target.checked)}
          />
        </div>
      </div>
    </ReactFlow>
  );
};

export default HorizontalFlow;
