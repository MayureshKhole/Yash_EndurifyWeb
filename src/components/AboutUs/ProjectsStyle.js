// src/components/ProjectsStyle.js
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const Desc = styled.p`
  font-size: 1.125rem;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ToggleButton = styled.button`
  background-color: ${({ active }) => (active ? '#007BFF' : '#e7e7e7')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ active }) => (active ? '#0056b3' : '#d4d4d4')};
  }
`;

export const Divider = styled.div`
  width: 1px;
  background-color: #ccc;
  margin: 0 10px;
`;
