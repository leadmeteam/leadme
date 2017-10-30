import React, { Component } from 'react';
import { Text } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';

console.log(PropTypes);

class TimeAgo extends Component {
    static defaultProps = {
        hideAgo: false,
        interval: 60000,
    };

    static propTypes = {
        time: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.instanceOf(Date)
        ]).isRequired,
        interval: PropTypes.number,
        hideAgo: PropTypes.bool,
    };

    constructor(props) {
        super(props);

        this.state = {
            key: Math.random(),
        };

        this.update = this.update.bind(this);
    }

    componentDidMount() {
        const { interval } = this.props;
        this.timer = setTimeout(() => {
            this.update();
        }, interval);
    }


    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    update() {
        const { interval } = this.props;
        this.timer = setTimeout(() => {
            this.setState({
                key: Math.random()
            });
            this.update();
        }, interval);
    }


    render() {
        return (
            <Text key={this.state.key} {...this.props}>{moment(this.props.time).fromNow(this.props.hideAgo)}</Text>
        );
    }
}

export default TimeAgo;

