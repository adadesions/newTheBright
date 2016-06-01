import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Containers
import Container from '../../imports/layouts/Container.jsx';
import LandingContainer from '../../imports/layouts/LandingContainer.jsx';

// Components
import LandingPage from '../../imports/pages/LandingPage.jsx';
import MainPage from '../../imports/pages/MainPage.jsx';
import Register from '../../imports/pages/Register.jsx';
import UploadTranscript from '../../imports/pages/UploadTranscript.jsx';

const landingRouter = FlowRouter.group({
  name: 'thebright',
});

const mainRouter = FlowRouter.group({
  name: 'mainpage',
});

landingRouter.route('/', {
  name: 'landingpage',
  action() {
    mount(LandingContainer, {
      content: <LandingPage />,
    });
  },
});

mainRouter.route('/main', {
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
