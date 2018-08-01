#!/bin/sh

npm run lint
if [ $? -ne 0 ]; then
  exit 1;
fi

npm run test
if [ $? -ne 0 ]; then
  exit 1;
fi

rm -rf dist
mkdir dist

rm -rf package.zip

cp package.json index.js dist

cd dist
npm install --production && rm package-lock.json && zip -rq package.zip . && mv package.zip ..
cd -

rm -rf dist

aws --region us-west-2 cloudformation package --template-file app_spec.yml --output-template-file app_deploy.yml --s3-bucket saml-templates --profile jesse

aws --region us-west-2 cloudformation deploy --template-file app_deploy.yml --stack-name greenhouse-device --capabilities CAPABILITY_IAM --profile jesse
