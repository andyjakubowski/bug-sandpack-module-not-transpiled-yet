import { Sandpack } from '@codesandbox/sandpack-react';
import { dependencies } from './dependencies';
import { filesSubfolder } from './filesSubfolder';
import { filesTopLevel } from './filesTopLevel';

export default function App() {
  return (
    <div className="App">
      <h1>CodeSandbox Transpiling Test</h1>
      <h2>All modules imported at the top-level, default `bundlerURL` (v1):</h2>
      <Sandpack
        template="react"
        files={filesTopLevel}
        customSetup={{
          dependencies,
        }}
      />

      <h2>One module imported from a subfolder, default `bundlerURL` (v1)</h2>
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

      <h2>
        One module imported from a subfolder, `bundlerURL:
        https://sandpack-bundler.pages.dev` (v2)
      </h2>
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
        options={{
          bundlerURL: 'https://sandpack-bundler.pages.dev',
        }}
      />
    </div>
  );
}
