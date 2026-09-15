


async function deidentifyText(text) {

    const requestOptions = {
        headers: {
            "Content-Type": "application/json"
        },
        signal: AbortSignal.timeout(30_000)
    };

    // Step 1: Ask Presidio Analyzer to find PII
    const analyzeResponse = await fetch(
        "http://localhost:5002/analyze",
        {
            ...requestOptions,
            method: "POST",

            body: JSON.stringify({
                text: text,
                language: "en"
            })
        }
    );

    if (!analyzeResponse.ok) {
        throw new Error(
            `Presidio Analyzer failed with HTTP ${analyzeResponse.status}`
        );
    }

    const analyzerResults =
        await analyzeResponse.json();


    // Step 2: Send detected PII to Anonymizer
    const anonymizeResponse = await fetch(
        "http://localhost:5001/anonymize",
        {
            ...requestOptions,
            method: "POST",

            body: JSON.stringify({

                text: text,

                analyzer_results:
                    analyzerResults,

                anonymizers: {

                    DEFAULT: {
                        type: "replace"
                    }

                }

            })
        }
    );


    if (!anonymizeResponse.ok) {
        throw new Error(
            `Presidio Anonymizer failed with HTTP ${anonymizeResponse.status}`
        );
    }


    const anonymizedData =
        await anonymizeResponse.json();


    return anonymizedData.text;
}


module.exports = {
    deidentifyText
};