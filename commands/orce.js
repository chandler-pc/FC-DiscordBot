const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('node:timers/promises').setTimeout;
const {MessageActionRow, Modal, TextInputComponent} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('orce')
		.setDescription('Orcea a alguien por código.')
		.setDMPermission(false),
	async execute(interaction) {
		const modal = new Modal()
			.setCustomId('orceModal')
			.setTitle('¿A quién orcear?');
		const cod = new TextInputComponent()
			.setCustomId('orceCod')
			.setLabel("Escribe el código a orcear.")
			.setMinLength(9)
			.setMaxLength(9)
			.setPlaceholder("20200565F")
			.setStyle('SHORT');
		const codRow = new MessageActionRow().addComponents(cod);
		modal.addComponents(codRow);
		interaction.showModal(modal);
	},
};