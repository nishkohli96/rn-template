import styled from 'styled-components/native';

export const ThemedView = styled.View`
    backgroundColor: ${(props) => props.theme.colors.background};
    padding: 20px;
    display: flex;
    flex: 1;
`;

export const ThemedText = styled.Text`
    color: ${(props) => props.theme.colors.text};
    fontSize: 16px;
`;