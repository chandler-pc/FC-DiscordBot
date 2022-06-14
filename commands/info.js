const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Información del bot.')
		.setDMPermission(false),
	async execute(interaction) {
		await interaction.reply('Bot creado por chxndlerpc#0682');
	},
};