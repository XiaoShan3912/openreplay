import React from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import stl from './installDocs.css'
import cn from 'classnames'
import { CopyButton } from 'UI';

const installationCommand = 'npm i @openreplay/tracker'
const usageCode = `import Tracker from '@openreplay/tracker';

const tracker = new Tracker({
  projectKey: "PROJECT_KEY",
  ingestPoint: "https://${window.location.hostname}/ingest",
});
tracker.start();`
const usageCodeSST = `import Tracker from '@openreplay/tracker/cjs';

const tracker = new Tracker({
  projectKey: "PROJECT_KEY",
  ingestPoint: "https://${window.location.hostname}/ingest",
});

function MyApp() {
  useEffect(() => { // use componentDidMount in case of React Class Component
    tracker.start();
  }, []);
  
  //...
}`

function InstallDocs({ site }) {
  const _usageCode = usageCode.replace('PROJECT_KEY', site.projectKey)
  return (
    <div>
      <div className="mb-3">
        <div className="font-semibold mb-2">1. Installation</div>
        <div className={ cn(stl.snippetWrapper, 'bg-gray-light-shade rounded p-3') }>
          <CopyButton content={installationCommand} className={cn(stl.codeCopy, 'mt-2 mr-2')} />
          <CodeMirror
            value={ installationCommand }
            className={ stl.snippet }
            options={{
              autoCursor: false,
              height: 40,
              // mode: 'javascript',
              theme: 'docs',
              readOnly: true,
              showCursorWhenSelecting: false,
              scroll: false
            }}
          />
        </div>
      </div>
      <div>
        <div className="font-semibold mb-2">2. Usage</div>
        <div className={ cn(stl.snippetWrapper, 'bg-gray-light-shade rounded p-3') }>
          <CopyButton content={_usageCode} className={cn(stl.codeCopy, 'mt-2 mr-2')} />
          <CodeMirror
            value={ _usageCode }
            className={ stl.snippet }
            options={{
              autoCursor: false,
              height: 40,
              mode: 'javascript',
              theme: 'docs',
              readOnly: true,
              showCursorWhenSelecting: false,
              scroll: false
            }}
          />
        </div>
      </div>
      <div className="mt-6">See <a href="https://docs.openreplay.com/installation/javascript-sdk" className="color-teal underline" target="_blank">Documentation</a> for the list of available options.</div>
    </div>
  )
}

export default InstallDocs