import React from 'react';
import { storiesOf } from '@storybook/react';
import Aux from '../Aux';
import Flex from '../Flex';
import Card from '../Card';

const ThemeCard = Card.extend`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 120px;
  margin: 0 8px 8px 0;
`;

storiesOf('Theme', module)
  .add('colors', () => (
    <Aux>
      <Flex>
        <ThemeCard elevation={1} color="leaf">leaf<br />#25a63f</ThemeCard>
        <ThemeCard elevation={1} color="leafDark">leafDark<br />#1d8432</ThemeCard>
      </Flex>
      <Flex>
        <ThemeCard elevation={1} color="emerald">emerald<br />#088337</ThemeCard>
        <ThemeCard elevation={1} color="emeraldDark">emeraldDark<br />#06682c</ThemeCard>
      </Flex>
      <Flex>
        <ThemeCard elevation={1} color="lagoon">lagoon<br />#007989</ThemeCard>
        <ThemeCard elevation={1} color="lagoonDark">lagoonDark<br />#00606d</ThemeCard>
      </Flex>
      <Flex>
        <ThemeCard elevation={1} color="teal">teal<br />#00a08b</ThemeCard>
        <ThemeCard elevation={1} color="tealDark">tealDark<br />#008070</ThemeCard>
      </Flex>
      <Flex>
        <ThemeCard elevation={1} color="chill">chill<br />#bcdcd6</ThemeCard>
        <ThemeCard elevation={1} color="chillDark">chillDark<br />#96b0ab</ThemeCard>
      </Flex>
      <Flex>
        <ThemeCard elevation={1} color="ink">ink<br />#272f67</ThemeCard>
        <ThemeCard elevation={1} color="inkDark">inkDark<br />#1b2552</ThemeCard>
      </Flex>
      <Flex>
        <ThemeCard elevation={1} color="royal">royal<br />#5768e9</ThemeCard>
        <ThemeCard elevation={1} color="royalDark">royalDark<br />#4553ba</ThemeCard>
      </Flex>
      <Flex>
        <ThemeCard elevation={1} color="rio">rio<br />#ced500</ThemeCard>
        <ThemeCard elevation={1} color="rioDark">rioDark<br />#8a8f00</ThemeCard>
      </Flex>
      <Flex>
        <ThemeCard elevation={1} color="warningLighter">warningLighter<br />#fcf0cd</ThemeCard>
        <ThemeCard elevation={1} color="warningLight">warningLight<br />#ffea8a</ThemeCard>
        <ThemeCard elevation={1} color="warning">warning<br />#edc200</ThemeCard>
        <ThemeCard elevation={1} color="warningDark">warningDark<br />#9c6f19</ThemeCard>
      </Flex>
      <Flex>
        <ThemeCard elevation={1} color="dangerLighter">dangerLighter<br />#fbeae5</ThemeCard>
        <ThemeCard elevation={1} color="dangerLight">dangerLight<br />#fdac9a</ThemeCard>
        <ThemeCard elevation={1} color="danger">danger<br />#ed6347</ThemeCard>
        <ThemeCard elevation={1} color="dangerDark">dangerDark<br />#bf0711</ThemeCard>
      </Flex>
      <Flex>
        <ThemeCard elevation={1} color="successLighter">successLighter<br />#e3f1df</ThemeCard>
        <ThemeCard elevation={1} color="successLight">successLight<br />#bbe5b3</ThemeCard>
        <ThemeCard elevation={1} color="success">success<br />#50b83c</ThemeCard>
        <ThemeCard elevation={1} color="successDark">successDark<br />#108043</ThemeCard>
      </Flex>
      <Flex>
        <ThemeCard elevation={1} color="black">black<br />#4a4a4a</ThemeCard>
        <ThemeCard elevation={1} color="blackTranslucent">blackTranslucent<br />rgba(0, 0, 0, 0.1)</ThemeCard>
        <ThemeCard elevation={1} color="slate">slate<br />#717171</ThemeCard>
        <ThemeCard elevation={1} color="rock">rock<br />#aeaeae</ThemeCard>
        <ThemeCard elevation={1} color="smoke">smoke<br />#d9d9d9</ThemeCard>
        <ThemeCard elevation={1} color="cloud">cloud<br />#e6e6e6</ThemeCard>
        <ThemeCard elevation={1} color="snow">snow<br />#ebebeb</ThemeCard>
        <ThemeCard elevation={1} color="white">white<br />#ffffff</ThemeCard>
      </Flex>
    </Aux>
  ))
  .add('shadows', () => (
    <Flex>
      <ThemeCard color="white">elevation 0</ThemeCard>
      <ThemeCard color="white" elevation={1}>elevation 1</ThemeCard>
      <ThemeCard color="white" elevation={2}>elevation 2</ThemeCard>
    </Flex>
  ));
