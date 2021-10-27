"use strict";
const FCM = require("fcm-node");
let fcm = new FCM(
  "AAAAARGolPk:APA91bFfNWb_YdQhI3pWt2m8-wwuQ1Ugi53e5Xxpe0YyuhG9AhxSm-pLkrIw_bwWGoMIYXCkx4-ZXiEjtDekzvMgkPVOaFTY7tI2-ZqessZj9NkbocOqfAyPoDkSiVvmu4dG5hUqFRkv"
);

exports.sendNotification = async (deviceToken, dataToPush) => {
  try {
    var registrationTokens = deviceToken;
    console.log("registrationTokens", registrationTokens);
    let message = {
      to: registrationTokens,
      collapse_key: "demo",
      notification: {
        title: dataToPush.title,
        body: dataToPush.msg,
        sound: "default",
        badge: 1,
        data: dataToPush,
      },
      priority: "high",
    };

    fcm.send(message, function (error, result) {
      console.log("message message  message  ", message);
      if (error) {
        console.log(
          error,
          "=========1111==========error========================="
        );
      } else {
        console.log(
          result,
          "===================result========================="
        );
      }
    });
  } catch (error) {
    throw error;
  }
};

// example
//   let dataToPush1 = {
//     title: "Medambulance",
//     msg: "Your have a new Ride Request",
//   };

//   sendNotification(datanearambu[0].deviceToken, dataToPush1);
