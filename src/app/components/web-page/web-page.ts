/**
 * Created by sunjiaqi on 16-8-2.
 */
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector:'web-page',
    template:require('./web-page.html'),
    directives: [ROUTER_DIRECTIVES]
})

export class WebPage{

}