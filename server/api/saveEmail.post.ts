import { useFirestore } from "vuefire";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const email = body.email;

  const db = useFirestore();

  await addDoc(collection(db, "emails"), {
    email,
    createdAt: serverTimestamp(),
  });

  return {
    message: `Email ${email} saved`,
  };
});
