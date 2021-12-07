import * as RatingController from "./ratingController.js";
import app from "./app.js";

const App = app(RatingController);

App.run();
