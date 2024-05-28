

import React, { useEffect, useState, useCallback } from 'react';
import ReactFlow, { Handle, Position, useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';

import './updatenode.css';

const ALevel = ({ data, isConnectable }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleNodeClick = () => {
    setIsSelected(true); // Set isSelected to true when the node is clicked
  };

  return (
    <div style={{ width: isSelected ? '200px' : '150px' }} onClick={handleNodeClick}>
      <Handle type="target" id='t' position={Position.Top} isConnectable={isConnectable} style={{opacity: 0}} />
      <Handle type="target" id='l' position={Position.Left} isConnectable={isConnectable} style={{opacity: 0}} />
      <Handle type="source" id='b' position={Position.Bottom} isConnectable={isConnectable} style={{opacity: 0}} />
      <Handle type="source" id='r' position={Position.Right} isConnectable={isConnectable} style={{opacity: 0}} />
      <input
        type="text"
        value={data.course}
        onChange={(e) => data.onChange('label1', e.target.value)}
        style={{ display: 'block', width: '100%', color: '#FFF', boxSizing: 'border-box', border: '0', borderRadius: '0', backgroundColor: '#007FA3', padding: '5px', textAlign: 'center' }}
      />
      <input
        type="text"
        value={data.title}
        onChange={(e) => data.onChange('label2', e.target.value)}
        style={{ display: 'block', width: '100%', fontSize: '9px', boxSizing: 'border-box', border: '0', borderRadius: '0', backgroundColor: '#FFF', padding: '12px', textAlign: 'center' }}
      />
      {isSelected && ( // Conditionally render the third input field when the node is selected
        <input
          type="text"
          value={data.thirdField}
          onChange={(e) => data.onChange('label3', e.target.value)}
          style={{
            display: 'block',
            width: '100%',
            fontSize: '9px',
            boxSizing: 'border-box',
            border: '0',
            borderRadius: '0',
            backgroundColor: '#F0F0F0',
            padding: '12px',
            textAlign: 'center',
          }}
        />
      )}
    </div>
  );
};

const BLevel = ({ data, isConnectable }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleNodeClick = () => {
    setIsSelected(true); // Set isSelected to true when the node is clicked
  };

  return (
    <div style={{ width: isSelected ? '200px' : '150px' }} onClick={handleNodeClick}>
      <Handle type="target" id='t' position={Position.Top} isConnectable={isConnectable} style={{opacity: 0}} />
      <Handle type="target" id='l' position={Position.Left} isConnectable={isConnectable} style={{opacity: 0}} />
      <Handle type="source" id='b' position={Position.Bottom} isConnectable={isConnectable} style={{opacity: 0}} />
      <Handle type="source" id='r' position={Position.Right} isConnectable={isConnectable} style={{opacity: 0}} />
      <input
        type="text"
        value={data.course}
        onChange={(e) => data.onChange('label1', e.target.value)}
        style={{ display: 'block', width: '100%', color: '#FFF', boxSizing: 'border-box', border: '0', borderRadius: '0', backgroundColor: '#DE2833', padding: '5px', textAlign: 'center' }}
      />
      <input
        type="text"
        value={data.title}
        onChange={(e) => data.onChange('label2', e.target.value)}
        style={{ display: 'block', width: '100%', fontSize: '9px', boxSizing: 'border-box', border: '0', borderRadius: '0', backgroundColor: '#FFF', padding: '12px', textAlign: 'center' }}
      />
      {isSelected && ( // Conditionally render the third input field when the node is selected
        <input
          type="text"
          value={data.thirdField}
          onChange={(e) => data.onChange('label3', e.target.value)}
          style={{
            display: 'block',
            width: '100%',
            fontSize: '9px',
            boxSizing: 'border-box',
            border: '0',
            borderRadius: '0',
            backgroundColor: '#F0F0F0',
            padding: '12px',
            textAlign: 'center',
          }}
        />
      )}
    </div>
  );
};

const initialNodes = [
  {
    id: 'a1',
    draggable: false,
    type: 'a_level',
    data: { course: 'EESA09', title: 'Wind'},
    position: { x: 0, y: 0 },
  },
  {
    id: 'a2',
    draggable: false,
    type: 'a_level',
    data: { course: 'MATA30', title: 'Calculus I for Physical Sciences'},
    position: { x: 0, y: 100 },
  },
  {
    id: 'a3',
    draggable: false,
    type: 'a_level',
    data: { course: 'PHYA10', title: 'Physics I for Physical Sciences'},
    position: { x: 0, y: 200 },
  },
  {
    id: 'b1',
    draggable: false,
    type: 'b_level',
    data: { course: 'EESB03', title: 'Principles of Climatology'},
    position: { x: 250, y: -50 },
  },
  {
    id: 'b2',
    draggable: false,
    type: 'b_level',
    data: { course: 'STAB22', title: 'Principles of Climatology'},
    position: { x: 250, y: 50 },
  },
  {
    id: 'b3',
    draggable: false,
    type: 'b_level',
    data: { course: 'EESB15', title: 'Earth History'},
    position: { x: 250, y: 150 },
  },
  {
    id: 'b4',
    draggable: false,
    type: 'b_level',
    data: { course: 'EESB18', title: 'Natural Hazards'},
    position: { x: 250, y: 250 },
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
    targetHandle: 'l',
    animated: true,
  },
  {
    id: 'a3-a2',
    source: 'a2',
    target: 'a3',
  },
  {
    id: 'a1-b1',
    source: 'a1',
    sourceHandle: 'r',
    type: 'bezier',
    target: 'b1',
    targetHandle: 'l',
    animated: true,
  },
  {
    id: 'a2-b1',
    source: 'a2',
    sourceHandle: 'r',
    type: 'bezier',
    target: 'b1',
    targetHandle: 'l',
    animated: true,
  },
  {
    id: 'b1-c3',
    source: 'b1',
    sourceHandle: 'r',
    type: 'bezier',
    target: 'c3',
    targetHandle: 'l',
    animated: true,
  },
  {
    id: 'b1-c4',
    source: 'b1',
    sourceHandle: 'r',
    type: 'bezier',
    target: 'c4',
    animated: true,
  },
  {
    id: 'a1-c4',
    source: 'a1',
    sourceHandle: 'r',
    type: 'bezier',
    target: 'c4',
    animated: true,
  },
  {
    id: 'b1-d1',
    source: 'b1',
    sourceHandle: 'r',
    type: 'bezier',
    target: 'd1',
    animated: true,
  },
  {
    id: 'b1-d2',
    source: 'b1',
    sourceHandle: 'r',
    type: 'bezier',
    target: 'd2',
    animated: true,
  },
  {
    id: 'b2-d2',
    source: 'b2',
    sourceHandle: 'r',
    type: 'bezier',
    target: 'd2',
    animated: true,
  },
  {
    id: 'b2-d3',
    source: 'b2',
    sourceHandle: 'r',
    type: 'bezier',
    target: 'd3',
    animated: true,
  },
  {
    id: 'a2-d4',
    source: 'a2',
    sourceHandle: 'r',
    type: 'bezier',
    target: 'd4',
    animated: true,
  },
  {
    id: 'b2-d4',
    source: 'b2',
    sourceHandle: 'r',
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
        if (node.id === 'b1')
          node.hidden = nodeHidden;
        if (node.id === 'c3')
          node.hidden = nodeHidden;
        if (node.id === 'c4')
          node.hidden = nodeHidden;
        if (node.id === 'd1')
          node.hidden = nodeHidden;
        if (node.id === 'd2')
          node.hidden = nodeHidden;

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
      style={{ backgroundColor: '#F2F4F7' }}
      fitView
      attributionPosition="bottom-left" 
    >
      <div className="updatenode__controls">
        <div className="updatenode__checkboxwrapper">
          <label>Hidden EESB03 and after:</label>
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
