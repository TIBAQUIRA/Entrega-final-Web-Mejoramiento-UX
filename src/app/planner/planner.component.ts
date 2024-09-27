import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AlarmManagerComponent } from './alarm-manager/alarm-manager.component';
import { Router } from '@angular/router';
import { Timestamp } from 'rxjs';

export interface Task {
  checked: boolean,
  name: String,
  collaborator: String,
}
export interface Alarm {
  checked: Boolean,
  name: String,
  description: String,
  date: Date,
  hour: Date,
  priorityLevel: number
}

export interface PlannerData {
  tasks: Task[],
  alarms: Alarm[],
}
@Component({
  selector: 'planner',
  templateUrl: './planner.component.html',
  standalone: true,
  styleUrls: ['./planner.component.css'],
  imports: [ AlarmManagerComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PlannerComponent {
  
  onEditAlarm = 1;
  selectedAlarm = -1;

  plannerData: PlannerData = {
    tasks: [
      { checked: false, name: 'Actividad 1', collaborator: 'A'},
      { checked: false, name: 'Actividad 2', collaborator: 'B'},
      { checked: false, name: 'Actividad 3', collaborator: 'C'},
      { checked: false, name: 'Actividad 4', collaborator: 'D'},
      { checked: false, name: 'Actividad 5', collaborator: 'E'},
    ],
    alarms : [
      { checked: false, name: 'Alarma 1', description: 'Desc 1', date: new Date(), hour: new Date(), priorityLevel: 1 },
      { checked: false, name: 'Alarma 2', description: 'Desc 2', date: new Date(), hour: new Date(), priorityLevel: 2 },
      { checked: false, name: 'Alarma 3', description: 'Desc 3', date: new Date(), hour: new Date(), priorityLevel: 1 },
      { checked: false, name: 'Alarma 4', description: 'Desc 4', date: new Date(), hour: new Date(), priorityLevel: 3 },
      { checked: false, name: 'Alarma 5', description: 'Desc 5', date: new Date(), hour: new Date(), priorityLevel: 2 },
    ]
  }

  createAlarm(event: Event): void {
    this.onEditAlarm = 2;
  }

  createAlarmStop(event: Event): void {
    this.onEditAlarm = 3;
  }

  updateAlarm(event: Event, alarmIndex: number): void {
    this.selectedAlarm = alarmIndex;
    this.onEditAlarm = 3;
  }
}