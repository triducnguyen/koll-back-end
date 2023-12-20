class User {
    constructor(username, userUUID, email) {
        this.username = username;
        this.userUUID = userUUID;
        this.email = email;
    }

    // Add methods to validate or manipulate user data here
    // validateEmail() {
    //     // Simple email validation logic
    //     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(this.email);
    // }

    // You can add more methods as needed
}

module.exports = User;
