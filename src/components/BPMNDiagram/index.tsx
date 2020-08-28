import React, { useRef, useState, useEffect, useCallback } from 'react';
import BpmnJS from 'bpmn-js';

interface BPMNDiagramProps {
  instanceId: string;
}

export const BPMNDiagram: React.FC<BPMNDiagramProps> = ({ instanceId }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // buscar diagrama por instanceID
    console.log(instanceId);
    // openDiagram(bpmnXML, tasks)
  }, [instanceId]);

  const openDiagram = useCallback(async (bpmnXML: any, tasks: any[]) => {
    try {
      const bpmnViewer = new BpmnJS();
      await bpmnViewer.importXML(bpmnXML);
      const canvas = bpmnViewer.get('canvas');
      canvas.zoom('fit-viewport');

      tasks.forEach(task => {
        canvas.addMarker(task.taskDefinitionKey, 'needs-discussion');
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div ref={containerRef}>
      <p>Diagrama</p>
    </div>
  );
};
