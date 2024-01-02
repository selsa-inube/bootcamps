import {
  Container,
  Container2,
  Button,
  ContainerDatos,
  PageContainer,
} from "./styles";
function Page() {
  return (
    <PageContainer>
      <header>
        <ul>
          <li>
            <a href="https://mail.google.com">Gmail</a>
          </li>
          <li>
            <a href="https://www.google.com/imghp?hl=en&authuser=0&ogbl">
              Imágenes
            </a>
          </li>
        </ul>
        <img src="ima/menu.png" alt="" />
        <img src="ima/perfil.jpeg" alt="perfil" />
      </header>
      <section>
        <img src="ima/google.png" alt="google" />
        <Container>
          <i className="fa fa-search icon-left"></i>
          <input type="text" id="search-input" />
          <img src="ima/camara.png" className="icon-right" alt="" />
        </Container>

        <div className="botones">
          <Button>Buscar con Google</Button>
          <Button>Voy a tener suerte</Button>
        </div>
      </section>
      <footer>
        <div className="colombia">
          <p>Colombia</p>
        </div>
        <Container2>
          <ContainerDatos>
            <ul>
              <li>
                <a href="https://about.google/?utm_source=google-CO&utm_medium=referral&utm_campaign=hp-footer&fg=1">
                  Sobre Google
                </a>
              </li>
              <li>
                <a href="https://ads.google.com/intl/en_co/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
                  Publicidad
                </a>
              </li>
              <li>
                <a href="https://smallbusiness.withgoogle.com/intl/es-419_co/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google&utm_medium=ep&utm_campaign=google_hpbfooter&utm_content=google_hpbfooter&gmbsrc=ww-ww-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u&c=CO#!/">
                  Negocios
                </a>
              </li>
              <li>
                <a href="https://www.google.com/search/howsearchworks/?fg=1">
                  Como funciona la Busqueda
                </a>
              </li>
            </ul>
          </ContainerDatos>
          <div className="datos-2">
            <ul>
              <li>
                <a href="https://policies.google.com/privacy?hl=en-CO&fg=1">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="https://policies.google.com/terms?hl=en-CO&fg=1">
                  Condiciones
                </a>
              </li>
              <li>
                <a href="#">Preferencias</a>
              </li>
            </ul>
          </div>
        </Container2>
      </footer>
    </PageContainer>
  );
}
export { Page };
