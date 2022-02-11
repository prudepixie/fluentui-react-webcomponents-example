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
    <ExampleCard/>
  );
}