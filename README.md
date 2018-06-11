# ngx-express-passport-setup


An angular & node express setup for passport authentication


#### Main dev tools used:
`Angular 5` `NodeJS` `ExpressJS` `Typescript` `ES6` `PassportJS` `PostgreSQL` `SequelizeJS` `Sequelize-Typescript`


#### Supported Passport Authentication
`Facebook` `Google+` `Twitter` `Local`

#### Clone the project don't npm install
`$ git clone https://github.com/KShewengerz/ngx-express-passport-setup`

#### How to run

1. Create your own clientID and clientSecret on the provider you want to test
   1. **_Facebook_**
        > a. Go to https://developers.facebook.com/apps, Click `Add New App`
          
        > b. Enter your app's information, Click `Create App ID`
        
        > c. Access your ClientID and ClientSecret on `Sidebar's Settings Menu > Basic`   
        
        > d. Credentials are placed on `/config/passport/credential.ts` or `.env` if environment variables will be used.
   2. **_Google+_**
        > a. Go to https://console.developers.google.com/, Click `Enable APIs and Services` beside Dashboard label
        
        > b. Search for Google+ on the search bar and Click `Enable`.
        
        > c. Go back to your dashboard and click `Credentials` from the sidebar.
        
        > d. Click `Create credentials` button at the top and Click `Create OAuth client ID` and supply those fields provided.
          For these fields; **Authorized Javascript Origins** supply `http://localhost:3000` and **Authorized redirect URIs** supply `http://localhost:3000/auth/google/callback`
          - they are the routes created from our system
        
        > c. Your ClientID and ClientSecret will then be shown in modal form or you can access it anytime by clicking the credential you created on the list.
        
        > d. Credentials are placed on `/config/passport.credential.ts` or `.env` if environment variables will be used.
   
   3. **_Twitter_**
        > a. Go to https://apps.twitter.com/, Click `Create New App`
        
        > b. Fill the form with information about your app. For these fields; **Website** supply `http://127.0.0.1:3000/` and **Callback URL**
        supply 	`http://127.0.0.1:3000/auth/twitter/callback` - they are the routes created from our system
        
        > c. API Key and API Secret are shown on `Keys and Access Tokens` tab.  
        
        > d. Go to `Permissions` tab > `Additional Permissions` and check `Request email addresses from users` - for us to be able to fetch the users'
        email address. 
        
        > e. Credentials are placed on `/config/passport/credential.ts` or `.env` if environment variables will be used.
        
        > NOTE: Twitter doesn't support localhost on their url so we use 127.0.0.1 instead.
   
   4. **_Local_**          
        > a. Create Database by default the app used `passport` db name.
        
        > b. Run sequelize migration scripts `$ npm run sq:migrate:all`
        
        > c. Credentials are placed on `/config/database.ts` or `.env` if environment variables will be used.
2. Replace all credentials on `.env` file
3. Run `$ npm run build` to install all node modules from backend  & frontend
4. Run `$ npm start` to run the system.


#### Npm Commands
```
  $ npm run build          - Installs all node modules from backend & frontend
  $ npm run ng-start       - Runs angular app (frontend)
  $ npm run express-start  - Runs express app (backend)
  $ npm start              - Runs the whole system (frontend & backend)
  
  $ npm run sq:migrate:all      - Runs all migration scripts
  $ npm run sq:migrate:undo     - Rollbacks previous migration script
  $ npm run sq:migrate:undo:all - Rollbacks all migration scripts
     
```



