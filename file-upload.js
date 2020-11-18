const http = require("http");
const fs = require("fs");

// Create an Upload Form
// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       "Content-Type": "text/html",
//     });
//     res.write(
//       '<form action="fileupload" method="post" enctype="multipart/form-data">'
//     );
//     res.write('<input type="file" name="fileupload"><br>');
//     res.write('<input type="submit">');
//     res.write("</form>");
//     return res.end();
//   })
//   .listen(8080);

// Parse the Uploaded File
// Include the Formidable module to be able to parse the uploaded file once it reaches the server.

// When the file is uploaded and parsed, it gets placed on a temporary folder on your computer.

const formidable = require("formidable");

//Step 2: Parse the Uploaded File

// http
//   .createServer((req, res) => {
//     if (req.url === "/fileupload") {
//       var form = new formidable.IncomingForm();
//       form.parse(req, (err, fields, files) => {
//         res.write("<h1>File Uploaded SuccessFully</h1>");
//         res.end();
//       });
//     } else {
//       res.writeHead(200, {
//         "Content-Type": "text/html",
//       });
//       res.write(
//         '<form action ="fileupload" method="post" enctype="multipart/form-data">'
//       );
//       res.write('<input type="file" name="fileupload"><br><br>');
//       res.write('<input type="submit">');
//       res.write("</form>");
//       return res.end();
//     }
//   })
//   .listen(8080);

//Save the file
// When a file is successfully uploaded to the server, it is placed on a temporary folder.

// The path to this directory can be found in the "files" object, passed as the third argument in the parse() method's callback function.

// To move the file to the folder of your choice, use the File System module, and rename the file:

http
  .createServer((req, res) => {
    if (req.url === "./fileupload") {
      const form = new formidableIncomingForm();
      form.parse(req, (ree, fields, files) => {
        let oldpath = files.fileupload.path;
        let newpath = "C:UsersUser/" + files.fileupload.name;
        fs.rename(oldpath, newpath, (err) => {
          if (err) throw err;
          res.write("<h1>File Uploaded and Moved successfully!!</h1>");
          res.end();
        });
      });
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(
        '<form action ="fileupload" method ="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name = "fileupload"><br><br>');
      res.write('<input type = "submit">');
      res.write("</input>");
      res.end();
    }
  })
  .listen(8080);
