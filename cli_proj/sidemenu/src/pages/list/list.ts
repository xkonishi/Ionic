import { Component } from '@angular/core';

//declare let cordova: any;
declare let force: any;

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  description: string;

  constructor() {

  }

  onClickInput(event) {
    this.description = "本日は晴天なり。";
  }

  onClickSave(event) {
    //alert('save');
    debugger;
/*
    let obj = {
      method: 'GET',
      path: '/services/apexrest/myapp'
    };
    force.apexrest(obj,function(){console.log('OK!!!!!!!!');},function(){console.log('NG!!!!!!!');});*/
    
/*
    force.create("account", {Name:"XXXXXXXXXXXX"},
      function(){
        debugger;
        console.log('OK!!');
      },
      function(error){
        debugger;
        console.log('NG!! '+ JSON.stringify(error));
      });*/


    //let data = {"WhatId":"0012800000zWzbv", "Description":"MMM", "Status":"Completed"};
    let accid = "0012800000zWzbv";
    let desc = "KKK";
    let stat = "Completed";
    force.create("Task",
      //JSON.stringify(data),
      {
        WhatId:accid,
        Description:desc,
        Status:stat
      },
      function(){console.log('OK!!');},
      function(error){console.log('NG!! '+ JSON.stringify(error));});

/*
    force.query("select name from account limit 10",function(res){
      debugger;
    },function(){});*/

/*
    let accmgr = cordova.require("com.salesforce.plugin.sfaccountmanager");
    accmgr.getUsers(function(user) {
      for(let i=0; i<user.length; i++) {
        console.log('------->>>'+user[i].username);
      }
    }, null);*/

    //alert(force.isAuthenticated());
  }

  onClickCancel(event) {
    //this.navCtrl.push(HomePage);

  }
}
