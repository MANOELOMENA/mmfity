import perfil1 from '../../public/orochi.jpeg'
import perfil2 from '../../public/simone.jpeg'
import perfil3 from '../../public/rasta.jpeg'
import './Form.scss'

const Form = () => {
    return (
        <div className="form-container">
            <form className="profile-form">
                <img src={perfil1} alt="Profile" />
                <div className="info">
                    <h2>OROCHI</h2>
                    <p>Cantor de Trap</p>
                    <p>Orochi, também conhecido como Flávio Cesar Costa de Castro, é um rapper, cantor e compositor brasileiro nascido em 24 de março de 1999. Ele começou sua carreira profissional aos 14 anos, fazendo rap e participando de batalhas de MCs. Ficou conhecido por seu trabalho com o grupo de hip-hop Modestiaparte e pelo estilo trap-funk. Em 2015, ganhou o Duelo de MCs nacional, tornando-se o campeão mais jovem da história do evento. Seu sucesso aumentou após a viralização de seus vídeos no Facebook. Lançou sua primeira faixa oficial em 2018, "Asterix and Obelix", seguida pelo single "Mainstreet". Em 2022, foi preso por porte ilegal de drogas, mas também se apresentou no Rock in Rio no mesmo ano. Sua discografia inclui álbuns como "Celebridade" (2020), "Lobo" (2021), "Vida Cara" (2023), "Vida Cara (Deluxe)" (2023) e "442" (2024), além de vários singles de sucesso, como "Mainstreet", "Juízo Final", "Real Freestyle 1999", "Na Onda" (ft. MC Kevin o Chris), "Até de Manhã", "Jogador" e "Lobo Solitário" (ft. Borges).</p>
                </div>
            </form>

            <form className="profile-form">
                <img src={perfil2} alt="Profile" />
                <div className="info">
                    <h2>SIMONE</h2>
                    <p>Cantora de Sertanejo</p>
                    <p>Simone Mendes, nascida em 24 de maio de 1984 em Uibaí, Bahia, é uma cantora e instrumentista brasileira conhecida pelo sertanejo e forró eletrônico. Iniciou sua carreira em festivais locais e formou a dupla "As Coleguinhas" com sua irmã Simaria. Com hits como "Meu Violão e o Nosso Cachorro", alcançaram sucesso nacional. Simone acumula prêmios, incluindo indicação ao Grammy Latino. Atualmente, segue carreira solo, sendo uma influência importante na música brasileira, valorizada por sua voz e presença de palco.</p>
                </div>
            </form>

            <form className="profile-form">
                <img src={perfil3} alt="Profile" />
                <div className="info">
                    <h2>DJ CLEITON RASTA</h2>
                    <p>Poeta</p>
                    <p>DJ Cleiton Rasta, também conhecido como Cleiton Tavares do Nascimento Silva da Silva, é um DJ brasileiro nascido em 19 de outubro de 1947 em Atalaia, Maceió. Ganhou destaque na internet por suas performances interativas e carismáticas, misturando músicas, frases e vinhetas em suas apresentações. Sua fama começou em 2014 com um vídeo viral no YouTube. Além de sua carreira musical, é conhecido por fundar um time de futebol inspirado no Central de Caruaru. Em 2024, foi lançado o trailer do filme "DJ Cleiton Rasta - O Cabeça de Gelo", que retrata sua trajetória e sua habilidade em unir comunidades por meio da música.</p>
                </div>
            </form>
        </div>
    )
}

export default Form

