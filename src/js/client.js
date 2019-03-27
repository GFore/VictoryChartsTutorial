import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 29000},
    {quarter: 5, earnings: 23000},
    {quarter: 6, earnings: 26000},
    {quarter: 7, earnings: 29000},
    {quarter: 8, earnings: 23000},
    {quarter: 9, earnings: 26000},
];

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>Victory Tutorial</h1>
                <VictoryChart domainPadding={8}>
                    <VictoryAxis
                        // tickValues specifies both the number of ticks and where
                        // they are placed on the axis
                        tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                        tickFormat={["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9"]}
                    />
                    <VictoryAxis
                        dependentAxis
                        // tickFormat specifies how ticks should be displayed
                        tickFormat={(x) => (`$${x / 1000}k`)}
                    />
                    <VictoryBar
                        data={data}
                        x='quarter'
                        y='earnings'
                    />
                </VictoryChart>
                <p>Hey!</p>
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);