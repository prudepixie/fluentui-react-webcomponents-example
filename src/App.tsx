import { 
  fluentButton,
  fluentCheckbox,
  fluentTextField,
  fluentTextArea,
  fluentRadioGroup,
  fluentRadio,
  fluentSelect,
  fluentOption,
  provideFluentDesignSystem,
} from '@fluentui/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(
  React, 
  provideFluentDesignSystem()
);

const FluentButton = wrap(fluentButton()),
      FluentCheckBox = wrap(fluentCheckbox()) as any,
      FluentTextField = wrap(fluentTextField()),
      FluentTextArea = wrap(fluentTextArea()),
      FluentRadioGroup = wrap(fluentRadioGroup()) as any,
      FluentRadio = wrap(fluentRadio()) as any,
      FluentSelect = wrap(fluentSelect()) as any,
      FluentOption= wrap(fluentOption()) as any


export const App = () => {
  return (
    <form>
      <h1>Example Form</h1>
      <h5>Text Input</h5>
      <FluentTextField placeholder="type here..."/>
      <h5>Text Area</h5>
      <FluentTextArea placeholder="type here..."/>
      <h5>Checkboxes</h5>
      <FluentCheckBox>Default</FluentCheckBox>
      <FluentCheckBox disabled checked>Disabled</FluentCheckBox>
      <FluentCheckBox checked>Checked</FluentCheckBox>
      <h5>Vertical Radio Group </h5>
      <FluentRadioGroup orientation="vertical">
          <FluentRadio>Default</FluentRadio>
          <FluentRadio disabled>Disabled</FluentRadio>
      </FluentRadioGroup>
      <FluentRadio checked>Checked</FluentRadio>
      <h5>Dropdown selection</h5>
      <FluentSelect title="Select your hero">
          <FluentOption value="1">Bruce Wayne</FluentOption>
          <FluentOption value="2">Natasha Romanoff</FluentOption>
          <FluentOption value="3">Steven Strange</FluentOption>
      </FluentSelect>
      <h5>Button Group</h5>
      <div>
        <FluentButton appearance="accent">Primary</FluentButton>
        <FluentButton>Secondary</FluentButton>
      </div>
    </form>
  );
}