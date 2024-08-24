import { Component, type OnInit, ChangeDetectionStrategy } from "@angular/core";
import { random } from "umt-common/module/Math/random";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-random",
  standalone: true,
  imports: [],
  templateUrl: "./random-home.component.html",
  styleUrl: "./random-home.component.scss",
})
export class RandomHomeComponent implements OnInit {
  public randomNumber = random(100);
  ngOnInit() {
    console.log("RandomComponent initialized!");
  }
}
