export default function LoadingScreen({ message }) {
    return <section style={{ minHeight: '100dvh' }} className="d-flex justify-content-center align-items-center">
        <h1>{ message }</h1>
    </section>
} 