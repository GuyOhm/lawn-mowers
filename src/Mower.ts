import { Instruction, Orientation, Position } from "./types";

export class Mower {
  position: Position;
  orientation: Orientation;
  instructions: Instruction;

  constructor(config: {position: Position, orientation: Orientation, instructions: Instruction}) {
    this.position = config.position;
    this.orientation = config.orientation;
    this.instructions = config.instructions;
  }

  move() {
    switch (this.orientation) {
      case "N":
        this.position.y++;
        break;
      case "E":
        this.position.x++;
        break;
      case "W":
        this.position.x--;
        break;
      case "S":
        this.position.y--;
        break;
    }
  }

  turn(direction: "L" | "R") {
    switch (this.orientation) {
      case "N":
        this.orientation = direction === "L" ? "W" : "E";
        break;
      case "S":
        this.orientation = direction === "L" ? "E" : "W";
        break;
      case "E":
        this.orientation = direction === "L" ? "N" : "S";
        break;
      case "W":
        this.orientation = direction === "L" ? "S" : "N";
        break;
    }
  }

}