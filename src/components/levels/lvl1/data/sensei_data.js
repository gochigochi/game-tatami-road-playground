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
                    text: "おはよう。lfkajsdf ;dslfj a;sldfj a;sdljfk as;ldfk a;sldfj kj hlkjh lkjh kjh lkjh kljh kjh klh kljh",
                    nextNode: 1,
                },
                {
                    node: 1,
                    text: "おげんきですか。",
                    requiresInput: true,
                    correctAnsw: "げんきです。", // IF CORRECT USE NEXT NODE ELSE GO TO INDEX?
                    nextNode: 2,
                },
                {
                    node: 2,
                    text: "ようかったです・",
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
                    text: "いい天気ですね。<br>どうおもいますか。",
                    isEnd: true,
                },
            ],
        },
    ]
}