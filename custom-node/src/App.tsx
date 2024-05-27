import React, { useEffect, useState, useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';

import './updatenode.css';

// Custom Node Component
const CustomNode = ({ data }) => {
  return (
    <div style={{width: '150px'}}>
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
    id: 'a1',
    draggable: false,
    sourcePosition: 'right',
    type: 'input',
    data: { label: 'EESA09' },
    position: { x: 0, y: 0 },
  },
  // Include your custom nodes here
  {
    id: 'customNode1',
    type: 'customNode',
    data: { label1: 'CHMB41', label2: 'Organic Chemistry I'},
    position: { x: 0, y: 300 },
  },
];

const initialEdges = [
  {
    id: 'a1-customNode1',
    source: 'a1',
    type: 'bezier',
    target: 'customNode1',
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

  const onNodeChange = (id, key, value) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) => {
        if (node.id === id) {
          node.data[key] = value;
        }
        return node;
      })
    );
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={{ customNode: CustomNode }} // Registering the custom node type
      fitView
      attributionPosition="bottom-left"
      style={{ backgroundColor: '#F2F4F7'}}
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
