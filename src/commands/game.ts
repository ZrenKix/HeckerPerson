import { CommandInteraction, Client } from "discord.js";
import { Command } from "../command";

export const RockPaperScissors: Command = {
    name: "rps",
    description: "Rock paper scissors",
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "You loose";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};