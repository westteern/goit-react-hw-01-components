import styled from 'styled-components';

export const Section = styled.section`
  width: 250px;
  border-radius: 4px;
  margin-bottom: 30px;
  margin-left: 30px;
  box-shadow: 4px 4px 8px 9px rgba(34, 60, 80, 0.2);
`;

export const Title = styled.h2`
  padding: 15px 0;
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: #393e46;
`;

export const Info = styled.ul`
  display: flex;
  align-items: center;
`;

export const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  :first-of-type {
    border-left: none;
  }
`;

export const Label = styled.span`
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #fafcff;
`;

export const Percent = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fafcff;
`;
