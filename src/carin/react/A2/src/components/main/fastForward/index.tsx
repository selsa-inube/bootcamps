import { StyledFastForward } from "./styles.js";
import { FastForwardArticles } from "../fastForwardArticles";

const FastForward = () => {
  return (
    <StyledFastForward>
      <h2>Fast Forward</h2>
      <section>
        <FastForwardArticles
          title="Another Grim Tally of U.S. Unemployment Is Expected: Live
                Businnes Updates"
          paragraph="Live Stock Market News During thr Coronavirus Pandemic"
          imgSrc="public/fast-forward1.jpg"
        />

        <FastForwardArticles
          title="How the 'Plandemic' Movie and Its Falsehoods Spread Widely
              Online"
          paragraph="Conspiracy theories about the pandemic have gained more...."
          imgSrc="public/fast-forward2.jpg"
        />
        <FastForwardArticles
          title="Joe Rogan Strikes an Exclusive, Multiyear Deal With Spotify
              Premium"
          paragraph="The deal with Joe Rogan, a provocative podcast host with..."
          imgSrc="public/fast-forward3.jpg"
        />
      </section>
      <a className="continue-reading">Show All</a>
    </StyledFastForward>
  );
};

export { FastForward };
