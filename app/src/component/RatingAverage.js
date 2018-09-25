import React, { Component } from 'react'
import RateStar from './RateStar'
class RatingAverage extends Component {
    render() {
        const { average, starNumber } = this.props
        return <div className="rating-block">
            <h4>Average user rating</h4>
            <h2 className="bold padding-bottom-7">{average}<small></small></h2>
            <RateStar starNumber={starNumber} />
        </div>
    }
}
export default RatingAverage