import { FASTElement, customElement, attr, html } from '@microsoft/fast-element';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';
import {
    provideFluentDesignSystem,
    fluentCard
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentCard()
    );


const template = html<_FluentCard>`
    <fluent-card style="display: flex; width: 320px;">
        <div>
            <div><img src="https://via.placeholder.com/320x150/414141" /></div>
            <h2 style="color: black">How to make a good design</h2>
            <div style="display: flex;">
                <fluent-avatar></fluent-avatar>
                <div alt="Annie's profile image" link="#" name="Annie Lennox" shape="circle" fill="accent-primary"></div>
            </div>
        </div>
    </fluent-card>
`;

@customElement({
  name: 'fluent-card',
  template
})
export class _FluentCard extends FASTElement {
//   @attr greeting: string = 'Hello';
}

export const FluentCard = provideReactWrapper(React).wrap(_FluentCard);