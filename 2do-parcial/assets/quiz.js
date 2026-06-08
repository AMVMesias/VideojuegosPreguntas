(() => {
    const questions = Array.from(document.querySelectorAll(".question"));
    const scoreEl = document.getElementById("score");
    const totalEl = document.getElementById("total");
    const finalResult = document.getElementById("finalResult");
    const finalScore = document.getElementById("finalScore");
    const finalMsg = document.getElementById("finalMsg");

    let score = 0;
    let answered = 0;
    const totalMax = questions.reduce((sum, question) => sum + Number(question.dataset.points || 1), 0);

    if (totalEl) {
        totalEl.textContent = String(totalMax);
    }

    questions.forEach((question) => {
        const points = Number(question.dataset.points || 1);
        const feedback = question.querySelector(".feedback");

        question.querySelectorAll(".opt-btn").forEach((button) => {
            button.addEventListener("click", () => {
                if (button.disabled) return;

                const correct = question.dataset.correct;
                const picked = button.dataset.opt;
                const correctButton = question.querySelector(`.opt-btn[data-opt="${correct}"]`);
                const isCorrect = picked === correct;

                question.querySelectorAll(".opt-btn").forEach((item) => {
                    item.disabled = true;
                });

                button.classList.add(isCorrect ? "correct" : "incorrect");
                if (!isCorrect && correctButton) {
                    correctButton.classList.add("correct");
                }

                finishQuestion(question, feedback, isCorrect, points, getAnswerText(correctButton));
            });
        });

        question.querySelectorAll(".vf-btn").forEach((button) => {
            button.addEventListener("click", () => {
                if (button.disabled) return;

                const correct = question.dataset.correct === "true";
                const picked = button.dataset.vf === "true";
                const correctButton = question.querySelector(`.vf-btn[data-vf="${correct}"]`);
                const isCorrect = picked === correct;

                question.querySelectorAll(".vf-btn").forEach((item) => {
                    item.disabled = true;
                });

                button.classList.add(isCorrect ? "correct" : "incorrect");
                if (!isCorrect && correctButton) {
                    correctButton.classList.add("correct");
                }

                finishQuestion(question, feedback, isCorrect, points, correct ? "Verdadero" : "Falso");
            });
        });
    });

    function finishQuestion(question, feedback, isCorrect, points, correctText) {
        if (question.dataset.done === "true") return;

        question.dataset.done = "true";
        answered += 1;

        if (isCorrect) {
            score += points;
        }

        if (scoreEl) {
            scoreEl.textContent = String(score);
        }

        if (feedback) {
            feedback.className = `feedback ${isCorrect ? "ok" : "bad"}`;
            feedback.innerHTML = isCorrect
                ? `<strong>Correcto. +${points} punto${points === 1 ? "" : "s"}</strong>`
                : `<strong>Incorrecto.</strong>Respuesta correcta: ${escapeHtml(correctText || "revisa la opción marcada en verde")}.`;
            feedback.style.display = "block";
        }

        checkFinal();
    }

    function checkFinal() {
        if (!finalResult || answered < questions.length) return;

        const percent = totalMax ? Math.round((score / totalMax) * 100) : 0;
        finalScore.textContent = `${score} / ${totalMax} (${percent}%)`;
        finalMsg.textContent = percent >= 80
            ? "Excelente. Este bloque está muy bien dominado."
            : percent >= 55
                ? "Vas bien. Repasa las respuestas marcadas en verde para cerrar dudas."
                : "Conviene repasar el material base y volver a intentar este bloque.";
        finalResult.style.display = "block";
        finalResult.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    function getAnswerText(button) {
        if (!button) return "";
        return button.textContent.replace(/^[a-d]\)\s*/i, "").trim();
    }

    function escapeHtml(value) {
        return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }
})();
