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
import RegisterCamp from '../../imports/pages/RegisterCamp.jsx';
import UploadTranscript from '../../imports/pages/UploadTranscript.jsx';
import KnowTheBright from '../../imports/pages/whythebright/KnowTheBright.jsx';
import WhyTheBright from '../../imports/pages/whythebright/WhyTheBright.jsx';
import SmartChild from '../../imports/pages/whythebright/SmartChild.jsx';
import TheBestTutors from '../../imports/pages/teamthebright/TheBestTutors.jsx';
import Gallery from '../../imports/pages/gallery/Gallery.jsx';
import Contact from '../../imports/pages/contact/Contact.jsx';
import CourseMFour from '../../imports/pages/course/CourseMFour.jsx';
import CourseMFive from '../../imports/pages/course/CourseMFive.jsx';
import CourseCoachMe from '../../imports/pages/course/CourseCoachMe.jsx';

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

// Register Camp
mainRouter.route('/hatyai', {
  name: 'registerhatyai',
  action() {
    mount(RegisterCamp,{
      province: "hatyai"
    });
  },
});

mainRouter.route('/khonkaen', {
  name: 'registerkhonkaen',
  action() {
    mount(RegisterCamp, {
      province: "khonkaen"
    });
  },
});

mainRouter.route('/phitsanulok', {
  name: 'registerphitsanulok',
  action() {
    mount(RegisterCamp, {
      province: "phitsanulok"
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

mainRouter.route('/knowthebright', {
  name: 'know',
  action() {
    mount(Container, {
      content: <KnowTheBright />,
    });
  },
});

mainRouter.route('/whythebright', {
  name: 'why',
  action() {
    mount(Container, {
      content: <WhyTheBright />,
    });
  },
});

mainRouter.route('/smartchild', {
  name: 'smartchild',
  action() {
    mount(Container, {
      content: <SmartChild />,
    });
  },
});

mainRouter.route('/thebesttutors', {
  name: 'thebesttutors',
  action() {
    mount(Container, {
      content: <TheBestTutors />,
    });
  },
});

mainRouter.route('/gallery', {
  name: 'gallery',
  action() {
    mount(Container, {
      content: <Gallery />,
    });
  },
});

mainRouter.route('/contact', {
  name: 'contact',
  action() {
    mount(Container, {
      content: <Contact />,
    });
  },
});

mainRouter.route('/courseM4', {
  name: 'coursem4',
  action() {
    mount(Container, {
      content: <CourseMFour />,
    });
  },
});

mainRouter.route('/courseM5', {
  name: 'coursem5',
  action() {
    mount(Container, {
      content: <CourseMFive />,
    });
  },
});

mainRouter.route('/courseCoachMe', {
  name: 'coursecoachme',
  action() {
    mount(Container, {
      content: <CourseCoachMe />,
    });
  },
});
