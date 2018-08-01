# Device

This mocks the green house device by:

1. Pulling a list of active devices
2. Generating fake data for that device

# add all of the correct perms

aws --region us-west-2 cloudformation package --template-file app_spec.yml --output-template-file app_deploy.yml --s3-bucket saml-templates --profile jesse

aws --region us-west-2 cloudformation deploy --template-file app_deploy.yml --stack-name greenhouse-device --capabilities CAPABILITY_IAM

aws --region us-west-2 cloudformation delete-stack --stack-name greenhouse-device --profile jesse
