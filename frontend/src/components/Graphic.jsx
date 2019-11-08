import React from 'react';
import PropTypes from 'prop-types';
import {XYPlot, XAxis, YAxis, VerticalGridLines, LineSeries} from 'react-vis';

const Graphic = ({ data }) => (
  <div className = "Graphic">
    <XYPlot height={300} width={300}>
      <VerticalGridLines values={[2, 2.3, 2.7]} />
      <XAxis />
      <YAxis />
      <LineSeries data={data} />
    </XYPlot>
  </div>
);

Graphic.propTypes = {
  data: PropTypes.array,
}

export default Graphic;
