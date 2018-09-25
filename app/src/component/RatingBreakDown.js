import React, { Component } from 'react';
import { genderateStarClass } from './Star';

class RatingBreakDown extends Component {

    calculateRateNumber(number) {
        const { ratingData } = this.props;
        let counter = 0;
        counter = ratingData.reduce((acc, cur) => {
            if (cur === number.toString())
                acc++;
            return acc;
        }, 0);
        return counter;
    }

    render() {
        const { starIndex } = this.props;
        const starClass = genderateStarClass(starIndex)
        const rateNumber = this.calculateRateNumber(starIndex);
        return <React.Fragment>

            <div className="pull-left">
                <div className="pull-left" style={{ width: '35px', lineHeight: '1' }}>
                    <div style={{ height: '9px', margin: '5px 0' }}>{starIndex}<span className={`glyphicon glyphicon-star ${starClass}`}></span></div>
                </div>
                <div className="pull-left" style={{ width: '180px' }}>
                    <div className="progress" style={{ height: '9px', margin: '8px 0' }}>
                        <div className={`progress-bar progress-bar-${starClass} ${`with-style-${20 * (starIndex)}`}`} role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5">
                            <span className="sr-only">80% Complete (danger)</span>
                        </div>
                    </div>
                </div>
                <div className="pull-right" style={{ marginLeft: '10px' }}>{rateNumber}</div>
            </div>
        </React.Fragment>
    }
}
export default RatingBreakDown