import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AscentisMessageService {
  ascentisMessages: string[] = [];

  add(ascentisMessage: string) {
    this.ascentisMessages.push(ascentisMessage);
  }

  clear() {
    this.ascentisMessages = [];
  }
}