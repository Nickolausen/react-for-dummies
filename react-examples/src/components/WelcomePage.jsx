import githubLogo from '../assets/github_icon.svg'

export default function WelcomePage() 
{
    return <section className="text-center">
        <h1 className="display-1 fw-bold mt-auto">React for Dummies</h1>
        <h2>React Course @ I.T.T. "Blaise Pascal", Cesena</h2>
        <article className="text-secondary mt-auto pb-3">
            <p>
                <span>by <a className='text-reset fw-bold text-decoration-none' target="_blank" href="https://nicholasmagi.it">Nicholas Magi</a> —— <code className='fw-bold'>nicholas.magi24@gmail.com</code></span><br/>
                <span className='pt-2 d-flex flex-row justify-content-center align-items-center gap-1'><img style={{ width: "20px" }} src={githubLogo} alt="GitHub Logo" /> <a className="text-decoration-none text-reset" href="https://www.github.com/Nickolausen/react_for_dummies">GitHub Repository</a></span>
            </p>
        </article>
    </section>
}