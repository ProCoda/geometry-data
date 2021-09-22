const Profile = require("./Profile");
const Song = require("./Song");
const fetch = require('node-fetch');
const Comment = require("./Comment");
const index = require('../../index');
const LeaderBoardProfile = require('./LeaderBoardProfile');


class Level {
    /**
     * 
     * @param {{name: string, 
     * id: string, 
     * description: string, 
     * author: Profile, 
     * difficulty: string, 
     * downloads: Number, 
     * likes: Number, 
     * disliked: boolean,
     * length: string,
     * stars: Number, 
     * orbs: Number,
     * diamonds: Number,
     * featured: boolean, 
     * epic: boolean, 
     * gameVersion: string,
     * version: Number,
     * copiedID: string,
     * twoPlayer: boolean,
     * customSong: boolean,
     * coins: Number,
     * verifiedCoins: boolean,
     * starsRequested: Number,
     * objects: Number,
     * large: boolean,
     * creatorPoints: Number,
     * difficultyPng: string,
     * song: Song
     * }} options 
     */
    constructor(options = {}){
        this.id = options.id;
        this.description = options.description;
        this.author = options.author;
        this.difficulty = options.difficulty;
        this.downloads = options.downloads;
        this.likes = options.likes;
        this.disliked = options.disliked;
        this.length = options.length;
        this.stars = options.stars;
        this.orbs = options.orbs;
        this.diamonds = options.diamonds;
        this.featured = options.featured;
        this.epic = options.epic;
        this.gameVersion = options.gameVersion;
        this.version = options.version;
        this.copiedID = options.copiedID;
        this.twoPlayer = options.twoPlayer;
        this.officalSong = options.officalSong;
        this.customSong = options.customSong;
        this.coins = options.coins;
        this.verifiedCoins = options.verifiedCoins;
        this.starsRequested = options.starsRequested;
        this.objects = options.objects;
        this.large = options.large;
        this.difficultyPng = options.difficultyPng;
        this.song = options.song;
    }

    async fetchComments(top = true){
        var comments;
        var url;
        if(top){
            url = `https://gdbrowser.com/api/comments/${this.id}?top`;
        } else {
            url = `https://gdbrowser.com/api/comments/${this.id}`
        }
        var array = [];
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                comments = data;
            });
        
        for(var commentNum in comments){
            var comment = comments[commentNum];
            array.push(new Comment({
                content: comment.content,
                id: comment.ID,
                likes: comment.likes,
                date: comment.date,
                profile: this,
                color: comment.color,
                level: await index.findLevel(comment.levelID)
            }));
        }

        return array;
        
    }

    async fetchLeaderBoard(){
        var leaderboard;
        var array = [];
        await fetch(`https://gdbrowser.com/api/leaderboardLevel/${this.id}`)
            .then(response => response.json())
            .then(data => {
                leaderboard = data;
            });
        
        for(var leaderBoardNum in leaderboard){
            var leaderBoardProfile = leaderboard[leaderBoardNum];
            array.push(new LeaderBoardProfile((await index.findProfile()).toJSON(), {
                leaderBoardRank: parseInt(leaderBoardProfile.rank),
                percent: leaderBoardProfile.percent,
                coins: leaderBoardProfile.coins,
                date: leaderBoardProfile.date
            }));
        }
        return array;
    }
}



module.exports = Level;