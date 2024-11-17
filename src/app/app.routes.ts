import { InsightsComponent } from './insights/insights.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { DescobrirComponent } from './descobrir/descobrir.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', },
  { path: 'home', component: HomeComponent, },
  { path: 'chat', component: ChatComponent },
  { path: 'insights', component: InsightsComponent },
  { path: 'descobrir', component: DescobrirComponent },
];
