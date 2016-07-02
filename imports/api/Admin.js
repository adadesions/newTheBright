import { Mongo } from 'meteor/mongo';

export const Admin = new Mongo.Collection('admin');
if (Meteor.isServer) {
  Meteor.startup(() => {
    const admin = {
      a_id: "admin",
      password: "admin001"
    }
    Admin.insert(admin);
  });
}
