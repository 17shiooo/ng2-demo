/**
 * Created by sunjiaqi on 16-6-27.
 */
import {provideRouter,RouterConfig} from '@angular/router';
import {WebPage} from './components/web-page/web-page';
import {Profile} from './components/profile/profile';
import {CountDown} from './components/count-down/countdown';


export const MainRoutes:RouterConfig = [
    {path: 'webpage', component: WebPage},
    {path: 'profile', component: Profile},
    {path: 'countdown', component: CountDown},
    {path: '', redirectTo: '/webpage',pathMatch:'full'},
];

export const APP_ROUTER_PROVIDERS=[
    provideRouter(MainRoutes)
];