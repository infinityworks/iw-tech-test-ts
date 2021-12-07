import express from "express";
import type { Application, Request, Response } from "express";

const App = (ratingController: {
  getAuthorities: (req: express.Request, res: express.Response) => void;
  getAuthority: (req: express.Request, res: express.Response) => void;
}) => {
  const DEFAULT_PORT = 8080;
  const app: Application = express();
  init();

  async function run() {
    init();
    app.listen(DEFAULT_PORT, () => {
      console.log(`Server listening on http://localhost:${DEFAULT_PORT} ...`);
      console.log("Both the website and the app API are served on this URL");
    });
  }

  function init() {
    app.use(express.static("public"));

    app.get("/", (req: Request, res: Response) => {
      return res.send();
    });

    app.get("/api", (req: Request, res: Response) => {
      return ratingController.getAuthorities(req, res);
    });

    app.get("/api/:authorityId", (req: Request, res: Response) => {
      return ratingController.getAuthority(req, res);
    });
  }

  return {
    run,
  };
};

export default App;
