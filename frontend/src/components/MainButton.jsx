import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const MainButton = ({ fetchData }) => {
	const getData = () => {
		fetchData();
	};

  return (
    <Button className="MainButton" variant="success" onClick={getData}>
      Отобразить
    </Button>
  );
};

MainButton.propTypes = {
  fetchData: PropTypes.func,
}

export default MainButton;
