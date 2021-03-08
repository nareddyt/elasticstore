import { Reference } from "./types"

// Records should be added here to be indexed / made searchable
const references: Array<Reference> = [
  {
    collection: "users",
    subcollection: "warranties",
    index: "user-warranties",
    builder: (ref) => ref.where('paid', '==', true),
  }
]

export default references
