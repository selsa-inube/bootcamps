import {
  CardContainer,
  InfoCard,
  TitleContainer,
  IconInfoExtraStyle,
  TitleCardStyle,
  TitleInfoExtraStyle,
  InfoPreviwStyle,
  InfoExtraStyle,
} from "./StyledFooter.js";

import { BarImage } from "../ImagensNotice";

function CardInfo({ label, number, value, clock, background }) {
  return (
    <>
      <CardContainer background={background}>
        <InfoCard background={background}>
          <TitleContainer background={background}>
            <TitleCardStyle background={background}>{label}</TitleCardStyle>
            <TitleInfoExtraStyle background={background}>
              {number}
            </TitleInfoExtraStyle>
          </TitleContainer>
          <InfoPreviwStyle background={background}>{value}</InfoPreviwStyle>
          <IconInfoExtraStyle
            background={background}
            src="reloj.png"
            alt="Reloj"
          />
          <InfoExtraStyle background={background}>{clock}</InfoExtraStyle>
        </InfoCard>
        <BarImage
          background={background}
          src="barra.png"
          alt="Barra de datos"
        />
      </CardContainer>
    </>
  );
}
export { CardInfo };
