import { Component } from '@angular/core';
import { MyMapView } from '../../component/my-map-view/my-map-view';
import { Search } from '../../component/search/search';
import { Overlay } from '../../component/overlay/overlay';

@Component({
  selector: 'app-home',
  imports: [MyMapView, Search, Overlay],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
