<h1 style="text-align:center">FlashCard Mania</h1>

<ol>
    <a href='#setup'><li>Installation and Setup</li></a>
<ul>
    <a href='#node'><li>Node and NPM</li></a>
    <a href='#live'><li>Using React live server</li></a>
</ul>
    <a href='#client'><li>Using the Client</li></a>
<ul>
    <a href='#view'><li>Viewing decks/Home page</li></a>
    <a href='#createdeck'><li>Creating a new Deck</li></a>
    <a href='#ved'><li>Viewing, editing, deleting a single deck</li></a>
    <a href='#createcard'><li>Creating Cards</li></a>
    <a href='#editcard'><li>Editing Cards</li></a>
    <a href='#study'><li>Study Deck</li></a>
</ul>
</ol>


<h2 id="setup" style="text-decoration:1px underline">Installation and Setup:</h2>

<br>
<h3 id="node" style="text-decoration:1px underline">Node and NPM:</h3>
<br>
<p>In order to use this application you must have the latest version of Node.js installed on your machine i.e version <a href="https://nodejs.org/en/">16.17.0 LTS or 18.8.0</a></p>

``` NOTE: 16.17 LTS is the reccommended version of Node for this application.```

<p>Once you have installed Node on your machine,fork and clone and the repository and run the below command in your terminal:</p>

```npm install ```

<p>This will install all of the dependencies for this project.</p>

<br>



<br>
<h3 id="live" style="text-decoration:1px underline">Using React Live Server:</h3>
<br>
<p>After you have installed the dependencies you should have access to the React live server. The command for running both the client and the server (which hosts the deck and card data), is already written for you, all you have to do is type the following command into your terminal within the repository:</p>

```npm start```

<p>After the client server starts it should automatically open in your browser, from there you are ready to start using the FlashCard App!</p>

<br>

<div style="border-bottom:1px solid black"></div>

<br>

<h2 id="client" style="text-decoration:1px underline">Using the Client:</h2>
<br>
<p>The first page you see will be the Decks view screen. From there you can explore all the features of the application. If needed a detailed explanation of each page is given below.</p>

<br>

<h3 id="view" style="text-decoration:1px underline">Viewing Decks/Home Page:</h3>
<br>
<p style="font-size:14px">When you run the server you will land on a page like the one below:</p>


[View image](readme-images/viewdecks.JPG?raw=true)

<br>
<p>From here you can "Create Deck" which will take you to a screen to create a new deck, or you can click "View" to view the entire details and all of the cards in the deck. </p>
<br>
<p>You can also jump straight into studying the cards in the deck by pressing "Study", and finally if you so wish you may delete the decks from the API via this page.</p>

<br>

<h3 id="createdeck" style="text-decoration:1px underline">Creating a new Deck:</h3>

<p>From the Home page, if you clicked the "Create Deck" button you will land on a page that looks like the one displayed below.</p>

[View image](readme-images/createdeck.JPG?raw=true)

<br>
<p>On this page you can add a deck name and description, and click "Submit", this will create a new deck with the given name and description and send you to the deck page to edit the deck further. </p>
<br>

<h3 id="ved" style="text-decoration:1px underline">Viewing, editing, deleting a single deck:</h3>

<p>From the Home Page if you clicked "View" or if you created a new deck and submitted it, then you would be presented with a page that look like the image below:</p>

[View image](readme-images/ved.JPG?raw=true)

<br>
<p> On this page you can :</p>

<ol>
    <li>Edit the deck details by clicking "Edit" under the deck name and description.</li>
    <li>You can click "Study" to begin studying the cards in the deck. </li>
    <li>Click "Add Cards" to create new cards for the current deck.</li>
    <li>Click "Delete Deck" to delete the Deck and all of it's cards</li>
</ol>


<p>In addition, you can view the front and back of the cards and edit them. From this page you also have the option to delete individual cards.</p>

<br>

<h3 id="createcard" style="text-decoration:1px underline">Creating Cards:</h3>

<p>From the deck view screen you can click "Add Cards" to arrive at a page like the one shown in the image below:</p>

[View image](readme-images/createcard.JPG?raw=true)

<br>
<p>On this page you can add text to the front and back of the card. When you submit, the page will reload and the text inside the boxes will disappear. 
<br>
This is normal and your card has indeed been submitted, you may add another or use the navigation bar to return to the deck page.</p>

```NOTE: Once back on the deck view page from the "Create Card" page, you may need to refresh the page for the new card to load.```


<br>

<h3 id="editcard" style="text-decoration:1px underline">Editing Cards:</h3>

<p>From the deck view page, you can click on the "Edit" button on each card to edit those specific cards. When you do, you will be presented with a page that look like the image below:</p>

[View image](readme-images/editcard.JPG?raw=true)

<br>

<p>As you can see, the information from the card is already filled into the text boxes, all you need to do is add, change or delete, and click "Save". 
<br>
A prompt will appear, and once you click "OK" the changes will be made. Simply return to the deck view page and refresh to see your changes.</p>

<br>

<h3 id="study" style="text-decoration:1px underline">Study Deck:</h3>

<p>From the deck view page, you can click on the "Study" button which will bring you to a page where you can study the cards in the chosen deck, you should see a page like in the image below:</p>

[View image](readme-images/study.JPG?raw=true)

<br>

<p>You can click "Flip" to flip the card to to back side, when you do a "Next" button appears for you to change to the next card.
<br>
When you have flipped through all of your cards a prompt will appear, clicking "Okay" resets the cards and allows you to flip through them again from the beginning. Clicking "Cancel" will return you to the home page.</p>

<br>
<br>

<h2>Thanks for checking out my FlashCard Mania Application!</h2>
