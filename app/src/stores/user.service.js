import { doc, getFirestore, onSnapshot, setDoc } from 'firebase/firestore'
import { onMount } from 'nanostores'
import { $user, setUser } from 'stores/user.js'

const db = getFirestore()

export async function saveUser(attrs = {}) {
  return setDoc(doc(db, 'users/user-1'), attrs)
}

export function observeUser() {
  return onSnapshot(doc(db, 'users/user-1'), (snapshot) => {
    setUser(snapshot.data())
  })
}

onMount($user, observeUser)
