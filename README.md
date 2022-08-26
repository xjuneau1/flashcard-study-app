<h1 style="text-align:center">FlashCard Mania</h1>

<ol>
    <a href='#setup'><li>Installation and Setup</li></a>
<ul>
    <a href='#node'><li>Node and NPM</li></a>
    <a href='#live'><li>Using React live server</li></a>
</ul>
    <a href='#client'><li>Using the Client</li></a>
<ul>
    <a href='#view'><li>Viewing decks</li></a>
    <a href='#'><li>Creating a new Deck</li></a>
    <a href='#'><li>Viewing, editing, deleting a single deck</li></a>
    <a href='#'><li>Creating Cards</li></a>
    <a href='#'><li>Editing Cards</li></a>
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

<h3 id="view" style="text-decoration:1px underline">Viewing Decks:<h3>
<br>
<p style="font-size:14px">When you run the server you will land on a page like the one below:</p>
<br>
<img src="./readme-images/viewdecks.jpg">

<br>
<p style="font-size:14px">From here you can "Create Deck" which will take you to a screen to create a new deck, or you can click "View" to view the entire details and all of the cards in the deck. </p>
<br>
<p style="font-size:14px">You can also jump straight into studying the cards in the deck by pressing "Study", and finally if you so wish you may delete the decks from the API via this page.</p>

<br>

<h3 id="create" style="text-decoration:1px underline">Creating a new Deck:</h3>

<p>From the Home page, if you clicked the "Create Deck" button you will land on a page that looks like the one displayed below.</p>

<img src="./readme-images/createdeck.jpg">

<br>
<p style="font-size:14px">On this page you can add a deck name and description, and click "Submit", this will create a new deck with the given name and description and send you to the deck page to edit the deck further. </p>
<br>
