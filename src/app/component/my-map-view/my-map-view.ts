import { Attribute, Component} from '@angular/core';
import { LeafletDirective} from '@bluehalo/ngx-leaflet';
import {latLng, MapOptions, tileLayer} from 'leaflet';
@Component({
  selector: 'app-my-map-view',
  imports: [LeafletDirective],
  templateUrl: './my-map-view.html',
  styleUrl: './my-map-view.scss',
})
export class MyMapView {
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