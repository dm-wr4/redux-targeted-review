export default (isDarkMode) => {
  return isDarkMode
    ? // Class names for dark mode
      {
        header: {
          header: 'header header-dark',
          input: 'input-dark',
          button: 'button-dark',
        },
        display: {
          display: 'display display-dark',
        },
        user: {
          user: 'user user-dark',
        },
        posts: {
          post: 'post post-dark',
          postText: 'post-text post-text-dark',
          postTitle: 'post-title post-title-dark',
        },
      }
    : // Class names for light mode
      {
        header: {
          header: 'header',
        },
        display: {
          display: 'display',
        },
        user: {
          user: 'user',
        },
        posts: {
          post: 'post',
          postText: 'post-text',
          postTitle: 'post-title',
        },
      }
}
