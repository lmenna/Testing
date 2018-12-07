# Modify the output of npm init --y to include additional runner commands.
npm init -y
echo "Modify the package.json to include extra scripts"
sed -i '' '/[[:blank:]]*"test":/a\
"clean": "rm -rf dist",
' package.json
sed -i '' '/[[:blank:]]*"clean":/a\
"build": "npm run clean && mkdir dist && babel src -s -d dist",
' package.json
sed -i '' '/[[:blank:]]*"build":/a\
"prod": "source SetMongoEnv.sh && npm run build && node bin/prod"
' package.json
