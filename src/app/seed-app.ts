/**
 * Created by sunjiaqi on 16-5-10.
 */
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
    selector: 'seed-app',
    template: require('./seed-app.html'),
    styles: [require('./seed-app.css').toString()],
    directives: [ROUTER_DIRECTIVES]
})

export class SeedApp {
    private menus:any = [
        {name: '网址', path: ['/webpage']},
        {name: '简介', path: ['/profile']},
        {name: '倒计时', path: ['/countdown']}
    ];

    constructor() {
    }

}