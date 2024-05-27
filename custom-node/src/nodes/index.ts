import type { Node, NodeTypes } from "reactflow";
import { PositionLoggerNode } from "./PositionLoggerNode";


export const initialNodes = [
  // { id: "a", type: "input", position: { x: 0, y: 0 }, data: { label: "wire" } },
  // {
  //   id: "b",
  //   type: "position-logger",
  //   position: { x: -100, y: 100 },
  //   data: { label: "drag me!" },
  // },
  // { id: "c", position: { x: 100, y: 100 }, data: { label: "your ideas" } },
  // {
  //   id: "d",
  //   type: "output",
  //   position: { x: 0, y: 200 },
  //   data: { label: "with React Flow" },
  // },
  // { id: "e", position: { x: 200, y: 200 }, data: { label: "I WANNA SCREAM" } },
  { id: "a1", sourcePosition: 'right', draggable: false, position: { x: 0, y: 0 }, data: { label: "EESA09" } },
  { id: "a2", draggable: false, position: { x: 0, y: 100 }, data: { label: "MATA30" } },
  { id: "a3", draggable: false, position: { x: 0, y: 200 }, data: { label: "PHYA10" } },
  { id: "b1", draggable: false, position: { x: 250, y: 0 }, data: { label: "EESB03" } },
  { id: "b2", draggable: false, position: { x: 250, y: 100 }, data: { label: "STAB22" } },
  { id: "b3", draggable: false, position: { x: 250, y: 200 }, data: { label: "EESB15" } },
  { id: "b4", draggable: false, position: { x: 250, y: 300 }, data: { label: "EESB18" } },
  {
    id: '1',
    type: 'input',
    data: { label: 'Node 1' },
    position: { x: 100, y: 100 },
    sourcePosition: 'right',
  },
] satisfies Node[];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
