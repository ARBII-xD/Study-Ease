const questionArray = [
    {
        ques: "Q.1: 10 - 3 __________",
        opt: [
            {AnsText: "a. 7", isCorrect: true},
            {AnsText: 'b. 6', isCorrect: false},
            {AnsText: 'c. 8', isCorrect: false}
        ]
    }
    , {
        ques: "Q.2: 11 + 2 __________",
        opt: [
            {AnsText: "a. 14", isCorrect: false},
            {AnsText: 'b. 12', isCorrect: false},
            {AnsText: 'c. 13', isCorrect: true}
        ]
    }
    , {
        ques: "Q.3: 9 * 3 __________",
        opt: [
            {AnsText: "a. 25", isCorrect: false},
            {AnsText: 'b. 27', isCorrect: true},
            {AnsText: 'c. 26', isCorrect: false}
        ]
    }
    , {
        ques: "Q.4: 15 / 3 __________",
        opt: [
            {AnsText: "a. 5", isCorrect: true},
            {AnsText: 'b. 5.5', isCorrect: false},
            {AnsText: 'c. 6', isCorrect: false}
        ]
    }
    , {
        ques: "Q.5: 10 - 13 __________",
        opt: [
            {AnsText: "a. 3", isCorrect: false},
            {AnsText: 'b. -3', isCorrect: true},
            {AnsText: 'c. none of these above', isCorrect: false}
        ]
    }
];

const Reducer = (store = questionArray) => {
    return store;
};

export default Reducer;