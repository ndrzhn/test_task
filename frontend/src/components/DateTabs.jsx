import React from 'react';
import PropTypes from 'prop-types';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

const scaleTranslation = {
	'day': 'День',
	'month': 'Месяц',
	'year': 'Год',
};

const DateTabs = ({ onChange }) => (
  <ToggleButtonGroup toggle className="mt-3" type="radio" name="options" defaultValue="day" onChange={onChange}>
  	{Object.keys(scaleTranslation).map((scale) => (
  		<ToggleButton key={scale} variant="secondary" name={scale} value={scale}>
      		{scaleTranslation[scale]}
    	</ToggleButton>))
  	}
  </ToggleButtonGroup>
);

DateTabs.propTypes = {
	onChange: PropTypes.func,
}

export default DateTabs;
