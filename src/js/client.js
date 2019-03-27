import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

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

const data2012 = [{quarter: 1, earnings: 13000}, {quarter: 2, earnings: 16500}, {quarter: 3, earnings: 14250}, {quarter: 4, earnings: 19000}];
const data2013 = [{quarter: 1, earnings: 15000}, {quarter: 2, earnings: 12500}, {quarter: 3, earnings: 19500}, {quarter: 4, earnings: 13000}];
const data2014 = [{quarter: 1, earnings: 11500}, {quarter: 2, earnings: 13250}, {quarter: 3, earnings: 20000}, {quarter: 4, earnings: 15500}];
const data2015 = [{quarter: 1, earnings: 18000}, {quarter: 2, earnings: 13250}, {quarter: 3, earnings: 15000}, {quarter: 4, earnings: 12000}];

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>Victory Charts</h1>
                <VictoryChart
                    domainPadding={20}
                    theme={VictoryTheme.material}
                >
                    <VictoryAxis
                        // tickValues specifies both the number of ticks and where
                        // they are placed on the axis
                        // tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                        // tickFormat={["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9"]}
                        tickValues={[1, 2, 3, 4]}
                        tickFormat={["Q1", "Q2", "Q3", "Q4"]}
                    />
                    <VictoryAxis
                        dependentAxis
                        // tickFormat specifies how ticks should be displayed
                        tickFormat={(x) => (`$${x / 1000}k`)}
                    />
                    <VictoryStack colorScale={'warm'}>
                        <VictoryBar data={data2012} x='quarter' y='earnings' />
                        <VictoryBar data={data2013} x='quarter' y='earnings' />
                        <VictoryBar data={data2014} x='quarter' y='earnings' />
                        <VictoryBar data={data2015} x='quarter' y='earnings' />
                    </VictoryStack>
                </VictoryChart>
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);