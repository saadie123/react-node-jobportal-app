import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class Home extends Component {
    componentDidMount(){
        this.props.onFetchUser();
    }
    render(){
        return (
            <h1>Home</h1>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchUser: () => dispatch(actions.fetchUser())
    }
}

export default connect(null, mapDispatchToProps)(Home);