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

const supabaseConfig = window.SG_SUPABASE || {};
const supabaseClient =
  supabaseConfig.url && supabaseConfig.anonKey && window.supabase
    ? window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey)
    : null;

const remote = {
  enabled: Boolean(supabaseClient),
  user: null,
  profile: null,
  pendingSubmissions: [],
};

const goldEls = document.querySelectorAll("[data-gold]");
const trustEls = document.querySelectorAll("[data-trust]");
const rankEls = document.querySelectorAll("[data-rank]");
const completedEls = document.querySelectorAll("[data-completed-count]");
const issuedEls = document.querySelectorAll("[data-issued-count]");
const totalQuestEls = document.querySelectorAll("[data-total-quests]");
const formNote = document.querySelector("[data-form-note]");
const reviewNote = document.querySelector("[data-review-note]");
const questList = document.querySelector("#questList");
const questDetail = document.querySelector("#questDetail");
const latestQuestSlider = document.querySelector("#latestQuestSlider");
const latestQuestPrev = document.querySelector("[data-latest-prev]");
const latestQuestNext = document.querySelector("[data-latest-next]");
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
const authAccountInitialsEl = document.querySelector("[data-auth-account-initials]");
const authAccountNameEl = document.querySelector("[data-auth-account-name]");
const authAccountHeadlineEl = document.querySelector("[data-auth-account-headline]");
const authAccountEmailEl = document.querySelector("[data-auth-account-email]");
const authProfileSummaryEl = document.querySelector("[data-auth-profile-summary]");
const authProfileMetaEl = document.querySelector("[data-auth-profile-meta]");
const authProfileSkillsEl = document.querySelector("[data-auth-profile-skills]");
const matchSignalsEl = document.querySelector("[data-match-signals]");
const categoryMatrixEl = document.querySelector("[data-category-matrix]");
const registerForm = document.querySelector("#registerForm");
const authForm = document.querySelector("#authForm");
const profileForm = document.querySelector("#profileForm");
const profileNoteEl = document.querySelector("[data-profile-note]");
const authNoteEls = document.querySelectorAll("[data-auth-note]");
const authStatusEl = document.querySelector("[data-auth-status]");
const signoutBtn = document.querySelector("[data-signout]");
const authRequiredEls = document.querySelectorAll("[data-auth-required]");
const guestOnlyEls = document.querySelectorAll("[data-guest-only]");
const headerAuthEls = document.querySelectorAll("[data-header-auth]");
const headerGuestEls = document.querySelectorAll("[data-header-guest]");
const accountPanelEls = document.querySelectorAll("[data-account-panel]");
const loginPanelEls = document.querySelectorAll("[data-login-panel]");
const registerCta = document.querySelector("[data-register-cta]");
const registerSignedInCopy = document.querySelector("[data-register-signed-in-copy]");
const pendingTitleEl = document.querySelector("[data-pending-title]");
const pendingCopyEl = document.querySelector("[data-pending-copy]");
const pendingTaskEl = document.querySelector("[data-pending-task]");
const issuedTitleEl = document.querySelector("[data-issued-title]");
const issuedCopyEl = document.querySelector("[data-issued-copy]");
const currentRankEl = document.querySelector("[data-current-rank]");
const nextRankTitleEl = document.querySelector("[data-next-rank-title]");
const nextRankBarEl = document.querySelector("[data-next-rank-bar]");
const nextRankCopyEl = document.querySelector("[data-next-rank-copy]");
const recCopyEl = document.querySelector("[data-rec-copy]");
const achievementCountEl = document.querySelector("[data-achievement-count]");
const titleGridEl = document.querySelector("[data-title-grid]");
const reviewCountStatusEl = document.querySelector("[data-review-count-status]");
const weeklyCardEl = document.querySelector("[data-weekly-card]");
const menuToggle = document.querySelector(".menu-toggle");
const globalNav = document.querySelector("#global-nav");

function setMobileMenu(open) {
  document.body.classList.toggle("menu-open", open);
  if (menuToggle) {
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
  }
}

menuToggle?.addEventListener("click", () => {
  setMobileMenu(!document.body.classList.contains("menu-open"));
});

document.querySelectorAll("#global-nav a, .site-header .header-actions a").forEach((link) => {
  link.addEventListener("click", () => setMobileMenu(false));
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 640) setMobileMenu(false);
});

function setAuthNote(message) {
  authNoteEls.forEach((el) => {
    el.textContent = message;
  });
}

function setAuthStatus(label) {
  if (authStatusEl) authStatusEl.textContent = label;
}

function isEmailNotConfirmedError(error) {
  return /email not confirmed/i.test(error?.message || "");
}

