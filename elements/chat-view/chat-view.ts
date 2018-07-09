/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
class Contact {
  constructor(contactName: string, message: any[]) {
    message = this.msgs;
    contactName = this.contactName;
  }
  msgs: any[];
  contactName: string;
}
var contacts: Array<Contact> = [new Contact("Mike", []),
new Contact("Molly", []), new Contact("Peter", []),
new Contact("Kevin", [])];


@component("chat-view")
class ChatView extends polymer.Base {
  @property({ notify: true, type: Array })
  transferArray: Array<Contact> = contacts;
  @property({ type: String })
  inputmsg: string;
  @property({ type: String })
  author: string;
  @property({ type: String })
  chatName: string;
  @property({ notify: true })
  msgsSelected: Array<String> = this.transferArray[0].msgs;
  // @property({ notify: true })   msgsMike = [{ author: 'Mike', msg_val: "Hi man, how are you?" }, { author: 'me', msg_val: "I'm great" }, { author: 'Mike', msg_val: "What have you been upto?" },];
  // @property({ notify: true })  // msgsMolly = [];
  // @property({ notify: true })  // msgsPeter = [];
  // @property({ notify: true })  // msgsKevin = [];

  ready() {
    console.log("chat-view is ready" + contacts[0]);
    // for (let contact of this.transferArray) {
    //   console.log(contact);
    // }
  }

  @observe("chatName")
  changeView(newValue, oldValue) {
    console.log("changeView");
    for (let contact of contacts) {

      if (newValue == contact.contactName) { this.msgsSelected = contact.msgs; }
      console.log(contact.contactName);
    }



    //   case "Mike":     this.msgsSelected = this.msgsMike; break;
    //   case "Molly":     this.msgsSelected = this.msgsMolly;      //     break;
    //   case "Peter":     this.msgsSelected = this.msgsPeter;      //     break;
    //   case "Kevin":this.msgsSelected = this.msgsKevin;      //     break;
    // }
  }


  sendMsg() {

    this.inputmsg
      = document.getElementById("input_val").value;
    // console.log(input_val);
    var msg = {
      author: 'me',
      msg_val: this.inputmsg

    };

    this.push('msgsSelected', msg);
    console.log(this.msgsSelected);
    document.getElementById('chatUpdate').render;
    // var x = document.getElementsByClassName('name');
    // for (var i = x.length; i-- > 0;)
    //   if (x[i].innerHTML == 'me')
    //     x[i].parentNode.style.position = 'relative';

  }

}

// console.log('chat');

ChatView.register();
