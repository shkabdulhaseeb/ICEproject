import {Directive, ElementRef} from "@angular/core";

@Directive({
    selector: 'div[class=error-div]'
})
export class FocusOnErrorDirective {

    constructor(public elementRef: ElementRef) {
    }

    trigger() {
        this.elementRef.nativeElement.scrollIntoView(false, {behavior: "smooth"});
    }

}
