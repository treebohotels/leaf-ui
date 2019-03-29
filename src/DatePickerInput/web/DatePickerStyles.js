import { createGlobalStyle } from 'styled-components';
import reactDayPickerStyles from '!!raw-loader!react-day-picker/lib/style.css'; // eslint-disable-line

const DatePickerStyles = createGlobalStyle`
  ${reactDayPickerStyles}

  .DayPicker {
    background: ${(props) => props.theme.color.white};
    position: relative;
    outline: none;
    z-index: 1;

    &-wrapper {
      && {
        padding: ${(props) => props.theme.px(4)};
        outline: none;
      }
    }

    &-Month {
      && {
        margin: 0;
      }

      & + & {
        margin-left: ${(props) => props.theme.px(4)};
      }
    }

    &-Weekday {
      && {
        padding: ${(props) => props.theme.px(1)};
        font-size: ${(props) => props.theme.fontSize.s};
      }
    }

    &-Day {
      border-radius: 0 !important;

      && {
        padding: ${(props) => props.theme.px(1)};
        font-weight: ${(props) => props.theme.fontWeight.normal};
        font-size: ${(props) => props.theme.fontSize.s};
        outline: none;
      }

      &:not(&--disabled):not(&--selected):not(&--outside):hover {
        && {
          background-color: ${(props) => props.theme.color.primaryLighter};
        }
      }

      &--today:not(&--disabled):not(&--outside) {
        && {
          color: ${(props) => props.theme.color.greyDarker};
        }
      }
      /* stylelint-disable no-descending-specificity */
      &--selected:not(&--disabled):not(&--outside) {
        && {
          color: ${(props) => props.theme.color.white};
          background-color: ${(props) => props.theme.color.primary};
        }
      }

      &--selected:not(&--start):not(&--end):not(&--disabled):not(&--outside) {
        && {
          color: ${(props) => props.theme.color.greyDarker};
          background-color: ${(props) => props.theme.color.primaryLighter};
        }
      }
      /* stylelint-enable no-descending-specificity */
    }
  }
`;

export default DatePickerStyles;
