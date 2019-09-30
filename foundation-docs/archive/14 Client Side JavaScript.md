
# Client-Side JavaScript

Up until now all your scripts have run on the server however you can run JavaScript in the web browser as well. The good news is that you can use the same JavaScript syntax in both however there are a few key differences:

1. You can't connect to any resources on the server such as databases (however you can use the database built into the web browser).
2. One of the most important applications is interacting with the browser by using the `document` object.

Unlike in server-side scripting, we need to load the JavaScript file into the web browser. To do this we create a link from the HTML file to the JavaScript file and allow the browser to load this over HTTP. For this to work the JS file needs to be publicly accessible by the browser. This is why it is placed in the Express public directory on the server.

1. Locate the `13_client/dom/html/dom.html` file.
2. Notice the `<script>` element after the closing `<body>` element.
    1. It is important that we run the script after the html body has loaded because we will be attaching events to it and modifying it.

## 1 The Document Object Model

The key to interacting with the web page is the `window` object which is a top-level object in Client Side JavaScript. It represents a window or a frame (within a frameset). The `window` object is a top-level object and contains other objects such as `document`, `history` etc. within it.

 The `window.document` object contains the entire web page. Start by opening the `13_client/dom/index.js` script (after installing the necessary modules) and viewing the website using Google Chrome.

Since the JavaScript code is running in the _web browser_, we need to use the Chrome Developer Tools to see what us happening. Open the Chrome Developer Tools and locate the **Console** tab. Open the `dom/public/cs/simple_dom.js` file.

