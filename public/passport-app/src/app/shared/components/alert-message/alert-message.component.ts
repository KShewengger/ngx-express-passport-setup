import { Component, Input } from "@angular/core";

@Component({
  selector: "passport-alert-message",
  templateUrl: "./alert-message.component.html",
  styles: [
    `p { margin-bottom: 0; }`
  ]
})
export class AlertMessageComponent {
  
  @Input() errorType: string;
  @Input() provider: string;
  @Input() errorMessage: string;
  @Input() isSuccess: boolean;
  
  constructor() { }

}
