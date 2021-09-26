module.exports = {
    post: {
        tags: ['users'],
        description: "login user",
        operationId: "loginUser",
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
            '401': {
                description: "The email or password are incorrect."
            },
            '200': {
                description: 'User logged successfully'
            },
            '400': {
                description: 'Something unexpected happened.'
            }
        }
    }
}