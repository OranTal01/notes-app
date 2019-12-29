import { firestore } from './firebase';

export const createUserProfileDocument = async (user, additionalDate) => {
    if (!user) return

    const userRef = firestore.doc(`user/${user.uid}`)
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = user
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalDate
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};