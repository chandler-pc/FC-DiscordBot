const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Muestra información del server.')
        .setDMPermission(false),
	async execute(interaction) {
		await interaction.reply('SERVER');
	},
};