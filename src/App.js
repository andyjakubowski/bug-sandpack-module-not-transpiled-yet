import { Sandpack } from '@codesandbox/sandpack-react';
import { dependencies } from './dependencies';
import { filesSubfolder } from './filesSubfolder';
import { filesTopLevel } from './filesTopLevel';

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>All modules imported at the top-level:</p>
      <Sandpack
        template="react"
        files={filesTopLevel}
        customSetup={{
          dependencies,
        }}
      />

      <p>One module imported from a subfolder:</p>
      <p>
        If you reload the sandbox a few times in Safari, you should see an error
        message that says:
      </p>
      <pre>/subfolder/cranberry.js: hasn't been transpiled yet.</pre>
      <Sandpack
        template="react"
        files={filesSubfolder}
        customSetup={{
          dependencies,
        }}
      />
    </div>
  );
}
