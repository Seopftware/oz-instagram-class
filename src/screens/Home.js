import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { far } from "@fortawesome/free-regular-svg-icons";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";

import {
  faBookmark,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  border: 1px solid black;
  margin-bottom: 60px;
`;

const Wrapper = styled.div`
  max-width: 650px;
`;

const FeedHeader = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  border-bottom: 1px solid black;
`;

const FeedAction = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

const FeedActionContainer = styled.div`
  padding: 12px 15px;
`;

const UserPfofileContainer = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const UserProfileName = styled.div`
  margin-left: 10px;
  font-weight: 600;
`;

const FeedImg = styled.img`
  width: 100%;
  max-width: 100%;
`;

const FeedActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
  svg {
    font-size: 20px;
  }
`;

const ProfileImgContainer = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  overflow: hidden;
`;

const UserPfofileImg = styled.img`
  max-width: 100%;
`;

const CommentsContainer = styled.div`
  margin-top: 20px;
`;
const CommentContainer = styled.div``;
const CommentCount = styled.span`
  display: block;
  opacity: 0.7;
  font-weight: 600;
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const CommentAuthor = styled.span`
  font-weight: 600;
  margin-right: 10px;
`;

const CommentContent = styled.span``;

const Column = styled.div``;

function Home() {
  return (
    <FeedContainer>
      <Wrapper>
        <FeedHeader>
          <ProfileImgContainer>
            <UserPfofileImg src="https://cdn.crowdpic.net/detail-thumb/thumb_d_9FB9D09621B3CA742EEFC57934D4B45A.png"></UserPfofileImg>
          </ProfileImgContainer>

          <UserProfileName>인섭</UserProfileName>
        </FeedHeader>

        <FeedImg src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"></FeedImg>

        <FeedActionContainer>
          <FeedActions>
            <Column>
              <FeedAction>
                <FontAwesomeIcon
                  style={{ color: "tomato" }}
                  icon={false ? SolidHeart : far.faHeart}
                />
              </FeedAction>

              <FeedAction>
                <FontAwesomeIcon icon={faComment} />
              </FeedAction>

              <FeedAction>
                <FontAwesomeIcon icon={faPaperPlane} />
              </FeedAction>
            </Column>

            <Column>
              <FontAwesomeIcon icon={faBookmark} />
            </Column>
          </FeedActions>

          <CommentsContainer>
            <CommentContainer>
              <CommentAuthor>작정자</CommentAuthor>
              <CommentContent>작성 내용</CommentContent>
            </CommentContainer>

            <CommentCount>댓글 N개 모두 보기</CommentCount>

            <CommentContainer>
              <CommentAuthor>작정자</CommentAuthor>
              <CommentContent>작성 내용</CommentContent>
            </CommentContainer>
          </CommentsContainer>
        </FeedActionContainer>
      </Wrapper>
    </FeedContainer>
  );
}

export default Home;
