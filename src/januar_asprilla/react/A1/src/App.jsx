import React from "react";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <ul>
          <li>
            <a href="https://mail.google.com/">Gmail</a>
          </li>
          <li>
            <a href="https://www.google.com.co/imghp?hl=es-419&authuser=0&ogbl">
              Imágenes
            </a>
          </li>
          <li>
            <img className="extras" src="image9.png" alt="Google Apps" />
          </li>
          <li>
            <img
              className="perfil"
              src="januar.jpg"
              alt="Foto de perfil de Januar"
            />
          </li>
        </ul>
      </header>
      <main>
        <figure>
          <img src="google.jpg" alt="Palabra Google" />
        </figure>
        <form action="Buscar">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input id="Buscar" type="text" />

          <img className="derecha" src="voz.png" alt="icono de microfono" />
          <img className="derechas" src="camara.png" alt="icono de camara" />
        </form>
        <div className="botones">
          <button>Buscar con Google</button>
          <button>Voy a tener suerte</button>
        </div>
      </main>
      <footer>
        <div>
          <p>Colombia</p>
        </div>
        <div className="info-extra">
          <ul>
            <li>
              <a href="https://about.google/?utm_source=google-CO&utm_medium=referral&utm_campaign=hp-footer&fg=1">
                Sobre Google
              </a>
            </li>
            <li>
              <a href="https://www.google.com.co/intl/es-419_co/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&fg=1">
                Publicidad
              </a>
            </li>
            <li>
              <a href="https://www.google.com.co/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&fg=1">
                Negocios
              </a>
            </li>
            <li>
              <a href="https://google.com/search/howsearchworks/?fg=1">
                Cómo funciona la Búsqueda
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://policies.google.com/privacy?hl=es-419&fg=1">
                Privacidad
              </a>
            </li>
            <li>
              <a href="https://policies.google.com/terms?hl=es-419&fg=1">
                Condiciones
              </a>
            </li>
            <li>
              <a href="#">Preferencias</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
