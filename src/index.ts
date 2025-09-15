import { LawnMowers } from "./LawnMowers";
import path from "node:path";

const instructionsPath = path.join(__dirname, "..", "input", "instructions.txt");
const lawnMowers = new LawnMowers(instructionsPath);
lawnMowers.handleMowers();
lawnMowers.writeOutput();
