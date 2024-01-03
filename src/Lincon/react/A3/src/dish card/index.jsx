import {
  StyledCardPizza,
  StyledImg,
  StyledConatinerItems,
  StyledCardText,
  StyledSelect,
} from "./styled";
import { Items } from "./Componets/items";
import { Text } from "./Componets/text";
import { Select } from "./Componets/select";

function DishCard() {
  return (
    <StyledCardPizza>
      <StyledImg src="ima/pizza.jpg" alt="" />
      <StyledConatinerItems>
        <Items active={true} text="details" iconClassName="fas fa-info" />
        <Items active={false} text="receipt" iconClassName="fa fa-align-left" />
      </StyledConatinerItems>
      <StyledCardText>
        <Text
          title="There Topping Pizza - Large"
          iconClass="fa fa-ellipsis-v"
          subtitle="By"
          linkText="Planet Pizza"
          linkHref="#"
          rowDirection={true}
          isLarge={true}
        />
        <Text
          title="Information"
          iconClass="fa fa-pencil"
          subtitle="147 N Robertson Blvd, West Hollywood, CA 90048"
          name="Amanda Torres (949)123-4567"
          rowDirection={false}
          isLarge={false}
        />

        <StyledSelect>
          <Select Text="Pickup (Turn-Around: 30 Minutes)" />
          <Select Text="Delivery $5.000 (Turn-Around: 1 Hour)" />
        </StyledSelect>
      </StyledCardText>
    </StyledCardPizza>
  );
}

export { DishCard };
