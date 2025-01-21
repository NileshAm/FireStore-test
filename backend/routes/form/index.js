const express = require("express");
const { upload } = require("../../lib/multer");
const { uploadData, getDocID, getDocData } = require("../../lib/firebase");
const router = express.Router();

router.post("/submit", upload.any(), (req, res) => {
  let bodyData = req.body;
  let uIdField = "";
  data[bodyData.formID].inputs.map((input) => {
    if (input.type === "checkBox") {
      if (bodyData[input.id] === "") {
        bodyData[input.id] = [];
      } else {
        bodyData[input.id] = bodyData[input.id].split(",");
      }
    }
    if (input.uID) {
      uIdField = input.id;
    }
  });
  req.files.map((file) => {
    bodyData[file.fieldname] = file.path;
  });
  console.log(bodyData);
  uploadData(bodyData.formID, bodyData[uIdField], bodyData);
  res.json(200);
});

router.get("/", async (req, res) => {
  const data = await getDocID("forms");
  console.log(data)
  res.json(data);
});

router.get("/:id", async (req, res) => {
  res.json(await getDocData("forms", req.params.id));
});

module.exports = router;
