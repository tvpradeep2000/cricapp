import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterInProgress'
})
export class FilterInProgressPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(scores: any[]): any[] {
    if (!scores) return [];
    return scores.filter(score => score.matchStarted && !score.matchEnded);
  }


}
