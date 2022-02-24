# Address Book

#### By Todd Pangilinan

An applicaiton that allows users to input contacts.

## Technologies used:

* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery
* markdown

## Description:
 Website that allows a user to create contacts within an address book. This project utilizes JavaScript, JQuery, html, Bootstrap, and CSS to take user input, and construct and manipulate objects. While most of this project came from an exercise within the Epicodus class, I specifically added the following functionality: 
 
 First, I added an additional four inputs for addresses- personal email address, work email address, home physical address, work physical address. I created a new objects for all of these addresses, and incorporated it into the existing contact object structure.

  Second, if a field is not filled out, that specific field does not show when the contact is displated. For example, if someone did not fill out the "work email" address field, that field will be removed from the results. This is accomplished with a loop using object.keys to inspect the objects' attributes, and then adjusting the DOM based on whether or not any of the attributes are empty/null.


## Setup/Installation Requirements

* If you don't have git installed on your machine, follow these [instructions.](https://www.learnhowtoprogram.com/introduction-to-programming/getting-started-with-intro-to-programming/git-and-github)
* Via your terminmal, navigate to the directory you want to store my files in.
* Clone my git hub directory by typing or cutting pasting: "git clone https://github.com/pangtodd/address_book.git" into your terminal
* open files in browswer or code editor of your choice.
* you can also view this website [here](https://github.com/pangtodd/PizzaParlor.git) or you can cut and paste this into your browser: https://pangtodd.github.io/PizzaParlor

## Known Bugs

* As of 2/16/22, no known bugs.
* If you notice mistakes or bugs, please email pang.todd@gmail.com

## License

[MIT](https://opensource.org/licenses/MIT)
Copyright (c) Todd Pangilinan 