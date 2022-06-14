module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		if (interaction.isCommand()){
			const command = interaction.client.commands.get(interaction.commandName);

			if (!command) return;

			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(error);
				await interaction.reply({ content: 'Hubo un error al ejecutar el comando.', ephemeral: true });
			}
			return;
		}
		if(interaction.isModalSubmit()){
			if(interaction.customId === 'orceModal'){
				const cod = interaction.fields.getTextInputValue('orceCod');
				const pretty = require('pretty');
				const fetch = require('node-fetch');
				const response = await fetch(`https://www.orce.uni.edu.pe/detaalu.php?id=${cod}&op=detalu`);
				const body = await response.text();
				const $ = require('cheerio').load(body);
				console.log($('tr'));
				await interaction.reply({ content: 'Orceando...', ephemeral: true });
			}
		}
	},
};