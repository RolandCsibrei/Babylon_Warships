import {
  ControllerInterface,
} from '../Gameplay/Controller';
import {
  GameManager,
} from '../Core/GameManager';
import { Observable, Scene } from '@babylonjs/core';

export interface WorldInterface {
  scene: Scene;
  afterLoadObservable: Observable<WorldInterface>;
  controller: ControllerInterface;
  start(): void;
  load(): Promise<WorldInterface>;
  update(): void; Number;
  setController(controller: ControllerInterface): void;
}

export abstract class AbstractWorld implements WorldInterface {
  public scene: Scene;
  public afterLoadObservable = new Observable<WorldInterface>();
  public controller: ControllerInterface;
  public Number: number;


  start() {
    this.scene = new Scene(GameManager.engine);
  }

  load(): Promise<WorldInterface> {
    return new Promise((resolve) => {
      // Do your own logic here

      resolve(this);
    });
  }

  update() {
    this.controller.update();
  }

  setController(controller: ControllerInterface) {
    this.controller = controller;
    this.controller.start();
  }
}
