import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appRandomColors]'
})

export class RandomColorsDirective {

    possibleColor = [
        'darksalmon', 
        'hotpink', 
        'lightskyblue', 
        'goldenrod', 
        'peachpuff', 
        'mediumpringgreen', 
        'cornflowerblue', 
        'blanchedalmond', 
        'lightslategrey'
    ];

    @HostBinding('style.color') color: string;
    @HostBinding('style.border-color') borderColor: string;

    @HostListener('keydown') setColor() {
        console.log(Math.floor(Math.random() * this.possibleColor.length));
        const colorIndex = Math.floor(Math.random() * this.possibleColor.length);
        this.color = this.borderColor =  this.possibleColor[colorIndex];
    }

    constructor() {}
}