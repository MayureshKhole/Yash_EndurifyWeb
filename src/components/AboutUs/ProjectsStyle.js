import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 20px 0px 100px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 80px 0;
    gap: 12px;
    overflow-x: auto; /* Enable horizontal scrolling */
    scrollbar-width: none; /* Hide scrollbar for a cleaner look */
    -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
    &::-webkit-scrollbar {
        display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
    }
`;

export const Title = styled.h2`
    font-size: 42px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin-top: 20px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 32px;
        margin-top: 12px;
    }
`;

export const Desc = styled.p`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px; /* Add padding for better spacing */
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 20px;
`;

export const ToggleButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: ${({ active, theme }) => (active ? theme.button_active : theme.button)};
    color: ${({ theme }) => theme.text_primary};
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: ${({ theme }) => theme.button_hover};
    }
`;

export const Divider = styled.div`
    width: 1px;
    height: 100%;
    background-color: ${({ theme }) => theme.divider};
`;
