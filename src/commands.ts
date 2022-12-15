import { Command } from "./command";
import { Hello } from "./commands/hello";
import { rpscommand } from "./commands/game";
export const Commands: Command[] = [Hello, rpscommand];