1. In the console you will see three messages:
    1. The first thing is a message `window 'load' event triggered`.
    2. The second item is the `document` object. This contains the entire html page as a JavaScript object. Use the arrow to expand the object, notice this is the html web page (compare this to the contents of the `dom/html/dom.html` file).
    3. Finally the browser window width is displayed:
        1. Try resizing the browser window, what is displayed in the browser console?
        2. How could you use this information to adjust the layout to suit different devices (adaptive layout)?
    3. Take a look at the `simple_dom.js` file, can you identify where these messages are coming from?
    4. The `document` object contains the `addEventListener()` function which takes two parameters:
        1. the _event_ to respond to (supplied as a string literal.
        2. an anonymous _function callback_  that is triggered by the event.
    5. There are a large number of events that can be used to trigger your code. Check the [full list](https://developer.mozilla.org/en-US/docs/Web/Events) for more information.
2. Sections of the DOM can be extracted by passing a _CSS Selector_ to the `querySelector()` property. In the `simple_dom.js` script we extract part of the DOM and store it in the `emailField` variable.
    1. This DOM fragments also have event handlers. In this case we are using the `onkeypress()` function. This is triggered when the user selects the field and presses a key.
    2. Select the _email_ field and enter your email address.
    3. Each time you press a key, notice that the console prints the message `updating email`.
    4. The html form field has a `value` property which returns the contents of the text field.
    5. Finally we use a CSS selector to retrieve the DOM representing the paragraph tag.
    6. We use the `.innerHTML` property to change the text inside this element.
    7. Can you see a potential issue (compare what us displayed with what is in the email field).
        1. Replace the `onclick()` event with the `keydown()` event, does this make any difference?
        2. Replace it with `keyup()`, does this help? Can you figure out why?
3. Another common way to select a DOM element is to reference it by its **ID** by using the `getElementById()` function.
    1. Try completing the form and clicking on the **Save** button.
    2. If you examine the browser console you will see a lot of information printed.
    3. The script updates the heading and paragraphs.

### 1.1 Test Your Understanding

1. Create a paragraph for each field in the form and assign a unique ID attribute to each.
2. When the form is submitted, display each item in the form in a different paragraph.
3. Add an `onmouseover()` event to the heading that changes the title to display `Hello Mouse!`.
    1. What happens when you move the mouse away from the heading?
4. Add an `onmouseout()` event to fix this...
5. Remember that we had to import the script _after_ the page had loaded (we placed the script tag after the `<body>` element).
    1. Lets move the `<script>` element to inside the `<head>` element in the html.
    2. How can we ensure the script only runs _after_ the html has loaded? (hint: think about the event handlers triggered by the `window` object).

## 2 Lists

In the previous example we added event handlers to the existing DOM. In this section you will learn how to make changes to the DOM and thus change the html displayed in the web browser. Start the server, open the web page in the browser and open the `lists/public/js/building_lists.js` script.

1. At the top of the script we create a new `XMLHTTPRequest()` object. This is used to make HTTP GET requests and can be used to load online resources.
    1. Normally we use this _asynchronously_ (we will cover this in the next section).
    2. In this example we make the call _synchronously_.
2. We now use the  `open()` function to retrieve the data:
    1. The first parameter is the method to be used.
    2. The second is the URL of the data (in this case it is a file on the same server).
    3. The third parameter defines whether the request is _async_ (not in this case).
3. Now we _send_ this request to the retrieve the data.
4. The `responseText` property contains the text string that is returned by the HTTP request.
    1. This is a JSON string and needs to be converted to a JS object using `JSON.parse()`.

Now we have the data we need to create a DOM object and insert this into the page DOM:

1. We use the `createElement()` function to create a new DOM element (remember this is a JS object).
2. We loop through the array of data returned from the XMLHTTPRequest and use this to build additional elements.
    1. These are added to the added a _child_ elements using the `appendChild()` function.
3. Finally the entire, complex DOM object is appended to the `window.document` object and so appears in the browser.
4. Locate the **Elements** tab in the Chrome developer tools:
1. Notice that the DOM now shows the list.

### 2.1 Test Your Understanding

1. Replace the `for` loop with a `for-of` loop.
2. Create a `<div>` element under the list.
3. Loop through the data to build a 3 column table:
    1. The first column should contain the title.
    2. Column 2 should display the ISBN number.
    3. The final column the year.
4. Insert this table into the `<div>` element.

## 3 Making Async Web Requests

In the previous example we loaded a JSON string from a local file using a _synchronous_ XMLHTTPRequest. Whilst this worked in this case, normally the request retrieves data from a remote server and this can introduce a large latency into the process, potentially freezing the UI until completed. To prevent this you should always make _asynchronous_ HTTP requests which can be handled by non-UI threads. This is what you will be doing in this exercise.

Start by running the web server in the `13_client/books/` directory and opening the web page. Locate and open the `books/public/js/book_review.js` file.

1. Try entering a search term in the text field. What happens?
    1. Study the `book_review.js` script to see if you can understand _how_ this happens.
2. There is an `onkeyup()` event handler attached to the text field that is triggered as each key is released on your keyboard.
3. This triggers the `search()` function, passing the string entered in the text field.
4. We create an `XMLHTTPRequest` object:
    1. We use it to make a `GET` request to the Google Books API. The third parameter flags this as an _asynchronous_ request.
5. The function prototype in the `onload` property is triggered if the request succeeds:
    1. The `readyState` property contains a number between 0 and 4 with 4 indicating the data has been returned.
    2. The `status` property contains the HTTP Status (eg. 200 OK). If this is not 200 we flag an error.
    3. The data we have returned is added to the DOM.
6. The function prototype in the `onerror` property is triggered if an error occurs.


### 3.1 Test Your Understanding

1. The `onkeyup()` event currently uses the `searchPrep()` function. Rewrite this using an anonymous function.
2. Replace the `for` loop with a `for-of` loop.
2. Rewrite the `search()` function to use a second _callback_ parameter. This should have two parameters:
    1. The first parameter should return an error (or `null` if no error).
    2. The second parameter should return a DOM table object that can be inserted into the page DOM.

## 4 Web Storage

Only supports strings. Need to convert objects to json strings. Make sure you have opened the **Application** tab in the Chrome Developer Tools pane. Locate the **Storage** section in the left pane.

1. Close the browser (completely) and reopen. Is the data still there?
    1. Local storage: Stores data with no expiration date. The data will be available even when the browser/ browsing tab is closed or reopened.
2. Change the `localstorage` object for the `sessionstorage` object.
3. Close the browser (completely) and reopen. Is the data still there?
    1. Session storage: Stores data for one session. Data persisted will be cleared as soon as the user closes the browser.

### 4.1 Test Your Understanding

// TODO: complete section

## 5 Building a Simple Login

Lets put all this together and build a simple login system. Locate the `13_client/login/` directory, install the dependencies and start the Express server. Open the Chrome browser and open the Chrome Developer tools on the **Network** tab.

1. Open your website's base URL,`/` .
    1. If you look at the URL you will see that it has changed to `/login`.
    2. This is caused by the original page _redirecting_ the browser to this page.
2. In the **Network** tab you will see the files that have been loaded into the browser, this includes the html page and a javascript file.
    1. Select the `login` file as shown below and select the **Headers** tab. This will show you the page request and response headers.
    2. Notice that the HTTP Status Code is 304 rather than 200 which indicates it was the target of a _redirect_. This makes sense.
3. Switch to the **Console** tab, enter a random username and password and click on the button.
    1. Notice that the browser has created a token string, this is formed by combining the supplied username and password with a `:` separator (such as `myusername:mypassword`) and then Base64 encoding it).
    2. The client then makes a `GET` request to the `/checkauth` route on your server.
    3. The token is passed in a special request header called `Authorization`.
        1. The value passed comprises the string `Basic` followed by a space and then the token.
        2. This is an example of **Basic Access Authentication**.
    4. The server responds with a status code of `401 UNAUTHORIZED` which is not surprising given we suppplied random login details!
    5. Notice all this happened without the page being reloaded, this is because the HTTP request was made by the `XMLHTTPRequest` object, not by the browser itself.
4. Now enter a valid login, use `jdoe` as the username and `p455w0rd` as the password.
    1. 

![Viewing HTTP headers in Chrome](exercises/.images/chrome_headers.png)

### 5.1 Test Your Understanding

// TODO:

## 4 Creating a Single Page Application

// TODO: complete section

### 4.1 Test Your Understanding

// TODO: complete section

## 7 Online and Offline Status

Handled with network events

```javascript
// thanks to David Walsh
// https://davidwalsh.name/detecting-online

window.addEventListener('online',  () => {
  console.log('you are ONLINE')
})

window.addEventListener('offline', () => {
  console.log('you are OFFLINE')
})
```

-----

## Advanced Topics

If you are interested in looking into client-side javascript in more detail, find out about the following:

1. async
2. defer
