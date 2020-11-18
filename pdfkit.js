const PDFDocument = require("pdfkit");
const fs = require("fs");

//create a document
var doc = new PDFDocument();
//Pipe its output somewhere, like to a file or HTTP response
//see below for browser usage
doc.pipe(fs.createWriteStream("output.pdf"));

// Embed a font, set the font size, and render some text
doc
  .font("./font/PalatinoBold.ttf")
  .fontSize(25)
  .text("Some text with embedded font");

// some vector graphics
doc.save().moveTo(100, 150).lineTo(100, 250).lineTo(200, 250).fill("#FF3300");

doc.circle(280, 200, 50).fill("#6600FF");

// Add an image, constrain it to a given size, and center it vertically and horizontally
doc.image("./img/web.jpg", {
  fit: [250, 300],
  align: "center",
  valign: "center",
});

//Add another page
doc.addPage().fontSize(25).text("Here is some vector graphics...", 100, 100);

// an SVG path
doc
  .scale(0.6)
  .translate(470, 130)
  .path("M 250,75 L 323,301 131,161 369,161 177,301 z")
  .fill("red", "even-odd")
  .restore();

// and some justified text wrapped into columns
doc
  .text("And here is some wrapped text...", 100, 300)
  .font("Times-Roman", 13)
  .moveDown()
  .text("lorem", {
    width: 412,
    align: "justify",
    indent: 30,
    columns: 2,
    height: 300,
    ellipsis: true,
  });

doc
  .addPage()
  .fillColor("blue")
  .text("Here is a link!", 100, 100)
  .underline(100, 100, 160, 27, { color: "#0000FF" })
  .link(100, 100, 160, 27, "http://google.com/");

// Finalize PDF file
doc.end();
