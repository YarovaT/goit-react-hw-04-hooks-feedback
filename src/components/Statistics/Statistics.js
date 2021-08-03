import React from 'react';
import style from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={style.statisticsList}>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive feedback: {positivePercentage} %</li>
  </ul>
);

Statistics.propTypes = {
  title: PropTypes.string,
  state: PropTypes.objectOf(PropTypes.number),
};

export default Statistics;
