import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective {

    @Input() highlightColor: string;

    @HostListener('mouseover') onMouseOver() {
        console.log('mouse over');
        this.isHovering = true;
        this.highlight(this.highlightColor || 'red')
    }

    @HostBinding('class.active') isHovering: boolean // law 3ayz check b class active (addClass active)

    @HostListener('mouseleave') onMouseLeave() {
        console.log('mouse leave');
        this.isHovering = false
        this.highlight('orange')
    }

    
    constructor(private el: ElementRef, private renderer: Renderer2) {

        el.nativeElement.style.backgroundColor = 'green'; // for browser only
        renderer.setStyle(el.nativeElement, 'backgroundColor', 'blue')  // for browser and other
        renderer.listen(el.nativeElement, 'click', e => console.log('clicked',e)); //Event Listner
    }
    highlight(color: string){
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color)
    }
}