// @flow

import shellescape from 'shell-escape';

(shellescape(['echo', 'hello!']): string);

// $FlowExpectedError
shellescape();
