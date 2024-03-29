#  **The Footbal Index**

## **User Stories**

### **User Experience (UX)**

#### **First Time Visitor Goals:**

a) As a first time visitor I would like to quickly and easily comprehend the idea the website is attempting to communicate to me.

b) The website should deliver on the functionality it is promising and there should be no visual bugs that comprimise the aesthetic of the website. 

c) As the premise of the website is to provide information for the past eleven seasons in the premier league, as a first time user I would expect all information would be  100% accurate. 

#### **Returning Visitor Goals:**

a) As a returning visitor I would expect updated information every year and for the current season accurate data for every game week.

b) When returning to the site I would expect there to be updated leagues and sections to the site i.e data from other leagues that is consistently being updated in the same way as the premier league data is being updated. 

c) Also when returning I would expect the site to maintain it's aformentioned functionality with no visual or structural bugs that would affect the newly added sections to the *Football Index Site*.

#### **Frequent Visitor Goals:** 

a) As a frequent visitor, I have all the expectations of a First time and returning visitor as well as the implementation of further features for the long term sustainability of the site i.e predicted line-ups for the coming game-week, betting odds at the start of the season for the winner and a player ratings system for numeric performance (accumulation of assists, goals, pass accuaracy etc.) of every player after every game. 


### **Design**

#### **Colour Theme** 
* The colours chosen for *The Football Index* site are: blue, green and white. The green was chosen for its imagery of the football pitch which is the center of what *The Football Index* is about. 

#### **Imagery**

#### **Typography**
In terms of typography the fonts Big Shoulders Stencil and Orbitron. *The Big Shoulder Font* was used due to it's visual connotations to tech. This fits the theme of the site of scouring the web for the data we football fans need. The *orbitron* font was used due to it's sleek and bold nature which I personally think is a very complimentary look to the *Big Shoulder Font*.
### **Wireframes**
All wireframes used can be found [Here](/wireframes.md)

### **Features**
* Buttons - Enables the primary interaction for the website for the initiation of the retrieval of information from the API.
* Map - Displays the locations of the premier league teams depending on the season, provided by leafletJS.
* Hover effects - Provides a functional aesthetic to the website that compliements the main colourways and design. 
* Responsive web design on all devices and screen sizes.

### **Technologies Used**
* Bootstrap - A CSS framework that allowed the creation of a responsive website across many devices with the utilisation of it's components from its library for the creation of *The Football Index*.

* Line Icons - A CDN that provides the icons for the website.

* Google Fonts - An open source library of high quality fonts for the use of presenting the information provided on the *The Football Index.* website in a sleek fashion.

* CDNJS hover.css - A collection of CSS3 hover effects from the CDNJS CDN to provide animation and interactivity to the *The Football Index* website in a subtle and elegant manner.

* GitPod - The terminal and development environment where the code for *The Football Index* was written and using the "push" command was sent and stroed in my repository in GitHub

* Github - The location for the repository for the *The Football Index* code.

* API-FOOTBALL - The primary API used for the retrieval of all the statistical data required for the website.

* LeafletJS - A secondary API used for the creation of the map and its markers for the locations of all the premier league club venues for the desired season. 

* Email.JS - The second secondary API used for the functionality of the contact form. 

## **Testing** 

### **User Stories Testing for User Experience**

#### First Time User Stories: 

a) As a first time visitor I would like to quickly and easily comprehend the idea the website is attempting to communicate to me.

    i. The website greets the user with a sleek aesthetic design and informs the user some inital iformation about the websiet accompanied with how the website works and should be used. 
   
    ii. When the user scrolls down to the third section they can find the about section of the website and can find out a lot more of what the The Football Index is about and what the site's plans are. 

b) The website should deliver on the functionality it is promising and there should be no visual bugs that comprimise the aesthetic of the website. 

    i. When the user clicks on the button relevent to the season they arre after the league standings, top scorers and top assists are obtained and formatted onto the page correctly. As well as this the map correclty displays corresponding markers to the teams within the league in that season. 

c) As the premise of the website is to provide information for the past seven seasons in the premier league, as a first time user I would expect all information would be  100% accurate.

    i. The information is all accurate and has been indpendently verified using multiple sources of information pertinent to the statistics being presented. Some of the resources used for the verification are: wikipedia, google and the premier league app/website. 


#### Returning User Stories:

a) As a returning visitor I would expect updated information every year and for the current season accurate data for every game week.
    
    i. The site plans to update the league information at the start of every new season so that over time the site becomes a bank of information for the league. 
    ii. Every month the site plans to evaluate the features present and decide what new leagues and new stats to implement ie. yellow and red cards etc.

