import { Component, type OnInit } from "@angular/core";
import { random } from "umt-common/module/Math/random";

@Component({
  selector: "app-random",
  standalone: true,
  imports: [],
  templateUrl: "./random.component.html",
  styleUrl: "./random.component.scss",
})
export class RandomComponent implements OnInit {
  public randomNumber = random(100);
  ngOnInit() {
    console.log("RandomComponent initialized!");
  }
}
