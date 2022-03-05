client.on('guildMembersChunk', (members, guild) => {
    console.log(members, guild);
});