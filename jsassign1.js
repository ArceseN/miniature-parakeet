//Nadia and Greg

var emailobject = {
	name: 'hotmail',
	mailboxes: [
		'inbox',
		'sent',
		'spam',
		'social',
		'promotional'
	],
//A new array for draft e-mails
        draft: [
                {message: 'Hey long time no see',
                sent: true},
		
                {message: 'Ah yes, plastic beaches for miles',
                sent: false},
		
                {message: 'They know',
                sent: false},
                ],
	contacts: [
		
	       {name: 'Shane', 
	       lastMessage: "I wont be in class today",
               sent:false,
               messagesfrom: 4},
		
	      {name: 'Katy', 
	      lastMessage: "You're such a nerd",
              sent:false,
              messagesfrom: 8},
		
              {name: 'Josie', 
	      lastMessage: "See you tomorrow",
              sent:false,
              messagesfrom: 2}
	      ]
}

//Outputs the titles of all the highest level objects within "Mailboxes"
document.write(emailobject.mailboxes+'<br>');

//Outputs all of the final messages within "Contacts"
             var i;
             for(i=0; (i)<emailobject.contacts.length; i++ +'<br>')
             {
                document.write(emailobject.contacts[i].lastMessage+'<br>');
             }

//Outputs the second message within "Contacts"
document.write(emailobject.contacts[1].lastMessage+'<br>');

//Create an object containing two smaller objects 
var update = {message: 'I am le tired<br>',
             sent: true}

//Add that composite object to the draft array
emailobject.draft.push(update);

//Output the messages of all the draft elements that are not sent condition: true
             var i;
             for(i=0;(i+1)<emailobject.draft.length;i++){
             if(emailobject.draft[i].sent==true)
             {
document.write("Email sent. Contents: "+emailobject.draft[i].message+'<br>');
             }
             }
