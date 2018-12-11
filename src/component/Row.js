import React, { Component } from 'react'
class Row extends Component {
    render() {
        return <div className='row'>
        <div>
            {this.props.children}
            </div>
        </div>
    }
}
export default Row