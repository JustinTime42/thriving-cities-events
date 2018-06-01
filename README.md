Welcome to your new website!

I've created this with React, and it is fully responsive and looks great on any screen size. 

The content on this site is managed with Elegant CMS and served through a heroku web server. This allows you to create and edit events without needing to know anything about web development or programming. Here are the steps for creating events:

#Step 1. Log in to Elegant CMS plugin on the Heroku App.#
Click "Add Content". Here you will see all the available fields for setting up your event. The events on the website get populated from this information. Type in the name of the event, the description, date and time, address, and drag/drop any promotional images onto the appropriate fields. 

##Step 2. Create list in MailChimp##
Log in to your MailChimp account (the site is currently connected to a dummy account, and I'll help you connect yours). 
Create a new list with the title of your new event. Then, go to "Sign up Forms" -> "Form Builder" and create your signup form. Near the top, you'll see "Signup Form URL", copy that to the field in Elegant CMS called "Mailchip Form URL". 

##Step 3. Create Calendar event in Google.## 
Go to calendars.google.com. Create your event, fill in any information that you want. Then, on the calendar, click on the event, then click "options", then "Publish Event." Click on the "Copy" button where it says "html code" and paste that code into the Elegant CMS field called "Calendar Button". 

##Step 4.##
Click "Save" on the left side menu of the Elegant CMS interface. 

That's all there is to it! Now, you can refresh your events website and see the new event. The title, description, images, calendar button, and map all populate automatically. You can use the Elegant CMS interface is create new events, edit events, or delete old events. 

Because I've made everything very modular, it will be very easy to maintain, and transfering the mailchimp, heroku, and google API accounts will only be a matter of copy/pasting a few values into the existing code - a process I am happy to help you with! Please let me know if you have any questions, and good luck with your new website!


