# dockerized-react-markdown-blog-engine

A Dockerized React project using react-markdown to display markdown files as blog posts

- [dockerized-react-markdown-blog-engine](#dockerized-react-markdown-blog-engine)
  - [Install react-markdown](#install-react-markdown)

## Install react-markdown

Sh into the container, update the dependencies and istall them, then install react-markdown

```bash
docker exec -it blog-app sh
```

```sh
# use npm-check-updates to check what needs to be updated
npx npm-check-updates -u

# update them
npm install

# install react-markdown
npm install react-markdown
```

