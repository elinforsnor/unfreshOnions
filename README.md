# unfreshOnions

If you're are sick and tired of not knowing which movies you have, legally, bought and put on your computer, this priject gives you a small record of your movies. Built with React/TypeScript/.NETCore

## Pre-setup
Make sure Node version >13 and NPM version >6 is installed by executing the following commands in terminal:

>$ node -v
>
>$ npm -v

The terminal should responde something like:

>v.13.x.x
>
>v6.x.x

Also make sure that you have .NETCore version 3.1.x installed:
>$ dotnet --version 

Make sure you have the appropriate SDK's and runtimes installed by running:
>$ dotnet --info

The response from the terminal should include:
>.NET Core SDKs installed:
>
>3.1.2x [/usr/local/share/dotnet/sdk]
>
>
>.NET Core runtimes installed:
>
>Microsoft.NETCore.App 3.1.2 [/usr/local/share/dotnet/shared/Microsoft.NETCore.App]


## Setup
Clone repository and execute the following:
>$ cd API


<em>__Note:__ You're editor might warn you that there's something wrong with the dependencies and asks to execute 'dotnet restore'. Allow this!</em>


In the API-folder, make a copy of the <em>appsettings.Development.json</em> and name it <em>appsettings.json</em>. Include the following line:
>"ConnectionStrings": \{
>
>	"DefaultConnection": "Data source=[YOUR_DATABASE_NAME].db"
>
>\}

Then, head over to your React-project by executing the following:
>$ cd ..
>
>$ cd unfreshOnions.App

and setup all dependencies by executing
>$ npm install

## Start developing
First, start the backend. From your API-project, execute:
>$ dotnet watch run

Then, head over to your React-project by executing the following:
>$ cd ..
>
>$ cd unfreshOnions.App

and start the development server by running:
>$ npm start

to initiate the server.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Contribute

Feel free to contribute to this project by forking or report any bugs/errors!






