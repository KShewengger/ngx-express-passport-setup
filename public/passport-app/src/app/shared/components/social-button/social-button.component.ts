import { Component, Inject, Input } from "@angular/core";

@Component({
  selector: "passport-social-button",
  templateUrl: "./social-button.component.html",
  styleUrls: ["./social-button.component.css"]
})
export class SocialButtonComponent {

  @Input() type: string;
  @Input() icon: string;
  
  constructor(@Inject("TWITTER_BASE_URL") public baseUrl: string) { }

}
