import styled from 'styled-components/native';

/* Reduce Padding-Top if showing Page-header in stack navigation */
export const ThemedContainer = styled.View`
    backgroundColor: ${props => props.theme.colors.background};
    padding: 60px 20px 20px 20px;
    width: 100%;
    height: 100%;
`;

export const ThemedView = styled.View`
    backgroundColor: ${props => props.theme.colors.primary};
    padding: 10px;
`;

export const ThemedText = styled.Text`
    color: ${props => props.theme.colors.text};
    fontSize: 16px;
`;
