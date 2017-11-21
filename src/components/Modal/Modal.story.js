import React from 'react';
import { storiesOf } from '@storybook/react';
import Aux from '../Aux';
import Toggle from '../Toggle';
import Button from '../Button';
import Text from '../Text';
import Tabs from '../Tabs';
import Modal from './Modal';

storiesOf('Modal', module)
  .add('simple', () => (
    <Toggle>
      {(on, toggle) => (
        <Aux>
          <Button onClick={toggle}>OPEN MODAL</Button>
          <Modal isOpen={on} onClose={toggle}>
            <Modal.Header>
              MODAL HEADER
            </Modal.Header>
            <Modal.Content>
              content for the modal
              content for the modal
              content for the modal
            </Modal.Content>
            <Modal.Footer>
              MODAL FOOTER
            </Modal.Footer>
          </Modal>
        </Aux>
      )}
    </Toggle>
  ))
  .add('tabbed', () => (
    <Toggle>
      {(on, toggle) => (
        <Aux>
          <Button onClick={toggle}>OPEN MODAL</Button>
          <Modal isOpen={on} onClose={toggle}>
            <Modal.Header dark>
              MODAL HEADER
            </Modal.Header>
            <Tabs>
              <Tabs.Section>
                <Tabs.Section.Title>One</Tabs.Section.Title>
                <Tabs.Section.Content>
                  <Modal.Content>
                    Content for One
                  </Modal.Content>
                </Tabs.Section.Content>
              </Tabs.Section>
              <Tabs.Section>
                <Tabs.Section.Title>Two</Tabs.Section.Title>
                <Tabs.Section.Content>
                  <Modal.Content>
                    Content for Two
                  </Modal.Content>
                </Tabs.Section.Content>
              </Tabs.Section>
            </Tabs>
            <Modal.Footer>
              MODAL FOOTER
            </Modal.Footer>
          </Modal>
        </Aux>
      )}
    </Toggle>
  ))
  .add('with title and subtitle', () => (
    <Toggle>
      {(on, toggle) => (
        <Aux>
          <Button onClick={toggle}>OPEN MODAL</Button>
          <Modal isOpen={on} onClose={toggle}>
            <Modal.Header>
              <Text size="xxxl">MODAL TITLE</Text>
              <Text size="xs">MODAL SUBTITLE</Text>
            </Modal.Header>
            <Modal.Content>
              content for the modal
              content for the modal
              content for the modal
            </Modal.Content>
            <Modal.Footer>
              MODAL FOOTER
            </Modal.Footer>
          </Modal>
        </Aux>
      )}
    </Toggle>
  ))
  .add('modal over a modal', () => (
    <Toggle>
      {(on, toggle) => (
        <Aux>
          <Button onClick={toggle}>OPEN MODAL</Button>
          <Modal isOpen={on} onClose={toggle}>
            <Modal.Header>
              MODAL HEADER
            </Modal.Header>
            <Modal.Content>
              <Toggle>
                {(onr, toggler) => (
                  <Aux>
                    <Button onClick={toggler}>OPEN MODAL</Button>
                    <Modal isOpen={onr} onClose={toggler}>
                      <Modal.Header>
                        MODAL HEADER
                      </Modal.Header>
                      <Modal.Content>
                        content for the modal
                        content for the modal
                        content for the modal
                      </Modal.Content>
                      <Modal.Footer>
                        MODAL FOOTER
                      </Modal.Footer>
                    </Modal>
                  </Aux>
                )}
              </Toggle>
            </Modal.Content>
            <Modal.Footer>
              MODAL FOOTER
            </Modal.Footer>
          </Modal>
        </Aux>
      )}
    </Toggle>
  ));