b) When returning to the site I would expect there to be updated leagues and sections to the site i.e data from other leagues that is consistently being updated in the same way as the premier league data is being updated. 

    i. Again every month the site will be evaluated and the plan is to intially implement data from europe's top five leagues and then slowly expand to other popular leagues i.e the MLS and the UEFA nations league etc. 

c) Also when returning I would expect the site to maintain it's aformentioned functionality with no visual or structural bugs that would affect the newly added sections to the *Football Index Site*.

    i. The site will continue to operate with optimum functionality as this priniciple is the priority for the *The Football Index*. If visual bugs ever crop up the site vows to deal with them efficiently and quickly. 


#### Frequent Visitor Goals: 

a) As a frequent visitor, I have all the expectations of a First time and returning visitor as well as the implementation of further features for the long term sustainability of the site i.e predicted line-ups for the coming game-week, betting odds at the start of the season for the winner and a player ratings system for numeric performance (accumulation of assists, goals, pass accuaracy etc.) of every player after every game. 

    i. As mentioned in the previous points new features and a consistent presentation is promised. The team here at *The Football Index* are determined to grow and increase what we offer. The site is still in it's infancy but rest assured the growth will be exponential in the near future. 

### **Testing of Individual Components
#### **HTML and CSS validators**
i. There are no errors in the HTML. The link to the validator can be found [Here](https://validator.w3.org/nu/). 

ii. There are no errors in the CSS. The link to the validator can be found [Here](https://jigsaw.w3.org/css-validator/).

iii. There are no errors in the JS. The link to the validator can be found [Here](https://jshint.com/).
#### **Header**
i. The Logo is formatted properly to take up 100% of the width on all the screen sized and when clicked refreshes the page as this is a single page website. 
#### **Nav Bar**
i. The Nav Bar, when the individual components are clicked take the user to the relevant section of the site. The nav bar stays the same format on all other screen sizes and is not distorted in any way. 

ii. The hover elements are fully functioning when a mouse is hovering over the individual components. This function doesn't accompany the touch screens as you can not hover a mouse when on a touch screen device. 
#### **Hero Info Section**
i. The Hero Info section stays looking very aesthetically pleasing on all screen sizes and scales up and down very well.
#### **Season Buttons**
i. On the larger screen sizes the buttons keep they're alignment and keep their structure in doing so keep this section of the page organised and clean. 

ii. On smaller screens the buttons can be misaligned and this well be mentioned in the known bugs section also.

iii. The text within each button stays clean and non-comppressed/distorted at all screen sizes. 

iv. When each button is clicked they work perfectly in triggering the API call to the server and retrieveing the relevent information to be inputted into the statistics section. The clear button subsequently works very well to clear the statistics section so a new button can now be clicked and new information obtained. 
#### **Statistics Section**
i. On all screen sizes the iformation stays looking very aesthetic and clean. The sections do not distort at the lower screen sizes. 
#### **Map**
i. On all screen sizes the map is sizeable, isn't distorted and takes up the intended amount of space on the site.

ii. The markers on the map are fully functional dropping when the user clicks the desired season button and is removed correctly when the clear button is clicked. 

iii. The markers when clicked show the name of the stadium it is marking as well as the capacity of the stadium. 
#### **About Section**
i. On all screen sizes this section keeps its aesthetic nature, text is not compressed/distorted and the two sections are always on top of each other as intended. 
#### **Contact Form**
i. The contact form is fully functional and when the user fills out all the fields (they are all required) and clicks submit an email is sent to me @ ashwinreddy6@gmail.com in that email I am able to view the name filled out, the email address sending the email and the accompanying message the user has sent. 

ii. The accompanying text in the contact section is always clean on all screen sizes and doesn't interfere with the contact view whilst providing valuable information. 


## **Known Bugs**
i. On all screen sizes the site has some overflow on the right hand side of the page.

ii. On the small phone screens the buttons (more precisely the first two) are out of alignment with the other buttons. 

iii. On the pixel phones and the iPhone 6 and above the about section is too large however this can not be fixed without compressing and cutting off text on the iPhone 5 view . 


## **Deployment**
GitHub Pages was used for the deployment of *The Football Index* Website

Here are the steps involved for deployment of *The Football Index* website:

i.Login to GitHub and locate desired repository.

ii.Navigate and click the settings button to bring up the settings page.

iii.Navigate down the page to the GitHub Pages section.

iv.Under the source there is a button to choose the branch of the code and select "main" and next to that button there is one to choose a folder and "root" should be selected which is selected by default anyways.

v.Finally click the save button and the site will refresh and profide the link of the published code.

## **Credits**

### **Code and Content**

All content is written by Ashwin Reddy, using the API-Football V3 API aswell as leafletJS, emailjs and the Bootstrap CSS framework. 