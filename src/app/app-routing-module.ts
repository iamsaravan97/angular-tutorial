import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestSpreadComponent } from './rest-spread/rest-spread.component';

const appRoutes: Routes = [
  {
    path: 'RestSpreadComponent',
    component: RestSpreadComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
