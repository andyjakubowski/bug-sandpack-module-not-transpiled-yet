export const filesTopLevel = {
  '/App.js': {
    code: `\
import { banana } from './banana';
import { useMachine } from '@xstate/react';

export default function App() {
return <h1>Hello App!</h1>;
}
`,
  },
  '/banana.js': {
    code: `\
import cranberry from './cranberry';

export default function banana() {
return 'Cool beans';
}
    `,
  },
  '/cranberry.js': {
    code: `\
export default function cranberry() {
return 'Cranberries are tasty';
}
    `,
  },
};
