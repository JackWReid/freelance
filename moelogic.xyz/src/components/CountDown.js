import React, { Component } from 'react';
import differenceInMilliseconds from 'date-fns/difference_in_milliseconds';

const getRemainingTime = target =>
  0 - differenceInMilliseconds(new Date(), target);

const hours = x => x * 60 * 60 * 100;

export default class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime: getRemainingTime(props.timeCode),
    };
  }

  componentDidMount = () => setInterval(this.tick, 100);

  tick = () =>
    this.setState({ remainingTime: getRemainingTime(this.props.timeCode) });

  render() {
    const { remainingTime } = this.state;

    if (remainingTime > 0) return <span>{this.state.remainingTime}</span>;
    if (remainingTime > 0 - hours(5)) return <span>right now</span>;
    return <span>over</span>;
  }
}
