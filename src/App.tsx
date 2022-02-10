import './App.css';
import { 
  fluentCard,
  provideFluentDesignSystem,
} from '@fluentui/web-components';
import { ExampleCard } from './Card';

provideFluentDesignSystem()
    .register(
        fluentCard()
    );


export const App = () => {
  return (
    <ExampleCard>
      <div slot="header">
        <div className="left">
          <img src={`${process.env.PUBLIC_URL}/matt.jpg`} alt="matt avatar"/>
        </div>
        <div className="right">
          <span className="title">Title goes here</span>
          <span className="secondary"> Secondary line</span>
        </div>
      </div>
      <p slot="body">Citizens of distant epochs muse about at the edge of forever hearts of the...</p>
    </ExampleCard>
  );
}