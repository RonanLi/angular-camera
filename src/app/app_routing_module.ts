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
import {DebugLogComponent} from './smartHome/debugLog/debugLog';

import {GroupComponent} from './smartHome/group/group.componment';
import {DownloadComponent} from './smartHome/download/download';

/*路由守卫*/

import {RoutGuard} from './services/routService';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'download', component:DownloadComponent},
  {path: 'index', component: IndexComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full'},

  {
    path: '',
    canActivate: [RoutGuard],
    children: [
      {
        path: '',
        children: [
          {path: '', redirectTo: 'index', pathMatch: 'full'},
          // {path: 'index', component: IndexComponent},
          {path: 'smartHome/customer', component: CustomerComponent},
          {path: 'smartHome/device', component: DeviceComponent},
          {path: 'smartHome/leasedLog', component: LeasedLogComponent},
          {path: 'smartHome/roles', component: RolesComponent},
          {path: 'smartHome/subaccount', component: SubaccountComponent},
          {path: 'smartHome/rePwd', component: RePwdComponent},
          {path: 'smartHome/group', component: GroupComponent},
          {path: 'smartHome/debugLog', component: DebugLogComponent},
          {path: '**', redirectTo: 'index', pathMatch: 'full'},
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



