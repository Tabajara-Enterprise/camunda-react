declare module 'bpmn-js' {
  export default class BpmnJS {
    constructor(param?: { container: string; height?: number; width?: number });
    importXML(bpmnXML: any): any;
    get(data: string): any;
  }
}
