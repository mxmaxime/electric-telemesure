import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import express = require('express');

admin.initializeApp();
const db = admin.firestore();
const app = express();

/**
 * Convert hex from Sigfox to int.
 * Weird function but it works.
 */
function hex_to_ascii(str1: string): Number {
  var hex  = str1.toString();
  var str = '';
  for (var n = 0; n < hex.length; n += 2) {
      str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return parseInt(str);
}

/**
 *
 * Catch Errors Handler
 * With async/await, you need some way to catch errors
 * Instead of using try{} catch(e) {} in each controller, we wrap the function in
 * catchErrors(), catch and errors they throw, and pass it along to our express middleware with next()
 *
 */
export const catchErrors = function (fn: any) {
  return (req: express.Request, res: express.Response, next: any) => {
    // fn(req, res, next).catch(next).then(next());
    if (!fn || typeof fn !== 'function') {
      throw new Error('fn is not a function')
    }

    fn(req, res, next).catch(next)
  }
}

app.post('/push/electricity', catchErrors(async (req: express.Request, res: express.Response) => {
  const now = Date.now();
  const collection = db.collection('arduino_electricity_push');

  const body = req.body;

  if (!body.data) {
    return res.sendStatus(400);
  }

  await collection.add({
    'created_time': now,
    data: hex_to_ascii(body.data),
  });

  return res.sendStatus(201);
}));

// Expose Express API as a single Cloud Function:
export const arduino = functions.https.onRequest(app);

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
