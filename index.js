
const Profile = require("./src/structures/Profile");
const fetch = require('node-fetch');
const Level = require("./src/structures/Level");
const Song = require("./src/structures/Song");


async function findProfile(query) {
    var profile = await fetch(`https://gdbrowser.com/api/profile/${query}`);
    profile = await profile.json();

    return new Profile({
        username: profile.username,
        playerID: profile.playerID,
        accountID: profile.accountID,
        rank: profile.rank,
        stars: profile.stars,
        diamonds: profile.diamonds,
        coins: profile.coins,
        userCoins: profile.userCoins,
        demons: profile.demons,
        creatorPoints: profile.cp,
        friendRequests: profile.friendRequests,
        messages: profile.messages,
        commentHistory: profile.commentHistory,
        moderator: profile.moderator,
        youtube: profile.youtube,
        twitter: profile.twitter,
        twitch: profile.twitch,
        cube: `https://gdbrowser.com/icon/${profile.username}`,
        ship: `https://gdbrowser.com/icon/${profile.username}?form=ship`,
        ball: `https://gdbrowser.com/icon/${profile.username}?form=ball`,
        ufo: `https://gdbrowser.com/icon/${profile.username}?form=ufo`,
        wave: `https://gdbrowser.com/icon/${profile.username}?form=wave`,
        robot: `https://gdbrowser.com/icon/${profile.username}?form=robot`,
        spider: `https://gdbrowser.com/icon/${profile.username}?form=spider`,
        deathEffect: profile.deathEffect,
        glow: profile.glow
    });

}

async function findLevel(levelID){
    var level;
    await fetch(`https://gdbrowser.com/api/level/${levelID}`)
        .then(response => response.json())
        .then(data => {
            level = data;
        });
    var customSong;

    if(level.customSong == 0){
        customSong = false;
    } else {
        customSong = true
    }


    return new Level({
        name: level.name,
        id: level.id,
        description: level.description,
        author: findProfile(level.accountID),
        difficulty: level.difficulty,
        difficultyPng: `https://gdbrowser.com/assets/difficulties/${level.difficulty}.png`,
        downloads: level.downloads,
        likes: level.likes,
        disliked: level.disliked,
        length: level.length,
        stars: level.stars,
        orbs: level.orbs,
        diamonds: level.diamonds,
        featured: level.featured,
        epic: level.epic,
        gameVersion: level.gameVersion,
        version: level.version,
        copiedID: level.copiedID,
        twoPlayer: level.twoPlayer,
        customSong: customSong,
        coins: level.coins,
        verifiedCoins: level.verifiedCoins,
        starsRequested: level.starsRequested,
        objects: level.objects,
        large: level.large,
        creatorPoints: level.creatorPoints,
        song: new Song({
            name: level.songName,
            author: level.songAuthor,
            megabytes: parseInt(level.songSize.replace('MB', '')),
            id: level.songID,
            link: level.songLink 
        }),

    });
}

(async () => {
    const level = await findLevel('6508283');
    console.log(await level.fetchLeaderBoard());
})()

exports.findProfile = findProfile;
exports.findLevel = findLevel;