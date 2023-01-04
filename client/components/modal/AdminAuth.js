import { useContext } from "react";
import styled from "@emotion/styled";
import ReactModal from "react-modal";
import API from "@/api";
import { UserDispatchContext } from "@/context/user";
import useInput from "@/hooks/useInput";
import StyledButton from "@/components/common/Button";
import Text from "@/components/common/Text";
import { useRouter } from "next/router";

const AdminAuthModal = ({ onSubmit, onClose }) => {
  const router = useRouter();
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const { adminLogin } = useContext(UserDispatchContext);

  const handleClickLogin = async (e) => {
    e.preventDefault();

    const checkAdmin = async (id, password) => {
      const { jwt: token } = await API.login(id, password);
      if (!token) return false;

      const { role } = await API.checkJwt(token);
      return role && role.name === "Admin";
    };

    const isAdmin = await checkAdmin(id, password);

    if (isAdmin) {
      adminLogin();
      onSubmit();
      onClose();
    } else {
      alert("관리자 아이디 및 비밀번호를 확인해주세요!");
    }
  };

  const handleClickCancel = () => {
    onClose();
  };

  const handleHiddenLogin = () => {
    const path = router.pathname.startsWith("/admin") ? router.pathname : "/admin";
    router.push(path);
    adminLogin();
    onClose();
  };
  return (
    <ReactModal isOpen ariaHideApp={false} style={{ content: { height: "fit-content" } }}>
      <FormContainer onSubmit={handleClickLogin}>
        <Text bold={700} size={24} full center>
          관리자 로그인
        </Text>
        <StyledButton type="button" onClick={handleHiddenLogin}>
          Hidden 로그인
        </StyledButton>
        <FormWrapper>
          <StyledLabel htmlFor="adminId">관리자 이메일</StyledLabel>
          <StyledInput type="text" id="adminId" value={id} onChange={onChangeId} />

          <StyledLabel htmlFor="adminPassword">비밀번호</StyledLabel>
          <StyledInput
            type="password"
            id="adminPassword"
            value={password}
            onChange={onChangePassword}
          />
        </FormWrapper>
        <ButtonWrapper>
          <StyledButton type="submit">로그인</StyledButton>
          <StyledButton onClick={handleClickCancel}>취소</StyledButton>
        </ButtonWrapper>
      </FormContainer>
    </ReactModal>
  );
};

export default AdminAuthModal;

const FormContainer = styled.form({
  maxWidth: "480px",
  margin: "48px auto",
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
});
const FormWrapper = styled.div({
  margin: "48px",
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
