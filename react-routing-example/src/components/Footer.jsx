import githubLogo from '../assets/github_icon.svg'

/**
 * Credits for the course are in the footer
 * @returns the footer
 */
export default function Footer() {
    return <footer className="mt-auto py-5 container-fluid bg-black d-flex justify-content-center align-items-center text-white">
        <div className="w-75">
            <div className="row">
                <div className="col-12 col-lg-6 text-center text-md-start">
                    <h5 className="fw-bold">React for Dummies</h5>
                    <h6>React Course @ I.T.T. "Blaise Pascal", Cesena</h6>
                </div>
                <div className="col-12 col-lg-6 text-center text-md-end">
                    <h5>React Routing Examples</h5>
                    <h6 className="text-secondary">by <a target="_blank" href="https://nicholasmagi.it" className="text-decoration-none text-secondary">Nicholas Magi</a> — <code>nicholas.magi24@gmail.com</code></h6>
                </div>
            </div>
            <div className="row">
                <p className='py-2 d-flex justify-content-center gap-2 flex-nowrap'>
                    <img style={{ width: "20px" }} src={ githubLogo } alt="GitHub Logo" /> <a className="text-decoration-none text-reset font-monospace" href="https://www.github.com/Nickolausen/react-for-dummies">GitHub Repository</a>
                </p>
            </div>
        </div>
    </footer>
}