declare module 'bpmn-js' {
  export default class BpmnJS {
    constructor(param?: { container: string });
    importXML(bpmnXML: any): any;
    get(data: string): any;
  }
}
