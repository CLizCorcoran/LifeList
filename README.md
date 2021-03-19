# List List - A Web App for Task Management
## Overview
This web application is meant to demonstrate knowledge of React, React
Router, and Redux.  Life List allows the user to create, edit, and delete 
events to help manage and or organize their lives.  

There is not a backend component to this web application; therefore, no state is saved.  

An extremely rudimentary and almost completely non-functional authentication 
system is included.  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## User Stories
As a user, I would like to be able to create todo items.

As a user, I would like to be able to check my todo items off as completed as I accomplish them.

As a user, I would like to be able to prioritize my todo items.  


## About Life List

### Logging In
Upon first entering Life List, the user will be informed that in order to proceed, they must log in.  

A user can log in by clicking the Login link at the upper right of the navigation bar.  They will be presented with a form asking for their username and password.  A user only needs to provide a username; the password field is completely ignored and can even remain empty.  

After the user has logged in, note that the 'Login' link changes to a person.  Clicking this link now will present the user with the ability to Log out.  


### Add a task to Life List
After logging in, the user will be directed to the Life List.  Because no
information is saved at this time, the list will always be empty.  

To Add an event, the user simply clicks on the "Add" button.  

At this point, the user will be presented with the "Add Life List Task" form.  There they can fill in information about their Life Task.  

The user has the option to add this task to their list or cancel out of the form.  Either way, they will then be redirected back to their List view.  


### Managing Life List Events
The user can perform several actions on their life task items.  They can delete, edit, or mark the item as complete/incomplete.

They also have the ability to filter their tasks to view only the incomplete tasks, only the completed tasks, or all tasks regardless of completion state.    

Buttons to perform these tasks are on the same row as the task item.  

#### Deleting a life task
To delete a life task, the user clicks the trash can button.  This button is located on the far left within the life task row.  

#### Editing a life task
To edit a life task, the user clicks the pencil button.  This button is located on the right of the trash can button within the life task row.  

This button will bring up the Edit Life List Task form.  There the user can 
modify any of the life task's information.  The user can then choose to save their changes via the 'Update' button or cancel their changes via the 'Cancel' button.

Regardless, the user will then be redirected back to the Life List page.  

#### Marking a life task as Complete or Incomplete.  
When a life task is incomplete, a check mark will not appear until the user
hovers over the task's row.  Upon hovering, a white checkmark will appear.  
To mark the task as complete, they simply click on the checkmark.  At that point, the checkmark should remain green even after the user is no longer hovering on that row.  

To mark a task as incomplete, the user simply clicks on the green checkmark.  Doing so will return it to the white color to indicate that it is
now incomplete.  

