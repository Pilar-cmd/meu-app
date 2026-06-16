import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import "./App.css";
import foto1 from "./1.png";
import foto2 from "./2.png";
import foto3 from "./3.png";
import foto4 from "./4.png";
import foto5 from "./5.png";
import foto6 from "./6.png";
import foto7 from "./7.png";
import foto8 from "./8.png";
import foto9 from "./9.png";
import foto10 from "./10.png";
import foto11 from "./11.png";
import foto12 from "./12.png";
import foto13 from "./13.png";
import foto14 from "./14.png";
import fotoj1 from "./j1.png";
import fotoj2 from "./j2.png";
import fotoj3 from "./j3.png";
import fotoj4 from "./j4.png";
import fotom1 from "./m1.png";

function Home() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <p>Bem-vindo(a)!</p>
      <p>Olá! Seja muito bem-vindo(a) ao meu portfólio.</p>
      <p>Este site foi desenvolvido para apresentar um pouco sobre mim, minhas habilidades e os projetos que venho desenvolvendo ao longo da minha trajetória. Aqui você poderá conhecer meu trabalho, explorar minhas criações e acompanhar minha evolução como desenvolvedora.</p>
      <br></br>

      <div className="meio">
        <div className="homes">
          <h2>🏠 Home</h2>
          <p>Você está na página inicial. Aqui encontrará uma visão geral do site e das principais informações disponíveis.</p>
        </div>

        <div className="homes">
          <h2>👤 Sobre</h2>
          <p>Nesta seção você poderá conhecer mais sobre mim, minha trajetória, interesses, habilidades, experiências e formas de contato.</p>
      <div style={{ marginTop: "2rem" }}>
        <Link to="/sobre" style={{ padding: "0.6rem 1.4rem", backgroundColor: "#c084fc", color: "#fff", textDecoration: "none", borderRadius: "8px", fontWeight: "bold" }}>
          Ir para Sobre
        </Link>
      </div>
        </div>

        <div className="homes">
          <h2>💻 Projetos</h2>
          <p>Aqui estão reunidos os projetos que desenvolvi, incluindo sites, jogos, aplicações e outras criações. Cada projeto representa uma oportunidade de aprendizado e demonstra minhas capacidades técnicas e criativas.</p>
        </div>
      </div>

      <br></br>
      <p>Sinta-se à vontade para navegar pelas páginas, conhecer meus projetos e entrar em contato caso tenha interesse em trocar ideias, colaborar ou saber mais sobre o meu trabalho.</p>
      <p>Obrigada pela visita e aproveite a experiência! 🚀</p>
    </div>
  );
}

function Sobre() {
  return (
    <div>
      <h1>Sobre Mim</h1>
      <p>Olá! Meu nome é Pilar e sou apaixonada por tecnologia, programação e desenvolvimento de projetos digitais.</p>
      <br></br>

      <div className="meio">
      <div className="h">
      <h1>Habilidades</h1>
      <p></p>
      <p>Desenvolvimento Web<p></p>HTML, CSS e JavaScript<p></p>React<p></p>Criação de Interfaces Responsivas<p></p>Lógica de Programação<p></p>Desenvolvimento de Jogos</p>
      </div>

      <br></br>
      
      <div className="c">
      <h1>Contato</h1>
      <p></p>
      <p>📧 E-mail: mpilar.ribeiro20@gmail.com<p></p>📱 WhatsApp: (22) 99820-0907<p></p>🐙 GitHub: github.com/Pilar-cmd<p></p>💼 LinkedIn: linkedin.com/in/maria-pilar/</p>
      </div>
      </div>

      <br></br>
      <h1>Objetivo</h1>
      <br></br>
      <p>Busco constantemente evoluir como desenvolvedora, criar projetos inovadores e transformar ideias em experiências digitais funcionais e criativas.</p>
      <p></p>
      <p>Obrigada pela visita!</p>
      <div style={{ marginTop: "2rem" }}>
        <Link to="/projetos" style={{ padding: "0.6rem 1.4rem", backgroundColor: "#c084fc", color: "#fff", textDecoration: "none", borderRadius: "8px", fontWeight: "bold" }}>
          Ir para Projetos
        </Link>
      </div>
      <br></br>
    </div>
  );
}

