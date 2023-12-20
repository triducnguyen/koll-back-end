const admin = require('firebase-admin');
const User = require('../model/User')
const db = admin.firestore();

exports.addUser = async (userData) => {
    if (!userData || !userData.username || !userData.userUUID || !userData.email) {
        throw new Error('Missing user data fields.');
    }
    // Assume we're using email to check for duplicates
    const userEmail = userData.email;

    // Reference to the users collection
    const usersRef = db.collection('users');

    // Check if a user with the same email already exists
    const snapshot = await usersRef.where('email', '==', userEmail).get();
    if (!snapshot.empty) {
        // If the snapshot is not empty, a user with this email already exists
        throw new Error('A user with this email already exists.');
    }

    // Create a new user document reference with a unique ID
    const newUserRef = usersRef.doc();

    // Set the user data to the new document
    await newUserRef.set(userData);

    // Return the ID of the newly created user document and the user data
    return { userId: newUserRef.id, userData };
};

exports.getUserByUUID = async (userUUID) => {
    if (!userUUID) {
        throw new Error('User UUID is undefined.');
    }
    // Reference to the users collection
    const usersRef = db.collection('users');

    // Query for a user with the specified UUID
    const snapshot = await usersRef.where('userUUID', '==', userUUID).get();

    if (snapshot.empty) {
        // No matching user was found
        throw new Error('User not found.');
    }

    // Assuming userUUID is unique, there should only be one matching document
    const userData = snapshot.docs[0].data();
    return userData;
};
// Similarly implement logic for updateUser and deleteUser
