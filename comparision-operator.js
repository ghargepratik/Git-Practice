/*
MongoDB provides a variety of comparison operators to compare values in documents. These operators are used in queries to find documents that meet specific criteria. Here are the most commonly used comparison operators in MongoDB:

1)$eq: This operator matches documents where the value of a field equals a specified value.
Example: db.collection.find({ age: { $eq: 30 } })

This query returns all documents from the collection where the age field equals 30.

2)$ne: This operator matches documents where the value of a field does not equal a specified value.
Example: db.collection.find({ age: { $ne: 30 } })

This query returns all documents from the collection where the age field does not equal 30.

3)$gt: This operator matches documents where the value of a field is greater than a specified value.
Example: db.collection.find({ age: { $gt: 30 } })

This query returns all documents from the collection where the age field is greater than 30.

4)$gte: This operator matches documents where the value of a field is greater than or equal to a specified value.
Example: db.collection.find({ age: { $gte: 30 } })

This query returns all documents from the collection where the age field is greater than or equal to 30.

5)$lt: This operator matches documents where the value of a field is less than a specified value.
Example: db.collection.find({ age: { $lt: 30 } })

This query returns all documents from the collection where the age field is less than 30.

6)$lte: This operator matches documents where the value of a field is less than or equal to a specified value.
Example: db.collection.find({ age: { $lte: 30 } })

This query returns all documents from the collection where the age field is less than or equal to 30.

7)$in: This operator matches documents where the value of a field matches any value in a specified array.
Example: db.collection.find({ status: { $in: [ "A", "D" ] } })

This query returns all documents from the collection where the status field matches either "A" or "D".

8)$nin: This operator matches documents where the value of a field does not match any value in a specified array.
Example: db.collection.find({ status: { $nin: [ "A", "D" ] } })

This query returns all documents from the collection where the status field does not match "A" or "D".

9)$regex: This operator matches documents where the value of a field matches a specified regular expression.
Example: db.collection.find({ name: { $regex: /^J/ } })

This query returns all documents from the collection where the name field starts with the letter "J".

10)$exists: This operator matches documents where a field exists or does not exist.
Example: db.collection.find({ name: { $exists: true } })

This query returns all documents from the collection where the name field exists.
*/