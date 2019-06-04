import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';

import {HttpService} from '../http.service';
import {HeaderComponent} from './header.component';
import {MyCabinetComponent} from '../my-cabinet/my-cabinet.component';
import {ScheduleComponent} from '../schedule/schedule.component';
import {GalleryComponent} from '../gallery/gallery.component';
import {ListComponent} from '../gallery/list/list.component';
import {CardsComponent} from '../gallery/cards/cards.component';
const GalleryRoutes: Routes = [
  { path: 'list', component: ListComponent},
  { path: 'cards/:id', component: CardsComponent},
];

const routes: Routes = [
  {path: '', component: MyCabinetComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'gallery', component: GalleryComponent, children: GalleryRoutes}
];
@NgModule({
  declarations: [
    HeaderComponent,
    MyCabinetComponent,
    ScheduleComponent,
    GalleryComponent,
    ListComponent,
    CardsComponent,
  ],
  exports: [HeaderComponent, RouterModule],
  imports: [
    CommonModule, RouterModule.forRoot(routes), MaterialModule, HttpClientModule
  ],
  providers: [HttpService]
})
export class HeaderModule {
}
