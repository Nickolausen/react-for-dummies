import RenderWithIf from './RenderWithIf'
import RenderWithTern from './RenderWithTern'
import RenderWithAND from './RenderWithAND'

export default function ConditionalRendering() 
{
    return <section className='text-center'>
        <h2 className='display-3'>Rendering <span className='fw-bold'>condizionale</span></h2>
        <div className='container-fluid gap-3 pt-5'>
            <div className="row">
                <article className='col-12 col-md-4 text-center'>
                    <h3>IF usage</h3>
                    <RenderWithIf/>
                </article>
                <article className='col-12 col-md-4 text-center'>
                    <h3>Ternary operator</h3>
                    <RenderWithTern/>
                </article>
                <article className='col-12 col-md-4 text-center'>
                    <h3>&& (AND) operator</h3>
                    <RenderWithAND/>
                </article>
            </div>
        </div>
    </section>
}