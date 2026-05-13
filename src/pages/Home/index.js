import './index.css';

import banner1 from './imghome1.jpg';
import banner2 from './imghome2.jpg';

function Home() {
    return (
        <main>
            <section
                className='bannerHome'
                style={{ backgroundImage: `url(${banner1})` }}
            >
                <div className='overlay'>
                    <div className='conteudoBanner'>
                        <h1>
                            A solução definitiva para compra e venda
                            de peças de tecnologia.
                        </h1>
                        <p>
                            Agilidade na cotação e mais oportunidades
                            de negócio para fornecedores e compradores.
                        </p>
                    </div>
                </div>
            </section>

            <section className='conteudoHome'>
                <div className='textoHome'>
                    <h2>
                        Plataforma moderna e intuitiva
                    </h2>
                    <p>
                        Nossa plataforma conecta empresas, fornecedores
                        e compradores de maneira rápida e eficiente.
                        Com um ambiente intuitivo e seguro, facilitamos
                        negociações e ampliamos as oportunidades de
                        negócio para o setor tecnológico.
                    </p>
                </div>
            </section>

            <section
                className='bannerHome'
                style={{ backgroundImage: `url(${banner2})` }}
            >
                <div className='overlay'>
                    <div className='conteudoBanner'>
                        <h1>
                            Tecnologia que aproxima negócios
                        </h1>
                        <p>
                            Cadastre sua empresa, encontre parceiros
                            estratégicos e fortaleça sua rede de contatos.
                        </p>
                    </div>
                </div>
            </section>

            <section className='conteudoHome'>
                <div className='textoHome'>
                    <h2>
                        Expanda suas oportunidades
                    </h2>
                    <p>
                        Desenvolvemos uma solução pensada para empresas
                        que desejam crescer, encontrar novos clientes
                        e automatizar processos de busca e negociação
                        de peças e suprimentos tecnológicos.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Home;