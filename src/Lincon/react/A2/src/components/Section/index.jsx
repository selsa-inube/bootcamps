import {
  StyledPrincipal,
  StyledSectionOne,
  StyledSectionTwo,
  StyledSectionThree,
  StyledTitleNoticia,
  StyledButton,
  StyledIcons,
} from "./styles";
import { Article } from "../Article";
import { ArticleTwo } from "../SegundoArticle";

function Section() {
  return (
    <StyledPrincipal>
      <StyledSectionOne>
        <Article
          img="ima/1-imagen.jpg"
          title="Everything You Need to Know About Slow Internet Speeds"
          subtitle="Our crummy connections are the bigges tech headeche in the pandemic. Here's a comprehensive guide to what to do about them."
          date="May 20, 2020"
          category="TECM FIX"
          size="large"
        />
      </StyledSectionOne>
      <StyledSectionTwo>
        <StyledTitleNoticia>Latest News</StyledTitleNoticia>
        <Article
          img="ima/1-imagen.jpg"
          title="A Wave of Small Business Closures Is on the Way. Can Washingyon Stop It?"
          subtitle="Our crummy connections are the bigges tech headeche in the pandemic. Here's a comprehensive guide to what to do about them."
          date="May 19, 2020"
          category="THE UPSHOT"
          size="small"
        />
        <Article
          img="ima/1-imagen.jpg"
          title="Coronavirus Shut Downs the `Experience Economy.` Cant It Come Back?"
          subtitle="Our crummy connections are the bigges tech headeche in the pandemic. Here's a comprehensive guide to what to do about them."
          date="May 19, 2020"
          category="NEWS ANALYHS"
          size="small"
        />
        <StyledIcons>
          <i className="fa-regular fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
        </StyledIcons>
      </StyledSectionTwo>
      <StyledSectionThree>
        <StyledTitleNoticia>Fast Forward</StyledTitleNoticia>
        <ArticleTwo
          img="ima/fast-forward1.jpg"
          title="  Another Grim Tally of U.S Unemployment is Expected: Live Business
           Updates"
          subtitle="Live Stock Market News During the Coranivirus Pandemic"
        />
        <ArticleTwo
          img="ima/fast-forward2.jpg"
          title=" How the 'Plandemic' Movie and its Falsehoods Spread Widely Online"
          subtitle="Conspiracy theories about the pandemic have gained more..."
        />
        <ArticleTwo
          img="ima/fast-forward3.jpg"
          title=" Joe Rogan Strikes an Exclisive, Multlyear Deal With Spotify Premium"
          subtitle="The deal with Joe Rogan, a provocative podcast bost with..."
        />
        <StyledButton>Show All</StyledButton>
      </StyledSectionThree>
    </StyledPrincipal>
  );
}
export { Section };
