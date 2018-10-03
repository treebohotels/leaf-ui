import React from 'react';
import PropTypes from 'prop-types';
import dateFnsFormat from 'date-fns/format';
import dateFnsAddMonths from 'date-fns/add_months';
import Flex from '../../Flex/web';
import Space from '../../Space/web';
import View from '../../View/web';
import Icon from '../../Icon/web';

const DateRangePickerNavbar = ({
  className,
  month,
  onPreviousClick,
  onNextClick,
}) => (
  <Space className={className} margin={[0, 0, 2, 0]}>
    <Flex
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <View>
        <Icon
          name="keyboard_arrow_left"
          onClick={() => onPreviousClick()}
        />
        <View>
          {dateFnsFormat(month, 'MMMM \'YY')}
        </View>
        <View />
        <View>
          {dateFnsFormat(dateFnsAddMonths(month, 1), 'MMMM \'YY')}
        </View>
        <Icon
          name="keyboard_arrow_right"
          onClick={() => onNextClick()}
        />
      </View>
    </Flex>
  </Space>
);

DateRangePickerNavbar.propTypes = {
  className: PropTypes.string,
  month: PropTypes.instanceOf(Date),
  onPreviousClick: PropTypes.func,
  onNextClick: PropTypes.func,
};

export default DateRangePickerNavbar;
