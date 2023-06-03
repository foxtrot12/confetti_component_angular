import { Component, ViewChild } from '@angular/core';
import { ConfettiComponent } from './confetti/confetti.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'confetti';

  public fakeInputs = {
    COLORS: [  '#FF0000', // Red
    '#FFA500', // Orange
    '#FFFF00', // Yellow
    '#00FF00', // Lime
    '#00FFFF', // Cyan
    '#0000FF', // Blue
    '#FF00FF', // Magenta
    '#FF1493', // Deep Pink
    '#FF8C00', // Dark Orange
    '#FFD700', // Gold
    '#32CD32', // Lime Green
    '#00CED1', // Dark Turquoise
    '#4169E1', // Royal Blue
    '#9932CC', // Dark Orchid
    '#FF69B4', // Hot Pink
    '#FF4500', // Orange Red
    '#FFA07A', // Light Salmon
    '#F08080', // Light Coral
    '#FF6347', // Tomato
    '#00FF7F', // Spring Green
    '#40E0D0', // Turquoise
    '#4682B4', // Steel Blue
    '#800080', // Purple
    '#DA70D6', // Orchid
    '#DC143C', // Crimson
    '#FFB6C1', // Light Pink
    ],
    numberOfConfettiObjects: 150,
    heightOfConf: '5px',
    widthOfConf: '5px',
    confettiDuration: 1500,
    confettiIteration: 1,
    initiateAnimationAfterView: false,
    animationDelay: 0,
    targetEl: 'target',
    ratioToTargetSize: 20,
  };

  @ViewChild(ConfettiComponent) ConfettiComponent: ConfettiComponent = <ConfettiComponent><unknown>null;

  public startAnimation() {
    this.ConfettiComponent.spreadConfetti();
  }
}
