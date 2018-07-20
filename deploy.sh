#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# if you are deploying to a custom domain
echo 'wiki.drzzle.com' > CNAME

# commit the new dist
git add docs/.vuepress/dist
git commit -m 'upating dist'
git push origin master

# navigate into the build output directory
git subtree push --prefix docs/.vuepress/dist/ origin gh-pages

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
