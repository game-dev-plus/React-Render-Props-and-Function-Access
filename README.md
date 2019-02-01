This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Files :

1. App.js : 
Entry point for the application. `Parent` component illustrates the use of render props using `BigBrother`, `LittleSister`, `LittleBrother` components.
`Person` components illustrates passing function from parent component to child component and calling it through child component.
2. Parent.js : Renders `BigBrother` , `LittleSister` , `LittleBrother` components.
3. BigBrother.js : Handles mouse move and reflects that changes in the state. 
4. LittleSister.js and LittleBrother.js : Access states in `BigBrother` component and reflects changes accordingly.
5. Person.js : Calls increment function in the parent ie. `App.js`. 
