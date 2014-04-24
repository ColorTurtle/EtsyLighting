## Etsy Lighting Project ##
###What I used:
- Backbone.js;
- Twitter Bootstrap;
- Sass

###Why I coded this:
This was coding challenge for a position I interviewed for (basics: draw in thumbnails using an API, have a modal appear on click of the thumbnail and have a larger pic appear). I chose to create it using Bootstrap because I wanted to practice (and I really like how Bootstrap organizes everthing).

###Biggest challenge:
Part of the assignment was to create a modal function. The entire build needed to be completed in about 24 hours so I decided to use Bootstrap to help me meet the deadline. However, Twitter's Modal doesn't play nice with Bootstrap views. Basically, if you wrap the template for the view in the modal then you are disengaging from the Backbone structure and your view won't work. There were some pretty involved solutions out there (which I plan on doing just for the experience); however, with such a short turn around I decided to create a synchronous process by using .click() to order the calling of the modal after the Backbone route is called (which allowed the Backbone View to work from w/in the modal).
