const state = {
  account: {
    name: "アキラ",
    initials: "A",
    headline: "個人開発者 / AIツール開発 / BtoB SaaS",
    summary: "AIプロダクトの初期検証、BtoB SaaSのオンボーディング改善、開発者向けUXレビューが得意です。",
    businessStage: "MVP検証中",
    strengths: ["AI実装", "UXレビュー", "BtoB SaaS", "オンボーディング", "技術検証"],
    interests: ["生成AI", "業務効率化", "開発者体験", "顧客理解", "プロダクト改善"],
    preferredCategories: ["AI", "フィードバック", "開発", "インタビュー"],
    preferredTags: ["AI", "BtoB SaaS", "UXレビュー", "オンボーディング", "MVP検証", "開発者体験"],
  },
  questTaxonomy: {
    フィードバック: ["UXレビュー", "オンボーディング", "導線改善", "MVP検証", "初回体験"],
    インタビュー: ["顧客理解", "課題検証", "ユーザー調査", "BtoB SaaS"],
    デザイン: ["UI改善", "情報設計", "ワイヤーフレーム", "ブランド"],
    AI: ["生成AI", "プロンプト", "AI導入", "自動化", "AIツール"],
    マーケティング: ["告知文", "SNS", "コピー", "リード獲得"],
    開発: ["動作確認", "技術レビュー", "API", "開発者体験"],
    営業: ["営業資料", "提案文", "価格設計", "商談準備"],
    その他: ["壁打ち", "リサーチ", "運用相談"],
  },
  gold: 100,
  trust: 325,
  completed: 18,
  issued: 7,
  selectedQuestId: 1,
  selectedIssuer: null,
  missions: [false, false, false],
  streak: 5,
  weeklyProgress: 1,
  issuerProfiles: {
    リナ: {
      initials: "R",
      headline: "BtoB SaaS / UX改善 / オンボーディング",
      summary: "SaaSの初回体験改善に取り組んでいます。ユーザーが迷う導線や、言葉の分かりにくさを早く見つけたいです。",
      trust: 420,
      completed: 24,
      issued: 12,
      skills: ["UXレビュー", "情報設計", "BtoB SaaS"],
      interests: ["オンボーディング", "導線改善", "MVP検証"],
    },
    カイト: {
      initials: "K",
      headline: "個人SaaS開発 / 顧客理解 / 課題検証",
      summary: "副業でSaaSを作りながら、ユーザーインタビューと検証設計を重視しています。率直な課題共有を歓迎します。",
      trust: 360,
      completed: 19,
      issued: 9,
      skills: ["顧客理解", "BtoB SaaS", "インタビュー"],
      interests: ["課題検証", "MVP検証", "価格設計"],
    },
    ミオ: {
      initials: "M",
      headline: "予約サービス運営 / フォーム改善 / 動作確認",
      summary: "小規模事業者向けの予約導線を改善しています。スマホでの使いやすさと確認メール周りを特に見ています。",
      trust: 510,
      completed: 31,
      issued: 15,
      skills: ["動作確認", "UXレビュー", "フォーム改善"],
      interests: ["スマホUX", "自動返信", "運用改善"],
    },
    ユウ: {
      initials: "Y",
      headline: "BtoB営業 / 提案資料 / 価格設計",
      summary: "営業資料と提案文の改善が主な関心です。導入前の不安を減らす構成づくりを試しています。",
      trust: 285,
      completed: 16,
      issued: 8,
      skills: ["営業資料", "提案文", "BtoB SaaS"],
      interests: ["商談準備", "導入事例", "価格設計"],
    },
    ナオ: {
      initials: "N",
      headline: "生成AI活用 / 告知文 / セミナー運営",
      summary: "AI活用の学習コンテンツを作っています。告知文、LP、セミナー導線の改善に協力してくれる方を探しています。",
      trust: 335,
      completed: 21,
      issued: 10,
      skills: ["生成AI", "告知文", "SNS"],
      interests: ["AI導入", "コピー", "リード獲得"],
    },
  },
  quests: [
    {
      id: 1,
      type: "report",
      status: "open",
      title: "新しいオンボーディング画面に率直な感想がほしい",
      issuer: "リナ",
      reward: 10,
      category: "フィードバック",
      tags: ["UXレビュー", "オンボーディング", "BtoB SaaS", "MVP検証"],
      skills: ["UXレビュー", "顧客理解"],
      deadline: "2026-06-12",
      applicants: 4,
      capacity: 6,
      approvedReports: 3,
      description: "SaaSの初回利用画面を見て、誰向けか、何が得られるか、次の操作に進みたくなるかを率直に教えてください。",
      comments: ["冒頭コピーが少し抽象的かもしれません。", "料金の目安があると判断しやすいです。"],
    },
    {
      id: 2,
      type: "recruiting",
      status: "open",
      title: "副業SaaSのユーザーインタビュー30分",
      issuer: "カイト",
      reward: 50,
      category: "インタビュー",
      tags: ["BtoB SaaS", "顧客理解", "課題検証", "MVP検証"],
      skills: ["顧客理解", "BtoB SaaS"],
      deadline: "2026-06-15",
      applicants: 2,
      capacity: 3,
      approvedReports: 0,
      description: "個人でSaaSを作っている方に、課題管理と検証方法について30分ヒアリングしたいです。",
      comments: ["夜の時間帯なら参加できます。"],
    },
    {
      id: 3,
      type: "report",
      status: "open",
      title: "予約フォームの初回テスト利用と改善コメント",
      issuer: "ミオ",
      reward: 50,
      category: "開発",
      tags: ["動作確認", "UXレビュー", "フォーム改善"],
      skills: ["技術検証", "UXレビュー"],
      deadline: "2026-06-18",
      applicants: 6,
      capacity: 8,
      approvedReports: 5,
      description: "予約、確認メール、キャンセル導線まで試して、詰まった点を共有してください。",
      comments: ["スマホから確認します。"],
    },
    {
      id: 4,
      type: "recruiting",
      status: "open",
      title: "営業資料の構成レビュー",
      issuer: "ユウ",
      reward: 100,
      category: "営業",
      tags: ["営業資料", "BtoB SaaS", "提案文"],
      skills: ["BtoB SaaS", "顧客理解"],
      deadline: "2026-06-22",
      applicants: 1,
      capacity: 2,
      approvedReports: 0,
      description: "BtoB向け営業資料10ページを見て、導入事例と価格ページの説得力をレビューしてください。",
      comments: [],
    },
    {
      id: 5,
      type: "report",
      status: "open",
      title: "AI活用セミナーの告知文を添削してほしい",
      issuer: "ナオ",
      reward: 15,
      category: "AI",
      tags: ["生成AI", "告知文", "SNS", "AI導入"],
      skills: ["AI実装", "コピー"],
      deadline: "2026-06-19",
      applicants: 3,
      capacity: 5,
      approvedReports: 2,
      description: "XとLinkedInに投稿する告知文を、刺さる見出しとCTAに整えたいです。",
      comments: ["対象者をもう少し絞るとよさそうです。"],
    },
  ],
};

