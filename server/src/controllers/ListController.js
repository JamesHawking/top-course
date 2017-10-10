module.exports = {
  getAll(req, res) {
    const data = {
      title: 'React for beginneser',
      price: 49,
      description: 'Lorem ipsum description',
      imgURL: 'https://someadress.com',
      social: {
        facebook: 'https://someadress.com',
        twitter: 'https://someadress.com',
      },
      github: 'https://someadress.com',
      upvotes: 445,
      tags: ['Beginner friendly'],
      categories: ['React', 'JavaScript', 'Frameworks'],
    };

    res.send(data);
  },
};
