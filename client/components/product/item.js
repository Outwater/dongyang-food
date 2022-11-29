import Image from "next/image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Text from "../../style/Text";

const ProductItem = ({ data }) => {
  const { title, description, imageUrl, price } = data;
  const style = css`
    background-color: red;
  `;
  return (
    <Card key={title}>
      <Image
        width={300}
        height={300}
        alt={title}
        src={imageUrl || "/markup/assets/images/product.png"}
      />
      <div css={style}>박스</div>
      <CardContent>
        <CardInfo>
          <Text size={16}>{title}</Text>
          <Text size={20} bold={600}>
            {price}
          </Text>
          <Text size={12}>{description}</Text>
        </CardInfo>
        <FontAwesomeIcon icon={faCartPlus} />
      </CardContent>
    </Card>
  );
};

export default ProductItem;

const Card = styled.div({
  width: "300px",
  display: "flex",
  flexDirection: "column",
});

const CardContent = styled.div({
  padding: "5px",
  display: "flex",
  justifyContent: "space-between",
});

const CardInfo = styled.div({
  display: "flex",
  flexDirection: "column",
});
