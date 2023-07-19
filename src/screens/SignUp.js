import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import { styled } from "styled-components";

import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
  boder: 1px solid ${(props) => props.theme.borderColor};
  width: 100%;
`;

const TopBox = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px 40px 25px 40px;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const BottomBox = styled(WhiteBox)`
  padding: 20px 0px;
  text-align: center;

  a {
    font-weight: 600;
    margin-left: 5px;
  }
`;

const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  padding: 7px;
  background-color: #fafafa;
  border: 0.5px solid rgb(219, 219, 219);
  margin-top: 5px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
`;

const Button = styled.div`
  width: 100%;
  border: none;
  border-radius: 3px;
  margin-top: 12px;
  background-color: #0095f6;
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
`;

const Separator = styled.div`
  width: 100%;
  margin: 20px 0px 30px 0px;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }

  span {
    margin: 0px 10px;
    font-weight: 600;
    font-size: 12px;
    color: #8e8e8e;
  }
`;

const FacebookLogin = styled.div`
  color: white;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const SubTitle = styled.span`
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
  font-weight: 600;
  color: rgb(142, 142, 142);
`;

function SignUp() {
  return (
    <Container>
      <Helmet>
        <title>Instagram | SignUp</title>
      </Helmet>
      <Wrapper>
        <TopBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>
          <SubTitle>친구들의 사진과 동영상을 보려면 가입하세요.</SubTitle>

          <Button>
            <FacebookLogin>
              <FontAwesomeIcon icon={faFacebookSquare} />
              <span>Facebook으로 로그인</span>
            </FacebookLogin>
          </Button>

          <Separator>
            <div></div>
            <span>OR</span>
            <div></div>
          </Separator>

          <Form>
            <Input type="text" name="phone" placeholder="휴대폰 번호" />
            <Input type="tex" name="name" placeholder="성명" />
            <Input type="text" name="username" placeholder="사용자 이름" />
            <Input type="password" name="password" placeholder="비밀번호" />
            <Button type="submit" value="SignUp">
              가입하기
            </Button>
          </Form>
        </TopBox>

        <BottomBox>
          <span>계정이 있신가요?</span>
          <Link to="/">로그인하기</Link>
        </BottomBox>
      </Wrapper>
    </Container>
  );
}

export default SignUp;
