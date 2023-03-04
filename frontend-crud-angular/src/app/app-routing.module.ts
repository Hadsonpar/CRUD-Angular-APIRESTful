import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListarComponent } from './components/listar/listar.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},

  {path: 'list', component: ListarComponent},
  {path: 'edit/:cod', component: EditComponent},
  {path: 'add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }