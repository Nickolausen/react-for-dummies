import { useContext } from "react"
import { PostContext } from "./PostContext"

export default function usePostContext() {
    const post = useContext(PostContext) 
    if (!post) {
        throw new Error("Cannot access to post content!")
    }
    return post
}