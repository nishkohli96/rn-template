import styled from 'styled-components/native';

export const ThemedView = styled.View`
    backgroundColor: ${(props) => props.theme.colors.background};
    padding: 20px;
    display: flex;
    flex: 1;
`;