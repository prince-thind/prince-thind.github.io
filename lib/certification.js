const imagesContext = require.context("../images/certification", false);
const images = {};

imagesContext.keys().forEach((key) => {
  let name = key;
  name = key.split("/")[1];
  name = name.split(".")[0];
  images[name] = imagesContext(key);
});


const certification = [
  {
    name: "MONGODB Database",
    image: images["MONGODB"],
    link: "https://university.mongodb.com/course_completion/1b128214-2c30-42f8-838b-7ade5284e7b2?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing",
  },
  {
    name: "FCC Responsive Design",
    image: images["FCC"],
    link: "https://www.freecodecamp.org/certification/prince_thind/responsive-web-design",
  },
  {
    name: "FCC DSA in JS",
    image: images["FCC-JS"],
    link: "https://www.freecodecamp.org/certification/prince_thind/javascript-algorithms-and-data-structures",
  },

  {
    name: "DSA",
    image: images["GFG-DSA"],
    link: "https://media.geeksforgeeks.org/courses/certificates/54bce7c9092d6203a2ad64025f05fe9d.pdf",
  },
  {
    name: "Web-Analytics",
    image: images["web-analytics"],
    link: "https://www.emarketinginstitute.org/certificate/web-analytics-course-and-certification-free-prince-thind/",
  },
];

export default certification;
