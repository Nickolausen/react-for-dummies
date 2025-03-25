class PostProps {
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
 * @param {PostProps} props
 */
export default function SimplePost(props) {
    return <div className="card" style={{ width: "20rem" }}>
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
            <p className="card-text text-truncate">
                {props.content}
            </p>
            <div className="card-footer d-flex justify-content-between">
                <span>
                    {props.author.name} — {props.date}
                </span>
                <span>
                    <i className="bi bi-heart-fill text-danger"></i> {props.likes}
                </span>
            </div>
        </div>
    </div>
}