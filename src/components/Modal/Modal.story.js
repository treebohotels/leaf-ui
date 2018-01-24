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
    <Toggle
      render={({ on, toggle }) => (
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
    />
  ))
  .add('tabbed', () => (
    <Toggle
      render={({ on, toggle }) => (
        <Aux>
          <Button onClick={toggle}>OPEN MODAL</Button>
          <Modal isOpen={on} onClose={toggle}>
            <Modal.Header dark>
              MODAL HEADER
            </Modal.Header>
            <Tabs>
              <Tabs.Tab title="One">
                <Modal.Content>
                  Content for One
                </Modal.Content>
              </Tabs.Tab>
              <Tabs.Tab title="Two">
                <Modal.Content>
                  Content for Two
                </Modal.Content>
              </Tabs.Tab>
            </Tabs>
            <Modal.Footer>
              MODAL FOOTER
            </Modal.Footer>
          </Modal>
        </Aux>
      )}
    />
  ))
  .add('with title and subtitle', () => (
    <Toggle
      render={({ on, toggle }) => (
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
    />
  ))
  .add('modal over a modal', () => (
    <Toggle
      render={({ on, toggle }) => (
        <Aux>
          <Button onClick={toggle}>OPEN MODAL</Button>
          <Modal isOpen={on} onClose={toggle}>
            <Modal.Header>
              MODAL HEADER
            </Modal.Header>
            <Modal.Content>
              <Toggle
                render={({ on: isInnerModalOpen, toggle: toggleInnerModal }) => (
                  <Aux>
                    <Button onClick={toggleInnerModal}>OPEN MODAL</Button>
                    <Modal isOpen={isInnerModalOpen} onClose={toggleInnerModal}>
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
              />
            </Modal.Content>
            <Modal.Footer>
              MODAL FOOTER
            </Modal.Footer>
          </Modal>
        </Aux>
      )}
    />
  ));
