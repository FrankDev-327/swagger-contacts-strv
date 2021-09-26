module.exports = {
    components: {
        schemas: {
            UserInput: {
                type: 'object',
                properties: {
                    email: {
                        type: 'string',
                        description: "Email given for user",
                        example: "example@gmail.com"
                    },
                    password: {
                        type: 'string',
                        description: "Password given for user",
                        example: "47s4g4f1f"
                    },
                }
            }
        }
    }
}