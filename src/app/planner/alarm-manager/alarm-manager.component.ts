import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { Alarm } from '../planner.component';
import { Router } from '@angular/router';

export interface AlarmData {
  checked: Boolean,
  name: String,
  description: String,
  date: Date,
  hour: Date,
  priorityLevel: number
}

@Component({
  selector: 'alarm-manager',
  templateUrl: 'alarm-manager.component.html',
  standalone: true,
  styleUrls: ['alarm-manager.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AlarmManagerComponent {

  @Input() alarmList : Alarm[] = [];
  @Input() selectedAlarm : number = 0;

  alarmData : AlarmData = {
    checked: false,
    name: "",
    description: "",
    date: new Date(),
    hour: new Date(),
    priorityLevel: 2
  }

  @Input() testValue: String = ""

  // update(event: Event, test?: String) {
  //   console.log(this.alarmData.name);
  // }

  onDescriptionChange(event: Event, field: String) {
    const inputElement = event.target as HTMLInputElement;
  }

  update(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    console.log('Input value changed:', inputElement.value);
  }

  create (event: Event): void {
    this.alarmList.push(this.alarmData);
    console.log(this.alarmData);
    console.log(this.testValue);
  }

  cancel(event: Event): void {
    console.log(this.alarmList);
  }

  delete(event: Event): void {
    console.log(this.alarmList);
  }  
}
