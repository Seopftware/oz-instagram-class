import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 18px 0;
  border-bottom: 1px solid black;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 630px;
`;

const Icon = styled.span`
  margin-left: 5px;
`;

const Column = styled.div``;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Wrapper>
        <Column>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Column>
        <Column>
          <IconsContainer>
            <Icon>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </Icon>
          </IconsContainer>
        </Column>
      </Wrapper>
    </HeaderContainer>
  );
}

export default Header;
