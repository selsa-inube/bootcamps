import {
  BackgroundContainer,
  DishContainer,
  InfoContainer,
  OptionContainer,
  IconContainer,
  ExtraContainer,
  OptionsCard,
  ContainerInformation,
  TitleContainer,
  Content,
  StyledSelect,
} from "./StyledDish";
import { Image } from "./Components/BannerImage";
import { Text, Icon } from "./Components/OptionInfo";
import {
  TitleInformation,
  IconInformation,
  Paragraph,
  Hyperlink,
} from "./Components/Information";
import { Select } from "./Components/Cheked";

function ContainerText(props) {
  const { children, direction = "row" } = props;
  return <Content direction={direction}>{children}</Content>;
}

function BarRight(props) {
  const { children, barRight = false } = props;
  return <OptionContainer barRight={barRight}>{children}</OptionContainer>;
}

export { BarRight };
function DishCard() {
  return (
    <>
      <BackgroundContainer>
        <DishContainer>
          <Image src="food.jpeg" alt="plato de comida" />
          <InfoContainer>
            <ExtraContainer>
              <OptionsCard>
                <BarRight barRight="true">
                  <IconContainer>
                    <Icon
                      border="true"
                      color="true"
                      className="fa-solid fa-info"
                    ></Icon>
                  </IconContainer>
                </BarRight>
                <Text label="details" />
              </OptionsCard>
            </ExtraContainer>
            <ContainerInformation>
              <TitleContainer>
                <TitleInformation
                  label="Three Topping Pizza - Large"
                  size="big"
                />
                <IconInformation className="fa-solid fa-list"></IconInformation>
              </TitleContainer>
              <ContainerText>
                <Paragraph label="By" />
                <Hyperlink label="Pizza Company" />
              </ContainerText>
            </ContainerInformation>
            <ExtraContainer>
              <OptionsCard>
                <OptionContainer>
                  <IconContainer>
                    <Icon className="fa-solid fa-align-left"></Icon>
                  </IconContainer>
                </OptionContainer>
                <Text label="receipt" />
              </OptionsCard>
            </ExtraContainer>
            <ContainerInformation>
              <TitleContainer>
                <TitleInformation label="Information" />
                <IconInformation className="fa-solid fa-pen"></IconInformation>
              </TitleContainer>
              <ContainerText direction="column">
                <Paragraph label="147 N Robertson Blvd, West Hollywood, CA 90048" />
                <ContainerText>
                  <Paragraph label="Amanda Torres  " />{" "}
                  <Paragraph label=" (949)123-4567  " />
                </ContainerText>
              </ContainerText>
              <StyledSelect>
                <Select Text="Pickup (Turn-Around: 30 Minutes)" />
                <Select Text="Delivery $5.000 (Turn-Around: 1 Hour)" />
              </StyledSelect>
            </ContainerInformation>
          </InfoContainer>
        </DishContainer>
      </BackgroundContainer>
    </>
  );
}
export default DishCard;
