import SimplePost from "./simple_post/SimplePost"
import CompoundPost from "./compound_post/CompoundPost"

export default function DashboardCompoundComponents() {
    let post = {
        author: { id: 0, name: "Nicholas" },
        content: "Lorem Ipsum Ipse Dixit Alea Iacta Est Oh Bruto Figlio Mio",
        date: "01/06/2024",
        image: "src/assets/photos/1.jpg",
        likes: 150
    }
    return <section>
        <div className="py-5 text-center">
            <h2 className="display-3"><span className="fw-bold">Compound</span> components</h2>
            <h4 className="display-5">w/<span className="fw-bold">useContext()</span></h4>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 d-flex flex-column align-items-center">
                    <h4>Simple Post</h4>
                    <SimplePost {...post}/>
                </div>
                <div className="col-6 d-flex flex-column align-items-center">
                    <h4>Compound Post</h4>
                    <CompoundPost post={post}>
                        <CompoundPost.Info/>
                        <CompoundPost.Content/>
                        <CompoundPost.Image/>
                    </CompoundPost>
                </div>
            </div>
        </div>
    </section>
}