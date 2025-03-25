export default function Picture({ id, imgSrc, description, renderDescription = true }) 
{
    return <>
        <figure className="d-flex flex-column align-items-center">
            <img className="w-75" src={imgSrc}/>
            { renderDescription && <figcaption className="text-center">{ description }#{ id }</figcaption>}
        </figure>
    </>
}