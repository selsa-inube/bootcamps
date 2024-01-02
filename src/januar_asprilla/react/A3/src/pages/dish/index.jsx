import { BackgroundContainer, DishContainer } from "./StyledDish";
import { Image } from "./Components/BannerImage";

function DishCard() {
  return (
    <>
      <BackgroundContainer>
        <DishContainer>
          <Image src="food.jpeg" alt="plato de comida" />
        </DishContainer>
      </BackgroundContainer>
    </>
  );
}
export default DishCard;
