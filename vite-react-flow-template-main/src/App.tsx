

import React, { useEffect, useState, useCallback } from 'react';
import ReactFlow, { Handle, Position, useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';

import './updatenode.css';

const ALevel = ({ data, isConnectable }) => {
  return (
    <div style={{width: '150px'}}>
      <Handle type="target" id='t' position={Position.Top} isConnectable={isConnectable} style={{opacity: 0}} />
      <Handle type="target" id='l' position={Position.Left} isConnectable={isConnectable} style={{opacity: 0}} />
      <Handle type="source" id='b' position={Position.Bottom} isConnectable={isConnectable} style={{opacity: 0}} />
      <Handle type="source" id='r' position={Position.Right} isConnectable={isConnectable} style={{opacity: 0}} />
      <input
        type="text"
        value={data.label1}
        onChange={(e) => data.onChange('label1', e.target.value)}
        style={{ display: 'block', width: '100%', color: '#FFF', boxSizing: 'border-box', border: '0', borderRadius: '0', backgroundColor: '#DE2833', padding: '5px', textAlign: 'center' }}
      />
      <input
        type="text"
        value={data.label2}
        onChange={(e) => data.onChange('label2', e.target.value)}
        style={{ display: 'block', width: '100%', fontSize: '10px', boxSizing: 'border-box', border: '0', borderRadius: '0', backgroundColor: '#FFF', padding: '12px', textAlign: 'center' }}
      />
    </div>
  );
};

const BLevel = ({ data, isConnectable }) => {
  return (
    <div style={{width: '150px'}}>
      <Handle type="target" id='t' position={Position.Top} isConnectable={isConnectable} style={{opacity: 0}} />
      <Handle type="target" id='l' position={Position.Left} isConnectable={isConnectable} style={{opacity: 0}} />
      <Handle type="source" id='b' position={Position.Bottom} isConnectable={isConnectable} style={{opacity: 0}} />
      <Handle type="source" id='r' position={Position.Right} isConnectable={isConnectable} style={{opacity: 0}} />
      <input
        type="text"
        value={data.label1}
        onChange={(e) => data.onChange('label1', e.target.value)}
        style={{ display: 'block', width: '100%', color: '#FFF', boxSizing: 'border-box', border: '0', borderRadius: '0', backgroundColor: '#DE2833', padding: '5px', textAlign: 'center' }}
      />
      <input
        type="text"
        value={data.label2}
        onChange={(e) => data.onChange('label2', e.target.value)}
        style={{ display: 'block', width: '100%', fontSize: '10px', boxSizing: 'border-box', border: '0', borderRadius: '0', backgroundColor: '#FFF', padding: '12px', textAlign: 'center' }}
      />
    </div>
  );
};

const initialNodes = [
  {
    id: 'a4',
    type: 'a_level',
    data: { label1: 'CHMB41', label2: 'Organic Chemistry I'},
    position: { x: 0, y: -100 },
  },
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
    id: 'a4-b1',
    source: 'a4',
    sourceHandle: 'r',
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
      nodeTypes={{ a_level: ALevel, b_level: BLevel }}
      elementsSelectable={false}
      style={{ backgroundColor: '#F2F4F7' }}
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
