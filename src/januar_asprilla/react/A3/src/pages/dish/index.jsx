import {
  BackgroundContainer,
  DishContainer,
  InfoContainer,
  OptionContainer,
  IconContainer,
  ExtraContainer,
  OptionsCard,
} from "./StyledDish";
import { Image } from "./Components/BannerImage";
import { Text, Icon } from "./Components/OptionInfo";

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
              <OptionsCard>
                <OptionContainer>
                  <IconContainer>
                    <Icon className="fa-solid fa-align-left"></Icon>
                  </IconContainer>
                </OptionContainer>
                <Text label="receipt" />
              </OptionsCard>
            </ExtraContainer>
          </InfoContainer>
        </DishContainer>
      </BackgroundContainer>
    </>
  );
}
export default DishCard;
