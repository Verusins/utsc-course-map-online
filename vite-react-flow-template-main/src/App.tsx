

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
];

const initialEdges = [
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
    id: 'a3-a2',
    source: 'a3',
    type: 'bezier',
    target: 'a2',
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
          <label>hidden:</label>
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
