import { AsyncPipe } from "@angular/common";
import {
  Component,
  type OnInit,
  ChangeDetectionStrategy,
  type OnDestroy,
} from "@angular/core";
import { ButtonModule } from "primeng/button";
import { BehaviorSubject, Subscription } from "rxjs";
import { random } from "umt/module/Math/random";
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-random",
  standalone: true,
  imports: [ButtonModule, AsyncPipe],
  templateUrl: "./random-home.component.html",
  styleUrl: "./random-home.component.scss",
})
export class RandomHomeComponent implements OnInit, OnDestroy {
  public randomNumber = new BehaviorSubject<number>(random(100));
  private subscription = new Subscription();
  public ngOnInit() {
    this.subscription.add(
      this.randomNumber.subscribe((value) => {
        console.log(value);
      }),
    );
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public generateRandomNumber() {
    this.randomNumber.next(random(100));
  }
}
