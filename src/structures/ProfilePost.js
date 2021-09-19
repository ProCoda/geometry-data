class ProfilePost {
    /**
     * 
     * @param {{
     * content: string,
     * id: string,
     * likes: Number,
     * date: string
     * }} options 
     */
    constructor(options){
        this.content = options.content;
        this.id = options.id;
        this.likes = options.likes;
        this.date = options.date;
    }
}

module.exports = ProfilePost;