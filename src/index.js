import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

function BoiilingVerdict(props){
    if (props.celsius >= 100) {
        return (
            <p>The water would boil</p>
        )
    }
    return (
        <p>The water would NOT boil</p>

    )
}

class Water extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value: ''
        };
    }
    handleChangeInput(event){
        this.setState({
            value: event.target.value
        })
    }
render(){
        return(
            <fieldset>
                <legend>dfv</legend>
                <input
                    type="text"
                    onChange={this.handleChangeInput.bind(this)}

                />
                <BoiilingVerdict celsius={this.state.value}/>
            </fieldset>
        )
}
}

ReactDOM.render(
    <Water />,
    document.getElementById('root')
);



