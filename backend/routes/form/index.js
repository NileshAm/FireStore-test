const express = require("express");
const { upload } = require("../../lib/multer");
const router = express.Router();


router.post("/submit", upload.single("file"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.json(200);
});

router.get("/", (req, res) => {
  res.json([{ id: 1 }, { id: 2 }]);
});
router.get("/1", (req, res) => {
  res.json({
    title: "Data collection Form",
    description: "Form to collect data for Mora Spirit",
    imageSrc:
      "https://media.geeksforgeeks.org/wp-content/uploads/20230714124356/Data-Collection.png",
    inputs: [
      {
        type: "text",
        id: "name",
        name: "Name",
        description: "Your Full name",
        placeholder: "A.M.N.L.Amarathunge",
        required: true,
      },
      {
        type: "text",
        id: "school",
        name: "School",
        description: "School you attended",
        placeholder: "Maliyadev Colllege",
      },
      {
        type: "email",
        id: "email",
        name: "Email",
        description: "Your email address",
        placeholder: "amarathungeamnl.23@uom.lk",
        required: true,
      },
      {
        type: "date",
        id: "dob",
        name: "Date of Birth",
        description: "Your Date of Birth",
        required: true,
      },
      {
        type: "time",
        id: "availableTime",
        name: "Available Time",
        description: "Available Time for a meeting",
        required: true,
      },
      {
        type: "file",
        id: "photo",
        name: "Profile Photo",
        description: "Profile Photo",
        accept: [".jpg", ".png", ".pdf"],
        required: true,
      },
      {
        type: "dropdown",
        id: "batch",
        name: "Batch",
        description: "Enter your Batch",
        options: [
          { key: 23, value: "Batch 23" },
          { key: 22, value: "Batch 22" },
          { key: 21, value: "Batch 21" },
        ],
        required: true,
      },
      {
        type: "multipleChoice",
        id: "department",
        name: "Department",
        description: "Select the department you are enrolled in",
        options: [
          { key: "ENTC", value: "ENTC" },
          { key: "CSE", value: "CSE" },
          { key: "Mechanical", value: "Mechanical" },
        ],
        required: true,
      },
      {
        type: "checkBox",
        id: "pillar",
        name: "Pillars you like to join",
        description: "Select all the pillars you would like to join",
        options: [
          { key: "managment", value: "Management" },
          { key: "webdev", value: "Web Dev" },
          { key: "marketing", value: "Marketing" },
        ],
      },
      {
        type: "textArea",
        id: "address",
        name: "Address",
        description: "Your Current Address",
        placeholder: `No. 123,\nColombo,\nSri lanka.`,
        required: true,
      },
    ],
  });
});

module.exports = router;
