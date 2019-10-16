import React from 'react';
import styled from 'styled-components';
import CountDown from './CountDown';

import getDate from 'date-fns/get_date';
import getHours24 from 'date-fns/get_hours';
import getMonthNumber from 'date-fns/get_month';

const getMonth = timeCode => {
  return [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ][getMonthNumber(timeCode) + 1];
};

const getHours = timeCode => {
  const fullHours = getHours24(timeCode);
  if (fullHours > 12) return fullHours - 12;
  return fullHours;
};

const getAmPm = timeCode => {
  const fullHours = getHours24(timeCode);
  if (fullHours > 12) return 'pm';
  return 'am';
};

const Event = styled.div`
  margin-top: 3rem;
  min-width: 30%;

  &:last-child {
    margin-bottom: 5em;
  }
`;

const FeaturedSymbol = styled.div`
  font-size: 20em;
  font-weight: bold;
`;

const EventTitle = styled.h1`
  margin-top: 0;
  font-weight: normal;
`;

const EventInfo = styled.p`
  color: gray;
  & > span {
    color: white;
  }
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  border-bottom: 1px dotted white;
`;

export default ({ number, title, acts, timeCode, place, link, symbol }) =>
  <Event id={`ml${number}`}>
    <FeaturedSymbol>{symbol}</FeaturedSymbol>
    <EventInfo>ml({number}) → (<CountDown timeCode={timeCode} />)</EventInfo>
    {title && <EventTitle>{title}</EventTitle>}
    {acts && <EventInfo>acts → (<span>{acts}</span>)</EventInfo>}
    {
      <EventInfo>
        time → (<span>
          {getHours(timeCode)}<sup>{getAmPm(timeCode)}</sup>,
          {' '}{getDate(timeCode)}<sup>{getMonth(timeCode)}</sup>
        </span>)
      </EventInfo>
    }
    {place && <EventInfo>place → (<span>{place}</span>)</EventInfo>}
    {link && <p><Link href={link}>come</Link></p>}
  </Event>;
