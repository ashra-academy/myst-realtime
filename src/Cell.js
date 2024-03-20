import React from 'react';

import CodeMirror from '@uiw/react-codemirror';
import MystPreview from './MystPreview.js';

export default function Cell() {

  const [value, setValue] = React.useState(`
$$\n\\label{maxwell}\n\\begin{aligned}\n\\nabla \\times \\vec{e}+\\frac{\\partial \\vec{b}}{\\partial t}&=0 \\\\\n\\nabla \\times \\vec{h}-\\vec{j}&=\\vec{s}\\_{e}\n\\end{aligned}\n$$\n\n$$ \\label{one-liner} Ax=b $$\n\nSee [](#maxwell) for enlightenment and [](#one-liner) to do things on one line!
  `);

  const onChange = React.useCallback((val, viewUpdate) => {
    console.log('val:', JSON.stringify(val));
    setValue(val);
  }, []);

  return (
    <div className="App">
      <div className="panel-wrapper">
        <div  style={{height:'100%', width: '50%'}}>
        <CodeMirror value={value} onChange={onChange} />
        </div>
        <MystPreview className="panel" value={value} />
      </div>
    </div>
  );
}
