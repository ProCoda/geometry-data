
const fetch = require("node-fetch");
const ProfilePost = require("./ProfilePost");
const Comment = require("./Comment");
const robComments = require('./comments.json');


class Profile {
    /**
     * 
     * @param {{
     * username: string, 
     * playerID: string, 
     * accountID: 71, 
     * rank: Number, 
     * stars: Number, 
     * diamonds: Number, 
     * coins: Number, 
     * userCoins: Number, 
     * demons: Number, 
     * creatorPoints: Number, 
     * friendRequests: boolean, 
     * messages: string, 
     * commentHistory: string, 
     * moderator: Number
     * youtube: string,
     * twitter: string,
     * twitch: string,
     * glow: boolean
     * cube: string,
     * ship: string,
     * ball: string,
     * ufo: string,
     * wave: string,
     * robot: string,
     * spider: string,
     * deathEffect: string
     * }
     * } options 
     */
    constructor(options = {}) {
        this.username = options.username;
        this.playerID = options.playerID;
        this.accountID = options.accountID;
        this.rank = options.rank;
        this.stars = options.stars;
        this.diamonds = options.diamonds;
        this.coins = options.coins;
        this.userCoins = options.userCoins;
        this.demons = options.demons;
        this.creatorPoints = options.creatorPoints;
        this.friendRequests = options.friendRequests;
        this.messages = options.messages;
        this.commentHistory = options.commentHistory;
        this.moderator = options.moderator;
        this.youtube = options.youtube;
        this.twitter = options.twitter;
        this.twitch = options.twitch;
        this.glow = options.glow;
        this.cube = options.cube;
        this.ship = options.ship;
        this.ball = options.ball;
        this.ufo = options.ufo;
        this.wave = options.wave;
        this.robot = options.robot;
        this.spider = options.spider;
        this.deathEffect = options.deathEffect;
    }

    async fetchProfilePosts() {
        var profilePosts;
        await fetch(`https://gdbrowser.com/api/comments/${this.accountID}?type=profile`)
        .then(response => response.json())
        .then(data => {
            profilePosts = data;
        });
        var array = [];
        for(var profilePostNum in profilePosts) {
            var profilePost = profilePosts[profilePostNum];
            array.push(new ProfilePost({
                content: profilePost.content,
                id: profilePost.ID,
                likes: profilePost.likes,
                date: profilePost.date
            }));
        }

        return array;
    }

    async fetchCommentHistory() {
        var comments;
        await fetch(`https://gdbrowser.com/api/comments/${this.playerID}?type=commentHistory`)
            .then(response => response.json())
            .then(data => {
                comments = data
            });
        var array = [];
        for(var commentNum in comments) {
            var comment = comments[commentNum];
            array.push(new Comment({
                content: comment.content,
                id: comment.ID,
                likes: comment.likes,
                date: comment.date,
                profile: this,
                color: comment.color,
                levelID: comment.levelID        
            }));
        }

        return array;
    }
}

module.exports = Profile;