const state = {
  gold: 100,
  trust: 325,
  completed: 18,
  issued: 7,
  selectedQuestId: 1,
  quests: [
    {
      id: 1,
      title: "新しいLPのファーストビューに率直な感想がほしい",
      issuer: "リナ",
      reward: 10,
      category: "フィードバック",
      deadline: "2026-06-12",
      applicants: 4,
      description: "SaaSのLPを見て、誰向けか、何が得られるか、申込したくなるかを率直に教えてください。",
      comments: ["冒頭コピーが少し抽象的かもしれません。", "料金の目安があると判断しやすいです。"],
    },
    {
      id: 2,
      title: "副業SaaSのユーザーインタビュー30分",
      issuer: "カイト",
      reward: 50,
      category: "インタビュー",
      deadline: "2026-06-15",
      applicants: 2,
      description: "個人でSaaSを作っている方に、課題管理と検証方法について30分ヒアリングしたいです。",
      comments: ["夜の時間帯なら参加できます。"],
    },
    {
      id: 3,
      title: "予約フォームの初回テスト利用と改善コメント",
      issuer: "ミオ",
      reward: 50,
      category: "開発",
      deadline: "2026-06-18",
      applicants: 6,
      description: "予約、確認メール、キャンセル導線まで試して、詰まった点を共有してください。",
      comments: ["スマホから確認します。"],
    },
    {
      id: 4,
      title: "営業資料の構成レビュー",
      issuer: "ユウ",
      reward: 100,
      category: "営業",
      deadline: "2026-06-22",
      applicants: 1,
      description: "BtoB向け営業資料10ページを見て、導入事例と価格ページの説得力をレビューしてください。",
      comments: [],
    },
    {
      id: 5,
      title: "AI活用セミナーの告知文を添削してほしい",
      issuer: "ナオ",
      reward: 15,
      category: "AI",
      deadline: "2026-06-19",
      applicants: 3,
      description: "XとLinkedInに投稿する告知文を、刺さる見出しとCTAに整えたいです。",
      comments: ["対象者をもう少し絞るとよさそうです。"],
    },
  ],
};

const formatter = new Intl.DateTimeFormat("ja-JP", {
  month: "numeric",
  day: "numeric",
});

const goldEl = document.querySelector("[data-gold]");
const trustEl = document.querySelector("[data-trust]");
const rankEl = document.querySelector("[data-rank]");
const completedEl = document.querySelector("[data-completed-count]");
const issuedEl = document.querySelector("[data-issued-count]");
const totalQuestsEl = document.querySelector("[data-total-quests]");
const formNote = document.querySelector("[data-form-note]");
const reviewNote = document.querySelector("[data-review-note]");
const questList = document.querySelector("#questList");
const questDetail = document.querySelector("#questDetail");
const categoryFilter = document.querySelector("#categoryFilter");
const keywordFilter = document.querySelector("#keywordFilter");
const heroCategory = document.querySelector("#heroCategory");
const heroKeyword = document.querySelector("#heroKeyword");
const questForm = document.querySelector("#questForm");
const reviewForm = document.querySelector("#reviewForm");

function getRank(trust) {
  if (trust >= 5000) return "伝説の冒険者";
  if (trust >= 3000) return "マスター冒険者";
  if (trust >= 1500) return "上級冒険者";
  if (trust >= 700) return "熟練冒険者";
  if (trust >= 300) return "一人前冒険者";
  if (trust >= 100) return "駆け出し冒険者";
  return "見習い冒険者";
}

function formatDate(value) {
  return formatter.format(new Date(`${value}T00:00:00`));
}

function syncStats() {
  if (goldEl) goldEl.textContent = state.gold;
  if (trustEl) trustEl.textContent = state.trust;
  if (rankEl) rankEl.textContent = `Trust ${state.trust}`;
  if (completedEl) completedEl.textContent = state.completed;
  if (issuedEl) issuedEl.textContent = state.issued;
  if (totalQuestsEl) totalQuestsEl.textContent = state.quests.length;
  if (formNote) formNote.textContent = `現在の残高: ${state.gold}G / 現在ランク: ${getRank(state.trust)}`;
}

function filteredQuests() {
  const category = categoryFilter?.value || "all";
  const keyword = (keywordFilter?.value || "").trim().toLowerCase();

  return state.quests.filter((quest) => {
    const categoryMatch = category === "all" || quest.category === category;
    const keywordText = `${quest.title} ${quest.issuer} ${quest.description}`.toLowerCase();
    return categoryMatch && (!keyword || keywordText.includes(keyword));
  });
}

