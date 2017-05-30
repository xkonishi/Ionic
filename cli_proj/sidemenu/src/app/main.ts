import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

declare let force: any;

//platformBrowserDynamic().bootstrapModule(AppModule);

force.login(
    function(){
        //alert('login');
        platformBrowserDynamic().bootstrapModule(AppModule);
    },
    function(error){
        console.log('NG!!:' + error);
    });