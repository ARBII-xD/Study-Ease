import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Button } from 'react-bootstrap';

import '../App.css';
const Progress = () => {
    const data = [
        {
            name: 'Quiz 1',
            maths: 5,
            bio: 6,
            amt: 10,
        },
        {
            name: 'Quiz 2',
            maths: 7,
            bio: 5,
            amt: 10,
        },
        {
            name: 'Quiz 3',
            maths: 7,
            bio: 5,
            amt: 10,
        },
        {
            name: 'Quiz 4',
            maths: 7,
            bio: 5,
            amt: 10,
        },
        {
            name: 'Quiz 5',
            maths: 7,
            bio: 5,
            amt: 10,
        },
        {
            name: 'Quiz 6',
            maths: 5,
            bio: 8,
            amt: 10,
        },
        {
            name: 'Quiz 7',
            maths: 7,
            bio: 5,
            amt: 10,
        },
        {
            name: 'Quiz 8',
            maths: 7,
            bio: 6,
            amt: 10,
        },
        {
            name: 'Quiz 9',
            maths: 8,
            bio: 5,
            amt: 10,
        },
        {
            name: 'Quiz 10',
            maths:2,
            bio: 9,
            amt: 10,
        }
    ];
    return (
        <>
            <h1>Progress</h1>
            <ResponsiveContainer width={1000} height={500}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 3,
                        left: 5,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="maths" fill="#8884d8" />
                    <Bar yAxisId="right" dataKey="bio" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
            <div>

            <Button href='/quizmain'>Back</Button>
            </div>


        </>
    )
};

export default Progress;