module.exports = (req, _, next) => {
  console.log("---------");
  console.log("URL:", req.url);
  console.log("QUERY:", req.query);
  console.log("BODY:", req.body);

  next();
};
