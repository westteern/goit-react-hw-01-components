import styled from 'styled-components';

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 250px;
  border-radius: 4px;
  margin-bottom: 30px;
  margin-left: 30px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  width: 250px;
  box-shadow: 4px 4px 8px 9px rgba(34, 60, 80, 0.2);  
  }
`;

export const Status = styled.span`
  display: block;
  margin-right: 15px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${p => {
    return p.status ? 'green' : 'red';
  }};
`;

export const Name = styled.p`
  margin-left: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #fffff;
`;
