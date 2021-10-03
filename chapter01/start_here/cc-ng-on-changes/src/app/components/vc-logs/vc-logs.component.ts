import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss']
})
export class VcLogsComponent implements OnInit, OnChanges {
  @Input() vName;
  logs: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  /* ngOnChanges is one of the many life cycle hooks Angular provides out of the box. It triggers even before the
     ngOnInit hook. So, you get the initial values in the first call and the updated values later on. Whenever any of
     the inputs change, the ngOnChanges callback is triggered with SimpleChanges and you can get the previous value,
     the current value, and a Boolean representing whether this is the first change to the input (that is, the initial
     value). When we update the value of the vName input in the parent, ngOnChanges gets called with the updated value.
     Then, based on the situation, we add an appropriate log into our logs array and display it on the UI.
   */
  ngOnChanges(changes: SimpleChanges) {
    const currValue = changes.vName.currentValue;
    if(changes.vName.isFirstChange()) {
      this.logs.push(`initial version is ${currValue.trim()}`);
    } else {
      this.logs.push(`version changed to ${currValue.trim()}`)
    }
  }

}
