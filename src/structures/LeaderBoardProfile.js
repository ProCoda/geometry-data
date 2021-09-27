const Profile = require("./Profile");

class LeaderboardProfile{
    /**
     * @param {Profile} profile
     * 
     * @param {{
     * leaderBoardRank: Number,
     * percent: Number,
     * coins: Number,
     * leaderBoardType: string
     * date: string,
     * levelLeaderBoard: boolean
     * }} leaderBoardProfileOptions 
     * 
     */
    constructor(profile, leaderBoardProfileOptions) {
        this.profile = profile;
        this.leaderBoardRank = leaderBoardProfileOptions.leaderBoardRank;
        this.percent = leaderBoardProfileOptions.percent;
        this.coins = leaderBoardProfileOptions.coins;
        this.date = leaderBoardProfileOptions.date;
    }
}


module.exports = LeaderboardProfile;