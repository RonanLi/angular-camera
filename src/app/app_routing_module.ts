import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';

/*甜园科技路径*/
import {CustomerComponent} from './smartHome/customer/customer.componment';
import {DeviceComponent} from './smartHome/device/device.componment';
import {LeasedLogComponent} from './smartHome/leasedLog/leasedLog.componment';
import {RolesComponent} from './smartHome/roles/roles.componment';
import {SubaccountComponent} from './smartHome/subaccount/subaccount.componment';
import {RePwdComponent} from './smartHome/rePwd/rePwd.componment';

import {GroupComponent} from './smartHome/group/group.componment';
/*路由守卫*/

import {CanActivate} from '@angular/router';
// import { AuthGuard } from './services/apiKey.service';
import {RoutGuard} from './services/routService';
/*
const routes: Routes = [
 { path: 'smartHome/customer', component: CustomerComponent },
 { path: 'smartHome/device', component: DeviceComponent },
 { path: 'smartHome/leasedLog', component: LeasedLogComponent },
 { path: 'smartHome/roles', component: RolesComponent },
 { path: 'smartHome/subaccount', component: SubaccountComponent },
 { path: 'smartHome/rePwd', component: RePwdComponent },
];
*/

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},


  {
    path: '',
    canActivate: [RoutGuard],
    children: [
      {
        path: '',
        children: [
          {path: '', redirectTo: '', pathMatch: 'full'},
          {path: 'index', component: IndexComponent},

          {path: 'smartHome/customer', component: CustomerComponent},
          {path: 'smartHome/device', component: DeviceComponent},
          {path: 'smartHome/leasedLog', component: LeasedLogComponent},
          {path: 'smartHome/roles', component: RolesComponent},
          {path: 'smartHome/subaccount', component: SubaccountComponent},
          {path: 'smartHome/rePwd', component: RePwdComponent},
          {path: 'smartHome/group', component: GroupComponent},
        ],
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],

  exports: [RouterModule]
})
export class AppRoutingModule {
}



