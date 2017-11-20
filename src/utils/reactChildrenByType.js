import React from 'react';

export default (children) => {
  const childrenByType = {};
  React.Children.forEach(children, (child) => {
    childrenByType[child.type] = child;
  });
  return childrenByType;
};
