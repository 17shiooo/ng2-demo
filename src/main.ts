import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {provideForms} from '@angular/forms';
import {SeedApp} from './app/seed-app';
import {APP_ROUTER_PROVIDERS} from './app/main.routes';


bootstrap(SeedApp, [
    HTTP_PROVIDERS, APP_ROUTER_PROVIDERS, provideForms()
]).catch(err => console.error(err));