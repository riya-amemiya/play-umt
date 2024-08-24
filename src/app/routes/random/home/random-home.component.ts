import { Component, type OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { random } from "umt-common/module/Math/random";
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-random",
  standalone: true,
  imports: [ButtonModule],
  templateUrl: "./random-home.component.html",
  styleUrl: "./random-home.component.scss",
})
export class RandomHomeComponent implements OnInit {
  public randomNumber = random(100);
  public ngOnInit() {
    console.log("RandomComponent initialized!");
  }

  public generateRandomNumber() {
    this.randomNumber = random(100);
  }
}