const QUEST_TYPES = {
  recruiting: {
    label: "応募型",
    metricLabel: "応募",
    actionLabel: "このクエストに応募",
    closedLabel: "募集停止",
    guidance: "提案した冒険者とインタビューや面談の日程を約束して進めるクエストです。募集人数に達すると応募受付を停止します。",
  },
  report: {
    label: "完了報告型",
    metricLabel: "報告",
    actionLabel: "エビデンス付きで完了報告",
    closedLabel: "クローズ",
    guidance: "アプリのダウンロードやテスト利用など、スクショ画面のエビデンスとフィードバックを送るクエストです。承認数が募集人数に達するとクローズします。",
  },
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
const completedQuestEl = document.querySelector("#completedQuest");
const recommendedQuestsEl = document.querySelector("#recommendedQuests");
const accountInitialsEl = document.querySelector("[data-account-initials]");
const accountNameEl = document.querySelector("[data-account-name]");
const accountHeadlineEl = document.querySelector("[data-account-headline]");
const profileSummaryEl = document.querySelector("[data-profile-summary]");
const profileMetaEl = document.querySelector("[data-profile-meta]");
const profileSkillsEl = document.querySelector("[data-profile-skills]");
const profileInterestsEl = document.querySelector("[data-profile-interests]");
const profileCategoriesEl = document.querySelector("[data-profile-categories]");
const matchSignalsEl = document.querySelector("[data-match-signals]");
const categoryMatrixEl = document.querySelector("[data-category-matrix]");

function normalizeList(values) {
  if (!values) return [];
  if (Array.isArray(values)) return values.map((value) => String(value).trim()).filter(Boolean);
  return String(values)
    .split(/[、,]/)
    .map((value) => value.trim())
    .filter(Boolean);
}

function unique(values) {
  return [...new Set(normalizeList(values))];
}

function overlap(left, right) {
  const rightSet = new Set(normalizeList(right));
  return normalizeList(left).filter((value) => rightSet.has(value));
}

function createChips(values, modifier = "") {
  return normalizeList(values)
    .map((value) => `<span class="tag-chip${modifier ? ` ${modifier}` : ""}">${value}</span>`)
    .join("");
}

function getQuestType(quest) {
  return QUEST_TYPES[quest.type] || QUEST_TYPES.recruiting;
}

function getQuestCapacity(quest) {
  return Math.max(1, Number(quest.capacity) || 1);
}

function getQuestProgress(quest) {
  return quest.type === "report" ? Number(quest.approvedReports) || 0 : Number(quest.applicants) || 0;
}

function isQuestClosed(quest) {
  return quest.status === "closed" || getQuestProgress(quest) >= getQuestCapacity(quest);
}

function updateQuestStatus(quest) {
  if (isQuestClosed(quest)) quest.status = "closed";
}

function getQuestStatusText(quest) {
  const type = getQuestType(quest);
  const progress = Math.min(getQuestProgress(quest), getQuestCapacity(quest));
  return `${type.metricLabel}: ${progress}/${getQuestCapacity(quest)}名`;
}

function getQuestProgressPercent(quest) {
  return Math.min(100, Math.round((getQuestProgress(quest) / getQuestCapacity(quest)) * 100));
}

function getQuestActionHint(quest) {
  if (quest.type === "report") return "スクショとフィードバックで完了報告";
  return "発行者と日程・進め方を約束";
}

function getIssuerProfile(name) {
  if (name === state.account.name) {
    return {
      initials: state.account.initials,
      headline: state.account.headline,
      summary: state.account.summary,
      trust: state.trust,
      completed: state.completed,
      issued: state.issued,
      skills: state.account.strengths,
      interests: state.account.interests,
    };
  }

  return state.issuerProfiles[name] || null;
}

function renderIssuerButton(name) {
  return `<button class="issuer-link" type="button" data-issuer="${name}" aria-label="${name}のプロフィールを表示">${name}</button>`;
}

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

function renderAccountProfile() {
  const account = state.account;

  if (accountInitialsEl) accountInitialsEl.textContent = account.initials;
  if (accountNameEl) accountNameEl.textContent = account.name;
  if (accountHeadlineEl) accountHeadlineEl.textContent = account.headline;
  if (profileSummaryEl) profileSummaryEl.textContent = account.summary;

  if (profileMetaEl) {
    profileMetaEl.innerHTML = `
      <div><dt>事業フェーズ</dt><dd>${account.businessStage}</dd></div>
    `;
  }

  if (profileSkillsEl) profileSkillsEl.innerHTML = createChips(account.strengths, "is-skill");
  if (profileInterestsEl) profileInterestsEl.innerHTML = createChips(account.interests);
  if (profileCategoriesEl) profileCategoriesEl.innerHTML = createChips(account.preferredCategories, "is-category");

  if (matchSignalsEl) {
    matchSignalsEl.innerHTML = [
      ["優先カテゴリ", account.preferredCategories.join(" / ")],
      ["強いタグ", account.preferredTags.slice(0, 4).join(" / ")],
      ["受けやすい依頼", "レビュー・検証・30分ヒアリング"],
    ]
      .map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`)
      .join("");
  }

  if (categoryMatrixEl) {
    categoryMatrixEl.innerHTML = Object.entries(state.questTaxonomy)
      .map(([category, tags]) => {
        const isPreferred = account.preferredCategories.includes(category);
        const matchedTags = overlap(tags, account.preferredTags);
        return `
          <article class="${isPreferred ? "is-preferred" : ""}">
            <strong>${category}</strong>
            <span>${isPreferred ? "優先" : "通常"} / ${matchedTags.length}タグ一致</span>
          </article>
        `;
      })
      .join("");
  }
}

function scoreQuest(quest) {
  const account = state.account;
  const tagMatches = overlap(quest.tags, account.preferredTags);
  const skillMatches = overlap(quest.skills, account.strengths);
  const categoryScore = account.preferredCategories.includes(quest.category) ? 36 : 0;
  const tagScore = Math.min(tagMatches.length * 12, 36);
  const skillScore = Math.min(skillMatches.length * 14, 28);
  const rewardScore = quest.reward >= 50 ? 8 : quest.reward >= 20 ? 5 : 2;
  const score = Math.min(100, categoryScore + tagScore + skillScore + rewardScore);

  return {
    score,
    tagMatches,
    skillMatches,
    reasons: unique([quest.category, ...tagMatches, ...skillMatches]).slice(0, 4),
  };
}

function renderRecommendedQuests() {
  if (!recommendedQuestsEl) return;

  const recommended = state.quests
    .filter((quest) => !isQuestClosed(quest))
    .map((quest) => ({ quest, match: scoreQuest(quest) }))
    .sort((a, b) => b.match.score - a.match.score || b.quest.reward - a.quest.reward)
    .slice(0, 3);

  recommendedQuestsEl.innerHTML = recommended
    .map(({ quest, match }) => {
      const tags = createChips(quest.tags.slice(0, 4));
      const reason = match.reasons.length ? match.reasons.join(" / ") : "カテゴリと依頼内容";
      return `
        <article class="rec-quest-card">
          <div class="rec-quest-top">
            <span class="category">${quest.category}</span>
            <span class="rec-match-badge"><i data-lucide="sparkles"></i> ${match.score}% match</span>
          </div>
          <h3>${quest.title}</h3>
          <p>${quest.description}</p>
          <div class="rec-tags">${tags}</div>
          <div class="match-reason"><span>一致理由</span><strong>${reason}</strong></div>
          <div class="rec-quest-foot">
            <span class="rec-reward"><i data-lucide="coins"></i> ${quest.reward}G</span>
            <span class="rec-trust"><i data-lucide="shield-check"></i> +5 Trust</span>
            <a class="btn btn-primary btn-sm" href="quests.html">詳細へ</a>
          </div>
        </article>
      `;
    })
    .join("");

  if (window.lucide) lucide.createIcons();
}

function syncStats() {
  if (goldEl) goldEl.textContent = state.gold;
  if (trustEl) trustEl.textContent = state.trust;
  if (rankEl) rankEl.textContent = `Trust ${state.trust}`;
  if (completedEl) completedEl.textContent = state.completed;
  if (issuedEl) issuedEl.textContent = state.issued;
  if (totalQuestsEl) totalQuestsEl.textContent = state.quests.length;
  if (formNote) formNote.textContent = `現在の残高: ${state.gold}G / 現在ランク: ${getRank(state.trust)}`;
  renderRecommendedQuests();
  renderReviewOptions();
}

function renderReviewOptions() {
  if (!completedQuestEl) return;

  const previousValue = completedQuestEl.value;
  const approvableQuests = state.quests.filter((quest) => {
    if (quest.type === "report") return !isQuestClosed(quest);
    return Number(quest.applicants) > 0;
  });

  completedQuestEl.innerHTML = approvableQuests
    .map((quest) => {
      const type = getQuestType(quest);
      return `<option value="${quest.id}">${quest.title} / ${type.label} / ${quest.reward}G / ${getQuestStatusText(quest)}</option>`;
    })
    .join("");

  if (approvableQuests.some((quest) => String(quest.id) === previousValue)) {
    completedQuestEl.value = previousValue;
  }

  if (reviewNote && !approvableQuests.length) {
    reviewNote.textContent = "承認待ちのクエストはありません。";
  }
}

function filteredQuests() {
  const category = categoryFilter?.value || "all";
  const keyword = (keywordFilter?.value || "").trim().toLowerCase();

  return state.quests.filter((quest) => {
    const categoryMatch = category === "all" || quest.category === category;
    const keywordText = `${quest.title} ${quest.issuer} ${quest.description} ${(quest.tags || []).join(" ")} ${(quest.skills || []).join(" ")}`.toLowerCase();
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
    updateQuestStatus(quest);
    const type = getQuestType(quest);
    const closed = isQuestClosed(quest);
    const progress = Math.min(getQuestProgress(quest), getQuestCapacity(quest));
    const progressPercent = getQuestProgressPercent(quest);
    const card = document.createElement("article");
    card.className = `quest-card${quest.id === state.selectedQuestId ? " is-selected" : ""}${closed ? " is-closed" : ""}`;
    card.tabIndex = 0;
    card.innerHTML = `
      <div class="quest-main">
        <div class="quest-card-top">
          <div class="quest-card-labels">
            <span class="category">${quest.category}</span>
            <span class="quest-type-badge">${type.label}</span>
            ${closed ? `<span class="quest-status-badge">${type.closedLabel}</span>` : ""}
          </div>
          <strong class="gold">${quest.reward}G</strong>
        </div>
        <h3>${quest.title}</h3>
        <p class="quest-card-desc">${quest.description}</p>
        <div class="quest-card-meta">
          <span>発行者: ${renderIssuerButton(quest.issuer)}</span>
          <span>締切: ${formatDate(quest.deadline)}</span>
          <span>${getQuestActionHint(quest)}</span>
        </div>
        <div class="quest-progress" aria-label="${getQuestStatusText(quest)}">
          <div class="quest-progress-head">
            <span>${type.metricLabel}状況</span>
            <strong>${progress}/${getQuestCapacity(quest)}名</strong>
          </div>
          <div class="quest-progress-track"><span style="width: ${progressPercent}%"></span></div>
        </div>
        <div class="quest-tags">${createChips(quest.tags || [])}</div>
      </div>
    `;
    const issuerButton = card.querySelector("[data-issuer]");
    issuerButton?.addEventListener("click", (event) => {
      event.stopPropagation();
      showIssuerProfile(quest.issuer, quest.id);
    });
    issuerButton?.addEventListener("keydown", (event) => {
      event.stopPropagation();
    });
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
  const issuerProfile = state.selectedIssuer === quest.issuer ? renderIssuerProfile(quest.issuer) : "";
  updateQuestStatus(quest);
  const type = getQuestType(quest);
  const closed = isQuestClosed(quest);
  const progress = Math.min(getQuestProgress(quest), getQuestCapacity(quest));
  const progressPercent = getQuestProgressPercent(quest);
  const actionArea =
    quest.type === "report"
      ? `
        <div class="quest-action-panel">
          <strong>${closed ? type.closedLabel : type.actionLabel}</strong>
          <span>${closed ? "このクエストは受付を終了しています。" : getQuestActionHint(quest)}</span>
        </div>
        <div class="report-evidence-box">
          <label for="questEvidence">スクショ画面のエビデンス</label>
          <input id="questEvidence" type="file" accept="image/*" data-evidence ${closed ? "disabled" : ""} />
          <label for="questReportComment">完了報告</label>
          <textarea id="questReportComment" rows="4" data-report-comment ${closed ? "disabled" : ""} placeholder="試した内容、気づいた点、再現手順など"></textarea>
        </div>
        <button class="btn btn-primary" type="button" data-apply ${closed ? "disabled" : ""}>${closed ? type.closedLabel : type.actionLabel}</button>
      `
      : `
        <div class="quest-action-panel">
          <strong>${closed ? type.closedLabel : type.actionLabel}</strong>
          <span>${closed ? "募集人数に達したため、応募受付は停止されています。" : getQuestActionHint(quest)}</span>
        </div>
        <button class="btn btn-primary" type="button" data-apply ${closed ? "disabled" : ""}>${closed ? type.closedLabel : type.actionLabel}</button>
      `;

  questDetail.innerHTML = `
    <div class="quest-detail-head">
      <div class="quest-card-labels">
        <span class="category">${quest.category}</span>
        <span class="quest-type-badge">${type.label}</span>
        ${closed ? `<span class="quest-status-badge">${type.closedLabel}</span>` : ""}
      </div>
      <strong class="gold detail-gold">${quest.reward}G</strong>
    </div>
    <h2>${quest.title}</h2>
    <p class="quest-detail-desc">${quest.description}</p>
    <div class="quest-tags">${createChips(quest.tags || [])}</div>
    <div class="quest-progress detail-progress" aria-label="${getQuestStatusText(quest)}">
      <div class="quest-progress-head">
        <span>${type.metricLabel}状況</span>
        <strong>${progress}/${getQuestCapacity(quest)}名</strong>
      </div>
      <div class="quest-progress-track"><span style="width: ${progressPercent}%"></span></div>
    </div>
    <div class="detail-meta">
      <div><strong>発行者</strong><br />${renderIssuerButton(quest.issuer)}</div>
      <div><strong>報酬</strong><br />${quest.reward}G</div>
      <div><strong>締切</strong><br />${formatDate(quest.deadline)}</div>
      <div><strong>進め方</strong><br />${getQuestActionHint(quest)}</div>
    </div>
    <div class="quest-flow-note">${type.guidance}</div>
    ${issuerProfile}
    ${actionArea}
    <h3>コメント</h3>
    ${comments}
  `;

  questDetail.querySelector("[data-issuer]")?.addEventListener("click", () => {
    showIssuerProfile(quest.issuer, quest.id);
  });
  questDetail.querySelector("[data-apply]")?.addEventListener("click", () => {
    if (isQuestClosed(quest)) return;
    if (quest.type === "report") {
      const evidence = questDetail.querySelector("[data-evidence]");
      if (!evidence?.files?.length) {
        showToast("スクショ画面のエビデンスを添付してください。");
        return;
      }
      quest.applicants += 1;
      quest.comments.unshift("スクショ付きの完了報告が送信されました。承認待ちです。");
      showToast("完了報告を送信しました。発行者の承認後にクローズ判定されます。");
      renderQuestList();
      return;
    }
    quest.applicants += 1;
    updateQuestStatus(quest);
    showToast(isQuestClosed(quest) ? "募集人数に達したため、応募受付を停止しました。" : "応募しました。発行者との約束を進めてください。");
    renderQuestList();
  });
}

function selectQuest(id) {
  state.selectedQuestId = id;
  state.selectedIssuer = null;
  renderQuestList();
}

function showIssuerProfile(name, questId = state.selectedQuestId) {
  state.selectedQuestId = questId;
  state.selectedIssuer = name;
  renderQuestList();
}

function renderIssuerProfile(name) {
  const profile = getIssuerProfile(name);

  if (!profile) {
    return `
      <section class="issuer-profile-card">
        <div class="issuer-profile-head">
          <div class="issuer-avatar">${name.slice(0, 1)}</div>
          <div>
            <span class="eyebrow">Issuer Profile</span>
            <h3>${name}</h3>
          </div>
        </div>
        <p>この発行者のプロフィール情報はまだ登録されていません。</p>
      </section>
    `;
  }

  return `
    <section class="issuer-profile-card">
      <div class="issuer-profile-head">
        <div class="issuer-avatar">${profile.initials}</div>
        <div>
          <span class="eyebrow">Issuer Profile</span>
          <h3>${name}</h3>
          <p>${profile.headline}</p>
        </div>
      </div>
      <p>${profile.summary}</p>
      <dl class="issuer-profile-stats">
        <div><dt>Trust</dt><dd>${profile.trust}</dd></div>
        <div><dt>完了</dt><dd>${profile.completed}</dd></div>
        <div><dt>発行</dt><dd>${profile.issued}</dd></div>
      </dl>
      <div class="profile-chip-block">
        <strong>得意なこと</strong>
        <div class="chip-list">${createChips(profile.skills, "is-skill")}</div>
      </div>
      <div class="profile-chip-block">
        <strong>関心領域</strong>
        <div class="chip-list">${createChips(profile.interests)}</div>
      </div>
    </section>
  `;
}

questForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(questForm);
  const reward = Number(data.get("reward"));
  const capacity = Math.max(1, Number(data.get("capacity")) || 1);
  const type = data.get("type") === "recruiting" ? "recruiting" : "report";

  if (reward > state.gold) {
    formNote.textContent = `残高不足です。現在のGoldは${state.gold}Gです。`;
    return;
  }

  state.gold -= reward;
  state.issued += 1;
  const selectedCategory = data.get("category");
  const tags = unique([...(state.questTaxonomy[selectedCategory] || []).slice(0, 2), ...normalizeList(data.get("tags"))]);
  const quest = {
    id: Date.now(),
    type,
    status: "open",
    title: data.get("title"),
    issuer: state.account.name,
    reward,
    category: selectedCategory,
    tags,
    skills: overlap(tags, state.account.strengths),
    deadline: data.get("deadline"),
    applicants: 0,
    capacity,
    approvedReports: 0,
    description: data.get("description"),
    comments: ["発行されたばかりのクエストです。"],
  };

  state.quests.unshift(quest);
  state.selectedQuestId = quest.id;
  state.selectedIssuer = null;
  syncStats();
  renderQuestList();
  renderAccountProfile();
  formNote.textContent = `${reward}Gを確保して${getQuestType(quest).label}クエストを発行しました。`;
});

reviewForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const quest = state.quests.find((item) => String(item.id) === String(completedQuestEl?.value));
  if (!quest) {
    reviewNote.textContent = "承認できるクエストがありません。";
    return;
  }

  const reward = Number(quest.reward);
  const trustBonus = Number(document.querySelector("#rating").value);
  const gainedTrust = 5 + trustBonus;

  state.gold += reward;
  state.trust += gainedTrust;
  state.completed += 1;
  if (quest.type === "report") {
    quest.approvedReports = Math.min(getQuestCapacity(quest), (Number(quest.approvedReports) || 0) + 1);
  }
  updateQuestStatus(quest);

  // 承認 = 他のソロプレナーへのサポート → 週次チャレンジ進捗
  state.weeklyProgress = Math.min(3, state.weeklyProgress + 1);
  updateWeeklyChallenge();

  syncStats();
  renderQuestList();
  const closeMessage = isQuestClosed(quest)
    ? quest.type === "report"
      ? "承認数が募集人数に達したため、完了報告型クエストをクローズしました。"
      : "募集人数に達している応募型クエストです。"
    : "承認待ちを更新しました。";
  reviewNote.textContent = `承認完了。${reward}Gと${gainedTrust} Trustを付与しました。${closeMessage} 現在ランク: ${getRank(state.trust)}`;
});

categoryFilter?.addEventListener("change", renderQuestList);
keywordFilter?.addEventListener("input", renderQuestList);

/* ============================================================
   GAMIFICATION — Daily Missions
   ============================================================ */
const MISSION_REWARDS = [
  { trust: 5, gold: 0, label: "+5 Trust" },
  { trust: 8, gold: 3, label: "+8 Trust & +3G" },
  { trust: 3, gold: 0, label: "+3 Trust" },
];

function updateMissionUI() {
  const doneCount = state.missions.filter(Boolean).length;

  document.querySelectorAll("[data-mission-item]").forEach((item) => {
    const index = Number(item.dataset.missionItem);
    const isDone = state.missions[index];
    const btn = item.querySelector("[data-mission-toggle]");
    item.classList.toggle("is-done", isDone);
    if (btn) btn.setAttribute("aria-pressed", isDone ? "true" : "false");
  });

  const missionsDoneEl = document.querySelector("[data-missions-done]");
  if (missionsDoneEl) missionsDoneEl.textContent = doneCount;

  const missionBar = document.querySelector("[data-mission-bar]");
  if (missionBar) missionBar.style.width = `${(doneCount / 3) * 100}%`;
}

function toggleMission(index) {
  if (state.missions[index]) return;
  state.missions[index] = true;

  const reward = MISSION_REWARDS[index];
  state.trust += reward.trust;
  state.gold += reward.gold;

  const allDone = state.missions.every(Boolean);
  if (allDone) {
    state.trust += 5;
  }

  updateMissionUI();
  syncStats();

  if (allDone) {
    showToast("全ミッション達成。ボーナスTrust +5を獲得しました。");
  } else {
    showToast(`ミッション達成！ ${reward.label} 獲得`);
  }
}

document.querySelectorAll("[data-mission-toggle]").forEach((btn) => {
  btn.addEventListener("click", () => toggleMission(Number(btn.dataset.missionToggle)));
});

/* ============================================================
   GAMIFICATION — Weekly Challenge
   ============================================================ */
function updateWeeklyChallenge() {
  const bar = document.querySelector("[data-wc-bar]");
  const count = document.querySelector("[data-wc-count]");
  if (bar) bar.style.width = `${(state.weeklyProgress / 3) * 100}%`;
  if (count) count.textContent = state.weeklyProgress;

  if (state.weeklyProgress >= 3) {
    showToast("週次チャレンジ達成。Gold +30・Trust +25・限定称号を獲得しました。");
    state.gold += 30;
    state.trust += 25;
    state.weeklyProgress = 0;
    syncStats();
    setTimeout(updateWeeklyChallenge, 100);
  }
}

/* ============================================================
   GAMIFICATION — Toast notification
   ============================================================ */
function showToast(message) {
  let toast = document.querySelector(".guild-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "guild-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => toast.classList.remove("is-visible"), 3600);
}

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

renderAccountProfile();
syncStats();
renderQuestList();
updateMissionUI();
updateWeeklyChallenge();
