class Song {
    /**
     * 
     * @param {{
     * name: string,
     * author: string,
     * megabytes: number,
     * id: string,
     * link: string
     * }} options 
     */
    constructor(options={}){
        this.name = options.name;
        this.author = options.author;
        this.megabytes = options.megabytes;
        this.id = options.id;
        this.link = options.link;
    }
}

module.exports = Song;