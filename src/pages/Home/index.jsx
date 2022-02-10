import React, { Component } from 'react';
import InfoCard from '../../components/InfoCard';
import './index.css'

export default class Home extends Component {
  render() {
    return (
      <div className='mainWrapper'>
        <div className='firstLineWrapper'>
          <InfoCard />
        </div>
      </div>
    )
  }
}
