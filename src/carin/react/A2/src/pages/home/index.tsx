import { StyledHome } from "./styles.js";

import { Header } from "../../components/header";
import { Aside } from "../../components/aside";
import { Footer } from "../../components/footer";
import { Main } from "../../components/main/main/index.js";

const Home = () => {
  return (
    <StyledHome>
      <Header />

      <hr />
      <Main />

      <hr />
      <Footer />
      <Aside />
    </StyledHome>
  );
};

export default Home;
