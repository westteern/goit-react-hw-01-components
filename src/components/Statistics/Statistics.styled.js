import styled from 'styled-components';

export const Section = styled.section`
  width: 300px;
  border: 2px solid #393e46;
  border-radius: 4px;
`;

export const Title = styled.h2`
  padding: 20px 0;
  font-family: 'Roboto', sans-serif;
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: #393e46;
`;

export const Info = styled.ul`
  display: flex;
  align-items: center;
  border-top: 2px solid #393e46;
  //   background-color: #f2e7d5;
`;

export const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  border-left: 2px solid #393e46;
  :first-of-type {
    border-left: none;
  }
`;

export const Label = styled.span`
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #5f6773;
`;

export const Percent = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #393e46;
`;
