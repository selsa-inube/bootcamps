import {
  StyledCard,
  StyledMain,
  StyledIcon,
  StyledText,
  StyledTitle,
  StyledSubtitle,
  StyledFile,
  StyledOffer,
  StyledMoney,
  StyledConatinerPercentage,
} from "./styled";
import { Image } from "./components/image";
import { File } from "./components/file";
import { Off } from "./components/Off";
import { Transaction } from "./components/Transaction";
function CommerceCard() {
  const hasBackgroundColor = true;
  const hasBorder = true;
  const hasPadding = true;
  const hasGap = true;

  return (
    <StyledCard>
      <StyledMain>
        <Image img="ima/money.jpg" size="large" />
        <StyledIcon className="fa fa-times" aria-hidden="true"></StyledIcon>
      </StyledMain>
      <StyledText>
        <StyledTitle>Make an offer</StyledTitle>
        <StyledSubtitle>
          Submit your offer to shop an wait for a response.
        </StyledSubtitle>
      </StyledText>
      <StyledFile
        hasBackgroundColor={hasBackgroundColor}
        hasBorder={hasBorder}
        size="large"
      >
        <Image img="ima/MacBook.png" size="small" />
        <File
          title="MacBook Pro 16 `M3 12-Core CPU 18-
          CoreGPU 36/512 GB Space Black"
          subtitle="Ships from: "
          link="https://www.apple.com"
          money="$5,200"
          shipping="+49 Shipping"
        />
      </StyledFile>
      <StyledOffer>Your Offer</StyledOffer>
      <StyledFile hasPadding={hasPadding} hasGap={hasGap} size="medium">
        <StyledMoney className="fa fa-usd" aria-hidden="true"></StyledMoney>
        <File size="large" title="4800.00" pais="AUD" shipping="+49 Shipping" />
      </StyledFile>
      <StyledConatinerPercentage>
        <Off num="5" off="OFF" />
        <Off num="10" off="OFF" />
        <Off num="15" off="OFF" />
      </StyledConatinerPercentage>
      <StyledFile
        hasBackgroundColor={hasBackgroundColor}
        hasBorder={hasBorder}
        size="small"
      >
        <Transaction />
      </StyledFile>
    </StyledCard>
  );
}

export { CommerceCard };
