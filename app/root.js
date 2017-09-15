import React from 'react';
import Header from './components/header'
import Progress from './components/progress'
var path = require('path');

let duration = null;
let Root = React.createClass({
    getInitialState(){
        return {
            progress: '-'
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
        $('#player').bind($.jPlayer.event.timeupdate, (e) => {
            duration = e.jPlayer.status.duration;
            this.setState({
                progress: e.jPlayer.status.currentPercentAbsolute
            });
        });
    },
    componentWillUnMount(){
        $('#player').unbind($.jPlayer.event.timeupdate);
    },
    progressChangeHandler(progress) {
        $('#player').jPlayer('play', duration * progress);
    },
    render(){
        return(
           <div>
               <Header />
               <div id="player"></div>
                <Progress
                    progress={this.state.progress}
                    onProgressChange = {this.progressChangeHandler}
                    barColor = "#000"
                >
                </Progress>
           </div>
        );
    }
});

export default Root;