import { Mower } from "./Mower";

describe("Mower", () => {
  let mower: Mower;

  beforeEach(() => {
    mower = new Mower({ position: { x: 0, y: 0 }, orientation: "N", instructions: "F" });
  });

  it("should move up when given the instruction F in the direction of N", () => {
    mower.move();
    expect(mower.position).toEqual({ x: 0, y: 1 });
  });

  it("should move down when given the instruction F in the direction of S", () => {
    mower.orientation = "S";
    mower.move();
    expect(mower.position).toEqual({ x: 0, y: -1 });
  });

  it("should move right when given the instruction F in the direction of E", () => {
    mower.orientation = "E";
    mower.move();
    expect(mower.position).toEqual({ x: 1, y: 0 });
  });

  it("should move left when given the instruction F in the direction of W", () => {
    mower.orientation = "W";
    mower.move();
    expect(mower.position).toEqual({ x: -1, y: 0 });
  });

  it("should change orientation from N to W when given the instruction L", () => {
    mower.turn("L");
    expect(mower.orientation).toEqual("W");
  });

  it("should change orientation from N to E when given the instruction R", () => {
    mower.turn("R");
    expect(mower.orientation).toEqual("E");
  });

  it("should change orientation from S to E when given the instruction L", () => {
    mower.orientation = "S";
    mower.turn("L");
    expect(mower.orientation).toEqual("E");
  });
  
  it("should change orientation from S to W when given the instruction R", () => {
    mower.orientation = "S";
    mower.turn("R");
    expect(mower.orientation).toEqual("W");
  });

  it("should change orientation from E to N when given the instruction L", () => {
    mower.orientation = "E";
    mower.turn("L");
    expect(mower.orientation).toEqual("N");
  });

  it("should change orientation from E to S when given the instruction R", () => {
    mower.orientation = "E";
    mower.turn("R");
    expect(mower.orientation).toEqual("S");
  });

  it("should change orientation from W to S when given the instruction L", () => {
    mower.orientation = "W";
    mower.turn("L");
    expect(mower.orientation).toEqual("S");
  });

  it("should change orientation from W to N when given the instruction R", () => {
    mower.orientation = "W";
    mower.turn("R");
    expect(mower.orientation).toEqual("N");
  });
});