async function resendSignupConfirmation(email) {
  if (!remote.enabled || !email) return false;
  const { error } = await supabaseClient.auth.resend({
    type: "signup",
    email,
  });
  return !error;
}

function syncAuthVisibility() {
  const isSignedIn = Boolean(remote.user);
  const canUseAuthRequiredSections = !remote.enabled || isSignedIn;
  const isLoginPage = document.body.classList.contains("login-page");
  authRequiredEls.forEach((el) => {
    el.hidden = !canUseAuthRequiredSections;
  });
  guestOnlyEls.forEach((el) => {
    el.hidden = isSignedIn;
  });
  headerAuthEls.forEach((el) => {
    el.hidden = !isSignedIn;
  });
  headerGuestEls.forEach((el) => {
    el.hidden = isSignedIn;
  });
  accountPanelEls.forEach((el) => {
    el.hidden = !canUseAuthRequiredSections;
  });
  loginPanelEls.forEach((el) => {
    el.hidden = isLoginPage ? isSignedIn : canUseAuthRequiredSections;
  });
  if (signoutBtn) signoutBtn.hidden = !remote.enabled || !remote.user;

  if (registerCta) {
    registerCta.href = isSignedIn ? "mypage.html" : "#register";
    const label = registerCta.querySelector("span");
    if (label) label.textContent = isSignedIn ? "マイページへ" : "冒険者登録";
  }

  if (registerSignedInCopy) {
    registerSignedInCopy.textContent = remote.user
      ? `${state.account.name}としてログイン中です。マイページでGold、Trust、進行中クエストを確認できます。`
      : "Supabase未設定時はデモデータでギルドの流れを確認できます。";
  }
}

function getInitials(name) {
  return String(name || "冒").slice(0, 1).toUpperCase();
}

function inferPreferredCategories(tags) {
  const profileTags = normalizeList(tags);
  if (!profileTags.length) return [];
  return Object.entries(state.questTaxonomy)
    .filter(([, categoryTags]) => overlap(categoryTags, profileTags).length > 0)
    .map(([category]) => category);
}

function mapProfile(row) {
  if (!row) return null;
  const profileTags = unique([...normalizeList(row.skills), ...normalizeList(row.interests)]);
  return {
    name: row.adventurer_name || "冒険者",
    initials: getInitials(row.adventurer_name),
    headline: row.headline || row.job || "ソロプレナー",
    summary: row.summary || "プロフィールはまだ編集中です。",
    businessStage: row.job || "活動中",
    strengths: normalizeList(row.skills),
    interests: normalizeList(row.interests),
    preferredCategories: inferPreferredCategories(profileTags),
    preferredTags: profileTags,
  };
}

function mapQuest(row) {
  return {
    id: row.id,
    type: row.quest_type || "report",
    status: row.status || "open",
    title: row.title,
    issuerId: row.issuer_id || "",
    issuer: row.issuer_name || "冒険者",
    reward: Number(row.reward) || 0,
    category: row.category,
    tags: normalizeList(row.tags),
    skills: normalizeList(row.issuer_skills),
    deadline: row.deadline,
    applicants: Number(row.submission_count) || 0,
    capacity: Number(row.capacity) || 1,
    approvedReports: Number(row.approved_count) || 0,
    description: row.description,
    url: row.reference_url || "",
    screenshot: row.screenshot_url ? { name: "添付画像", url: row.screenshot_url } : null,
    comments: ["Supabaseから読み込んだクエストです。"],
  };
}

