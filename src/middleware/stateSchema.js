export default {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The root schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "examples": [
        {
            "commentsPart": {
                "comments": [
                    "comment1",
                    "comment2"
                ]
            },
            "auth": true
        }
    ],
    "required": [
        "commentsPart",
        "auth"
    ],
    "properties": {
        "commentsPart": {
            "$id": "#/properties/commentsPart",
            "type": "object",
            "title": "The commentsPart schema",
            "description": "An explanation about the purpose of this instance.",
            "default": {},
            "examples": [
                {
                    "comments": [
                        "comment1",
                        "comment2"
                    ]
                }
            ],
            "required": [
                "comments"
            ],
            "properties": {
                "comments": {
                    "$id": "#/properties/commentsPart/properties/comments",
                    "type": "array",
                    "title": "The comments schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": [],
                    "examples": [
                        [
                            "comment1",
                            "comment2"
                        ]
                    ],
                    "additionalItems": true,
                    "items": {
                        "$id": "#/properties/commentsPart/properties/comments/items",
                        "anyOf": [
                            {
                                "$id": "#/properties/commentsPart/properties/comments/items/anyOf/0",
                                "type": "string",
                                "title": "The first anyOf schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": "",
                                "examples": [
                                    "comment1",
                                    "comment2"
                                ]
                            }
                        ]
                    }
                }
            },
            "additionalProperties": true
        },
        "auth": {
            "$id": "#/properties/auth",
            "type": "boolean",
            "title": "The auth schema",
            "description": "An explanation about the purpose of this instance.",
            "default": false,
            "examples": [
                true
            ]
        }
    },
    "additionalProperties": true
}