# aws-managing-access-keys

AWS IAM managing Access Keys

The function iterate over all the users and retrieve all the AWS Access Keys metadata.
It will check whether a key should be deleted or deactivated.

## AWS Role

```json
{
  "Version": "2012-10-17",
  "Id": "PROTECtIAmSECRETS",
  "Statement": [
    {
      "Sid": "AWsIAmLIStUSERS",
      "Effect": "Allow",
      "Action": "iam:ListUsers",
      "Resource": "arn:aws:iam::${account_id}:user/"
    },
    {
      "Sid": "AWsIAmLIStACCESsKey",
      "Effect": "Allow",
      "Action": [
        "iam:ListAccessKeys",
        "iam:UpdateAccessKey",
        "iam:DeleteAccessKey",
        "logs:CreateLogGroup"
      ],
      "Resource": "*"
    }
  ]
}
```