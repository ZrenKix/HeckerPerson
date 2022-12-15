import { CommandInteraction, Client } from "discord.js";
import { Command } from "../command";

const choices = ["rock", "paper", "scissors"];

const results = [
    "It's a tie!",
    "You win!",
    "The computer wins.",
];

const getResult = (playerChoice: string, computerChoice: string) =>
    playerChoice === computerChoice ? 0 :
        (playerChoice === choices[0] && computerChoice === choices[2]) ||
        (playerChoice === choices[1] && computerChoice === choices[0]) ||
        (playerChoice === choices[2] && computerChoice === choices[1]) ? 1 : 2;

export const rpscommand: Command = {
    name: "rps",
    description: "Play rock paper scissors against the computer",
    run: async (client: Client, interaction: CommandInteraction) => {
        const playerChoice = interaction.message.content.toLowerCase();

        // check if player's choice is valid
        if (!choices.includes(playerChoice)) {
            await interaction.send("Please choose either rock, paper, or scissors.");
            return;
        }

        // generate a random choice for the computer
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        await interaction.followUp({
            content: `You chose ${playerChoice} and the computer chose ${computerChoice}. ${results[getResult(playerChoice, computerChoice)]}`,
            ephemeral: true,
        });
    }
};