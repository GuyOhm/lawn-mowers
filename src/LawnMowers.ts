import { existsSync, readFileSync } from "node:fs";
import { Orientation, Position } from "./types";
import { Mower } from "./Mower";

export class LawnMowers {
  readonly lowerLeftCorner: Position = { x: 0, y: 0 };
  upperRightCorner: Position;
  mowers: Mower[] = [];

  constructor(private readonly path: string) {
    if (!existsSync(path)) {
      throw new Error("File not found");
    }
    const lines = readFileSync(path, "utf8").split("\n");
    this.upperRightCorner = this.parseFirstLine(lines[0]);
    this.mowers = this.parseMowers(lines.slice(1));
  }

  private parseFirstLine(line: string | undefined): Position {
    if (!line) {
      throw new Error("First line is empty");
    }
    const [x, y] = line.split(" ").map(Number);
    return { x, y } as Position;
  }

  private parseMowers(lines: string[]): Mower[] {
    if (!lines.length) {
      return [];
    }

    // handle the 2 next lines
    const [x, y, orientation] = lines[0]!.split(" ");
    const instructions = lines[1];

    const mower = new Mower({
      position: { x: Number(x), y: Number(y) },
      orientation: orientation as Orientation,
      instructions: instructions!,
    });

    return [mower, ...this.parseMowers(lines.slice(2))];
  }

  handleMowers() {
    this.mowers.forEach((mower) => this.handleMower(mower));
  }

  private handleMower(mower: Mower) {
    mower.instructions.split("").forEach((instruction) => {
      if (instruction === "F" && this.canMove(mower)) {
        mower.move();
      } else if (instruction === "L" || instruction === "R") {
        mower.turn(instruction);
      }
    });
  }

  private canMove(mower: Mower): boolean {
    switch (mower.orientation) {
      case "N":
        return mower.position.y < this.upperRightCorner.y;
      case "E":
        return mower.position.x < this.upperRightCorner.x;
      case "S":
        return mower.position.y > this.lowerLeftCorner.y;
      case "W":
        return mower.position.x > this.lowerLeftCorner.x;
    }
  }
}
