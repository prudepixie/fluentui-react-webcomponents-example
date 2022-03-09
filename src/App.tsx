import {
  provideFluentDesignSystem,
  fluentButton,
} from "@fluentui/web-components";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import React from "react";

const { wrap } = provideReactWrapper(React, provideFluentDesignSystem());
const FluentButton = wrap(fluentButton());

enum Component {
  Button = "button",
  Mixed = "mixed",
  Card = "card",
}

type Repeat = string;

const params = new URLSearchParams(window.location.search);
const component = params.get("component") as Component;
const repeat = params.get("repeatNum") as Repeat;

const repeatNumber = parseInt(repeat);
const renderComponent = () => {
  switch (component) {
    case Component.Button:
      return repeatNumber > 0 ? (
        [...Array(repeatNumber)].map((e, i) => (
          <FluentButton key={i} appearance="accent">
            Button
          </FluentButton>
        ))
      ) : (
        <FluentButton appearance="accent">Button</FluentButton>
      );
    case Component.Card:
      return <div>this is a card</div>;
    case Component.Mixed:
      return <div>this is a mixed</div>;
    default:
      return <FluentButton appearance="accent">Button</FluentButton>;
  }
};

export default () => <>{renderComponent()}</>;
