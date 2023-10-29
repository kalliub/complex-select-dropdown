const inputWithSections = {
    "Section One": {
        "Option One": "option-one",
        "Option Two": "option-two",
    },
    "Section Two": {
        "Option Three": "option-three",
        "Option Four": "option-four",
    },
}

const inputWithoutSections = {
    "Option One": "option-one",
    "Option Two": "option-two",
    "Option Three": "option-three",
    "Option Four": "option-four",
}

const outputWithSections = [
    {
        label: "Section One",
        options: [
            { label: "Option One", value: "option-one" },
            { label: "Option Two", value: "option-two" },
        ],
    },
    {
        label: "Section Two",
        options: [
            { label: "Option Three", value: "option-three" },
            { label: "Option Four", value: "option-four" },
        ],
    },
]

const outputWithoutSections = [
    { label: "Option One", value: "option-one" },
    { label: "Option Two", value: "option-two" },
    { label: "Option Three", value: "option-three" },
    { label: "Option Four", value: "option-four" },
]
