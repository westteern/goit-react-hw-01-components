import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 250px;
  border-radius: 4px;
  box-shadow: 10px 13px 8px 0px rgba(34, 60, 80, 0.2);
  margin-bottom: 30px;
  margin-left: 30px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 8px;
  background-color: #53aecf;
  border-radius: 4px 4px 0 0;
`;

export const UserImage = styled.div`
  height: 150px;
  width: 150px;
  padding: 10px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #e0ca1d;
`;

export const Username = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #393e46;
`;

export const UserInfo = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #5f6773;
  letter-spacing: 0.03em;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  padding: 12px 8px;
  background-color: #e0ca1d;
  border-radius: 0 0 4px 4px;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  margin-bottom: 6px;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #393e46;
`;
export const Quantity = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #5f6773;
`;
