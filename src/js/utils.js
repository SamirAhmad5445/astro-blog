export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function formatDate(date) {
  let options = new Object();
  options.timeZone = "UTC";
  return new Date(date).toLocaleDateString("en-US", options);
}

export function formatePosts(
  posts,
  {
    filterOutDraft = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
  } = {}
) {
  const filteredPosts = posts.reduce((acc, post) => {
    const { date, draft } = post.frontmatter;
    // filter out the draft posts
    if (filterOutDraft && draft) return acc;

    // filter out the future posts
    if (filterOutFuturePosts && new Date(date) > new Date()) return acc;

    // add the post uf passes the 2 conditions
    acc.push(post);
    return acc;
  }, []);

  // sort or randomize
  if (sortByDate) {
    filteredPosts.sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  return typeof limit === "number"
    ? filteredPosts.slice(0, limit)
    : filteredPosts;
}
