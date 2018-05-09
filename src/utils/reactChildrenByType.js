import React from 'react';

export default (children) => {
  const childrenByType = {};
  React.Children.forEach(children, (child) => {
    if (child) {
      childrenByType[child.type] = child;
    }
  });
  return childrenByType;
};
