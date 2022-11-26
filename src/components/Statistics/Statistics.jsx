import PropTypes from 'prop-types';
import { getRandomHexColor } from 'components/utils/getRandomColor';

import {
  Section,
  Title,
  Info,
  InfoItem,
  Label,
  Percent,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <Info>
        {stats.map(({ id, label, percentage, bgc = getRandomHexColor() }) => (
          <InfoItem key={id} style={{ backgroundColor: `${bgc}` }}>
            <Label>{label}</Label>
            <Percent>{percentage}%</Percent>
          </InfoItem>
        ))}
      </Info>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
