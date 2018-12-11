
import React, { Component } from 'react'
class Col extends Component {
    render() {
        return <div style={this.props.style} className={`col-sm-${this.props.col}`}>
            {this.props.children}
        </div>
    }
}
export default Col