function renderQuestList() {
  if (!questList) return;

  const quests = filteredQuests();
  questList.innerHTML = "";

  if (!quests.length) {
    questList.innerHTML = '<article class="quest-card"><div class="quest-main"><h3>該当するクエストがありません</h3><p>カテゴリやキーワードを変更してください。</p></div></article>';
    renderQuestDetail(null);
    return;
  }

  if (!quests.some((quest) => quest.id === state.selectedQuestId)) {
    state.selectedQuestId = quests[0].id;
  }

  quests.forEach((quest) => {
    const card = document.createElement("article");
    card.className = `quest-card${quest.id === state.selectedQuestId ? " is-selected" : ""}`;
    card.tabIndex = 0;
    card.innerHTML = `
      <div class="quest-main">
        <span class="category">${quest.category}</span>
        <h3>${quest.title}</h3>
        <p>発行者: ${quest.issuer} / 締切: ${formatDate(quest.deadline)} / 応募: ${quest.applicants}名</p>
      </div>
      <strong class="gold">${quest.reward}G</strong>
    `;
    card.addEventListener("click", () => selectQuest(quest.id));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectQuest(quest.id);
      }
    });
    questList.append(card);
  });

  renderQuestDetail(state.quests.find((quest) => quest.id === state.selectedQuestId));
}

function renderQuestDetail(quest) {
  if (!questDetail) return;

  if (!quest) {
    questDetail.innerHTML = "";
    return;
  }

  const comments = quest.comments.length
    ? quest.comments.map((comment) => `<div class="comment">${comment}</div>`).join("")
    : '<div class="comment">まだコメントはありません。</div>';

  questDetail.innerHTML = `
    <span class="category">${quest.category}</span>
    <h2>${quest.title}</h2>
    <p>${quest.description}</p>
    <div class="detail-meta">
      <div><strong>発行者</strong><br />${quest.issuer}</div>
      <div><strong>報酬</strong><br />${quest.reward}G</div>
      <div><strong>締切</strong><br />${formatDate(quest.deadline)}</div>
      <div><strong>応募人数</strong><br /><span data-applicants>${quest.applicants}</span>名</div>
    </div>
    <button class="btn btn-primary" type="button" data-apply>このクエストに応募</button>
    <h3>コメント</h3>
    ${comments}
  `;

  questDetail.querySelector("[data-apply]")?.addEventListener("click", () => {
    quest.applicants += 1;
    renderQuestList();
  });
}

function selectQuest(id) {
  state.selectedQuestId = id;
  renderQuestList();
}

questForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(questForm);
  const reward = Number(data.get("reward"));

  if (reward > state.gold) {
    formNote.textContent = `残高不足です。現在のGoldは${state.gold}Gです。`;
    return;
  }

  state.gold -= reward;
  state.issued += 1;
  const quest = {
    id: Date.now(),
    title: data.get("title"),
    issuer: "アキラ",
    reward,
    category: data.get("category"),
    deadline: data.get("deadline"),
    applicants: 0,
    description: data.get("description"),
    comments: ["発行されたばかりのクエストです。"],
  };

  state.quests.unshift(quest);
  state.selectedQuestId = quest.id;
  syncStats();
  renderQuestList();
  formNote.textContent = `${reward}Gを確保してクエストを発行しました。`;
});

reviewForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const reward = Number(document.querySelector("#completedQuest").value);
  const trustBonus = Number(document.querySelector("#rating").value);
  const gainedTrust = 5 + trustBonus;

  state.gold += reward;
  state.trust += gainedTrust;
  state.completed += 1;
  syncStats();
  reviewNote.textContent = `承認完了。${reward}Gと${gainedTrust} Trustを付与しました。現在ランク: ${getRank(state.trust)}`;
});

categoryFilter?.addEventListener("change", renderQuestList);
keywordFilter?.addEventListener("input", renderQuestList);

heroCategory?.addEventListener("change", () => {
  if (categoryFilter) {
    categoryFilter.value = heroCategory.value;
    renderQuestList();
  }
});

heroKeyword?.closest("form")?.addEventListener("submit", () => {
  if (keywordFilter && heroKeyword) keywordFilter.value = heroKeyword.value;
  if (categoryFilter && heroCategory) categoryFilter.value = heroCategory.value;
  renderQuestList();
});

document.querySelectorAll("[data-category-link]").forEach((link) => {
  link.addEventListener("click", () => {
    if (categoryFilter) {
      categoryFilter.value = link.dataset.categoryLink;
      renderQuestList();
    }
  });
});

syncStats();
renderQuestList();
