import { createContext } from "react";

export class Post {
    /**
     * @param {{ id: number, name: string }} author 
     * @param {string} content 
     * @param {string} date 
     * @param {number} likes 
     * @param {string} image 
     */
    constructor(author, content, date, likes, image) {
        this.author = author
        this.content = content
        this.date = date
        this.likes = likes
        this.image = image
    }
}

/**
 * @type Post
 */
let defaultValue = {}
export const PostContext = createContext(defaultValue)