/* =========================================================
   EVERYTHING HOBBIES
   MAIN SCRIPT
========================================================= */
/* =========================================================
   MOBILE MENU
========================================================= */
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("open");
    const isOpen = nav.classList.contains("open");
    menuToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );
  });
  const navLinks = nav.querySelectorAll("a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );
      menuToggle.setAttribute(
        "aria-label",
        "Open menu"
      );
    });
  });
}
/* =========================================================
   BOOK CLUB GENRE VOTING
========================================================= */
const genreItems = document.querySelectorAll(".genre-item");
const genreSubmit = document.getElementById("genreSubmit");
const genreMessage = document.getElementById("genreMessage");
let selectedGenre = null;
genreItems.forEach(function (item) {
  item.addEventListener("click", function () {
    genreItems.forEach(function (genre) {
      genre.classList.remove("selected");
    });
    item.classList.add("selected");
    selectedGenre = item.dataset.genre;
  });
});
if (genreSubmit) {
  genreSubmit.addEventListener("click", function () {
    if (!selectedGenre) {
      genreMessage.textContent =
        "Choose a genre first.";
      return;
    }
    genreMessage.textContent =
      "Your vote for " +
      selectedGenre +
      " has been saved.";
  });
}
/* =========================================================
   JOURNAL ARTICLES
========================================================= */
/*
   EDIT YOUR ARTICLES HERE.
   Each article has:
   id
   title
   category
   date
   readingTime
   excerpt
   image
   content
*/
const articles = [
  {
    id: "books-that-stay-with-you",
    title: "Books That Stay With You",
    category: "Books",
    date: "25 September 2026",
    readingTime: "5 min read",
    excerpt:
      "Some books end when you reach the final page. Others follow you long after you've put them down.",
    image: "images/blog-books.jpg",
    content: `
      <p>
        There are books you read, enjoy and eventually forget.
        Then there are the ones that quietly become part of you.
      </p>
      <p>
        You might forget the exact details of the story.
        You might not remember every character's name.
        But something remains. A sentence. A feeling.
        A question you hadn't thought about before.
      </p>
      <h2>
        The books we carry
      </h2>
      <p>
        The books that stay with us tend to arrive at the
        right moment. Sometimes they tell us something we
        already knew but couldn't put into words.
        Sometimes they completely change the way we see
        something.
      </p>
      <p>
        That's part of what makes reading so personal.
        Two people can read exactly the same book and walk
        away carrying completely different things.
      </p>
      <blockquote>
        "A good book gives you somewhere to go when you have
        to stay where you are."
      </blockquote>
      <p>
        Maybe that's why we keep returning to certain stories.
        Not because they have changed, but because we have.
      </p>
      <h2>
        Why we return
      </h2>
      <p>
        Re-reading is a strange kind of conversation.
        The words remain exactly where you left them,
        but you don't.
      </p>
      <p>
        A book that meant one thing at eighteen can mean
        something completely different at twenty-five.
        The story hasn't moved. You have.
      </p>
      <p>
        And perhaps that's the best thing a book can do.
        Give us something worth returning to.
      </p>
    `
  },
  {
    id: "why-we-keep-coming-back-to-songs",
    title: "Why We Keep Coming Back to Songs",
    category: "Music",
    date: "18 September 2026",
    readingTime: "4 min read",
    excerpt:
      "Some songs become memories before we even realise we're making them.",
    image: "images/blog-music.jpg",
    content: `
      <p>
        There are songs we hear once and move on from.
        Then there are songs that somehow become part of
        our personal history.
      </p>
      <p>
        A few seconds of an intro can take you somewhere
        instantly. A bedroom. A car ride. A summer.
        A person you haven't spoken to in years.
      </p>
      <h2>
        More than sound
      </h2>
      <p>
        Music has a strange relationship with memory.
        It doesn't simply remind us of moments.
        Sometimes it brings the feeling of the moment back
        with it.
      </p>
      <p>
        That's why an old song can feel almost physical.
        Suddenly you're not remembering the past.
        For a few minutes, you're inside it again.
      </p>
      <h2>
        The songs we choose
      </h2>
      <p>
        Our favourite songs also say something about us.
        Not necessarily about who we are all the time,
        but about who we were, who we wanted to be,
        or what we needed at a particular moment.
      </p>
      <p>
        Maybe that's why our playlists can feel so personal.
        They are little archives of ourselves.
      </p>
      <p>
        And every now and then, we find a new song that
        deserves a permanent place in the archive.
      </p>
    `
  },
  {
    id: "the-films-we-never-forget",
    title: "The Films We Never Forget",
    category: "Film & TV",
    date: "10 September 2026",
    readingTime: "6 min read",
    excerpt:
      "What makes a film stay in your mind long after the credits roll?",
    image: "images/blog-film.jpg",
    content: `
      <p>
        Everyone has that one film.
        The one they can quote without thinking.
        The one they will stop scrolling to watch again
        if they see it playing on television.
      </p>
      <p>
        Sometimes it isn't even the greatest film we've
        ever seen. It simply found us at the right time.
      </p>
      <h2>
        Timing changes everything
      </h2>
      <p>
        We don't experience films in isolation.
        We bring our own lives into the cinema, the living
        room or the headphones.
      </p>
      <p>
        The same scene can feel completely different
        depending on where you are in your own life.
      </p>
      <h2>
        The scenes that remain
      </h2>
      <p>
        Sometimes what we remember isn't the whole story.
        It's a single scene.
        A look between two characters.
        A line that made us laugh.
        A song playing at exactly the right moment.
      </p>
      <p>
        Those little details become attached to our own
        memories, making the film feel like something
        we experienced rather than simply watched.
      </p>
      <p>
        Maybe that's what makes a film unforgettable.
        It gives us a moment we can recognise as our own.
      </p>
    `
  },
  {
    id: "making-space-for-a-life-you-like",
    title: "Making Space for a Life You Like",
    category: "Life & Ideas",
    date: "2 September 2026",
    readingTime: "5 min read",
    excerpt:
      "A life you like doesn't have to look impressive from the outside.",
    image: "images/blog-life.jpg",
    content: `
      <p>
        There is a strange pressure to make life look
        meaningful from the outside.
      </p>
      <p>
        We collect achievements, plans, photographs and
        experiences, sometimes without stopping to ask
        whether we actually like the life we're building.
      </p>
      <h2>
        What actually matters?
      </h2>
      <p>
        Maybe a good life is quieter than we imagine.
        A morning you enjoy.
        People you can call.
        Work that gives you something back.
        Enough time to do things simply because you like them.
      </p>
      <p>
        Not everything needs to become a goal.
        Not every interest needs to become a side hustle.
        Not every hobby needs to be productive.
      </p>
      <h2>
        Leave some room
      </h2>
      <p>
        Making space for a life you like can mean
        deliberately leaving room for things that don't
        have an obvious purpose.
      </p>
      <p>
        Reading because you want to.
        Going for a walk without tracking it.
        Listening to an album from beginning to end.
        Talking to someone for three hours about absolutely
        nothing important.
      </p>
      <p>
        Sometimes the things that make a life feel like yours
        are precisely the things that don't need to justify
        their existence.
      </p>
    `
  }
];
/* =========================================================
   ARTICLE HELPERS
========================================================= */
function getArticleById(id) {
  return articles.find(function (article) {
    return article.id === id;
  });
}
function getArticleUrl(id) {
  return "article.html?post=" +
    encodeURIComponent(id);
}
/* =========================================================
   ARTICLE CARD
========================================================= */
function createArticleCard(article) {
  return `
    <a
      class="article-card"
      href="${getArticleUrl(article.id)}"
    >
      <div class="article-card-image">
        <img
          src="${article.image}"
          alt="${article.title}"
          loading="lazy"
        >
      </div>
      <div class="article-card-content">
        <div class="article-card-top">
          <span class="article-category">
            ${article.category}
          </span>
          <span class="article-reading-time">
            ${article.readingTime}
          </span>
        </div>
        <h3>
          ${article.title}
        </h3>
        <p>
          ${article.excerpt}
        </p>
        <div class="article-card-bottom">
          <span>
            ${article.date}
          </span>
          <span>
            Read →
          </span>
        </div>
      </div>
    </a>
  `;
}
/* =========================================================
   FEATURED ARTICLE
========================================================= */
const featuredArticle = document.getElementById(
  "featuredArticle"
);
if (featuredArticle) {
  const featured = articles[0];
  featuredArticle.innerHTML = `
    <a
      class="featured-article"
      href="${getArticleUrl(featured.id)}"
    >
      <div class="featured-image">
        <img
          src="${featured.image}"
          alt="${featured.title}"
        >
      </div>
      <div class="featured-content">
        <div class="featured-meta">
          <span>
            ${featured.category}
          </span>
          <span>
            ${featured.date}
          </span>
        </div>
        <h2>
          ${featured.title}
        </h2>
        <p>
          ${featured.excerpt}
        </p>
        <div class="featured-footer">
          <span>
            ${featured.readingTime}
          </span>
          <strong>
            Read article →
          </strong>
        </div>
      </div>
    </a>
  `;
}
/* =========================================================
   ARTICLE GRID
========================================================= */
const articleGrid = document.getElementById(
  "articleGrid"
);
function renderArticles(category) {
  if (!articleGrid) {
    return;
  }
  let filteredArticles = articles;
  if (category && category !== "All") {
    filteredArticles = articles.filter(
      function (article) {
        return article.category === category;
      }
    );
  }
  if (filteredArticles.length === 0) {
    articleGrid.innerHTML = `
      <p class="no-articles">
        Nothing here yet. Check back soon.
      </p>
    `;
    return;
  }
  articleGrid.innerHTML = filteredArticles
    .map(createArticleCard)
    .join("");
}
if (articleGrid) {
  renderArticles("All");
}
/* =========================================================
   CATEGORY FILTER
========================================================= */
const categoryButtons = document.querySelectorAll(
  "[data-category-filter]"
);
categoryButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    categoryButtons.forEach(function (item) {
      item.classList.remove("active");
    });
    button.classList.add("active");
    const category =
      button.dataset.categoryFilter;
    renderArticles(category);
  });
});
/* =========================================================
   INDIVIDUAL ARTICLE PAGE
========================================================= */
const articlePage = document.getElementById(
  "articlePage"
);
if (articlePage) {
  const params = new URLSearchParams(
    window.location.search
  );
  const postId = params.get("post");
  const article = getArticleById(postId);
  if (!article) {
    document.title =
      "Article not found — Everything Hobbies";
    articlePage.innerHTML = `
      <div class="article-not-found">
        <p class="eyebrow dark">
          Sorry
        </p>
        <h1>
          We couldn't find<br>
          <em>that article.</em>
        </h1>
        <p>
          The article may have moved or the link
          may be incorrect.
        </p>
        <a
          href="journal.html"
          class="button button-orange"
        >
          Back to the Journal
          <span>→</span>
        </a>
      </div>
    `;
  } else {
    document.title =
      article.title +
      " — Everything Hobbies";
    const title =
      document.getElementById("articleTitle");
    const category =
      document.getElementById("articleCategory");
    const date =
      document.getElementById("articleDate");
    const readingTime =
      document.getElementById("articleReadingTime");
    const excerpt =
      document.getElementById("articleExcerpt");
    const image =
      document.getElementById("articleImage");
    const body =
      document.getElementById("articleBody");
    if (title) {
      title.textContent = article.title;
    }
    if (category) {
      category.textContent = article.category;
    }
    if (date) {
      date.textContent = article.date;
    }
    if (readingTime) {
      readingTime.textContent = article.readingTime;
    }
    if (excerpt) {
      excerpt.textContent = article.excerpt;
    }
    if (image) {
      image.src = article.image;
      image.alt = article.title;
    }
    if (body) {
      body.innerHTML = article.content;
    }
    /* PAGE TITLE */
    /* KEEP READING */
    const keepReading =
      document.getElementById("keepReading");
    if (keepReading) {
      const relatedArticles = articles
        .filter(function (item) {
          return item.id !== article.id;
        })
        .slice(0, 3);
      keepReading.innerHTML =
        relatedArticles
          .map(createArticleCard)
          .join("");
    }
    /* COPY ARTICLE LINK */
    const copyButton =
      document.getElementById("copyArticleLink");
    if (copyButton) {
      copyButton.addEventListener(
        "click",
        async function () {
          try {
            await navigator.clipboard.writeText(
              window.location.href
            );
            copyButton.textContent =
              "Copied!";
            setTimeout(function () {
              copyButton.textContent =
                "Copy link";
            }, 2000);
          } catch (error) {
            copyButton.textContent =
              "Copy failed";
          }
        }
      );
    }
  }
}
/* =========================================================
   CURRENT YEAR
========================================================= */
const currentYear =
  document.querySelector("[data-current-year]");
if (currentYear) {
  currentYear.textContent =
    new Date().getFullYear();
}