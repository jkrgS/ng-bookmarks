# ng-bookmarks

![Alt text](/ui/src/assets/ng-bookmarks.png?raw=true "Optional Title")

## Development
- Angular CLI v.~11.2.4
- Angular Material v.^11.2.4
- RxJS v.~6.6.0
- NgRX v.^11.0.1

## Development server
Clone the project, run "npm install" and then "npm start" within "/ui" path for a dev server. Browser will be open automatically, also you can navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Build
Run "ng build" within "/ui path", to build the project. The build artifacts will be stored in the dist/ directory. Use the --prod flag for a production build.

## Architecture
The [app.component] which specifies the layout of the page. The page consists of a [navbar] & a [router-outlet]. The [bookmarks.module] is a lazy loaded module, so it is loaded when we navigate to this route. In our case, because it's the only route that we have in the application and because we redirect to this path ([app-routing.module.ts] - path: ['bookmarks-list']) when we navigate to the initial route, lazy-loading does not offer something in the performance but when we design an application, we should have on our minds that will be added more modules and routes in the future.

## Bookmarks module
The [Bookmarks.module] consists of two components ([bookmark-item.component], [bookmark-list.component]). The [bookmark-list.component] is a smart component which "knows" how to retrieve the bookmark data from the store and provides with these data to the other dumb component [bookmark-item.component].

## shared module
We used it as a 'server' of dependencies to multiple modules in our app, especially for graphical libraries.

## Design pattern
For this app, we followed the Redux design pattern. We implemented it here through the ngrx/platform library. On each action, for example, when the user add's a new bookmark from the list, an action is dispatched. Based on the payload of this action, the reducer (bookmark.reducer) provides the updated state of the app. The smart component (bookmarks-list.component) observes the changes in the state of our app and provides the dumb component with specific '@Input()'. The dumb component depend only on their input to render the appropriate information. This dependance of the dumpb component only on their inputs and the fact that these inputs change in an immutable way, is significant, because we can perform changeDetectionStrategy.OnPush in our components. This strategy has performance benefits for our app.

## Unit testing
Basic unit test implementation added, you can run it within "/ui" path with "npm test" command.

## Bonus points
GraphQL, I had no time to implement GraphQL, which is one of my fav libraries and use cases, i use it a lot in my apps and personal projects.
Mobile responsiveness, a base functionality has been implemented with media query within the base .scss file.
Monorepo, i had no time.
