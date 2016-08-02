/**
 * Created by sunjiaqi on 16-8-2.
 */
import {Component,OnDestroy} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector:'count-down',
    template:require('./countdown.html'),
    directives:[ROUTER_DIRECTIVES]
})

export class CountDown implements OnDestroy{
    private countdown_number:number=10;
    private countdown_time;

    ngOnDestroy(){
        clearInterval(this.countdown_time);
    }

    startCountdown(){
        this.countdown_time=setInterval(()=>{
            this.countdown_number--;
        },1000);
    }
}