const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('perfil')
		.setDescription('Muestra el perfil de un usuario.')
        .setDMPermission(false),
	async execute(interaction) {
		await interaction.reply('PROFILE');
	},
};