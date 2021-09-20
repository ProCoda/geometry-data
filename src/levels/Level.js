const Profile = require("../structures/Profile");
const Song = require("../structures/Song");
const fetch = require('node-fetch');

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
     * officalSong: Number,
     * customSong: Number,
     * coins: Number,
     * verifiedCoins: boolean,
     * starsRequested: Number,
     * objects: Number,
     * large: boolean,
     * creatorPoints: Number,
     * difficultyPng: string,
     * song: Song,
     * demonList: Number
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
        this.demonList = options.demonList;
    }

    async fetchComments(top = true){
        var comments;
        var url;
        if(top){
            url = `https://gdbrowser.com/api/comments/${this.id}?top`;
        } else {
            url = `https://gdbrowser.com/api/comments/${this.id}`
        }

        
        
    }
}



module.exports = Level;