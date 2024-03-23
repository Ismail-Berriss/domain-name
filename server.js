import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/css", express.static("dist"));

let domains = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { domains: domains });
});

app.post("/get-domains", async (req, res) => {
  const domainKeyword = req.body.domain;
  domains = [];
  if (domainKeyword !== "") {
    try {
      const result = await axios.get(
        `https://api.domainsdb.info/v1/domains/search?limit=50&domain=${domainKeyword}`
      );
      result.data.domains.forEach((element) => {
        domains.push(element.domain);
      });
    } catch (error) {
      domains.push("No domain found.");
    }
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
