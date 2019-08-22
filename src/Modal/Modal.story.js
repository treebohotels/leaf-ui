import React from 'react';
import { storiesOf } from '@storybook/react';
import Toggle from '../Toggle';
import Button from '../Button';
import Text from '../Text';
import Flex from '../Flex';
import View from '../View';
import Tabs from '../Tabs';
import Modal from './Modal';

storiesOf('Modal', module).addParameters({
  component: Modal,
})
  .add('simple', () => (
    <Toggle>
      {({ on, toggle }) => (
        <React.Fragment>
          <Button onClick={toggle}>OPEN MODAL</Button>
          <Modal isOpen={on} onClose={toggle}>
            <Modal.Header>
                Modal Header
            </Modal.Header>
            <Modal.Content>
                content for the modal
                content for the modal
                content for the modal
            </Modal.Content>
            <Modal.Footer>
                Modal Footer
            </Modal.Footer>
          </Modal>
        </React.Fragment>
      )}
    </Toggle>
  ))
  .add('tabbed', () => (
    <Toggle>
      {({ on, toggle }) => (
        <React.Fragment>
          <Button onClick={toggle}>OPEN MODAL</Button>
          <Modal isOpen={on} onClose={toggle}>
            <Modal.Header>
                Modal Header
            </Modal.Header>
            <Flex flex="auto">
              <View>
                <Tabs>
                  <Tabs.Tab title="Tab Selected">
                    <Modal.Content>
                        First Content
                    </Modal.Content>
                  </Tabs.Tab>
                  <Tabs.Tab title="Tab Random">
                    <Modal.Content>
                        Random Content
                    </Modal.Content>
                  </Tabs.Tab>
                </Tabs>
              </View>
            </Flex>
            <Modal.Footer>
                Modal Footer
            </Modal.Footer>
          </Modal>
        </React.Fragment>
      )}
    </Toggle>
  ))
  .add('with title and subtitle', () => (
    <Toggle>
      {({ on, toggle }) => (
        <React.Fragment>
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
                Modal Footer
            </Modal.Footer>
          </Modal>
        </React.Fragment>
      )}
    </Toggle>
  ))
  .add('with content scroll', () => (
    <Toggle>
      {({ on, toggle }) => (
        <React.Fragment>
          <Button onClick={toggle}>OPEN MODAL</Button>
          <Modal isOpen={on} onClose={toggle}>
            <Modal.Header>
              <Text size="xxxl">MODAL TITLE</Text>
              <Text size="xs">MODAL SUBTITLE</Text>
            </Modal.Header>
            <Modal.Content>
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
                content for the modal
              <br />
            </Modal.Content>
            <Modal.Footer>
                Modal Footer
            </Modal.Footer>
          </Modal>
        </React.Fragment>
      )}
    </Toggle>
  ))
  .add('modal over a modal', () => (
    <Toggle>
      {({ on, toggle }) => (
        <React.Fragment>
          <Button onClick={toggle}>OPEN MODAL</Button>
          <Modal isOpen={on} onClose={toggle}>
            <Modal.Header>
                Modal Header
            </Modal.Header>
            <Modal.Content>
              <Toggle>
                {({ on: isInnerModalOpen, toggle: toggleInnerModal }) => (
                  <React.Fragment>
                    <Button onClick={toggleInnerModal}>OPEN MODAL</Button>
                    <Modal isOpen={isInnerModalOpen} onClose={toggleInnerModal}>
                      <Modal.Header onBack={toggleInnerModal}>
                          Modal Header
                      </Modal.Header>
                      <Modal.Content>
                          content for the modal
                          content for the modal
                          content for the modal
                      </Modal.Content>
                      <Modal.Footer>
                          Modal Footer
                      </Modal.Footer>
                    </Modal>
                  </React.Fragment>
                )}
              </Toggle>
            </Modal.Content>
            <Modal.Footer>
                Modal Footer
            </Modal.Footer>
          </Modal>
        </React.Fragment>
      )}
    </Toggle>
  ));
