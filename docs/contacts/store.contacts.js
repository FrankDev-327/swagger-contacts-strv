module.exports = {
    post: {
        tags: ['firebase'],
        description: "store contact into firebase database",
        operationId: "storeContact",
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/contactsInput'
                    }
                }
            }
        },
        responses: {
            '200': {
                description: "Address was inserted successfully!"
            },
            '400': {
                description: "Something unexpected happened."
            }
        }
    }
}