async function loadRemoteState() {
  if (!remote.enabled) {
    setAuthStatus("デモ");
    syncAuthVisibility();
    return;
  }

  const {
    data: { session },
  } = await supabaseClient.auth.getSession();
  remote.user = session?.user || null;
  setAuthStatus(remote.user ? "ログイン中" : "未ログイン");
  syncAuthVisibility();

  if (!remote.user && document.body.classList.contains("mypage-page")) {
    window.location.href = "login.html";
    return;
  }

  if (remote.user && document.body.classList.contains("login-page")) {
    window.location.href = "mypage.html";
    return;
  }

  const { data: questRows, error: questError } = await supabaseClient
    .from("quest_board")
    .select("*")
    .order("created_at", { ascending: false });

  if (questError) throw questError;
  state.quests = (questRows || []).map(mapQuest);

  state.issuerProfiles = {};
  (questRows || []).forEach((row) => {
    const name = row.issuer_name || "冒険者";
    state.issuerProfiles[name] = {
      initials: getInitials(name),
      headline: row.issuer_headline || "ソロプレナー",
      summary: row.issuer_summary || "プロフィールはまだ編集中です。",
      trust: Number(row.issuer_trust) || 0,
      completed: Number(row.issuer_completed) || 0,
      issued: Number(row.issuer_issued) || 0,
      skills: normalizeList(row.issuer_skills),
      interests: normalizeList(row.issuer_interests),
    };
  });

  if (!remote.user) {
    remote.profile = null;
    remote.pendingSubmissions = [];
    setAuthNote("クエストは閲覧できます。発行・応募・承認にはログインしてください。");
    syncAuthVisibility();
    return;
  }

  const { data: profile, error: profileError } = await supabaseClient
    .from("profiles")
    .select("*")
    .eq("id", remote.user.id)
    .single();

  if (profileError) throw profileError;
  remote.profile = profile;
  state.account = mapProfile(profile);
  state.gold = Number(profile.gold) || 0;
  state.trust = Number(profile.trust) || 0;
  state.completed = Number(profile.completed_quests) || 0;
  state.issued = Number(profile.issued_quests) || 0;
  setAuthNote(`${state.account.name}としてログイン中です。`);

  const issuedQuestIds = new Set(state.quests.filter((quest) => quest.issuerId === remote.user.id).map((quest) => String(quest.id)));
  const { data: submissions, error: submissionsError } = await supabaseClient
    .from("quest_submissions")
    .select("id, quest_id, submission_type, comment, status, created_at")
    .eq("status", "pending")
    .order("created_at", { ascending: false });

  if (submissionsError) throw submissionsError;
  remote.pendingSubmissions = (submissions || []).filter((submission) => issuedQuestIds.has(String(submission.quest_id)));
  syncAuthVisibility();
}

async function refreshRemoteState() {
  if (!remote.enabled) return;
  await loadRemoteState();
  renderAccountProfile();
  syncStats();
  renderQuestList();
  renderQuestDetailPage();
}

async function uploadQuestAsset(file, folder) {
  if (!remote.enabled || !remote.user || !(file instanceof File) || file.size === 0) return "";

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  const path = `${remote.user.id}/${folder}/${Date.now()}-${safeName}`;
  const { error } = await supabaseClient.storage.from("quest-assets").upload(path, file, {
    cacheControl: "3600",
    upsert: false,
  });
  if (error) throw error;

  const { data } = supabaseClient.storage.from("quest-assets").getPublicUrl(path);
  return data.publicUrl;
}

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

function getQuestDetailUrl(id) {
  return `quest-detail.html?id=${encodeURIComponent(id)}`;
}

