// eslint-disable-next-line max-len
/* eslint-disable import/prefer-default-export, react/prop-types,react/jsx-filename-extension,import/no-extraneous-dependencies */
import React from 'react';
import TopLayout from './TopLayout';

export const wrapRootElement = ({ element }) => <TopLayout>{element}</TopLayout>;
