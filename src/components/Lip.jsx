import styled from "styled-components";

export const Lip = ({happinessLevel}) => (
    <LipSvg viewBox="0 0 100 30">
        <path d={`M 5 ${30 - 2 * happinessLevel - 5} Q 50,${3 * happinessLevel} 95,${30 - 2 * happinessLevel - 5}`}/>
    </LipSvg>
)

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