import './App.css';
import {
  provideFluentDesignSystem,
  fluentCard
} from "@fluentui/web-components";
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(
  React, 
  provideFluentDesignSystem()
);

const FluentCard = wrap(fluentCard());
export const App = () => {
  return (
    <FluentCard>
      <div>
        <div className="left">
          <img src={`${process.env.PUBLIC_URL}/matt.jpg`} alt="matt avatar"/>
        </div>
        <div className="right">
          <span className="title">Title goes here</span>
          <span className="secondary"> Secondary line</span>
        </div>
      </div>
      <p>Citizens of distant epochs muse about at the edge of forever hearts of the...</p>
    </FluentCard>
  );
}