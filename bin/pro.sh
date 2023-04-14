npm run build
scp -r ./dist root@47.97.192.98:/data/app/blog/templates/blog/
rm -rf dist