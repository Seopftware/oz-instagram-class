import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

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

const FBButton = styled.div`
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

const Button = styled.input`
  width: 100%;
  border: none;
  border-radius: 3px;
  margin-top: 12px;
  background-color: #0095f6;
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
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
  // const {
  //   register,
  //   handleSubmit,
  //   formState,
  //   formState: { errors },
  // } = useForm({
  //   mode: "onChange", // onBlur
  // });

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmitValid = (data) => {
    // API 호출
    console.log("data valid", data);
    // axios.post("https://oz.com/api/v1/signup", data)
  };

  const onSubmitInvalid = (data) => {
    console.log("data invalid", data);
  };

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

          <FBButton>
            <FacebookLogin>
              <FontAwesomeIcon icon={faFacebookSquare} />
              <span>Facebook으로 로그인</span>
            </FacebookLogin>
          </FBButton>

          <Separator>
            <div></div>
            <span>OR</span>
            <div></div>
          </Separator>

          <Form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
            <Input
              type="text"
              placeholder="휴대폰 번호"
              // {...register("phone", { required: true, minLength: 12 })}
              {...register("phone", { required: true, minLength: 12 })}
            />
            {/* {errors.phone && errors.phone.type === "required" && (
              <p>휴대폰 번호를 입력해주세요.</p>
            )}
            {errors.phone && errors.phone.type === "minLength" && (
              <p>휴대폰 번호는 최소 12자 이상이어야 합니다.</p>
            )} */}
            <Input
              type="tex"
              placeholder="성명"
              {...register("name", { required: true, minLength: 3 })}
            />

            {errors.name && errors.name.type === "required" && (
              <p style={{ color: "red" }}>이름은 반드시 입력되어야 합니다..</p>
            )}

            {errors.name && errors.name.type === "minLength" && (
              <p style={{ color: "red" }}>
                이름은 최소 3글자 이상 입력 해주셔야 합니다.
              </p>
            )}

            <Input
              type="text"
              placeholder="유저네임"
              {...register("username", { required: true, minLength: 3 })}
            />
            <Input
              type="password"
              name="password"
              placeholder="비밀번호"
              {...register("password", { required: true, minLength: 4 })}
            />

            <Button
              type="submit"
              value="가입하기"
              disabled={!formState.isValid}
            />
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
