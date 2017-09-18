import React from 'react'
import './progress.less'

let Progress=React.createClass({
    getDefaultProps() {
        return {
            barColor: '#88F19B'
        }
    },
    changeProgress(e){
        let progressBar = this.refs.progressBar;
        let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
        this.props.onProgressChange && this.props.onProgressChange(progress);
    },
    render(){
        return(
            <div>
                <div className="components-progress" ref="progressBar" onClick={this.changeProgress}>
                    <div className="progress" style={{width: `${this.props.progress}%` , background: this.props.barColor}}></div>
                </div>
                <p>
                    已播放: {this.props.progress}s
                </p>
            </div>
        );
    }
});

export default Progress;  