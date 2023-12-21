import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <body>
      <header>
        <nav id="nav-header">
          <a href="mail.google.com">
            <img src="/imgs/account-circle.svg" alt="google account" />
          </a>
          <a href="mail.google.com">
            <img src="/imgs/apps.svg" alt="google apps" />
          </a>
          <a href="mail.google.com">Imágenes</a>
          <a href="mail.google.com">Gmail</a>
        </nav>
      </header>
      <div id="google-sign">
        <img src="/imgs/google.png" alt="google sign" />
      </div>
      <main>
        <form>
          <div id="search">
            <a href="google.com">
              <img id="search-img" src="/imgs/search.png" alt="google search" />
            </a>
            <input type="search" id="site-search" name="google-search" />
            <a href="google.com">
              <img src="/imgs/mic.png" alt="google mic" />
            </a>
            <a href="google.com">
              <img id="cam-img" src="/imgs/camera.png" alt="google cam" />
            </a>
          </div>
          <div id="button-div">
            <a href="google.com">
              <button type="submit">Buscar con Google</button>
            </a>

            <a href="https://doodles.google/">
              <button type="submit">Voy a tener suerte</button>
            </a>
          </div>
        </form>
      </main>

      <footer>
        <div id="country">
          <p>Colombia</p>
        </div>
        <nav id="nav-footer">
          <div id="nav-footer-l">
            <ul>
              <a href="https://about.google/?utm_source=google-CO&utm_medium=referral&utm_campaign=hp-footer&fg=1">
                Sobre Google
              </a>
              <a href="https://ads.google.com/intl/es-419_co/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
                Publicidad
              </a>
              <a href="https://ads.google.com/intl/es-419_co/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
                Negocios
              </a>
              <a href="https://www.google.com/search/howsearchworks/?fg=1">
                Cómo funciona la Búsqueda
              </a>
            </ul>
          </div>
          <div id="nav-footer-r">
            <ul>
              <a href="https://policies.google.com/privacy?hl=es-419&fg=1">
                Privacidad
              </a>
              <a href="https://policies.google.com/terms?hl=es-419&fg=1">
                Condiciones
              </a>
              <a href="google.com"> Preferencias</a>
            </ul>
          </div>
        </nav>
      </footer>
    </body>
  );
}

export default App;
