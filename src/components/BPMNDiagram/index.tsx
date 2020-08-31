import React, { useRef, useEffect } from 'react';
import BpmnJS from 'bpmn-js';

import styled from 'styled-components';

const Container = styled.div`
  a {
    display: none;
  }
`;

interface BPMNDiagramProps {
  instanceId?: string;
  xml: any;
}

export const BPMNDiagram: React.FC<BPMNDiagramProps> = ({ xml }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    async function openDiagram(): Promise<void> {
      try {
        const bpm = new BpmnJS({ container: '#canvas' });
        await bpm.importXML(xml);
        const canvas = bpm.get('canvas');
        canvas.zoom('fit-viewport');
      } catch (err) {
        console.log(err);
      }
    }

    openDiagram();
  }, [xml]);

  return <Container ref={containerRef} id="canvas" />;
};
