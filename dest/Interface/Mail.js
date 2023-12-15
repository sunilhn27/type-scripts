"use strict";
class Mail {
    later(email, after) {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email, after) {
        console.log(`Sent email to ${email} after ${after} ms. `);
        return true;
    }
    queue(email) {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}
