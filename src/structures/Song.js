class Song {
    /**
     * 
     * @param {{
     * name: string,
     * author: string,
     * size: string,
     * id: string,
     * link: string
     * }} options 
     */
    constructor(options={}){
        this.name = options.name;
        this.author = options.author;
        this.size = options.size;
        this.id = options.id;
        this.link = options.link;
    }
}

module.exports = Song;