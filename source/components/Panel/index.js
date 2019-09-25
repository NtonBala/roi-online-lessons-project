// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import Styles from './styles.m.css';
import { feedActions } from '../../bus/feed/actions';

import { StarshipTile } from '../../components';

const mapState = (state) => {
    return {
        starships:  state.feed.starships,
        isFetching: state.feed.isFetching,
    };
};

const mapDispatch = {
    fetchStarshipsAsync: feedActions.fetchStarshipsAsync,
};

@connect(
    mapState,
    mapDispatch
)
export class Panel extends Component {
    _fetchStarshipsAsync = () => {
        return this.props.fetchStarshipsAsync();
    }

    _getStarshipsJSX = () => {
        return this.props.starships.map((ship) => {
            return (
                <StarshipTile
                    key = { ship.name }
                    { ...ship }
                />
            );
        });
    }

    render () {
        const { isFetching } = this.props;

        const starshipsJSX = this._getStarshipsJSX();

        const buttonMessage = isFetching
            ? '⏳ Calling...'
            : '📲 Call ships';

        return (
            <section className = { Styles.panel }>
                <h1>🖥</h1>
                <button
                    disabled = { isFetching }
                    onClick = { this._fetchStarshipsAsync }>
                    {buttonMessage}
                </button>
                <ul>{ starshipsJSX }</ul>
            </section>
        );
    }
}
