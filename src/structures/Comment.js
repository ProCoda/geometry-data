const Level = require("./Level");
const Profile = require("./Profile");

class Comment {
    /**
     * 
     * @param {{
     * content: string,
     * id: string,
     * likes: Number,
     * date: string,
     * profile: Profile,
     * color: string,
     * level: Level
     * }} options 
     */
    constructor(options){
        this.content = options.content;
        this.id = options.id;
        this.likes = options.likes;
        this.date = options.date;
        this.profile = options.profile;
        this.color = options.color;
        this.level = options.level;
    }
}

module.exports = Comment;