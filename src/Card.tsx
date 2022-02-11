import { FASTElement, customElement, css, html } from '@microsoft/fast-element';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';


const template = html<_ExampleCard>`
    <fluent-card>
        <div>
            <div class="left">
                <img src=${x => x.imageUrl} alt="matt avatar"/>
            </div>
            <div class="right">
                <span class="title">Title goes here</span>
                <span class="secondary"> Secondary line</span>
            </div>
        </div>
        <p>Citizens of distant epochs muse about at the edge of forever hearts of the...</p>
    </fluent-card>
`;

@customElement({ 
  name: 'fluent-card-container',
  template,
  shadowOptions: null
})

class _ExampleCard extends FASTElement {
    imageUrl = `${process.env.PUBLIC_URL}/matt.jpg`
}

export const ExampleCard = provideReactWrapper(React).wrap(_ExampleCard)