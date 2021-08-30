import styled from "styled-components";

export const Eye = ({orientation = 100}) => {
    const x = (scale) => 50 + 25 * Math.sin(2 * Math.PI * scale / 100)
    const y = (scale) => 50 - 25 * Math.cos(2 * Math.PI * scale / 100)
    const sequenceX = (to) => new Array(to + 1).fill(0).map((_, i) => x(i)).join(';')
    const sequenceY = (to) => new Array(to + 1).fill(0).map((_, i) => y(i)).join(';')
    const retinaX = x(orientation)
    const retinaY = y(orientation)

    return (
        <EyeSvg viewBox="0 0 100 100">
            <EyeBall cx="50" cy="50" r="50"/>
            <EyeRetina
                cx={retinaX}
                cy={retinaY}
                r="20">
                <animate attributeName="cx" values={sequenceX(orientation)} dur={`${50*orientation}ms`}/>
                <animate attributeName="cy" values={sequenceY(orientation)} dur={`${50*orientation}ms`}/>
            </EyeRetina>
        </EyeSvg>
    )
}

const EyeSvg = styled.svg`
  width: 14vw;
  height: 14vw;
`

const EyeBall = styled.circle`
  fill: black;
`

const EyeRetina = styled.circle`
  fill: white;
`
