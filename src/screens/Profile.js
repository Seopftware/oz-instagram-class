import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";

const ProfileContainer = styled.div``;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  border-radius: 3px;
`;

const HeaderImg = styled.img`
  margin-left: 50px;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  margin-right: 80px;
`;

const HeaderInfo = styled.div``;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

const HeaderUserName = styled.h3`
  font-size: 28px;
  font-weight: 600;
`;

const HeaderFollowerInfo = styled.span`
  &:nth-of-type(2) {
    margin-left: 10px;
  }
`;

const ContentsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 290px;
  gap: 30px;
  maring-top: 50px;
`;

const Content = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  position: relative;
`;

const InnerContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const Icon = styled.span`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin: 0 5px;
  svg {
    font-size: 14px;
    margin-right: 5px;
  }
`;

function Profile() {
  return (
    <ProfileContainer>
      <HeaderContainer>
        <HeaderImg src="https://i.namu.wiki/i/pswOMlsv2m1ZwsDdb5LzuzgBeVUsmg6yj1b75ihewl8KI0R-DrmeZ01FHH7p2OFmEWW9-5J6-cbdNPSvf9fptw.webp"></HeaderImg>
        <HeaderInfo>
          <Row>
            <HeaderUserName>유저이름</HeaderUserName>
          </Row>
          <Row>
            <HeaderFollowerInfo>3 followers</HeaderFollowerInfo>
            <HeaderFollowerInfo>10 following</HeaderFollowerInfo>
          </Row>
        </HeaderInfo>
      </HeaderContainer>

      <ContentsContainer>
        <Content bg="https://www.urbanbrush.net/web/wp-content/uploads/edd/2019/09/urbanbrush-20190904021843269545.png">
          <InnerContainer>
            <Icon>
              <FontAwesomeIcon icon={faHeart} />
              좋아요수
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faComment} />
              리뷰수
            </Icon>
          </InnerContainer>
        </Content>
        <Content bg="https://www.urbanbrush.net/web/wp-content/uploads/edd/2019/09/urbanbrush-20190904021843269545.png">
          <InnerContainer>
            <Icon>
              <FontAwesomeIcon icon={faHeart} />
              좋아요수
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faComment} />
              리뷰수
            </Icon>
          </InnerContainer>
        </Content>
        <Content bg="https://www.urbanbrush.net/web/wp-content/uploads/edd/2019/09/urbanbrush-20190904021843269545.png">
          <InnerContainer>
            <Icon>
              <FontAwesomeIcon icon={faHeart} />
              좋아요수
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faComment} />
              리뷰수
            </Icon>
          </InnerContainer>
        </Content>
      </ContentsContainer>
    </ProfileContainer>
  );
}

export default Profile;
