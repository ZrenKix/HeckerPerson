import { Client, ClientOptions } from "discord.js";
import dotenv from 'dotenv';
dotenv.config();
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);

client.login(process.env.TOKEN);