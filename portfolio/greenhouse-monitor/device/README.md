# GreenHouse Device

aws --region us-west-2 cloudformation delete-stack --stack-name greenhouse-device --profile jesse

java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
