import React from 'react';
import path from 'path'

import Header from './components/header'
import Player from './page/player'

let Root = React.createClass({
    getInitialState(){
        return {

        }
    },
    componentDidMount() {
        $('#player').jPlayer({
            ready: function() {
                $('#player').jPlayer('setMedia', {
                    mp3: path.join(__dirname, '/static/mp3/人质.mp3')
                }).jPlayer('play');
            },
            supplied: 'mp3',
            wmode: 'window'
        });
    },
    render() {
        return (
            <div>
                <Header />
                <Player></Player>
            </div>
        );
    }

});

export default Root;