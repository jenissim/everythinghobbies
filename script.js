/* =========================================================
   EVERYTHING HOBBIES
   Main JavaScript
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  /* =======================================================
     MOBILE MENU
     ======================================================= */
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
      );
    });
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
      });
    });
  }
  /* =======================================================
     GENRE VOTING
     ======================================================= */
  const genreButtons = document.querySelectorAll(".genre-buttons button");
  const voteButton = document.querySelector(".vote-button");
  const voteMessage = document.querySelector(".vote-message");
  let selectedGenre = "";
  genreButtons.forEach(button => {
    button.addEventListener("click", () => {
      genreButtons.forEach(item => {
        item.classList.remove("selected");
      });
      button.classList.add("selected");
      selectedGenre = button.textContent.trim();
      if (voteMessage) {
        voteMessage.textContent = `${selectedGenre} selected.`;
      }
    });
  });
  if (voteButton) {
    voteButton.addEventListener("click", () => {
      if (!selectedGenre) {
        if (voteMessage) {
          voteMessage.textContent = "Choose a genre first.";
        }
        return;
      }
      if (voteMessage) {
        voteMessage.textContent =
          `Thanks. We'll keep ${selectedGenre} in mind.`;
      }
    });
  }
  /* =======================================================
     ARTICLE DATA
     ======================================================= */
  const articles = [
    {
      id: "books-that-stay-with-you",
      category: "Books",
      title: "The books that stay with you",
      excerpt:
        "Some books end when you close the final page. Others quietly follow you around afterwards.",
      date: "25 September 2026",
      readingTime: "5 min read",
      image: "images/blog-books.jpg",
      content: `
        <p>There are books you finish and immediately forget. Then there are the ones that seem to settle somewhere inside you.</p>
        <p>You remember a sentence months later. You think about a character while walking home. You recommend the book to someone even though you cannot quite explain why it mattered so much.</p>
        <h2>Not every favourite has to be perfect</h2>
        <p>Sometimes the books we love most are not the books we would call flawless. They might have strange endings, characters who frustrate us, or passages we would happily skip on a second reading.</p>
        <p>But something about them remains.</p>
        <blockquote>
          “A good book gives you somewhere to go when you need to be somewhere else.”
        </blockquote>
        <h2>The books we return to</h2>
        <p>Re-reading is its own kind of conversation. You are not the same person who read the book the first time, so the story changes slightly too.</p>
        <p>A line that once seemed ordinary can suddenly feel like it was written specifically for the person you are now.</p>
        <p>Maybe that is why certain books become part of our lives rather than simply things we have read.</p>
      `
    },
    {
      id: "why-we-keep-coming-back-to-songs",
      category: "Music",
      title: "Why we keep coming back to certain songs",
      excerpt:
        "Some songs become attached to people, places and versions of ourselves we thought we had left behind.",
      date: "18 September 2026",
      readingTime: "4 min read",
      image: "images/blog-music.jpg",
      content: `
        <p>There is always that one song.</p>
        <p>You hear the first few seconds and suddenly you are somewhere else. Maybe it is a particular summer, a particular person, a particular car ride, or simply a version of yourself that no longer exists.</p>
        <h2>Music keeps receipts</h2>
        <p>Photos show us what something looked like. Songs can remind us exactly how something felt.</p>
        <p>That is part of what makes music so personal. We do not just listen to songs. We attach memories to them.</p>
        <blockquote>
          “Sometimes the song remembers for us.”
        </blockquote>
        <h2>The playlist as a diary</h2>
        <p>A playlist can say things we do not know how to say directly. It can be an apology, a love letter, a time capsule or simply a collection of sounds that made sense at the time.</p>
        <p>And years later, pressing play can bring the whole thing back.</p>
      `
    },
    {
      id: "the-films-we-never-forget",
      category: "Film & TV",
      title: "The films we never forget",
      excerpt:
        "What makes one film stay with us long after the credits roll?",
      date: "10 September 2026",
      readingTime: "6 min read",
      image: "images/blog-film.jpg",
      content: `
        <p>There are films you watch because everyone is talking about them. Then there are films you carry with you.</p>
        <p>Sometimes it is the story. Sometimes it is the soundtrack, a performance, a single scene, or the feeling you had when you first watched it.</p>
        <h2>It is rarely just the film</h2>
        <p>Context changes everything. The same film can feel completely different at eighteen than it does at twenty-five.</p>
        <p>We bring our own lives into the cinema. That means the films we remember often become connected to moments that existed outside the screen.</p>
        <blockquote>
          “We remember how a film made us feel as much as what happened in it.”
        </blockquote>
        <h2>Watching it again</h2>
        <p>Rewatching a favourite film can feel like meeting an old friend. You already know what is coming, but you notice different things each time.</p>
        <p>Maybe that is the real magic of a memorable film. It gives you something new without changing at all.</p>
      `
    },
    {
      id: "making-space-for-a-life-you-like",
      category: "Life & Ideas",
      title: "Making space for a life you actually like",
      excerpt:
        "A good life does not always have to look impressive from the outside.",
      date: "2 September 2026",
      readingTime: "5 min read",
      image: "images/blog-life.jpg",
      content: `
        <p>There is a strange pressure to make our lives look meaningful all the time.</p>
        <p>We turn hobbies into side businesses. We turn rest into productivity. We make lists of things we should be learning, achieving and becoming.</p>
        <h2>What if enjoyment was enough?</h2>
        <p>You do not need to monetise every interest. You do not need to become exceptionally good at everything you enjoy.</p>
        <p>Sometimes you can simply like something.</p>
        <blockquote>
          “Not everything you love needs to become a project.”
        </blockquote>
        <h2>Leave room for ordinary things</h2>
        <p>A life you like might contain very ordinary pleasures. A favourite café. A walk with nowhere to be. A bookshop visit. Cooking something you have made a hundred times.</p>
        <p>The point is not to build a perfect life. It is to make enough room for the parts that feel like yours.</p>
      `
    }
  ];
  /* =======================================================
     ARTICLE HELPERS
     ======================================================= */
  function getArticleById(id) {
    return articles.find(article => article.id === id);
  }
  function getArticleUrl(article) {
    return `article.html?post=${encodeURIComponent(article.id)}`;
  }
  function createArticleCard(article) {
    return `
      <article class="article-card" data-category="${article.category}">
        <a href="${getArticleUrl(article)}" class="article-card-image">
          <img
            src="${article.image}"
            alt="${article.title}"
            loading="lazy"
          >
        </a>
        <div class="article-card-copy">
          <p class="eyebrow dark">${article.category}</p>
          <h3>
            <a href="${getArticleUrl(article)}">
              ${article.title}
            </a>
          </h3>
          <p>${article.excerpt}</p>
          <div class="article-meta">
            <span>${article.date}</span>
            <span>${article.readingTime}</span>
          </div>
        </div>
      </article>
    `;
  }
  /* =======================================================
     JOURNAL PAGE
     ======================================================= */
  const featuredArticle = document.getElementById("featuredArticle");
  const articleGrid = document.getElementById("articleGrid");
  const categoryFilters =
    document.querySelectorAll("[data-category-filter]");
  function renderJournal(category = "All") {
    let filteredArticles = articles;
    if (category !== "All") {
      filteredArticles = articles.filter(
        article => article.category === category
      );
    }
    if (featuredArticle) {
      const article = filteredArticles[0];
      if (article) {
        featuredArticle.innerHTML = `
          <div class="featured-article-image">
            <img
              src="${article.image}"
              alt="${article.title}"
            >
          </div>
          <div class="featured-article-copy">
            <p class="eyebrow dark">${article.category}</p>
            <h2>
              ${article.title}
            </h2>
            <p>
              ${article.excerpt}
            </p>
            <div class="article-meta">
              <span>${article.date}</span>
              <span>${article.readingTime}</span>
            </div>
            <a
              class="button button-dark"
              href="${getArticleUrl(article)}"
            >
              Read article
            </a>
          </div>
        `;
      } else {
        featuredArticle.innerHTML = `
          <p>No articles found in this category yet.</p>
        `;
      }
    }
    if (articleGrid) {
      const remainingArticles = filteredArticles.slice(1);
      articleGrid.innerHTML = remainingArticles.length
        ? remainingArticles.map(createArticleCard).join("")
        : `
            <p>
              More articles are coming soon.
            </p>
          `;
    }
  }
  if (articleGrid || featuredArticle) {
    renderJournal();
    categoryFilters.forEach(button => {
      button.addEventListener("click", () => {
        categoryFilters.forEach(item => {
          item.classList.remove("active");
        });
        button.classList.add("active");
        const category =
          button.getAttribute("data-category-filter");
        renderJournal(category);
      });
    });
  }
  /* =======================================================
     ARTICLE PAGE
     ======================================================= */
  const articlePage = document.getElementById("articlePage");
  if (articlePage) {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get("post");
    const article = getArticleById(postId);
    const title = document.getElementById("articleTitle");
    const category = document.getElementById("articleCategory");
    const excerpt = document.getElementById("articleExcerpt");
    const date = document.getElementById("articleDate");
    const readingTime = document.getElementById("articleReadingTime");
    const image = document.getElementById("articleImage");
    const body = document.getElementById("articleBody");
    const keepReading = document.getElementById("keepReading");
    if (!article) {
      if (title) {
        title.textContent = "We couldn't find that article.";
      }
      if (category) {
        category.textContent = "Journal";
      }
      if (excerpt) {
        excerpt.textContent =
          "The article you are looking for may have moved or does not exist yet.";
      }
      if (body) {
        body.innerHTML = `
          <p>
            <a class="button button-dark" href="journal.html">
              Back to Journal
            </a>
          </p>
        `;
      }
      if (image) {
        image.style.display = "none";
      }
    } else {
      document.title =
        `${article.title} — Everything Hobbies`;
      if (category) {
        category.textContent = article.category;
      }
      if (title) {
        title.textContent = article.title;
      }
      if (excerpt) {
        excerpt.textContent = article.excerpt;
      }
      if (date) {
        date.textContent = article.date;
      }
      if (readingTime) {
        readingTime.textContent = article.readingTime;
      }
      if (image) {
        image.src = article.image;
        image.alt = article.title;
      }
      if (body) {
        body.innerHTML = article.content;
      }
      /* -----------------------------------------------
         RELATED ARTICLES
         ----------------------------------------------- */
      if (keepReading) {
        const related = articles
          .filter(item => item.id !== article.id)
          .slice(0, 2);
        keepReading.innerHTML = `
          <h2>Keep reading</h2>
          <div class="article-grid">
            ${related.map(createArticleCard).join("")}
          </div>
        `;
      }
    }
    /* -----------------------------------------------
       COPY ARTICLE LINK
       ----------------------------------------------- */
    const copyButton =
      document.getElementById("copyArticleLink");
    if (copyButton) {
      copyButton.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(
            window.location.href
          );
          copyButton.textContent = "Copied";
          setTimeout(() => {
            copyButton.textContent = "Copy link";
          }, 2000);
        } catch (error) {
          copyButton.textContent = "Copy unavailable";
          setTimeout(() => {
            copyButton.textContent = "Copy link";
          }, 2000);
        }
      });
    }
  }
  /* =======================================================
     CURRENT YEAR
     ======================================================= */
  document
    .querySelectorAll("[data-current-year]")
    .forEach(element => {
      element.textContent = new Date().getFullYear();
    });
});