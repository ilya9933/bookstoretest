const db = require("../db/models");

module.exports.getBook = async (req, res) => {
  try {
    const whereAuthor = {};
    const wherePublisher = {};
    const whereGenre = {};

    const page = !Number.isNaN(Number.parseInt(req.query.page))
      ? Number.parseInt(req.query.page)
      : 1;
    const limit = !Number.isNaN(Number.parseInt(req.query.per_page))
      ? Number.parseInt(req.query.per_page)
      : 6;
    const offset = limit * (page - 1);

    if (req.query.filterByAuthor?.length) {
      whereAuthor.authorName = req.query.filterByAuthor;
    }
    if (req.query.filterByPublisher?.length) {
      wherePublisher.publisherName = req.query.filterByPublisher;
    }
    if (req.query.filterByGenre?.length) {
      whereGenre.genreName = req.query.filterByGenre;
    }

    const { count, rows: books } = await db.Book.findAndCountAll({
      attributes: ["id", "nameBook", "price", "description"],
      limit,
      offset,
      include: [
        {
          model: db.Author,
          as: "author",
          attributes: ["authorName"],
          where: whereAuthor,
        },
        {
          model: db.Publisher,
          as: "publisher",
          attributes: ["publisherName"],
          where: wherePublisher,
        },
        {
          model: db.Genre,
          as: "genre",
          attributes: ["genreName"],
          through: {
            attributes: [],
          },
          where: whereGenre,
        },
      ],
    });
    console.log(count);
    console.log(req.headers);
    if (!books || !books.length) {
      res.status(404).json({
        message: "No registered books",
      });
      return;
    }

    res.status(200).json({
      message: books,
      meta: {
        total: count,
        per_page: limit,
        from: offset,
        to: offset + limit - 1,
        current_page: page,
        last_page: Math.ceil(count / limit),
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "AAAAA", data: err });
  }
};

exports.getInfoBooks = async (request, response) => {
  try {
    let genres = await db.Genre.findAll({ attributes: ["genreName"] });
    if (!genres) {
      response
        .status(404)
        .send("No data in the database. Genres should be added first");
      return;
    }

    let authors = await db.Author.findAll({ attributes: ["authorName"] });
    if (!authors) {
      response
        .status(404)
        .send("No data in the database. Genres should be added first");
      return;
    }

    let publishers = await db.Publisher.findAll({
      attributes: ["publisherName"],
    });
    if (!publishers) {
      response
        .status(404)
        .send("No data in the database. Genres should be added first");
      return;
    }

    const arrayGenres = genres.map(function (obj) {
      return obj.genreName;
    });

    const arrayAuthors = authors.map(function (obj) {
      return obj.authorName;
    });

    const arrayPublishers = publishers.map(function (obj) {
      return obj.publisherName;
    });

    response.status(200).send({
      booksInfo: {
        arrayGenres: arrayGenres,
        arrayAuthors: arrayAuthors,
        arrayPublishers: arrayPublishers,
      },
    });
  } catch (err) {
    response.status(400).send("Something went terribly wrong");
  }
};
