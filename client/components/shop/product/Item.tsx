import Image from "next/image";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Text from "@/components/common/Text";
import { getStrapiURL } from "@/api/utils/request";
import { Product } from "@/types";

interface Props {
  data: Product;
}

const ProductItem = ({ data }: Props) => {
  const { title, description, imageUrl, price } = data;

  return (
    <Card key={title}>
      <Image
        width={300}
        height={300}
        alt={title}
        src={imageUrl.startsWith("/") ? getStrapiURL(imageUrl) : imageUrl}
        style={{ alignSelf: "center" }}
      />
      <CardContent>
        <CardInfo>
          <Text size={16}>{title}</Text>
          <Text size={20} bold={700}>
            {price}원
          </Text>
          <Text size={12}>{description}</Text>
        </CardInfo>
        <FontAwesomeIcon icon={faCartPlus} size="2x" />
      </CardContent>
    </Card>
  );
};

export default ProductItem;

const Card = styled.div({
  width: "320px",
  display: "flex",
  flexDirection: "column",
});

const CardContent = styled.div({
  padding: "5px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const CardInfo = styled.div({
  display: "flex",
  flexDirection: "column",
});