function normalizeQuestUrl(value) {
  const rawValue = String(value || "").trim();
  if (!rawValue) return "";

  try {
    const url = new URL(rawValue);
    if (url.protocol !== "http:" && url.protocol !== "https:") return "";
    return url.href;
  } catch {
    return "";
  }
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

function getNextRankInfo(trust) {
  const ranks = [
    { name: "見習い冒険者", min: 0 },
    { name: "駆け出し冒険者", min: 100 },
    { name: "一人前冒険者", min: 300 },
    { name: "熟練冒険者", min: 700 },
    { name: "上級冒険者", min: 1500 },
    { name: "マスター冒険者", min: 3000 },
    { name: "伝説の冒険者", min: 5000 },
  ];
  let currentIndex = 0;
  for (let index = 0; index < ranks.length; index += 1) {
    if (trust >= ranks[index].min) currentIndex = index;
  }
  const current = ranks[Math.max(0, currentIndex)];
  const next = ranks[currentIndex + 1] || null;
  if (!next) return { current, next: null, remaining: 0, percent: 100 };
  const previousMin = current.min;
  const span = next.min - previousMin;
  return {
    current,
    next,
    remaining: Math.max(0, next.min - trust),
    percent: Math.min(100, Math.round(((trust - previousMin) / span) * 100)),
  };
}

function formatDate(value) {
  return formatter.format(new Date(`${value}T00:00:00`));
}

function renderAccountProfile() {
  const account = state.account;
  const accountEmail = remote.user?.email || "デモアカウント";

  if (accountInitialsEl) accountInitialsEl.textContent = account.initials;
  if (accountNameEl) accountNameEl.textContent = account.name;
  if (accountHeadlineEl) accountHeadlineEl.textContent = account.headline;
  if (profileSummaryEl) profileSummaryEl.textContent = account.summary;
  if (authAccountInitialsEl) authAccountInitialsEl.textContent = account.initials;
  if (authAccountNameEl) authAccountNameEl.textContent = account.name;
  if (authAccountHeadlineEl) authAccountHeadlineEl.textContent = account.headline;
  if (authAccountEmailEl) authAccountEmailEl.textContent = accountEmail;
  if (authProfileSummaryEl) authProfileSummaryEl.textContent = account.summary;

  if (profileMetaEl) {
    profileMetaEl.innerHTML = `
      <div><dt>事業フェーズ</dt><dd>${account.businessStage}</dd></div>
    `;
  }
  if (authProfileMetaEl) {
    authProfileMetaEl.innerHTML = `
      <div><dt>事業フェーズ</dt><dd>${account.businessStage}</dd></div>
    `;
  }

  if (profileSkillsEl) profileSkillsEl.innerHTML = createChips(account.strengths, "is-skill");
  if (authProfileSkillsEl) authProfileSkillsEl.innerHTML = createChips(account.strengths, "is-skill");
  if (profileInterestsEl) profileInterestsEl.innerHTML = createChips(account.interests);
  if (profileCategoriesEl) profileCategoriesEl.innerHTML = createChips(account.preferredCategories, "is-category");

  if (profileForm) {
    profileForm.elements.adventurer_name.value = account.name;
    profileForm.elements.headline.value = account.headline;
    profileForm.elements.summary.value = account.summary;
    profileForm.elements.job.value = account.businessStage;
    profileForm.elements.skills.value = account.strengths.join(", ");
    profileForm.elements.interests.value = account.interests.join(", ");
  }

  if (matchSignalsEl) {
    const signals = account.preferredTags.length
      ? [
          ["優先カテゴリ", account.preferredCategories.join(" / ") || "未設定"],
          ["強いタグ", account.preferredTags.slice(0, 4).join(" / ")],
          ["受けやすい依頼", "プロフィールに近いクエストを優先表示"],
        ]
      : [
          ["優先カテゴリ", "未設定"],
          ["強いタグ", "未設定"],
          ["受けやすい依頼", "スキルを登録すると表示されます"],
        ];
    matchSignalsEl.innerHTML = signals.map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`).join("");
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

  const hasPersonalization = state.account.preferredTags.length || state.account.preferredCategories.length;
  const recommended = hasPersonalization
    ? state.quests
    .filter((quest) => !isQuestClosed(quest))
    .map((quest) => ({ quest, match: scoreQuest(quest) }))
    .sort((a, b) => b.match.score - a.match.score || b.quest.reward - a.quest.reward)
        .slice(0, 3)
    : [];

  if (recCopyEl) {
    recCopyEl.textContent = hasPersonalization
      ? "プロフィールのスキルや関心に合った応募候補の依頼です。"
      : "スキルや関心をプロフィールに登録すると、おすすめクエストが表示されます。";
  }

  if (!recommended.length) {
    recommendedQuestsEl.innerHTML = `
      <article class="rec-quest-card">
        <div class="rec-quest-top">
          <span class="category">未設定</span>
        </div>
        <h3>おすすめクエストはまだありません</h3>
        <p>プロフィールのスキルや関心を登録するか、クエスト一覧から気になる依頼を探してください。</p>
        <div class="rec-quest-foot">
          <a class="btn btn-primary btn-sm" href="quests.html">一覧へ</a>
        </div>
      </article>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

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
            <a class="btn btn-primary btn-sm" href="${getQuestDetailUrl(quest.id)}">詳細へ</a>
          </div>
        </article>
      `;
    })
    .join("");

  if (window.lucide) lucide.createIcons();
}

function renderLatestQuestSlider() {
  if (!latestQuestSlider) return;

  const latestQuests = state.quests.slice(0, 6);
  latestQuestSlider.innerHTML = latestQuests
    .map((quest) => {
      updateQuestStatus(quest);
      const type = getQuestType(quest);
      const closed = isQuestClosed(quest);
      const progress = Math.min(getQuestProgress(quest), getQuestCapacity(quest));
      return `
        <a class="quest-card quest-card-link latest-quest-card${closed ? " is-closed" : ""}" href="${getQuestDetailUrl(quest.id)}">
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
              <span>発行者: ${quest.issuer}</span>
              <span>締切: ${formatDate(quest.deadline)}</span>
              <span>${type.metricLabel}: ${progress}/${getQuestCapacity(quest)}名</span>
            </div>
          </div>
        </a>
      `;
    })
    .join("");

  if (window.lucide) lucide.createIcons();
}

function syncStats() {
  goldEls.forEach((el) => {
    el.textContent = state.gold;
  });
  trustEls.forEach((el) => {
    el.textContent = state.trust;
  });
  rankEls.forEach((el) => {
    el.textContent = `Trust ${state.trust}`;
  });
  completedEls.forEach((el) => {
    el.textContent = state.completed;
  });
  issuedEls.forEach((el) => {
    el.textContent = state.issued;
  });
  totalQuestEls.forEach((el) => {
    el.textContent = state.quests.length;
  });
  if (formNote) formNote.textContent = `現在の残高: ${state.gold}G / 現在ランク: ${getRank(state.trust)}`;
  syncDashboardSummary();
  renderLatestQuestSlider();
  renderRecommendedQuests();
  renderReviewOptions();
}

function syncDashboardSummary() {
  const pendingCount = remote.enabled ? remote.pendingSubmissions.length : 3;
  const openIssuedCount = remote.enabled
    ? state.quests.filter((quest) => quest.issuerId === remote.user?.id && !isQuestClosed(quest)).length
    : 2;
  const rankInfo = getNextRankInfo(state.trust);

  if (pendingTitleEl) pendingTitleEl.textContent = pendingCount ? `承認待ちが${pendingCount}件あります` : "承認待ちはありません";
  if (pendingCopyEl) {
    pendingCopyEl.textContent = pendingCount
      ? "評価すると報酬とTrustが反映されます。"
      : "新しい完了報告が届くとここに表示されます。";
  }
  if (pendingTaskEl) pendingTaskEl.classList.toggle("is-urgent", pendingCount > 0);
  if (issuedTitleEl) issuedTitleEl.textContent = `発行中 ${openIssuedCount}件`;
  if (issuedCopyEl) issuedCopyEl.textContent = openIssuedCount ? "応募や完了報告が届いたら承認できます。" : "必要ならクエストを発行できます。";
  if (currentRankEl) currentRankEl.textContent = rankInfo.current.name;
  if (nextRankTitleEl) {
    nextRankTitleEl.textContent = rankInfo.next ? `${rankInfo.next.name}まであと${rankInfo.remaining} Trust` : "最高ランクに到達しています";
  }
  if (nextRankBarEl) nextRankBarEl.style.width = `${rankInfo.percent}%`;
  if (nextRankCopyEl) {
    nextRankCopyEl.textContent = rankInfo.next
      ? "クエストを達成するとTrustが積み上がります。"
      : "積み上げたTrustがギルド内の実績として表示されます。";
  }
  if (reviewCountStatusEl) reviewCountStatusEl.textContent = `${pendingCount}件`;
  if (weeklyCardEl) weeklyCardEl.hidden = remote.enabled;
  renderAchievements();
}

function renderAchievements() {
  if (!titleGridEl) return;

  const titleRules = [
    { icon: "swords", title: "初陣", copy: "初クエスト達成", earned: state.completed >= 1 },
    { icon: "handshake", title: "助っ人", copy: "10件達成", earned: state.completed >= 10 },
    { icon: "medal", title: "常連冒険者", copy: "7日継続", earned: !remote.enabled && state.streak >= 7 },
    { icon: "message-square-heart", title: "壁打ち名人", copy: "相談回答5件", earned: state.completed >= 5 },
    { icon: "star", title: "五つ星の協力者", copy: "高評価の実績", earned: false },
    { icon: "scroll-text", title: "依頼上手", copy: "クエスト発行5件", earned: state.issued >= 5 },
    { icon: "lock", title: "ベテラン", copy: "50件達成で獲得", earned: state.completed >= 50 },
  ];
  const earnedCount = titleRules.filter((rule) => rule.earned).length;
  if (achievementCountEl) achievementCountEl.textContent = `${earnedCount} / 18`;
  titleGridEl.innerHTML = titleRules
    .map(
      (rule) => `
        <article class="title-badge ${rule.earned ? "is-earned" : "is-locked"}">
          <i data-lucide="${rule.earned ? rule.icon : "lock"}"></i>
          <strong>${rule.title}</strong>
          <span>${rule.copy}</span>
        </article>
      `
    )
    .join("");
  if (window.lucide) lucide.createIcons();
}

function renderReviewOptions() {
  if (!completedQuestEl) return;

  const previousValue = completedQuestEl.value;
  const approvableQuests = remote.enabled
    ? remote.pendingSubmissions
        .map((submission) => {
          const quest = state.quests.find((item) => String(item.id) === String(submission.quest_id));
          return quest ? { quest, submission } : null;
        })
        .filter(Boolean)
    : state.quests
        .filter((quest) => {
          if (quest.type === "report") return !isQuestClosed(quest);
          return Number(quest.applicants) > 0;
        })
        .map((quest) => ({ quest, submission: null }));

  completedQuestEl.innerHTML = approvableQuests
    .map(({ quest, submission }) => {
      const type = getQuestType(quest);
      const value = submission ? submission.id : quest.id;
      return `<option value="${value}">${quest.title} / ${type.label} / ${quest.reward}G / ${getQuestStatusText(quest)}</option>`;
    })
    .join("");

  if (approvableQuests.some(({ quest, submission }) => String(submission?.id || quest.id) === previousValue)) {
    completedQuestEl.value = previousValue;
  }

  completedQuestEl.disabled = approvableQuests.length === 0;
  const submitButton = reviewForm?.querySelector('button[type="submit"]');
  if (submitButton) submitButton.disabled = approvableQuests.length === 0;

  if (reviewNote) {
    reviewNote.textContent = approvableQuests.length ? `未承認の完了報告が${approvableQuests.length}件あります。` : "承認待ちのクエストはありません。";
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
    return;
  }

  quests.forEach((quest) => {
    updateQuestStatus(quest);
    const type = getQuestType(quest);
    const closed = isQuestClosed(quest);
    const progress = Math.min(getQuestProgress(quest), getQuestCapacity(quest));
    const progressPercent = getQuestProgressPercent(quest);
    const card = document.createElement("a");
    card.className = `quest-card quest-card-link${closed ? " is-closed" : ""}`;
    card.href = getQuestDetailUrl(quest.id);
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
          <span>発行者: ${quest.issuer}</span>
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
    questList.append(card);
  });
}

function renderQuestDetail(quest) {
  if (!questDetail) return;

  if (!quest) {
    questDetail.innerHTML = `
      <div class="empty-detail">
        <h2>クエストが見つかりません</h2>
        <p>URLを確認するか、一覧からクエストを選び直してください。</p>
        <a class="btn btn-primary" href="quests.html#quest-board"><i data-lucide="search"></i>一覧へ戻る</a>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
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
  const referenceUrl = normalizeQuestUrl(quest.url);
  const referenceMeta = referenceUrl
    ? `
      <div>
        <span>参考URL</span>
        <strong><a class="detail-link" href="${referenceUrl}" target="_blank" rel="noopener">開く</a></strong>
      </div>
    `
    : "";
  const screenshotPreview = quest.screenshot?.url
    ? `
      <section class="quest-attachment-preview">
        <div>
          <span class="panel-label">SCREENSHOT</span>
          <h3>添付スクショ</h3>
          <p>${quest.screenshot.name || "添付画像"}</p>
        </div>
        <img src="${quest.screenshot.url}" alt="クエスト発行時に添付されたスクショ" />
      </section>
    `
    : "";
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
      <div>
        <span>発行者</span>
        <strong>${renderIssuerButton(quest.issuer)}</strong>
      </div>
      <div>
        <span>報酬</span>
        <strong>${quest.reward}G</strong>
      </div>
      <div>
        <span>締切</span>
        <strong>${formatDate(quest.deadline)}</strong>
      </div>
      <div>
        <span>進め方</span>
        <strong>${getQuestActionHint(quest)}</strong>
      </div>
      ${referenceMeta}
    </div>
    <div class="quest-flow-note">${type.guidance}</div>
    ${screenshotPreview}
    ${issuerProfile}
    ${actionArea}
    <h3>コメント</h3>
    ${comments}
  `;

  questDetail.querySelector("[data-issuer]")?.addEventListener("click", () => {
    showIssuerProfile(quest.issuer, quest.id);
  });
  questDetail.querySelector("[data-apply]")?.addEventListener("click", async () => {
    if (isQuestClosed(quest)) return;
    if (quest.type === "report") {
      const evidence = questDetail.querySelector("[data-evidence]");
      if (!evidence?.files?.length) {
        showToast("スクショ画面のエビデンスを添付してください。");
        return;
      }
      if (remote.enabled) {
        if (!remote.user) {
          showToast("完了報告にはログインが必要です。");
          return;
        }
        const comment = questDetail.querySelector("[data-report-comment]")?.value || "";
        let evidenceUrl = "";
        try {
          evidenceUrl = await uploadQuestAsset(evidence.files[0], "evidence");
        } catch (error) {
          showToast(error.message || "エビデンスをアップロードできませんでした。");
          return;
        }
        const { error } = await supabaseClient.rpc("submit_quest", {
          p_quest_id: quest.id,
          p_submission_type: "report",
          p_comment: comment,
          p_evidence_url: evidenceUrl,
        });
        if (error) {
          showToast(error.message || "完了報告を送信できませんでした。");
          return;
        }
        showToast("完了報告を送信しました。発行者の承認を待ちます。");
        await refreshRemoteState();
        return;
      }
      quest.applicants += 1;
      quest.comments.unshift("スクショ付きの完了報告が送信されました。承認待ちです。");
      showToast("完了報告を送信しました。発行者の承認後にクローズ判定されます。");
      renderQuestList();
      renderQuestDetail(quest);
      return;
    }
    if (remote.enabled) {
      if (!remote.user) {
        showToast("応募にはログインが必要です。");
        return;
      }
      const { error } = await supabaseClient.rpc("submit_quest", {
        p_quest_id: quest.id,
        p_submission_type: "application",
        p_comment: "応募しました。",
        p_evidence_url: "",
      });
      if (error) {
        showToast(error.message || "応募できませんでした。");
        return;
      }
      showToast("応募しました。発行者との約束を進めてください。");
      await refreshRemoteState();
      return;
    }
    quest.applicants += 1;
    updateQuestStatus(quest);
    showToast(isQuestClosed(quest) ? "募集人数に達したため、応募受付を停止しました。" : "応募しました。発行者との約束を進めてください。");
    renderQuestList();
    renderQuestDetail(quest);
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
  const quest = state.quests.find((item) => item.id === questId);
  if (questDetail && quest) {
    renderQuestDetail(quest);
    return;
  }
  renderQuestList();
}

function renderQuestDetailPage() {
  if (!questDetail) return;
  const questId = new URLSearchParams(window.location.search).get("id");
  const quest = state.quests.find((item) => String(item.id) === String(questId));
  if (quest) {
    state.selectedQuestId = quest.id;
    document.title = `${quest.title} | ソロプレナー・ギルド`;
  }
  renderQuestDetail(quest);
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

questForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(questForm);
  const reward = Number(data.get("reward"));
  const capacity = Math.max(1, Number(data.get("capacity")) || 1);
  const escrowGold = reward * capacity;
  const type = data.get("type") === "recruiting" ? "recruiting" : "report";
  const screenshotFile = data.get("screenshot");
  const screenshot =
    screenshotFile instanceof File && screenshotFile.size > 0
      ? {
          name: screenshotFile.name,
          url: URL.createObjectURL(screenshotFile),
        }
      : null;

  if (escrowGold > state.gold) {
    formNote.textContent = `残高不足です。現在のGoldは${state.gold}Gです。`;
    return;
  }

  const selectedCategory = data.get("category");
  const tags = unique([...(state.questTaxonomy[selectedCategory] || []).slice(0, 2), ...normalizeList(data.get("tags"))]);

  if (remote.enabled) {
    if (!remote.user) {
      formNote.textContent = "クエスト発行にはログインが必要です。";
      return;
    }

    let screenshotUrl = "";
    try {
      screenshotUrl = await uploadQuestAsset(screenshotFile, "quest-screenshots");
    } catch (error) {
      formNote.textContent = error.message || "スクショをアップロードできませんでした。";
      return;
    }

    const { error } = await supabaseClient.rpc("issue_quest", {
      p_title: data.get("title"),
      p_description: data.get("description"),
      p_reward: reward,
      p_category: selectedCategory,
      p_quest_type: type,
      p_capacity: capacity,
      p_deadline: data.get("deadline"),
      p_tags: tags,
      p_reference_url: normalizeQuestUrl(data.get("url")),
      p_screenshot_url: screenshotUrl,
    });

    if (error) {
      formNote.textContent = error.message || "クエストを発行できませんでした。";
      return;
    }

    formNote.textContent = `${escrowGold}Gを確保して${QUEST_TYPES[type].label}クエストを発行しました。`;
    await refreshRemoteState();
    return;
  }

  state.gold -= escrowGold;
  state.issued += 1;
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
    url: normalizeQuestUrl(data.get("url")),
    screenshot,
    comments: ["発行されたばかりのクエストです。"],
  };

  state.quests.unshift(quest);
  state.selectedQuestId = quest.id;
  state.selectedIssuer = null;
  syncStats();
  renderQuestList();
  renderAccountProfile();
  formNote.textContent = `${escrowGold}Gを確保して${getQuestType(quest).label}クエストを発行しました。`;
});

function ratingFromTrustBonus(value) {
  const bonus = Number(value);
  if (bonus >= 10) return 5;
  if (bonus >= 8) return 4;
  if (bonus >= 5) return 3;
  if (bonus >= 2) return 2;
  return 1;
}

reviewForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!completedQuestEl?.value) {
    reviewNote.textContent = "承認待ちのクエストはありません。";
    return;
  }

  const trustBonus = Number(document.querySelector("#rating").value);
  const gainedTrust = 5 + trustBonus;

  if (remote.enabled) {
    if (!remote.user) {
      reviewNote.textContent = "承認にはログインが必要です。";
      return;
    }

    const { error } = await supabaseClient.rpc("approve_submission", {
      p_submission_id: completedQuestEl?.value,
      p_rating: ratingFromTrustBonus(trustBonus),
      p_comment: document.querySelector("#reviewComment")?.value || "",
    });

    if (error) {
      reviewNote.textContent = error.message || "承認できませんでした。";
      return;
    }

    reviewNote.textContent = `承認完了。達成者へ報酬Goldと${gainedTrust} Trustを付与しました。`;
    await refreshRemoteState();
    return;
  }

  const quest = state.quests.find((item) => String(item.id) === String(completedQuestEl?.value));
  if (!quest) {
    reviewNote.textContent = "承認できるクエストがありません。";
    return;
  }

  const reward = Number(quest.reward);

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

registerForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!remote.enabled) {
    setAuthNote("Supabase未設定のため、デモのマイページへ移動します。");
    window.location.href = "mypage.html";
    return;
  }

  if (remote.user) {
    setAuthNote("すでにログイン中です。マイページへ移動します。");
    window.location.href = "mypage.html";
    return;
  }

  const data = new FormData(registerForm);
  const email = data.get("email");
  const password = data.get("password");
  const metadata = {
    adventurer_name: data.get("name"),
    job: data.get("job"),
    skills: data.get("skills"),
    headline: data.get("job") || "ソロプレナー",
  };

  const { data: signUpData, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: { data: metadata },
  });

  if (error) {
    setAuthNote(error.message || "登録できませんでした。");
    return;
  }

  if (signUpData?.session) {
    setAuthNote("登録しました。マイページへ移動します。");
    window.location.href = "mypage.html";
    return;
  }

  setAuthNote("登録しました。確認メールを開いて認証を完了してからログインしてください。");
});

authForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!remote.enabled) {
    setAuthNote("Supabase未設定のため、デモのマイページへ移動します。");
    window.location.href = "mypage.html";
    return;
  }

  const data = new FormData(authForm);
  const email = data.get("email");
  const { error } = await supabaseClient.auth.signInWithPassword({
    email,
    password: data.get("password"),
  });

  if (error) {
    if (isEmailNotConfirmedError(error)) {
      const resent = await resendSignupConfirmation(email);
      setAuthNote(
        resent
          ? "メール認証が未完了です。確認メールを再送しました。メール内のリンクで認証してからログインしてください。"
          : "メール認証が未完了です。登録時の確認メールを開いて認証してからログインしてください。"
      );
      return;
    }
    setAuthNote(error.message || "ログインできませんでした。");
    return;
  }

  setAuthNote("ログインしました。アカウント情報を読み込んでいます。");
  await refreshRemoteState();
});

profileForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(profileForm);
  const nextProfile = {
    adventurer_name: String(data.get("adventurer_name") || "").trim() || "冒険者",
    headline: String(data.get("headline") || "").trim(),
    summary: String(data.get("summary") || "").trim(),
    job: String(data.get("job") || "").trim(),
    skills: normalizeList(data.get("skills")),
    interests: normalizeList(data.get("interests")),
  };

  if (!remote.enabled) {
    state.account = mapProfile(nextProfile);
    renderAccountProfile();
    renderRecommendedQuests();
    if (profileNoteEl) profileNoteEl.textContent = "デモプロフィールを更新しました。";
    return;
  }

  if (!remote.user) {
    window.location.href = "login.html";
    return;
  }

  const { error } = await supabaseClient
    .from("profiles")
    .update({ ...nextProfile, updated_at: new Date().toISOString() })
    .eq("id", remote.user.id);

  if (error) {
    if (profileNoteEl) profileNoteEl.textContent = error.message || "プロフィールを保存できませんでした。";
    return;
  }

  if (profileNoteEl) profileNoteEl.textContent = "プロフィールを保存しました。";
  await refreshRemoteState();
});

signoutBtn?.addEventListener("click", async () => {
  if (!remote.enabled) return;
  await supabaseClient.auth.signOut();
  remote.user = null;
  remote.profile = null;
  remote.pendingSubmissions = [];
  setAuthStatus("未ログイン");
  setAuthNote("ログアウトしました。");
  await refreshRemoteState();
  window.location.href = "login.html";
});

function scrollLatestQuests(direction) {
  if (!latestQuestSlider) return;
  const firstCard = latestQuestSlider.querySelector(".latest-quest-card");
  const distance = firstCard ? firstCard.getBoundingClientRect().width + 16 : 360;
  latestQuestSlider.scrollBy({ left: direction * distance, behavior: "smooth" });
}

latestQuestPrev?.addEventListener("click", () => scrollLatestQuests(-1));
latestQuestNext?.addEventListener("click", () => scrollLatestQuests(1));

async function initApp() {
  syncAuthVisibility();
  renderAccountProfile();
  syncStats();
  renderQuestList();
  renderQuestDetailPage();
  updateMissionUI();
  updateWeeklyChallenge();

  if (!remote.enabled) {
    setAuthNote("Supabase未設定のため、デモデータで動作しています。");
    return;
  }

  try {
    await refreshRemoteState();
  } catch (error) {
    console.error(error);
    setAuthStatus("接続エラー");
    setAuthNote(error.message || "Supabaseからデータを読み込めませんでした。");
  }
}

initApp();
