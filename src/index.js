import React, { useCallback, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import CommentApp from "./CommentApp";
import {observer} from "mobx-react";
import {observable} from 'mobx';
import "./index.css";

function Test() {
    let [data, sData] = React.useState([]);
    let A = useMemo(() => {
            console.log(data.length);
            return () => data.map((item) => <li key={Math.random()}>{item}</li>)
            
    }, [data]);

    const add = () => {
        sData((pre) => [...pre, 1])
        console.log(data);
        console.dir(A);
    };

    return (
        <div>
            <button onClick={() => add()}>click</button>
            
        </div>
    )
}

var timerData = observable({
    secondsPassed: 0
});

setInterval(() => {
    timerData.secondsPassed++;
}, 1000);

const Timer = observer(class Timer extends React.Component {
    render() {
        return (<span>Seconds passed: { this.props.timerData.secondsPassed } </span> )
    }
});

ReactDOM.render(<Timer timerData={timerData}/>, document.getElementById("root"));
