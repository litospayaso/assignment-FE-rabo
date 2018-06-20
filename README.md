# Assignment-FE

This project is made in ionic 3.
To install all dependencies execute:
```
npm install
```

## display server

Run `ionic serve` for a dev server. Navigate to `http://localhost:8100/` to open the application.

## Running tests

Tests has been written in [nightmarejs](http://www.nightmarejs.org/) and validated with mocha [mochajs](https://mochajs.org/) and[chaijs](http://www.chaijs.com/). All tests are in test folder. To execute the tests is mandatory to have the server displayed. So to execute all tests first we deploy the server in a terminal:
```
ionic serve
```
And in another terminal we execute tests script:
```
npm test
```

## Explanation of the app.

It is a simple application to take a csv file and display it. To manage file errors it displays an ionic alert. To display data there was some frameworks like [ag-grid](https://www.ag-grid.com/), in fact I prefer to use external libraries, for this assignment I have use ionic grid to display data information and some functions to sort and filter it.

## Lazy loading data.

Ionic has a component for [lazy loading](https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/) data. I wanted to add this feature to the app, but it is useless due to the way to get data (updating file from system); In this case we have to load and parse the whole project. For big data projects (via http request for example) we could use this feature. 

## Deploying the app.

The app can be deployed as a browser app executing:
```
ionic cordova build browser
```
In the same way it can be deployed as an android app.

## Documentation.

The code has been documented with [compodoc](https://github.com/compodoc/compodoc). You can run 
```
npm run compodoc
``` 
to generate the documentation.
