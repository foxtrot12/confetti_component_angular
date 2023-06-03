import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'confetti',
  templateUrl: './confetti.component.html',
  styleUrls: ['./confetti.component.scss'],
  inputs: [
    'COLORS',
    'numberOfConfettiObjects',
    'heightOfConf',
    'widthOfConf',
    'confettiDuration',
    'confettiIteration',
    'initiateAnimationAfterView',
    'animationDelay',
    'targetEl',
    'ratioToTargetSize',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfettiComponent implements OnInit, AfterViewInit {
  constructor(private cdRef: ChangeDetectorRef) {}
  /**duration of confetti animation in ms */
  public confettiDuration: number = 0;

  /**number of times animation has to iterate, defaults to infinite */
  public confettiIteration: number = 0;

  public heightOfConf: string = '';

  public widthOfConf: string = '';

  public numberOfConfettiObjects: number = 0;

  public initiateAnimationAfterView: boolean = false;

  public zIndex: number = -20;

  public animationDelay: number = 0;

  public targetEl: string | HTMLElement = '';

  public confettiObjArr: Array<{
    color: string;
    top: number;
    left: number;
    rotate: number;
  }> = [];

  public containerTopPos: number = 0;

  public containerLeftPos: number = 0;

  public containerHeight: number = 0;

  public containerWidth: number = 0;

  /**height and width of  container will be multiplied by this, default is 1*/
  public ratioToTargetSize: number = 1;

  /**array of hex codes to pick from*/
  public COLORS: Array<string> = [];

  public spreadConfetti(): void {
    if (this.targetEl) {
      if (typeof this.targetEl === 'string') {
        this.targetEl = <HTMLElement>document.getElementById(this.targetEl);
      }

      let targetRect = this.targetEl.getBoundingClientRect();
      let contWidth = targetRect.width * this.ratioToTargetSize;
      let contHeight = targetRect.height * this.ratioToTargetSize;

      this.containerTopPos =
        targetRect.top - contHeight / 2 + targetRect.height / 2;
      this.containerLeftPos =
        targetRect.left - contWidth / 2 + targetRect.width / 2;
      this.containerHeight = contHeight;
      this.containerWidth = contWidth;
    }

    let colors = this.COLORS.slice(0);

    let rndNumber: number = 0;

    for (let itr = 0; itr < this.numberOfConfettiObjects; itr++) {
      if (colors.length === 0) {
        colors = this.COLORS.slice(0);
      }

      rndNumber = Math.floor(Math.random() * (colors.length - 1));

      this.confettiObjArr[itr] = {
        color: colors[rndNumber],
        top: Math.floor(Math.random() * 100),
        left: Math.floor(Math.random() * 100),
        rotate: Math.floor(Math.random() * 2800),
      };
      colors.splice(rndNumber, 1);
    }

    console.log(this.confettiObjArr);

    this.cdRef.detectChanges();

    setTimeout(() => {
      this.cdRef.detectChanges();
    }, this.confettiDuration);
  }

  ngOnInit(): void {
    for (let itr = 0; itr < this.numberOfConfettiObjects; itr++) {
      this.confettiObjArr.push({
        color: 'transparent',
        top: 50,
        left: 50,
        rotate: 0,
      });
    }
  }

  ngAfterViewInit(): void {
    if (this.initiateAnimationAfterView) {
      this.spreadConfetti();
    }
  }
}
