import styles from './Brand.module.css'

/**
 * 
 * @param {{ invert: boolean, className: string }} props 
 * @returns 
 */
export default function Brand({ invert = false, className }) {
    return <span className={`${className && className} fw-bold`}>
        { invert ? 
            <><small style={{ backgroundColor: "rgba(var(--accent-clr), 0.8)"}} className={`d-inline-block p-2`}>Re</small><span className={`${styles.auction} text-white`}>Auction</span></> :
            <><span className={styles.re}>Re</span><span className={styles.auction}>Auction</span></>
        }
    </span>
}