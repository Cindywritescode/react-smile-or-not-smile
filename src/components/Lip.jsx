import styled from "styled-components";

export const Lip = ({happinessLevel = 5}) => (
    <LipSvg viewBox="0 0 100 30">
        <path d={calculatePath(happinessLevel)}>
            <animate attributeName='d' from={calculatePath(5)} to={calculatePath(happinessLevel)} dur='1s'/>
        </path>
    </LipSvg>
)

export const calculatePath = (level) => `M 5 ${30 - 2 * level - 5} Q 50,${3 * level} 95,${30 - 2 * level - 5}`

const LipSvg = styled.svg`
  width: 50vw;
  height: 50vw/4;

  path {
    fill: none;
    stroke: black;
    stroke-width: 0.9vh;
    stroke-linecap: round;
  }
`