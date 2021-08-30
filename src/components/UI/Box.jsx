import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex: ${props => props.flex || 1};
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'normal'};
  align-items: ${props => props.align || 'normal'};

  @media (max-width: 780px) {
    align-items: ${props => props.smAlign || props.align || 'normal'};
  }
  
  @media (max-width: 580px) {
    align-items: ${props => props.xsAlign || props.align || 'normal'};
  }

  
`