function Projetos() {
  return (
    <div>
      <h1>Projetos</h1>
      <br></br>
      <div className="homes">
        <h1>Site sobre Arte e Pintura </h1>
        <div className="cartao">
      <div className="imagensMeio">
        <div className="imagens">
          <img
            src={foto1}
          />
          <img
            src={foto2}
          />
          <img
            src={foto3}    
          />
          <img
            src={foto4}          
          />
          <img
            src={foto5}          
          />
          <img
            src={foto6}          
          />
          <img
            src={foto7}          
          />
          <img
            src={foto8}          
          />
          <img
            src={foto9}          
          />
          <img
            src={foto10}          
          />
          <img
            src={foto11}          
          />
          <img
            src={foto12}          
          />
          <img
            src={foto13}          
          />
          <img
            src={foto14}          
          />
        </div>
      </div>
    </div>
      <p>Projeto desenvolvido para explorar o universo da arte e da pintura, apresentando informações sobre sua história, estilos artísticos e artistas renomados. O site combina conteúdo informativo e elementos visuais para proporcionar uma experiência agradável e educativa ao usuário. 🎨✨ </p>
      </div>
      <br></br>
      <div className="homes">
        <h1>Jogo da Lixeira</h1>

      
        <div className="jogo">
          <div>
          <img
            src={fotoj1}
            style={{ width: '200px', height: 'auto', objectFit: 'cover' }}
          />
          </div>
          <div className="oi">
          <img
            src={fotoj2}
            style={{ width: '200px', height: 'auto', objectFit: 'cover' }}
          />
          </div>
          <div>
          <img
            src={fotoj4}
            style={{ width: '200px', height: 'auto', objectFit: 'cover' }}
          />
          </div>
        </div>
    
        <p>Projeto 3D desenvolvido para explorar a lógica de programação e o desenvolvimento de jogos casuais, apresentando uma mecânica clássica de agilidade e reflexo. O site combina elementos visuais interativos e um sistema de pontuação dinâmica para proporcionar uma experiência divertida e desafiadora ao usuário. 🥥🧺✨</p>
      </div>
      <br></br>
      <div className="homes">
        <h1>Mão Robótica</h1>
        <img
            src={fotom1}
            style={{ width: '200px', height: 'auto', objectFit: 'cover' }}
          />
        <p>Projeto desenvolvido para explorar os conceitos de robótica, automação e integração entre hardware e software através da plataforma Arduino. O sistema utiliza uma luva equipada com sensores para capturar os movimentos humanos e replicá-los em tempo real em uma mão robótica, combinando engenharia e interatividade para proporcionar uma experiência imersiva e tecnológica. 🤖🧤✨</p>
      </div>
      
      <div style={{ marginTop: "2rem" }}>
        <Link to="/" style={{ padding: "0.6rem 1.4rem", backgroundColor: "#c084fc", color: "#fff", textDecoration: "none", borderRadius: "8px", fontWeight: "bold" }}>
          Voltar para Home
        </Link>
      </div>
      <br></br>
    </div>
  );
}

export default function App() {
  const estiloBotao = ({ isActive }) => ({
    padding: "0.6rem 1.4rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "all 0.2s ease",
    color: isActive ? "#fff" : "#94a3b8",
    backgroundColor: isActive ? "#c084fc" : "transparent",
  });

  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "1rem", padding: "1.5rem 0", borderBottom: "1px solid #1e293b", marginBottom: "2rem" }}>
        <NavLink to="/" end style={estiloBotao}>
          Home
        </NavLink>
        <NavLink to="/sobre" style={estiloBotao}>
          Sobre
        </NavLink>
        <NavLink to="/projetos" style={estiloBotao}>
          Projetos
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </BrowserRouter>
  );
}