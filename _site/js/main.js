let likeCount = 0;

const likeBtn = document.getElementById('like-btn');

likeBtn.addEventListener("click", () => {
    likeCount++;
    likeBtn.textContent = `♡ いいね（${likeCount}）`;
});

const btn = document.getElementById('read-more-btn');
const moreText = document.querySelector('.more-text');

let isExpanded = false;

btn.addEventListener('click', () => {
    isExpanded = !isExpanded;

    if (isExpanded) {
        moreText.classList.remove("hidden");
        btn.textContent = "閉じる";
    } else {
        moreText.classList.add("hidden");
        btn.textContent = "続きを読む";
    }
});