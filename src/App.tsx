import { 
  provideFluentDesignSystem,
  fluentButton
} from '@fluentui/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(
  React, 
  provideFluentDesignSystem()
);

const FluentButton = wrap(fluentButton())


export const App = () => {
  return (
    <FluentButton appearance="accent">Button</FluentButton>
  );
}