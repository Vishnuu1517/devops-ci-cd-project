function runPipeline() {

    document.getElementById("status").innerText =
        "Pipeline Running...";

    document.getElementById("logs").innerText =
        "✔ Code Checked Out\n" +
        "✔ Dependencies Installed\n" +
        "✔ Tests Passed\n" +
        "✔ Deployment Successful";

    setTimeout(() => {

        document.getElementById("status").innerText =
            "Pipeline Successful";

    }, 1000);
}