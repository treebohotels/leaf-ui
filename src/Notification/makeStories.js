import React from 'react';

export default (storiesOf, { Notification }) =>
  storiesOf('Notification', module)
    .add('simple', () => (
      <Notification
        type="success"
        title="206 Oak upgraded to 205 Mahogany"
        content="The room was successfully upgraded"
        actionProps={{
        onClick: () => {},
        children: 'OKAY',
      }}
      />
    ))
    .add('types', () => (
      <React.Fragment>
        <Notification
          type="info"
          title="This is an info message"
          content="You can upgrade the room anytime"
          actionProps={{
          onClick: () => {},
          children: 'OKAY',
        }}
        />
        <Notification
          type="success"
          title="This is a success message"
          content="The room was successfully upgraded"
          actionProps={{
          onClick: () => {},
          children: 'OKAY',
        }}
        />
        <Notification
          type="warning"
          title="This is a warning message"
          content="Booking closes in few minutes"
          actionProps={{
          onClick: () => {},
          children: 'OKAY',
        }}
        />
        <Notification
          type="danger"
          title="This is a danger message"
          content="Failed to upgrade room!"
          actionProps={{
          onClick: () => {},
          children: 'OKAY',
        }}
        />
      </React.Fragment>
    ));
