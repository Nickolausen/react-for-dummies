import cardStyles from './ModuleStyle.module.css'
import Note from '../utility/Note'

export default function ModuleStyle() {
    return <>
        <div className={cardStyles.container}>
            <span className={cardStyles.profilePicture}>D</span>
            <div className={cardStyles.bio}>
                <p className={cardStyles.userName}>Desmond Nyamador</p>
                <p>I just learned an easy way to style React Components</p>
            </div>
        </div>
        <Note>
            <a className="text-decoration-none text-secondary" href="https://www.pluralsight.com/resources/blog/guides/inline-styling-with-react">Credits</a>
        </Note>
    </>
}