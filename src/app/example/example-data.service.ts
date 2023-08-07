import { Injectable } from '@angular/core';
import { SectionData } from './types';

const KeyName = 'example-data';

@Injectable({
  providedIn: 'root',
})
export class ExampleDataService {
  async getData(): Promise<SectionData> {
    const result = (
      JSON.parse(localStorage.getItem(KeyName) ?? '[[0]]') as number[][]
    ).map((ar) => ar.map((value) => ({ value })));
    return result;
  }

  async setData(data: SectionData): Promise<void> {
    const result = data.map((ar) => ar.map((item) => item.value));
    localStorage.setItem(KeyName, JSON.stringify(result));
  }
}
