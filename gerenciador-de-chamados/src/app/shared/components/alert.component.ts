import { Component } from "@angular/core";
import { ToastModule } from "primeng/toast";

@Component({
    selector: 'app-alert',
    standalone: true,
    imports: [ToastModule],
    template: './ticket-add.component.html'
})
export class AlertComponent {}