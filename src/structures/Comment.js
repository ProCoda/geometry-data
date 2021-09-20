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
     * levelID: string
     * }} options 
     */
    constructor(options){
        this.content = options.content;
        this.id = options.id;
        this.likes = options.likes;
        this.date = options.date;
        this.profile = options.profile;
        this.color = options.color;
        this.levelID = options.levelID;
    }
}

module.exports = Comment;