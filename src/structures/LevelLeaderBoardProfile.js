const Profile = require("./Profile");

class LeaderboardProfile{
    /**
     * @param {Profile} profile
     * 
     * @param {{
     * leaderBoardRank: Number,
     * percent: Number,
     * coins: Number,
     * date: string,
     * profile: Profile
     * }} options 
     * 
     */
    constructor(options) {
        this.profile = options.profile;
        this.leaderBoardRank = options.leaderBoardRank;
        this.percent = options.percent;
        this.coins = options.coins;
        this.date = options.date;
    }
}


module.exports = LeaderboardProfile;