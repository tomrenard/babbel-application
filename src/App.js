import React, { useState }  from 'react';
import styled from 'styled-components';
import logo from './assets/babbel.png';
import { BsArrowRight } from 'react-icons/bs';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { VscGlobe } from 'react-icons/vsc';
import { useSpring, animated, config } from 'react-spring';

const HeaderStyles = styled.div`
  width: 100%;
`;

const BannerStyles = styled.div`
  width: 100%;
  padding-top: 1em;
  padding-bottom: 1em;
  background-color: #FFDD33;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  h2 {
    font-size: 1.3em;
  }
`;

const NavStyles = styled.nav`
  padding: 0 40px;
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  .img-container {
    width: 100%;
    max-width: 90px;
  }
  img {
    max-width: 100%;
  }
  ul {
    display: flex;
    list-style-type: none;
    align-items: center;
  }
  li {
    padding: 0 10px;
    cursor: pointer;
    font-size: 1em;
  }
`;

const SectionStyles = styled.div`
  margin: 2em 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentStyles = styled.div`
  margin: auto auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
`;

export default function App() {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 2000,
    config: config.molasses,
    onRest: () => set(!flip),
  })
  return(
    <>
      <HeaderStyles>
        <BannerStyles>
          <h2>SUMMER SALE: up to 30% off!<BsArrowRight style={{ verticalAlign: "center"}}/></h2>
        </BannerStyles>
        <NavStyles>
        <div style={{ display: 'flex'}}>
          <div className="img-container">
            <img src={logo} alt="" />
          </div>
          <ul style={{marginLeft: '36px'}}>
            <li>How It Works</li>
            <li>Courses</li>
            <li>Prices</li>
          </ul>
        </div>
          <ul>
            <li>For Businesses</li>
            <li><VscGlobe style={{ verticalAlign: "bottom", paddingRight: "4px", fontSize: "1.1em" }}/>En<RiArrowDropDownFill style={{ verticalAlign: "bottom", fontSize: "1.2em" }}/></li>
            <li>Log in</li>
            <li><button>Get Started</button></li>
          </ul>
        </NavStyles>
      </HeaderStyles>
      <div>
        <ContentStyles>
          <animated.h1 style={{...props, textAlign: 'center'}}>Welcome here Babbel Team, hope you've enjoyed this little easter egg.</animated.h1>
          <a className="button" href="https://www.tomrenard.xyz/">Contact me</a>
        </ContentStyles>
      </div>
    </>
  );
}
