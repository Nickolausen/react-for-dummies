import Note from "../utility/Note";

export default function InlineStyle() 
{
    const cardStyles = {
        container: {
            display: "flex",
            width: "75%",
            boxShadow: "0 0 3px 2px #cec7c759",
            alignItems: "center",
            padding: "3em 1.5em",
            borderRadius: 20 + "px",
            marginBottom: "2em",
        },
        profilePicture: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "orange",
            color: "white",
            height: 20 + "px",
            width: 20 + "px",
            borderRadius: "50%",
            padding: "15px",
            fontWeight: "bold",
        },
        bio: {
            marginLeft: 20 + "px",
        },
        userName: {
            fontWeight: "bold",
        },
    };
    
    return <>
        <div style={cardStyles.container}>
            <span style={cardStyles.profilePicture}>D</span>
            <div style={cardStyles.bio}>
                <p style={cardStyles.userName}>Desmond Nyamador</p>
                <p>I just learned an easy way to style React Components</p>
            </div>
        </div>
        <Note>
            <a className="text-decoration-none text-secondary" href="https://www.pluralsight.com/resources/blog/guides/inline-styling-with-react">Credits</a>
        </Note>
    </>
}