import { injectGlobal } from 'styled-components';

const injectDatePickerStyles = (theme) => injectGlobal`
  .DayPicker {
    background: ${theme.color.white};
    position: relative;
    outline: none;
    z-index: 1;

    &-wrapper {
      && {
        padding: ${theme.px(4)};
        outline: none;
      }
    }

    &-Month {
      && {
        margin: 0;
      }

      & + & {
        margin-left: ${theme.px(4)};
      }
    }

    &-Weekday {
      && {
        padding: ${theme.px(1)};
        font-size: ${theme.fontSize.s};
      }
    }

    &-Day {
      border-radius: 0 !important;

      && {
        padding: ${theme.px(1)};
        font-weight: ${theme.fontWeight.normal};
        font-size: ${theme.fontSize.s};
        outline: none;
      }

      &:not(&--disabled):not(&--selected):not(&--outside):hover {
        && {
          background-color: ${theme.color.primaryLighter};
        }
      }

      &--today:not(&--disabled):not(&--outside) {
        && {
          color: ${theme.color.greyDarker};
        }
      }

      &--selected:not(&--disabled):not(&--outside) {
        && {
          color: ${theme.color.white};
          background-color: ${theme.color.primary};
        }
      }

      &--selected:not(&--start):not(&--end):not(&--disabled):not(&--outside) {
        && {
          color: ${theme.color.greyDarker};
          background-color: ${theme.color.primaryLighter};
        }
      }
    }
  }
`;

export default injectDatePickerStyles;
