export const sensei_data = {
    name: "せんせい",
    scripts: [
        {
            checkpoint: 0,
            checkpointScripts: [
                {
                    node: "error", // THIS IS FOR ERROR MESSAGES
                    text: "えっ。。。",
                },
                {
                    node: 0,
                    text: "<p>おはよう。</p><p>わたしはせんせいです。</p>",
                    nextNode: 1,
                },
                {
                    node: 1,
                    text: "<p>お元気ですか。</p>",
                    // requiresInput: true,
                    correctAnsw: "げんきです。", // IF CORRECT USE NEXT NODE ELSE GO TO INDEX?
                    nextNode: 2,
                },
                {
                    node: 2,
                    text: "<p>ようかったです</p>",
                    isEnd: true,
                    nextCheckpoint: 1,
                },
            ],
        },
        {
            checkpoint: 1,
            checkpointScripts: [
                {
                    node: 0,
                    text: "<p>いい天気ですね。どうおもいますか。</p>",
                    isEnd: true,
                },
            ],
        },
    ]
}