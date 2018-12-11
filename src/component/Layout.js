import React, { Component } from 'react'
class Layout extends Component {
    validate() {
        React.Children.map(this.props.children, (child, index) => {
            if (child.type.name !== 'Row') {
                throw "The First Child Must Be RowComponent"
            }
        });
    }
    
    render() {
        this.validate();

        return <div className='container'>
            {this.props.children}
        </div>
    }
}
export default Layout