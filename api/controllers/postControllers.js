const Post = require('../models/postModels');

const newPost = (req, res) => {
  const { title, author, content } = req.body;
  const newPost = { title, author, content };
  const np = new Post(newPost);

  np.save()
    .then(pst => {
      res.status(201).send(pst);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const getPosts = (req, res) => {
  Post.find()
    .then(posts => {
      res.send(posts);
    })
    .catch(err => {
      res.status(500).send(err);
    })
};

const getOnePost = (req, res) => {
  Post.findById(req.params.id)
    .then(pst => {
      res.send(pst);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const postComment = (req, res) => {
  Post.findByIdAndUpdate(req.params.id,
    { $push: {
      "comments": {
        "text": req.body.text,
        "author": req.body.author
      }}
    },
    { new: true }
  )
  .then(post => {
    res.send(post);
  })
  .catch(err => {
    res.status(500).send(err);
  });
};

module.exports = {
  newPost,
  getPosts,
  getOnePost,
  postComment
};