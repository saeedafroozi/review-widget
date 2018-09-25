
import React, { Component } from 'react';
import {genderateStarClass} from './Star';
import {MaxNumber} from './Constant'
class RateStar extends Component {
    constructor(props) {
        super(props);
        this.maxNumber = MaxNumber;
    }
    createStar() {
        const { starNumber} = this.props;
        let starList = [];
        //اینجا که آرایه ندارم رو چی مپ بزنم
        for (let index = 1; index <= this.maxNumber; index++) {
            if (starNumber >= index) {
                starList.push(<span key={`star${index}`} className={`glyphicon glyphicon-star ${genderateStarClass(starNumber)}`} aria-hidden="true"></span>)
            }
            else {
                starList.push(<span key={`star${index}`} className="glyphicon glyphicon-star default" aria-hidden="true"></span>)
            }

        }
        return starList;
    }
    render() {
        return <React.Fragment>
            {this.createStar()}
        </React.Fragment>
    }
}
export default RateStar;