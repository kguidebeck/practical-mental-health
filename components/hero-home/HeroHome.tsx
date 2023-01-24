import Container from "@components/container";
import * as Styled from "./HeroHome.styled";

const HeroHome = () => {
  return (
    <div>
      <Container>
        <Styled.Headshot>
          <Styled.ImageWrap>
            <Styled.Image
              src="images/ashton_headshot.png"
              alt="Headshot of Ashton"
            />
          </Styled.ImageWrap>
        </Styled.Headshot>
      </Container>
    </div>
  );
};

export default HeroHome;
