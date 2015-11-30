Tasks = new Mongo.Collection("tasks");
Items = new Mongo.Collection("items");

if (Meteor.isClient) {
  // This code only runs on the client

  Template.chat.helpers({
    tasks: function () {
      // Show newest tasks at the top
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.chat.events({
    "submit .new-task": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var text = event.target.text.value;

      // Insert a task into the collection
      Tasks.insert({
        text: text,
        createdAt: new Date(),            // current time
        owner: Meteor.userId(),           // _id of logged in user
        username: Meteor.user().username  // username of logged in user
      });

      // Clear form
      event.target.text.value = "";
    }
  });

  Template.list.helpers({
    items: function () {
      // Show newest tasks at the top
      temp = Items.find({owner: Meteor.userId()},{sort: {createdAt: -1}});
      return temp;
    }

  });

  Template.list.events({
    "submit .new-item": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var text = event.target.text.value;

      // Insert a task into the collection
      Items.insert({
        text: text,
        createdAt: new Date(),            // current time
        owner: Meteor.userId(),           // _id of logged in user
        username: Meteor.user().username  // username of logged in user
      });

      // Clear form
      event.target.text.value = "";
    }
  });

  Template.task.events({
    "click .delete": function () {
      if (Meteor.userId() === this.owner){
        Tasks.remove(this._id);

      }else{
        throw new Meteor.Error("not-authorized");
      }

    }
  });

  Template.item.events({
    "click .delete": function () {
      if (Meteor.userId() === this.owner){
        Items.remove(this._id);

      }else{
        throw new Meteor.Error("not-authorized");
      }

    }
  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}

if (Meteor.isServer) {


}



Router.route('/chat');
Router.route('/list');
Router.route('/info');
Router.route('/',{
  template:'home'
});

