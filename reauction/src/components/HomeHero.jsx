import Brand from "./layout/Brand";
import styles from './HomeHero.module.css'

export default function HomeHero() {
    return <section className={`${styles.home_hero} position-relative d-flex flex-column justify-content-center align-items-center bg-black`}>
        <h1 className="z-1 display-1"><Brand invert className="text-white"/></h1>
        <h5 className="z-1 display-5 text-white">Timossi case d'aste</h5>
        <small className="z-1 text-white text-center px-5">React for Dummies — Istituto Tecnico Tecnologico 'B. Pascal'</small>
    </section>
}