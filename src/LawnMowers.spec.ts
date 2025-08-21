import { LawnMowers } from "./LawnMowers";

describe("LawnMowers", () => {
  describe("uploading instructions file", () => {
    it("should throw an error if the file is not found", () => {
      const path = "src/not-found.txt";
      expect(() => {
        new LawnMowers(path);
      }).toThrow("File not found");
    });
    
    it("should initialize LawnMowers upper right and lower left corners", () => {
      const lawnMowers = new LawnMowers("src/instructions.txt");
      expect(lawnMowers.lowerLeftCorner).toEqual({ x: 0, y: 0 });
      expect(lawnMowers.upperRightCorner).toEqual({ x: 5, y: 5 });
    });

    it ("should create mowers with initial position, orientation and instructions", () => {
      const lawnMowers = new LawnMowers("src/instructions.txt");
      expect(lawnMowers.mowers[0].position).toEqual({ x: 1, y: 2 });
      expect(lawnMowers.mowers[0].orientation).toEqual("N");
      expect(lawnMowers.mowers[0].instructions).toEqual("LFLFLFLFF");
      expect(lawnMowers.mowers[1].position).toEqual({ x: 3, y: 3 });
      expect(lawnMowers.mowers[1].orientation).toEqual("E");
      expect(lawnMowers.mowers[1].instructions).toEqual("FFRFFRFRRF");
    });
  });

  describe("handling mowers", () => {
    it("should move mowers according to their instructions", () => {
      const lawnMowers = new LawnMowers("src/instructions.txt");
      lawnMowers.handleMowers();
      expect(lawnMowers.mowers[0].position).toEqual({ x: 1, y: 3 });
      expect(lawnMowers.mowers[0].orientation).toEqual("N");
      expect(lawnMowers.mowers[1].position).toEqual({ x: 5, y: 1 });
      expect(lawnMowers.mowers[1].orientation).toEqual("E");
    });

    it("should not move if the mower has reached a boundary", () => {
      const lawnMowers = new LawnMowers("src/boundaries.txt");
      lawnMowers.handleMowers();
      expect(lawnMowers.mowers[0].position).toEqual({ x: 0, y: 5 });
      expect(lawnMowers.mowers[0].orientation).toEqual("E");
    });
  });


});