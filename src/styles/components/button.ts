import styled from 'styled-components';

export default styled.button<{ fontSize: number; outlined?: boolean }>`
    width: 100%;
    font-size: ${props =>
        props.fontSize != null ? `${props.fontSize}px` : '18px'};
    font-weight: 700;
    height: 100%;
    background-color: ${props => props.theme.colors.primaryColor};
    border: none;
    background: ${props =>
        props.outlined ? '#FFF' : props.theme.colors.primaryColor};
    border: ${props =>
        props.outlined
            ? `1px solid ${props.theme.colors.primaryColor}`
            : 'none'};
    color: ${props =>
        props.outlined ? props.theme.colors.primaryColor : '#FFF'};
    cursor: pointer;
    :hover {
        background: ${props =>
            props.outlined
                ? 'rgba(22,24,35,0.03)'
                : props.theme.colors.primaryColor};
    }
`;
