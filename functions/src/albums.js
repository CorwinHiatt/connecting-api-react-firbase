import dbConnect from "./dbconnect.js";

export function getAllAlbums(req,res) {
    const db = dbConnect()
    db.collection('albums').get()
    .then(collection => {
        const albumArr = collection.docs.map(doc => {
           
            return{...doc.data(), albumId: doc.id}
        })
    })
    .catch(err => res.status(500).send({success: false, message: err}))
}


export function createNewAlbum(req, res) {
    const db = dbConnect()
    db.collection('albums').add(req.body)
    .then(doc => res.status(201).send({success:true, message: 'Album Created:'}))
    .catch(err => res.status(500).send({success: false, message: err}))
}