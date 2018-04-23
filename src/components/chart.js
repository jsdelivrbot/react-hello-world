import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function calcAverage(data) {
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines height={40} width={80} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type='avg' />
            </Sparklines>
            <span>Avg. {calcAverage(props.data)} {props.unit}</span>
        </div>
    )
}