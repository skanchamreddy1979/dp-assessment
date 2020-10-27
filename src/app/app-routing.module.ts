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
  },
  {
    path: 'additional-device',
    loadChildren: () => import('./pages/additional-device/additional-device.module').then(m => m.AdditionalDevicePageModule)
  },
  {
    path: 'dynamic-theme-switchers',
    loadChildren: () => import('./pages/dynamic-theme-switchers/dynamic-theme-switchers.module').
      then(m => m.DynamicThemeSwitchersPageModule)
  },
  {
    path: 'initial-security',
    loadChildren: () => import('./pages/initial-security/initial-security.module').then(m => m.InitialSecurityPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
