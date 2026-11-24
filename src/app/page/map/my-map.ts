import { Attribute, Component} from '@angular/core';
import { LeafletDirective} from '@bluehalo/ngx-leaflet';
import {latLng, MapOptions, tileLayer} from 'leaflet';

@Component({
  selector: 'app-map',
  imports: [LeafletDirective],
  templateUrl: './my-map.html',
  styleUrl: './my-map.scss',
})

export class MyMap {

public options: MapOptions = 
  { 
    zoom : 6.2,
    center : latLng(46.603354, 1.8883335),
    layers: [
      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
              {attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom :19
              }
      )
    ]  
  };
  constructor()
  {
  } 
}
