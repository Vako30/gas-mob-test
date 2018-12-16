import React from 'react';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default function Chart(props) {
    const {data, dataKey} = props;
    return (
        <ResponsiveContainer width="100%" height={500}>
            <BarChart data={data}>
                <XAxis dataKey={dataKey} tickLine={false} axisLine={false} tickMargin={7}/>
                <YAxis tickCount={6} axisLine={false} tickLine={false} tickMargin={15}/>
                <Legend content={renderLegend} />
                <Tooltip cursor={{ stroke: "transparent", strokeWidth: 2 }} content={renderTooltip}/>
                <CartesianGrid stroke="#e7ebef" vertical={false}/>
                <Bar dataKey="effective" fill="#424b5a" />
                <Bar dataKey="estimated" fill="#c2d1d9" />
            </BarChart>
        </ResponsiveContainer>
    );
};

const renderTooltip = (props) => {
    const { payload } = props;
    return(
        <div className="bg-light shadow-sm rounded p-2">
            {payload.map(p =>
                <p key={p.dataKey} className="text-muted text-capitalize small mb-0">{`${p.dataKey}: ${p.value}`}</p>
            )}
        </div>
    )
};

const renderLegend = (props) => {
    const payload = props.payload || [];
    return (
        <div className="d-flex align-items-center mt-3">
            <div className="col">
                <p className="text-muted mb-0">Showing volume in thousands of gallons.</p>
            </div>
            <div className="col">
                <div className="d-flex justify-content-center">
                {payload.map((entry, index) =>
                    <div key={index} className="px-1">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" checked onChange={() => {}}/>
                            <label className="custom-control-label text-capitalize">{entry.value}</label>
                        </div>
                    </div>
                )}
                </div>
            </div>
            <div className="col">
                <div className="form-row">
                    <div className="col">
                        <button className="btn btn-block btn-outline-primary">Share</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-block btn-outline-primary">Print</button>
                    </div>
                </div>
            </div>
        </div>
    );
};