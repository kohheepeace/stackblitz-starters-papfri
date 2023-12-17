import { FC, useState } from 'react';

import {
  BlockCanvas,
  BlockEditorProvider,
  BlockTools,
  BlockInspector,
} from '@wordpress/block-editor';
import { registerCoreBlocks } from '@wordpress/block-library';
import '@wordpress/format-library';

import './style.scss';
import { editorStyles } from './editor-styles';

// Default styles that are needed for the editor.
import '@wordpress/components/build-style/style.css';
import '@wordpress/block-editor/build-style/style.css';

// Default styles that are needed for the core blocks.
import '@wordpress/block-library/build-style/common.css';
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/editor.css';

registerCoreBlocks();

export const App: FC<{ name: string }> = ({ name }) => {
  const [blocks, updateBlocks] = useState([]);

  return (
    <div className="playground" onKeyDown={(event) => event.stopPropagation()}>
      <BlockEditorProvider
        value={blocks}
        onInput={updateBlocks}
        onChange={updateBlocks}
      >
        <div className="playground__sidebar">
          <BlockInspector />
        </div>
        <BlockTools className="playground__content">
          <BlockCanvas height="100%" styles={editorStyles} />
        </BlockTools>
      </BlockEditorProvider>
    </div>
  );
};
