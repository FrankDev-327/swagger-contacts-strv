module.exports = {
    post: {
        tags: ['users'],
        description: "store user into the database",
        operationId: "addUser",
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/UserInput'
                    }
                }
            }
        },
        responses: {
            '201': {
                description: "User has been created correctly!"
            },
            '422': {
                description: 'It was not possible to create user. Try again.'
            },
            '202': {
                description: 'This email already exist. Try to another one.'
            },
            '400': {
                description: 'Something unexpected happened.'
            }
        }
    }
}