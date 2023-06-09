const { faker } = require("@faker-js/faker");
const { Comment } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const comment = [];

  for (let i = 0; i < 7; i++) {
    comment.push({
      name: faker.name.findName(),
      content: faker.lorem.paragraphs(),
    });
  }

  await Comment.bulkCreate(comment);
  console.log("[Database] Se corrió el seeder de Comments.");
};
