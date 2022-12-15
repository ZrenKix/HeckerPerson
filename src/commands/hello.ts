import { CommandInteraction, Client } from "discord.js";
import { Command } from "../command";

export const Hello: Command = {
    name: "hello",
    description: "Returns a greeting",
    run: async (client: Client, interaction: CommandInteraction) => {

        await interaction.followUp({
            ephemeral: true,

        });
    }
};