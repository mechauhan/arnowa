module.exports = {
        "apps": [{
                "name": "fhw",
                "script": "nodemon server.js",
                "instances": 1,
                "autorestart": true,
                "watch": false,
                "time": true,
                "env": {
			"DB_Med" : "mongodb+srv://qa-user:DXox137q13yEBMMt@cluster0.bhnaa.mongodb.net/mySecondDatabase?retryWrites=true&w=majority",
"NODE_ENV"  : "development",

"TOKEN_SECRET" : "wcrftguubuniunihugtyvghjbhe456uik67ie456uik67ihj",

"TOKEN_SECRET_USER" : "wertyuiofghjkvbnmvbnme456uik67ie456uik67idd",

"TOKEN_SECRET_ADMIN" : "12AZDFFNDJDJDHEHUmxjsiwksmssoAOMe456uik67i",

"TOKEN_SECRET_HOSPITAL" :"zse456uik67ijntyhjvbkdxtxvkhbbkbhuy7ibhk",

"FCM_TOKEN" :"AAAAkY9In4c:APA91bGtQek3Oy0D6fJbHqYHI6a0GVEEkmTIPN7RnawMfi07osxoXa6Apy3yro1IZi_xuiPo2wXyqmn7rsuCAZ3H26dQHCPrDcVZrBpD0Lb3Tryu1EiasXZ4LZwmPgu8kFcL6BlbrEm9",

//FCM_TOKEN :AAAAwhC-E2c:APA91bGMTayl4n45S7PPjzd3CDBffIyhPp0CgoIByD1bmztHSyWFjjjAd5VvKC9WHNG_uVmwbeywo-gK4UN85pW4V8OiIWQqnqw6R_SWzuI_uVtL6JEtqpQDUtdpczN2O_jPXiQN4j41

"MAIL_PASS" :"Dev@1233",
"MAIL_USER":"dev.fourbrick@gmail.com",


                }
        }]
}
