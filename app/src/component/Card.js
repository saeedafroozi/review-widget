import React, { Component } from 'react';
import RateStar from './RateStar'
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMore: false,
        }
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleMoreClick = this.handleMoreClick.bind(this);
    }
    handleOnClick(e, id) {
        this.setState({ showMore: false });
        this.props.handleCardClick(id)
    }
    handleMoreClick(e) {
        e.stopPropagation();
        this.setState({ showMore: true });
    }
    render() {
        const { value, className, id } = this.props;
        const { showMore } = this.state;
        return <React.Fragment>
            <div className={`element-card ${className}`} onClick={(e) => this.handleOnClick(e, id)} >
                <div className="front-facing">
                    <h1 className="abr">{value.fullName}</h1>
                    <p className="title">{value.reviewTitle}</p>
                    <span className="atomic-mass">{value.location}</span>
                    <span className="atomic-number">
                        <RateStar starNumber={value.starRating} />
                    </span>
                </div>
                <div className="back-facing">
                    {!showMore ? <div className="sidebar-box">
                        <p>{value.reviewBody}</p>
                        {value.reviewBody.length > 1000 && <p className="read-more"><a  className="button" onClick={this.handleMoreClick} >Read More</a></p>}
                    </div>
                        :
                        <div className="sidebar-box-free">
                            <p>{value.reviewBody}</p>
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    }
}
export default Card;