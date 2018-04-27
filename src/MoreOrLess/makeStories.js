import React, { Fragment } from 'react';

const LoremIpsum = () => (
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
    Maecenas at elit eget diam convallis ultricies in a ligula.<br />
    Nunc rutrum est ut risus laoreet laoreet.<br />
    Donec convallis massa at pretium tincidunt.<br />
    Quisque quis tellus quis odio venenatis bibendum.<br /> <br />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
    Maecenas at elit eget diam convallis ultricies in a ligula.<br />
    Nunc rutrum est ut risus laoreet laoreet.<br />
    Donec convallis massa at pretium tincidunt.<br />
    Quisque quis tellus quis odio venenatis bibendum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
    Maecenas at elit eget diam convallis ultricies in a ligula.<br />
    Nunc rutrum est ut risus laoreet laoreet.<br />
    Donec convallis massa at pretium tincidunt.<br />
    Quisque quis tellus quis odio venenatis bibendum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
    Maecenas at elit eget diam convallis ultricies in a ligula.<br />
    Nunc rutrum est ut risus laoreet laoreet.<br />
    Donec convallis massa at pretium tincidunt.<br />
    Quisque quis tellus quis odio venenatis bibendum.
  </div>
);

export default (storiesOf, { MoreOrLess, Card, Spacer }) =>
  storiesOf('MoreOrLess', module)
    .add('simple', () => (
      <Fragment>
        <Spacer padding={[2]}>
          <MoreOrLess initialHeight="100px" labelForMore="Show More" labelForLess="Show Less">
            <Card>
              <LoremIpsum />
            </Card>
          </MoreOrLess>
        </Spacer>
        <Spacer padding={[2]}>
          <MoreOrLess initialHeight="100px" labelForMore="Show More" labelForLess="Show Less">
            <Card>
              <LoremIpsum />
            </Card>
          </MoreOrLess>
        </Spacer>
      </Fragment>
    ));
