import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationPageModule)
  },
  {
    path: 'steady-home',
    loadChildren: () => import('./pages/steady-home/steady-home.module').then(m => m.SteadyHomePageModule)
  },
  {
    path: 'assessment',
    loadChildren: () => import('./pages/assessment/assessment.module').then(m => m.AssessmentPageModule)
  },  {
    path: 'loginext',
    loadChildren: () => import('./pages/loginext/loginext/loginext.module').then( m => m.LoginextPageModule)
  },
  {
    path: 'accessibility',
    loadChildren: () => import('./pages/accessibility/accessibility.module').then( m => m.AccessibilityPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
