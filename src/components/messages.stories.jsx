import React from 'react';

import { Messages } from './messages';

export default {
  title: 'MyApp/Messages',
  component: Messages,
};

export const Primary = {
    args: {
        messageList: [{author: 'Inga', text: 'Hi!'}]
    },
  };
  