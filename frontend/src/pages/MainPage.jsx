import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DateTabs from '../components/DateTabs.jsx';
import Graphic from '../components/Graphic.jsx';
import MainButton from '../components/MainButton.jsx';
import { changeScale } from '../store/actions/backEndMockActions.js';
import { getGraphicPoints } from '../store/getGraphicPoints.js';

const MainPage = ({ graphicData, changeScale, getGraphicPoints }) => (
  <div className="app">
    <header className="header">
      <DateTabs onChange={changeScale} />
    </header>
    <div className="content">
      {graphicData && <Graphic data={graphicData} />}
      <MainButton fetchData={getGraphicPoints} />
    </div>
  </div>
);

MainPage.propTypes = {
  graphicData: PropTypes.array,
  changeScale: PropTypes.func,
  getGraphicPoints: PropTypes.func,
}

export default connect(
  ({ backEndMock }) => ({
      graphicData: backEndMock.graphicData
  }),
  { changeScale, getGraphicPoints })(MainPage);