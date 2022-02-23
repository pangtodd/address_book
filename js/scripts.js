// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
};

AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber, addresses) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

function Addresses(emailAddress, workEmail, physicalAddress, workAddress){
  this.emailAddress = emailAddress;
  this.workEmail = workEmail;
  this.physicalAddress = physicalAddress;
  this.workAddress = workAddress;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

// User Interface Logic ---------
let addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
    const contact = addressBookToDisplay.findContact(key);
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}

function showContact(contactId) {
  const contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  $(".email-address").html(contact.addresses.emailAddress);
  $(".work-email").html(contact.addresses.workEmail);
  $(".physical-address").html(contact.addresses.physicalAddress);
  $(".work-address").html(contact.addresses.workAddress);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
}

$(document).ready(function() {
  attachContactListeners();
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var inputtedEmailAddress = $("input#email-address").val();
    var inputtedWorkEmail = $("input#work-email").val();
    var inputtedPhysicalAddress = $("input#physical-address").val();
    var inputtedWorkAddress = $("input#work-address").val();
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    $("input#email-address").val("");
    $("input#work-email").val("");
    $("input#physical-address").val("");
    $("input#work-address").val("");
    
    function removeEmpties(newAddress) {
      Object.keys(newAddress).forEach(function(key) {
        if (newAddress[key].trim().length === 0){
          let removeElement= '#'+key;
          console.log(removeElement);
          $(removeElement).remove();
          }
        }); 
     };  

    var newAddress = new Addresses(inputtedEmailAddress, inputtedWorkEmail, inputtedPhysicalAddress, inputtedWorkAddress)
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    removeEmpties(newAddress);
    removeEmpties(newContact);
    newContact.addresses=newAddress;
    console.log(Object.keys(newAddress));
    console.log(Object.values(newAddress));
    removeEmpties(newAddress);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);
  });
});