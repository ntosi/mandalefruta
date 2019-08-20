import React from 'react';

class Total extends React.Component{
    render() {
        return(
        <div className="alert alert-warning" role="alert">
            <h4>Total : ${this.props.total}</h4>
        </div>
        );
    }
}

export default Total;