import React, { Fragment } from 'react';

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
    Quisque quis tellus quis odio venenatis bibendum`;

export default (storiesOf, {
  Accordion,
  Card,
  Spacer,
  Icon,
  Divider,
  Text,
  Flex,
}) =>
  storiesOf('Accordion', module)
    .add('Simple Accordion', () => (
      <Fragment>
        <Spacer padding={[2]}>
          <Text size="xl" color="greyDarker">Simple Accordion</Text>
        </Spacer>
        <Accordion>
          <Accordion.Section>
            <Accordion.Trigger>
              <Spacer padding={[2]}>
                <Card>
                  <Flex
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text size="s" weight="medium" color="greyDarker">
                      This is title
                    </Text>
                    <Icon name="keyboard_arrow_down" right />
                  </Flex>
                </Card>
              </Spacer>
            </Accordion.Trigger>
            <Accordion.Content>
              <Spacer padding={[2]}>
                <Card>{sampleText}</Card>
              </Spacer>
            </Accordion.Content>
          </Accordion.Section>
          <Divider />
          <Accordion.Section>
            <Accordion.Trigger>
              <Spacer padding={[2]}>
                <Card>
                  <Flex
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text size="s" weight="medium" color="greyDarker">
                      This is title
                    </Text>
                    <Icon name="keyboard_arrow_down" right />
                  </Flex>
                </Card>
              </Spacer>
            </Accordion.Trigger>
            <Accordion.Content>
              <Spacer padding={[2]}>
                <Card>{sampleText}</Card>
              </Spacer>
            </Accordion.Content>
          </Accordion.Section>
        </Accordion>
      </Fragment>
    ))
    .add('Multiple Accordions', () => (
      <Fragment>
        <Spacer padding={[2]}>
          <Text size="xl" color="greyDarker">Accordion 1</Text>
        </Spacer>
        <Accordion>
          <Accordion.Section>
            <Accordion.Trigger>
              <Spacer padding={[2]}>
                <Card>
                  <Flex
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text size="s" weight="medium" color="greyDarker">
                      This is title
                    </Text>
                    <Icon name="keyboard_arrow_down" right />
                  </Flex>
                </Card>
              </Spacer>
            </Accordion.Trigger>
            <Accordion.Content>
              <Spacer padding={[2]}>
                <Card>{sampleText}</Card>
              </Spacer>
            </Accordion.Content>
          </Accordion.Section>
        </Accordion>
        <Spacer padding={[2]}>
          <Text size="xl" color="greyDarker">Accordion 2</Text>
        </Spacer>
        <Accordion>
          <Accordion.Section>
            <Accordion.Trigger>
              <Spacer padding={[2]}>
                <Card>
                  <Flex
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text size="s" weight="medium" color="greyDarker">
                      This is title
                    </Text>
                    <Icon name="keyboard_arrow_down" right />
                  </Flex>
                </Card>
              </Spacer>
            </Accordion.Trigger>
            <Accordion.Content>
              <Spacer padding={[2]}>
                <Card>{sampleText}</Card>
              </Spacer>
            </Accordion.Content>
          </Accordion.Section>
        </Accordion>
      </Fragment>
    ));
