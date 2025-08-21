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
}