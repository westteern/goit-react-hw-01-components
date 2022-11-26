import PropTypes from 'prop-types';

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
      {title && <Title>{title}</Title>}
      <Info>
        {stats.map(({ id, label, percentage }) => (
          <InfoItem key={id}>
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
