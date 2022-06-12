import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit(){
    navigator.geolocation.getCurrentPosition((position) => {
      document
        .querySelector('a-text')
        .setAttribute(
          'gps-entity-place',
          `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude};`
        );
    });
  }
}
