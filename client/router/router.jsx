import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Containers
import Container from '../../imports/layouts/Container.jsx';

// Components
import MainPage from '../../imports/pages/MainPage.jsx';
import Register from '../../imports/pages/Register.jsx';
import UploadTranscript from '../../imports/pages/UploadTranscript.jsx';

const mainRouter = FlowRouter.group({
  name: 'thebright',
});

mainRouter.route('/', {
  name: 'main',
  action() {
    mount(Container, {
      content: <MainPage />,
    });
  },
});

mainRouter.route('/register', {
  name: 'register',
  action() {
    mount(Container, {
      content: <Register />,
    });
  },
});

mainRouter.route('/paidform', {
  name: 'paidform',
  action() {
    mount(Container, {
      content: <UploadTranscript />,
    });
  },
});
