import React from "react";
import Review from "../components/Review";
import VirusPrediction from "../components/VirusPrediction";

const steps = [
  {
    id: "age",
    user: true,
    trigger: "7",
    validator: value => {
      if (isNaN(value)) {
        return "value must be a number";
      } else if (value < 0) {
        return "value must be positive";
      } else if (value > 120) {
        return `${value}? Come on!`;
      }

      return true;
    }
  },
  {
    id: "7",
    message: "Great! Check out your summary",
    trigger: "review"
  },

  {
    id: "review",
    component: <Review />,
    asMessage: true,
    trigger: "update"
  },
  {
    id: "update",
    message: "Would you like to update some field?",
    trigger: "update-question"
  },
  {
    id: "update-question",
    options: [
      { value: "yes", label: "Yes", trigger: "update-yes" },
      { value: "no", label: "No", trigger: "update-no" }
    ]
  },
  {
    id: "update-yes",
    message: "What field would you like to update?",
    trigger: "update-fields"
  },
  {
    id: "update-fields",
    options: [
      { value: "name", label: "Name", trigger: "update-name" },
      { value: "gender", label: "Gender", trigger: "update-gender" },
      { value: "age", label: "Age", trigger: "update-age" }
    ]
  },
  {
    id: "update-name",
    update: "name",
    trigger: "7"
  },
  {
    id: "update-gender",
    update: "gender",
    trigger: "7"
  },
  {
    id: "update-age",
    update: "age",
    trigger: "7"
  },
  {
    id: "update-no",
    component: <VirusPrediction />,
    asMessage: true,
    trigger: "end-message1"
  },
  {
    id: "end-message1",
    message: "Thanks for trusting me for your prediction",
    trigger: "end-message2"
  },
  {
    id: "end-message2",
    message: "Built by Osinachi Chukwujama (Slack @Osinachi) to get to stage 4",
    end: true
  }
];

export default steps;
