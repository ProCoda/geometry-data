
const Profile = require("./src/structures/Profile");
const fetch = require('node-fetch');

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



module.exports = {
    findProfile: findProfile
}