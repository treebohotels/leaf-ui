import React from 'react';
import { storiesOf } from '@storybook/react';
import Toggle from '../../Toggle/web';
import Button from '../../Button/web';
import Text from '../../Text/web';
import Flex from '../../Flex/web';
import Tabs from '../../Tabs/web';
import Modal from './Modal';

storiesOf('Modal', module)
  .add('simple', () => (
    <Toggle>
      {({ on, toggle }) => (
        <div>
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
        </div>
      )}
    </Toggle>
  ))
  .add('tabbed', () => (
    <Toggle>
      {({ on, toggle }) => (
        <div>
          <Button onClick={toggle}>OPEN MODAL</Button>
          <Modal isOpen={on} onClose={toggle}>
            <Modal.Header>
              Modal Header
            </Modal.Header>
            <Flex flex="auto" flexDirection="column">
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
            </Flex>
            <Modal.Footer>
              Modal Footer
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </Toggle>
  ))
  .add('with title and subtitle', () => (
    <Toggle>
      {({ on, toggle }) => (
        <div>
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
        </div>
      )}
    </Toggle>
  ))
  .add('modal over a modal', () => (
    <Toggle>
      {({ on, toggle }) => (
        <div>
          <Button onClick={toggle}>OPEN MODAL</Button>
          <Modal isOpen={on} onClose={toggle}>
            <Modal.Header>
              Modal Header
            </Modal.Header>
            <Modal.Content>
              <Toggle>
                {({ on: isInnerModalOpen, toggle: toggleInnerModal }) => (
                  <div>
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
                  </div>
                )}
              </Toggle>
            </Modal.Content>
            <Modal.Footer>
              Modal Footer
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </Toggle>
  ));
