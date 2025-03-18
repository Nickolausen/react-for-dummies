import usePostContext from "./usePostContext"
import { Post, PostContext } from "./PostContext"

/**
 * @param {{ children: import("react").ReactElement, post: Post}} param0 
 * @returns 
 */
export default function CompoundPost({children, post}) {
    return <div className="card p-3" style={{ width: "20rem" }}>
        <PostContext.Provider value={ post }>
            { children }
        </PostContext.Provider>
    </div>
}

CompoundPost.Image = function CompoundPostImage() {
    const post = usePostContext()
    return <img src={post.image} className="card-img-top" alt="..." /> 
}

CompoundPost.Content = function CompoundPostContent() {
    const post = usePostContext()
    return <p className="card-text text-truncate">
        { post.content }
    </p>
}

CompoundPost.Info = function CompoundPostInfo() {
    const post = usePostContext()
    return <div className="card-footer d-flex justify-content-between">
        <span>
            <i className="bi bi-heart-fill text-danger"></i> {post.likes}
        </span>
        <span>
            {post.author.name} — {post.date}
        </span>
    </div>
}