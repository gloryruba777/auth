import main from "../database/connection";
import Tank from "../database/schema";

export default function insert_Users(req,res) {
  main().catch(error => console.error(error));
  const create = new Tank({email:'tamil@gmail.com'})
  create.save().then(() => {
    res.status(200).json(create)
  })
}