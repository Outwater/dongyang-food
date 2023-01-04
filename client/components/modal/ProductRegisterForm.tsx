import styled from "@emotion/styled";
import ReactModal from "react-modal";
import { Text, StyledButton } from "@/components/common";
import { Stack } from "@/components/layout";
import useForm from "@/hooks/useForm";
import { ProductAttribute } from "../../types";
import useUser from "../../hooks/useUser";

const ProductRegisterForm = ({ onSubmit, onClose }) => {
  const { token } = useUser();
  const { values, errors, handleChange, handleSubmit } = useForm<ProductAttribute>({
    initialValues: {
      title: "",
      price: 0,
      description: "",
      status: "selling",
      stock: 0,
      imageUrl: "",
      image: {},
      category: {},
      sub_category: {},
    },
    validate: (values) => {
      const errors = {
        title: "",
        price: "",
        description: "",
        status: "",
        stock: "",
        imageUrl: "",
        image: "",
        category: "",
        sub_category: "",
      };
      return errors;
    },
    onSubmit: () => {
      onSubmit(values, token);
      console.log("상품등록 완료", values);
      onClose();
    },
  });
  return (
    <ReactModal isOpen ariaHideApp={false} style={{ content: { height: "fit-content" } }}>
      <FormContainer onSubmit={handleSubmit}>
        <Text bold={700} size={24} full center>
          상품 등록하기
        </Text>
        <FormWrapper>
          <Stack direction="column">
            <StyledLabel htmlFor="title">상품명</StyledLabel>
            <StyledInput type="text" id="title" value={values.title} onChange={handleChange} />
          </Stack>
          <Stack direction="column">
            <StyledLabel htmlFor="imageUrl">이미지 주소</StyledLabel>
            <StyledInput
              type="text"
              id="imageUrl"
              value={values.imageUrl}
              onChange={handleChange}
            />
          </Stack>
          <Stack direction="column">
            <StyledLabel htmlFor="price">가격</StyledLabel>
            <StyledInput type="text" id="price" value={values.price} onChange={handleChange} />
          </Stack>
          <Stack direction="column">
            <StyledLabel htmlFor="description">상품설명</StyledLabel>
            <StyledInput
              type="text"
              id="description"
              value={values.description}
              onChange={handleChange}
            />
          </Stack>
          <Stack direction="column">
            <StyledLabel htmlFor="category">대분류</StyledLabel>
            <StyledInput type="text" id="category" onChange={handleChange} />
          </Stack>
          <Stack direction="column">
            <StyledLabel htmlFor="sub_category">소분류</StyledLabel>
            <StyledInput type="text" id="sub_category" onChange={handleChange} />
          </Stack>
          <Stack direction="column">
            <StyledLabel htmlFor="status">상태</StyledLabel>
            <StyledInput type="text" id="status" value={values.status} onChange={handleChange} />
          </Stack>
          <Stack direction="column">
            <StyledLabel htmlFor="stock">재고</StyledLabel>
            <StyledInput type="text" id="stock" value={values.stock} onChange={handleChange} />
          </Stack>
        </FormWrapper>
        <ButtonWrapper>
          <StyledButton type="submit">상품 등록</StyledButton>
          <StyledButton onClick={onClose}>취소</StyledButton>
          <StyledButton
            type="button"
            onClick={() => {
              console.log(values);
            }}>
            보기
          </StyledButton>
        </ButtonWrapper>
      </FormContainer>
    </ReactModal>
  );
};

export default ProductRegisterForm;

const FormContainer = styled.form({
  margin: "48px auto",
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
});
const FormWrapper = styled.div({
  margin: "48px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "12px",
});
const StyledLabel = styled.label({});
const StyledInput = styled.input({
  width: "100%",
  marginBottom: "12px",
  padding: "12px",
  textAlign: "left",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "-0.4px",
  background: "rgb(255, 255, 255)",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  borderRadius: "5px",
});
const ButtonWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: "16px",
});
