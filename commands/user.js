const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Muestra información del discord de un usuario.')
        .setDMPermission(false),
	async execute(interaction) {
		await interaction.reply('USER');
	},
};