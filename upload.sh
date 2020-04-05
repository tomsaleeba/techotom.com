#!/bin/bash
set -euxo pipefail

awsProfile=${1:?first param must be AWS profile name}
s3Bucket=${2:?second param must be S3 bucket name}

for curr in index.html style.css public-pgp.key; do
  aws s3 cp $curr s3://$s3Bucket/ --acl=public-read --profile $awsProfile
done
