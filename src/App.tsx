import { 
  provideFluentDesignSystem,
} from '@fluentui/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(
  React, 
  provideFluentDesignSystem()
);



export const App = () => {
  return (
    <div></div>
  );
}