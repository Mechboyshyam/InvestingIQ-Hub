const Joi = require("joi");

const BlogsSchema = Joi.object({
  title: Joi.string().required(),
  imageUri: Joi.string().required(),
  topic: [
    {
      topicTitle: Joi.string().required(),
      topicContent: [
        {
          value: Joi.string(),
        },
      ],
    },
  ],
  formula: Joi.string().required(),
  list: Joi.array().required(),
  subList: [
    {
      subListTitle: Joi.string(),
      subListContent: [
        {
          subListItem: Joi.string(),
        },
      ],
    },
  ],
});

module.exports = BlogsSchema;