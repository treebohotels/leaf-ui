import React from 'react';

const sampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Maecenas at elit eget diam convallis ultricies in a ligula.
    Nunc rutrum est ut risus laoreet laoreet.
    Donec convallis massa at pretium tincidunt.
    Quisque quis tellus quis odio venenatis bibendum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Maecenas at elit eget diam convallis ultricies in a ligula.
    Nunc rutrum est ut risus laoreet laoreet.
    Donec convallis massa at pretium tincidunt.
    Quisque quis tellus quis odio venenatis bibendum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Maecenas at elit eget diam convallis ultricies in a ligula.
    Nunc rutrum est ut risus laoreet laoreet.
    Donec convallis massa at pretium tincidunt.
    Quisque quis tellus quis odio venenatis bibendum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Maecenas at elit eget diam convallis ultricies in a ligula.
    Nunc rutrum est ut risus laoreet laoreet.
    Donec convallis massa at pretium tincidunt.
    Quisque quis tellus quis odio venenatis bibendum
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Maecenas at elit eget diam convallis ultricies in a ligula.
    Nunc rutrum est ut risus laoreet laoreet.
    Donec convallis massa at pretium tincidunt.
    Quisque quis tellus quis odio venenatis bibendum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Maecenas at elit eget diam convallis ultricies in a ligula.
    Nunc rutrum est ut risus laoreet laoreet.
    Donec convallis massa at pretium tincidunt.
    Quisque quis tellus quis odio venenatis bibendum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Maecenas at elit eget diam convallis ultricies in a ligula.
    Nunc rutrum est ut risus laoreet laoreet.
    Donec convallis massa at pretium tincidunt.
    Quisque quis tellus quis odio venenatis bibendum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Maecenas at elit eget diam convallis ultricies in a ligula.
    Nunc rutrum est ut risus laoreet laoreet.
    Donec convallis massa at pretium tincidunt.
    Quisque quis tellus quis odio venenatis bibendum
    `;

export default (storiesOf, {
  isAMP,
  Space,
  View,
  MoreOrLess,
}) =>
  storiesOf('MoreOrLess', module).add('simple', () => (
    <React.Fragment>
      <Space margin={[0, 0, 5, 0]}>
        <View>
          {
            isAMP ? (
              <MoreOrLess
                initialHeight="100px"
                labelForMore="Show More"
                labelForLess="Show Less"
              >
                {sampleText}
              </MoreOrLess>
            ) : (
              <MoreOrLess
                labelForMore="Show More"
                labelForLess="Show Less"
                visibleCharacters="500"
              >
                {sampleText}
              </MoreOrLess>
            )
          }
        </View>
      </Space>
    </React.Fragment>

  ));
