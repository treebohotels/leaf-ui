import React from 'react';
import { storiesOf } from '@storybook/react';
import View from '../View';
import Space from '../Space';
import Icon from '../Icon';
import Divider from '../Divider';
import Text from '../Text';
import Flex from '../Flex';
import Image from '../Image';
import Accordion from './Accordion';

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

storiesOf('Accordion', module).addParameters({
  component: Accordion,
})
  .add('Simple Accordion', () => (
    <React.Fragment>
      <Space padding={[2]}>
        <Text size="xl" color="greyDarker">Simple Accordion</Text>
      </Space>
      <Accordion>
        <Accordion.Section>
          <Accordion.Section.Trigger>
            <Space padding={[2]}>
              <Flex
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <View>
                  <Text size="s" weight="medium" color="greyDarker">
                      This is title1
                  </Text>
                  <Icon name="keyboard_arrow_down" right />
                </View>
              </Flex>
            </Space>
          </Accordion.Section.Trigger>
          <Accordion.Section.Content>
            <Space padding={[2]}>
              <View>
                <Image
                  alt="img-1"
                  src="https://images.treebohotels.com/files/Treebo_The_Galaxy/Oak/OAk_(4).jpg"
                  height="200px"
                  width="200px"
                />
                {sampleText}
              </View>
            </Space>
          </Accordion.Section.Content>
        </Accordion.Section>
        <Divider />
        <Accordion.Section>
          <Accordion.Section.Trigger>
            <Space padding={[2]}>
              <Flex
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <View>
                  <Text size="s" weight="medium" color="greyDarker">
                      This is title2
                  </Text>
                  <Icon name="keyboard_arrow_down" right />
                </View>
              </Flex>
            </Space>
          </Accordion.Section.Trigger>
          <Accordion.Section.Content>
            <Space padding={[2]}>
              <View>{sampleText}</View>
            </Space>
          </Accordion.Section.Content>
        </Accordion.Section>
      </Accordion>
    </React.Fragment>
  ))
  .add('Multiple Accordions', () => (
    <React.Fragment>
      <Space padding={[2]}>
        <Text size="xl" color="greyDarker">Accordion 1</Text>
      </Space>
      <Accordion>
        <Accordion.Section>
          <Accordion.Section.Trigger>
            <Space padding={[2]}>
              <Flex
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <View>
                  <Text size="s" weight="medium" color="greyDarker">
                      This is title
                  </Text>
                  <Icon name="keyboard_arrow_down" right />
                </View>
              </Flex>
            </Space>
          </Accordion.Section.Trigger>
          <Accordion.Section.Content>
            <Space padding={[2]}>
              <View>{sampleText}</View>
            </Space>
          </Accordion.Section.Content>
        </Accordion.Section>
      </Accordion>
      <Space padding={[2]}>
        <Text size="xl" color="greyDarker">Accordion 2</Text>
      </Space>
      <Accordion>
        <Accordion.Section>
          <Accordion.Section.Trigger>
            <Space padding={[2]}>
              <Flex
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <View>
                  <Text size="s" weight="medium" color="greyDarker">
                      This is title
                  </Text>
                  <Icon name="keyboard_arrow_down" right />
                </View>
              </Flex>
            </Space>
          </Accordion.Section.Trigger>
          <Accordion.Section.Content>
            <Space padding={[2]}>
              <View>{sampleText}</View>
            </Space>
          </Accordion.Section.Content>
        </Accordion.Section>
      </Accordion>
    </React.Fragment>
  ));
