import { LawnMowers } from "./LawnMowers";

const path = "src/instructions.txt";
const lawnMowers = new LawnMowers(path);
lawnMowers.handleMowers();
lawnMowers.writeOutput();
