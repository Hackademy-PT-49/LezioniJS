


const phoneBook = {
    contacts: [],
    addContact: function(name, phoneNumber) {

        this.contacts.push({
            name,   // name: name
            phoneNumber // phoneNumber: phoneNumber
        });

        console.log('Contatto aggiunto');
    },
    readAll: function(nameSearched) {

        let contacts = this.contacts;

        if(nameSearched) {
            contacts = contacts.filter((contact) => {
                return contact.name == nameSearched;
            });
        }

        if(!contacts.length) {
            console.log('Contatto non trovato');
            return;
        }

        contacts.forEach((contact) => {
            console.log(`${contact.name} - numero di telefono ${contact.phoneNumber}`);
        });
    }
};



phoneBook.addContact('Ugo Fantozzi', '+3902123123123');
phoneBook.addContact('Mariangela Fantozzi', '+39899899999');
phoneBook.addContact('Ugo Fantozzi', '+39111111111');

// phoneBook.readAll();
// phoneBook.readAll('Ugo Fantozzi');
phoneBook.readAll('Ciccia Fantozzi');


