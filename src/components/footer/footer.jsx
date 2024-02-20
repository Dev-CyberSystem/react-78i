import './footer.css'

const Footer = () =>
{
    return (
        <>
        <footer className="d-flex justify-content-around" >
            <div>
                <h6 className='text-light text-center'>Redes sociales</h6>
                <div>
                <img src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" alt="Logo de Instagram"/>
                <img src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png" alt="Logo de Facebook"/>
                <img src="https://cdn-icons-png.flaticon.com/128/3669/3669950.png" alt="Logo de WhatsApp"/>
                </div>
            </div>
            <div className='text-light align-self-center'>
            copyright yo
            </div>
        </footer>
        
        </>
    )
}

export default Footer