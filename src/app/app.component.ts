import { Component } from '@angular/core';
import { 
  map, 
  concatMap, 
  delay, 
  switchMap,
  tap,
} from 'rxjs/operators';
import { 
  Observable, 
  from, 
  zip, 
  timer, 
  of, 
} from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  followersMap = {
    Facebook : ['FB - Sarvesh', 'FB - Abhishek', 'FB - Rahul'],
    Twitter : ['TW - Bhushan', 'TW - Sahil', 'TW - Kaustubh'],
  }
  name = '';
  platform = '';
  constructor() {
    this.sendPromotions();
  }

  /**
   * @params website name 
   * @returns stream containing list of friends for given website
   */
  private getFollowers(website: string) {
    return from(this.followersMap[website]).pipe(
      concatMap( x => of(x).pipe(delay(1000))),
    );
  }

  /** 
   * @returns stream containing list of websites
   */
  private getTrendingPlatform() {
    return from(['Facebook', 'Twitter']).pipe(
      concatMap( x => of(x).pipe(delay(2000))),
    );
  }

  private sendPromotions() {
    let subscription;
    this.getTrendingPlatform().pipe(
      tap((platform) => this.platform = platform),
      switchMap(platform => this.getFollowers(platform) ),
    ).subscribe((follower: string)=> {
      this.name = follower;
      console.log(follower);
    }); 
  }
}
