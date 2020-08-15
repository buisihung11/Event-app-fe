import React from 'react';
import { Button } from 'antd';
import { Link } from 'umi';

export const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/;
export const getChildrenToRender = (item, i) => {
  let tag = item.name.indexOf('title') === 0 ? 'h1' : 'div';
  // tag = item.href ? Link : tag;
  let children =
    typeof item.children === 'string' && item.children.match(isImg)
      ? React.createElement('img', { src: item.children, alt: 'img' })
      : item.children;
  if (item.name.indexOf('button') === 0 && typeof item.children === 'object') {
    children = React.createElement(Button, {
      ...item.children,
    });
  }
  if (item.href) {
    return React.createElement(Link, { ...item, to: item.href });
  }

  return React.createElement(tag, { key: i.toString(), ...item }, children);
};
