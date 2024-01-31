import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='container'>
                <div className='sociais'>
                    <a href="&">
                        <img src='/imagens/fb.png' alt='Facebook'/>
                    </a>
                    <a href="&">
                        <img src='/imagens/tw.png' alt='Twitter'/>
                    </a>
                    <a href="&">
                        <img src='/imagens/ig.png' alt='Facebook'/>
                    </a>
                </div>
                <div className='logo'>
                    <img src='/imagens/logo.png' alt='Logo Organo'/>
                </div>
                <div className='frase'>Desenvolvido por Alura.</div>
            </div>
        </footer>
    )
}

export default Rodape;