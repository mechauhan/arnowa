const nodemailer = require("nodemailer");

exports.sendMail1 = async (email, subject, template) => {
  console.log({ email, subject, template });
  template = `<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Hello, world!</title>
    <style>
        table,
        th,
        td {
            border: 1px solid black;
            border-collapse: collapse;
        }
    </style>
</head>

<body style="padding: 30px; width:100%">
    <!-- table first -->
    <table  style=" width:100%" class="table">
        <thead>
            <tr>
                <th scope="col" colspan="4" style="text-align: center;">HEART</th>

            </tr>
        </thead>
        <tbody  style=" width:100%" >
            <tr>
                <th scope="row" style="max-width: 30px;"></th>
                <td><b>Daily</b></td>
                <td><b>Weekly</b></td>
                <td><b>Monthly</b></td>
            </tr>
            <tr>
                <th scope="row" style="max-width: 30px; text-align: center;">Beats Per Minutes</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>

        </tbody>
    </table>
    <!-- table second -->
    <table class="table" style="margin-top: 30px; width:100%;">
        <thead>
            <tr>
                <th scope="col" colspan="4" style="text-align: center;">Oxygen</th>

            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" style="max-width: 30px;"></th>
                <td><b>Daily</b></td>
                <td><b>Weekly</b></td>
                <td><b>Monthly</b></td>
            </tr>
            <tr>
                <th scope="row" style="max-width: 30px; text-align: center;">Oxygen Percentage</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>

        </tbody>
    </table>
    <!-- table third -->
    <table class="table" style="margin-top: 30px; width:100%;">
        <thead>
            <tr>
                <th scope="col" colspan="4" style="text-align: center;">Sleep</th>

            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" style="max-width: 30px;"></th>
                <td><b>Daily</b></td>
                <td><b>Weekly</b></td>
                <td><b>Monthly</b></td>
            </tr>
            <tr>
                <th scope="row" style="max-width: 30px; text-align: center;">Sleep Per Night</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>

        </tbody>
    </table>
    <!-- table fourth -->
    <table class="table" style="margin-top: 20px;width:100%;">
        <thead>
            <tr>
                <th scope="col" colspan="4" style="text-align: center;">Step</th>

            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" style="max-width: 30px;"></th>
                <td><b>Daily</b></td>
                <td><b>Weekly</b></td>
                <td><b>Monthly</b></td>
            </tr>
            <tr>
                <th scope="row" style="max-width: 30px; text-align: center;">Step Count</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row" style="max-width: 30px; text-align: center;">Calories Burned</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>

            <tr>
                <th scope="row" style="max-width: 30px; text-align: center;">Distance</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>


        </tbody>
    </table>
    <!-- table five -->
    <table class="table" style="margin-top: 20px;  width:100%;">
        <thead>
            <tr>
                <th scope="col" colspan="4" style="text-align: center;">Blood Pressure</th>

            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" style="max-width: 30px;"></th>
                <td><b>Daily</b></td>
                <td><b>Weekly</b></td>
                <td><b>Monthly</b></td>
            </tr>
            <tr>
                <th scope="row" style="max-width: 30px; text-align: center;">Systolic Pressure</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row" style="max-width: 30px; text-align: center;">Diastolic Pressure</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
        </tbody>
    </table>
</body>

</html>`;
  let transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "fhesmart@gmail.com",
      pass: "hello@123",
    },
  });
  let mailOptions = {
    to: email,
    subject,
    html: template,
    // html: "<h1>Welcome</h1><p>That was easy!</p>",
  };
  transporter.sendMail(mailOptions, (err, result) => {
    console.log({ err, result });
    if (err) {
      console.log("errrrrrrrrrrrrr  ", err);
      return err;
    } else {
      console.log("uuuuuuuuuuuu    ", result);
      return result;
    }
  });
};
