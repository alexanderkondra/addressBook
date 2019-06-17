$(function(){
  var addressBook = new AddressBook();
  var contact = new Contact("Ada", "Lovelace", "503-555-0100");
  var contact2 = new Contact("Grace", "Hopper", "503-555-0199");
  addressBook.addContact(contact);
  addressBook.addContact(contact2);

  console.log("Address Book Created");
  debugger;
});

//Business Logic for AddressBook
function AddressBook() {
  this.contacts = []
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}



AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function (id) {
  for (var i=0; i< this.contacts.length; i++) {
    if(this.contacts[i]){
      if (this.contacts[i].id == id) {
        return this.contacts[i];
        }
      }
    };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

//Business Logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// var addressBook = new AddressBook();
// var contact = new Contact("Ada", "Lovelace", "503-555-0100");
// var contact2 = new Contact("Grace", "Hopper", "503-555-0199");
// addressBook.addContact(contact);
// addressBook.addContact(contact2);

//
//

// // contact4.phoneNumber = "523-555-0200"
// addressBook
// AddressBook {contacts: Array(5), currentId: 5}
// contacts: Array(5)
// 0: Contact {firstName: "Ada", lastName: "Lovelace", phoneNumber: "503-555-0100", id: 1}
// 1: Contact {firstName: "Grace", lastName: "Hopper", phoneNumber: "503-555-0199", id: 2}
// 2: Contact {firstName: "Adam", lastName: "Mill", phoneNumber: "999-99-999", id: 4}
// 3: Contact {firstName: "Adam", lastName: "Mill", phoneNumber: "999-99-999", id: 4}
// // this one needs to be changed
// // 4: Contact {firstName: "mama", lastName: "aaaopper", phoneNumber: "523-555-0199", id: 5} <========== from this
// length: 5
// __proto__: Array(0)
// currentId: 5
// __proto__: Object

// contact4.phoneNumber = "523-555-0200" <======== target contact 4

// "523-555-0200"
// addressBook
// AddressBook {contacts: Array(5), currentId: 5}
// contacts: Array(5)
// 0: Contact {firstName: "Ada", lastName: "Lovelace", phoneNumber: "503-555-0100", id: 1}
// 1: Contact {firstName: "Grace", lastName: "Hopper", phoneNumber: "503-555-0199", id: 2}
// 2: Contact {firstName: "Adam", lastName: "Mill", phoneNumber: "999-99-999", id: 4}
// 3: Contact {firstName: "Adam", lastName: "Mill", phoneNumber: "999-99-999", id: 4}
// // to this one
// 4: Contact {firstName: "mama", lastName: "aaaopper", phoneNumber: "523-555-0200", id: 5} <=========== to this
// length: 5
// __proto__: Array(0)
// currentId: 5
// __proto__: Object
