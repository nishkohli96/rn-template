import styled from 'styled-components/native';

/* Reduce Padding-Top if showing Page-header in stack navigation */
export const ThemedContainer = styled.View`
    backgroundColor: ${props => props.theme.colors.background};
    paddingTop: 60px;
    width: 100%;
    height: 100%;
`;

export const ThemedBody = styled.View`
    backgroundColor: ${props => props.theme.colors.background};
    padding: 25px;
`;

export const ThemedCard = styled.View`
    backgroundColor: ${props => props.theme.colors.card};
    padding: 10px;
`;

export const ThemedText = styled.Text`
    color: ${props => props.theme.colors.text};
    fontSize: 16px;
`;

export const ThemedHeading = styled.Text`
    color: ${props => props.theme.colors.heading};
    fontSize: 22px;
    fontWeight: 400
`;

export const ThemedSubtitle = styled.Text`
    color: ${props => props.theme.colors.heading};
    fontSize: 18px;
`;

export const TabLabel = styled.Text`
    marginTop: 15px;
    fontSize: 16px;
`;
