import Layout from "../components/Layout";
import { useParams } from "react-router";

export default function ItemPage() {
    const { itemId } = useParams()
    /* Or, equivantely (without object destructuring)
    const urlParams = useParams()
    */ 
    return <Layout>
        <section>
            <h3 className="bg-primary display-5 fw-bold text-white rounded">
                <span className="badge">Item #{itemId}</span>
            </h3>
            {/* or, equivantely (without object destructuring)
            <h3 className="bg-danger display-5 fw-bold text-white rounded">
                <span className="badge">Item #{urlParams.itemId}</span>
            </h3>
            */}
            <h1 className="display-1">Item Page</h1>
        </section>
    </Layout> 
}