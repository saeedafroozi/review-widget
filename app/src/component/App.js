import React, { Component } from 'react';
import Card from './Card'
import RatingAverage from './RatingAverage'
import RatingBreakDown from './RatingBreakDown'
import Layout from './Layout'
import Row from './Row'
import Col from './Col'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cardId: '',
			cardClassName: ''
		}
		this.handleCardClick = this.handleCardClick.bind(this);
	}
	calculateAverageAndFloor() {
		const { review } = this.props;
		let sum = review.reduce((acc, cur) => acc + Number(cur.starRating), 0);
		return {
			averageRate: (sum / review.length).toString(),
			floorAverage: Math.floor((sum / review.length)).toString()
		};
	}
	makeRatingData() {
		return this.props.review.map(x => x.starRating);
	}


	handleCardClick(id) {
		this.setState(prevSate => {
			if (prevSate.cardClassName === 'open' && prevSate.cardId === id)
				return { cardClassName: '' }
			else
				return { cardId: id, cardClassName: 'open' }
		})
	}

	render() {
		const { review } = this.props;
		const { cardId, cardClassName } = this.state;
		const { averageRate, floorAverage } = this.calculateAverageAndFloor();
		const ratingData = this.makeRatingData();

		return (
			<React.Fragment>
				<Layout>
					<Row>
						<Col col={2}></Col>
						<Col col={3} style={{ marginTop: '11px' }}>
							{
								this.average !== 0 &&
								<RatingAverage
									average={averageRate}
									starNumber={floorAverage}
								/>
							}
						</Col>
						<Col col={3}>
							<h4>Rating breakdown</h4>
							{
								review.length !== 0 && review.map((item, index) =>
									<RatingBreakDown
										key={`break${index}`}
										starIndex={index + 1}
										ratingData={ratingData}
									/>
								)
							}
						</Col>
					</Row>
				</Layout>
				<Layout>
					<Row>
						{
							review.length !== 0 && review.map((item, index) =>
								
									<Card
										key={`card${index}`}
										value={item}
										id={`card${index}`}
										handleCardClick={this.handleCardClick}
										className={`card${index}` === cardId ? cardClassName : ''}
									/>
								
							)

						}
					</Row>
				</Layout>
			</React.Fragment >
		);
	}
}

export default App;
