const Profile = require("./Profile");

class LeaderboardProfile extends Profile {
    /**
     * @param {{
     * leaderBoardRank: Number,
     * percent: Number,
     * coins: Number,
     * date: string
     * }} leaderBoardProfileOptions 
     * 
     */
    constructor(options, leaderBoardProfileOptions) {
        super(options);
        this.leaderBoardRank = leaderBoardProfileOptions.leaderBoardRank;
        this.percent = leaderBoardProfileOptions.percent;
        this.coins = leaderBoardProfileOptions.coins;
        this.date = leaderBoardProfileOptions.date;
    }
}


module.exports = LeaderboardProfile;