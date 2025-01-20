//#region Requirements
const {
  uploadData,
  initializeFirebaseApp,
  getData,
} = require("./lib/firebase");
const path = require("path");

// Next initialize the application
const app = require("express")();

initializeFirebaseApp();

const cors = require("cors");
const bodyParser = require("body-parser");
const { upload } = require("./lib/multer");
//#endregion

//#region middleware
app.use(
  cors({
    origin: ["http://192.168.8.186:3001"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.options("*", cors());
app.use(upload.none());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));
//#endregion

// routing path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/form", require("./routes/form/index"));

app.post("/upload", async (req, res) => {
  let response = {
    code: 200,
    error: await uploadData("users", req.body.nic.toString(), req.body),
  };
  console.log(response);
  if (response.error !== undefined) {
    response.code = 500;
  }
  res.json(response);
});

app.get("/get", async (req, res) => {
  const data = await getData();
  console.log(Object.keys(data[0]));
  console.log(
    Object.keys(data[0]).forEach((key) => {
      return "sad";
    })
  );
  const page = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <table>
        <tr>
            ${Object.keys(data[0]).forEach((key) => {
              return `<th>${key}</th>`;
            })}
        </tr>
        <tr>
            <td>as</td>
            <td>as</td>
            <td>as</td>
        </tr>
    </table>
  </body>
</html>
`;
  res.send(page);
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
