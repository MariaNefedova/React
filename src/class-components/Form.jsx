import React from "react";

export class Form extends React.Component {
    state = {
        name: 'Uwan'
    }

    handleClick = () => {
        // console.log('click');
        this.setState({name : 'Mary'});
    }

    render(){
        return <div>
            class {this.state.name} {this.props.name}
            <button onClick={this.handleClick}>Жми</button>
        </div>
    }
}