import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'binding', loadChildren: './angular/binding/binding.module#BindingPageModule' },
  { path: 'ng-for', loadChildren: './angular/ng-for/ng-for.module#NgForPageModule' },
  { path: 'ng-if', loadChildren: './angular/ng-if/ng-if.module#NgIfPageModule' },
  { path: 'ng-switch', loadChildren: './angular/ng-switch/ng-switch.module#NgSwitchPageModule' },
  { path: 'ng-class', loadChildren: './angular/ng-class/ng-class.module#NgClassPageModule' },
  { path: 'form', loadChildren: './angular/form/form.module#FormPageModule' },
  { path: 'metodos', loadChildren: './angular/metodos/metodos.module#MetodosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
