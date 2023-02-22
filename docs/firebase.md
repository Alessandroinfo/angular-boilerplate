## [Firebase](https://firebase.google.com/)

### Firebase Hosting Guide
Firebase Hosting is a cloud hosting service provided by Google. It provides developers with a way to quickly and easily host their web applications and static content. It also provides features like SSL certificates, custom domains, and CDN caching.

Here's a brief guide on how to use Firebase Hosting in your Angular project:

Create a Firebase account if you don't have one already.

- Install the Firebase CLI by running `npm install -g firebase-tools`.
- Log in to Firebase CLI by running `firebase login`.
- Create a Firebase project by running `firebase init`. This will prompt you to select the Firebase features you want to use for your project, such as Firebase Hosting.
- Follow the prompts to configure Firebase Hosting for your project. This will involve selecting a Firebase project to use, setting up the hosting configuration file (`firebase.json`), and choosing a directory to host your app files.
- Once you've completed these steps, you can deploy your app to Firebase Hosting by running `firebase deploy`. This will upload your app files to Firebase Hosting and make them available to the public.

Firebase Hosting already gzips all files uploaded.

### Firebase Hosting Commands
Here are the Firebase CLI commands that you can use for Firebase Hosting:

- `firebase login`: This command logs you in to Firebase CLI.
- `firebase init`: This command initializes Firebase for your project and sets up the necessary configuration files, including firebase.json.
- `firebase deploy`: This command deploys your `dist/` app to Firebase Hosting.


### Firebase Hosting Configuration
Here's an example `firebase.json` configuration file for an Angular project:

```
{
  "hosting": {
    "public": "dist/browser",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(eot|otf|ttf|ttc|woff|woff2|font.css)",
        "headers": [
          {
            "key": "Access-Control-Allow-Origin",
            "value": "*"
          },
          {
            "key": "Cache-Control",
            "value": "max-age=604800"
          }
        ]
      },
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=604800"
          }
        ]
      },
      {
        "source": "**/*.@(jpg|jpeg|gif|png)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=604800"
          }
        ]
      },
      {
        "source": "404.html",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=300"
          }
        ]
      }
    ]
  },
  "firestore": {
    "rules": "firestore.rules",
    "indexes": "firestore.indexes.json"
  }
}
```

Here's what each configuration option means:

- `public`: This is the directory that contains your Angular app files that you want to deploy to Firebase Hosting.
- `ignore`: This specifies files and directories that Firebase should ignore when deploying your app.
- `rewrites`: This specifies how Firebase should handle URL routing for your app. In this example, all URLs will be redirected to /index.html.
- `headers`: This specifies HTTP headers that should be included in responses for certain file types. In this example, we're setting caching headers for fonts, CSS
