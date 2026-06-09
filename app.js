const state = {
  account: {
    name: "アキラ",
    initials: "A",
    headline: "個人開発者 / AIツール開発 / BtoB SaaS",
    summary: "AIプロダクトの初期検証、BtoB SaaSのオンボーディング改善、開発者向けUXレビューが得意です。",
    businessStage: "MVP検証中",
    strengths: ["AI実装", "UXレビュー", "BtoB SaaS", "オンボーディング", "技術検証"],
    interests: ["生成AI", "業務効率化", "開発者体験", "顧客理解", "プロダクト改善"],
    preferredCategories: ["フィードバックが欲しい", "インタビューさせて欲しい", "テストをして欲しい"],
    preferredTags: ["AI", "BtoB SaaS", "UXレビュー", "オンボーディング", "MVP検証", "開発者体験"],
  },
  questTaxonomy: {
    フィードバックが欲しい: ["UXレビュー", "オンボーディング", "導線改善", "MVP検証", "初回体験"],
    ダウンロードして欲しい: ["ダウンロード", "アプリ", "インストール", "初回体験", "動作確認"],
    ユーザー登録して欲しい: ["ユーザー登録", "サインアップ", "オンボーディング", "フォーム改善", "初回体験"],
    SNS等で拡散して欲しい: ["SNS", "拡散", "告知文", "コピー", "リード獲得"],
    インタビューさせて欲しい: ["顧客理解", "課題検証", "ユーザー調査", "BtoB SaaS"],
    壁打ちさせて欲しい: ["壁打ち", "運用相談", "価格設計", "課題検証", "事業相談"],
    テストをして欲しい: ["動作確認", "技術レビュー", "フォーム改善", "API", "開発者体験"],
    良いね・レビューを入れて欲しい: ["レビュー", "いいね", "ストアレビュー", "SNS", "口コミ"],
    めっためたに批判が欲しい: ["辛口レビュー", "UXレビュー", "営業資料", "提案文", "改善提案"],
    とにかく褒めちぎって欲しい: ["ポジティブレビュー", "応援", "口コミ", "SNS", "レビュー"],
  },
  gold: 100,
  trust: 325,
  completed: 18,
  issued: 7,
  selectedQuestId: 1,
  editingQuestId: null,
  questListTab: "new",
  missions: [false, false, false],
  streak: 5,
  weeklyProgress: 1,
  submissionMessages: {},
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
      category: "フィードバックが欲しい",
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
      category: "インタビューさせて欲しい",
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
      category: "テストをして欲しい",
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
      category: "めっためたに批判が欲しい",
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
      category: "SNS等で拡散して欲しい",
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
  issuerSubmissions: [],
  pendingSubmissions: [],
  participantSubmissions: [],
  submissionMessages: {},
  messageChannel: null,
  messageRefreshTimer: null,
};

const SELF_SUBMISSION_MESSAGE = "自分の発行したクエストには応募できません";

function canUseLocalDemoData() {
  if (remote.enabled) return false;
  const host = window.location.hostname;
  return window.location.protocol === "file:" || host === "" || host === "localhost" || host === "127.0.0.1";
}

function clearDemoStateForProduction() {
  state.account = {
    name: "ゲスト",
    initials: "G",
    headline: "",
    summary: "",
    businessStage: "",
    strengths: [],
    interests: [],
    preferredCategories: [],
    preferredTags: [],
  };
  state.gold = 0;
  state.trust = 0;
  state.completed = 0;
  state.issued = 0;
  state.selectedQuestId = null;
  state.editingQuestId = null;
  state.submissionMessages = {};
  state.issuerProfiles = {};
  state.quests = [];
  remote.profile = null;
  remote.issuerSubmissions = [];
  remote.pendingSubmissions = [];
  remote.participantSubmissions = [];
  remote.submissionMessages = {};
}

const goldEls = document.querySelectorAll("[data-gold]");
const trustEls = document.querySelectorAll("[data-trust]");
const rankEls = document.querySelectorAll("[data-rank]");
const completedEls = document.querySelectorAll("[data-completed-count]");
const issuedEls = document.querySelectorAll("[data-issued-count]");
const totalQuestEls = document.querySelectorAll("[data-total-quests]");
const formNote = document.querySelector("[data-form-note]");
const questList = document.querySelector("#questList");
const questDetail = document.querySelector("#questDetail");
const issuerProfileEl = document.querySelector("#issuerProfile");
const latestQuestSlider = document.querySelector("#latestQuestSlider");
const latestQuestPrev = document.querySelector("[data-latest-prev]");
const latestQuestNext = document.querySelector("[data-latest-next]");
const categoryFilter = document.querySelector("#categoryFilter");
const keywordFilter = document.querySelector("#keywordFilter");
const questTabButtons = document.querySelectorAll("[data-quest-tab]");
const heroCategory = document.querySelector("#heroCategory");
const heroKeyword = document.querySelector("#heroKeyword");
const questForm = document.querySelector("#questForm");
const issuedQuestsEl = document.querySelector("#issuedQuests");
const issuedListCountEl = document.querySelector("[data-issued-list-count]");
const closedIssuedQuestsEl = document.querySelector("#closedIssuedQuests");
const closedIssuedCountEl = document.querySelector("[data-closed-issued-count]");
const questFormTitleEl = document.querySelector("[data-quest-form-title]");
const questFormStatusEl = document.querySelector("[data-quest-form-status]");
const questSubmitEl = document.querySelector("[data-quest-submit]");
const questEditCancelEl = document.querySelector("[data-quest-edit-cancel]");
const TRUST_RATING_OPTIONS = [
  { value: 10, label: "★★★★★ +10 Trust" },
  { value: 8, label: "★★★★ +8 Trust" },
  { value: 5, label: "★★★ +5 Trust" },
  { value: 2, label: "★★ +2 Trust" },
  { value: 0, label: "★ +0 Trust" },
];
const recommendedQuestsEl = document.querySelector("#recommendedQuests");
const participantPendingQuestsEl = document.querySelector("#participantPendingQuests");
const participantApprovedQuestsEl = document.querySelector("#participantApprovedQuests");
const participantPendingCountEl = document.querySelector("[data-participant-pending-count]");
const participantApprovedCountEl = document.querySelector("[data-participant-approved-count]");
const accountInitialsEl = document.querySelector("[data-account-initials]");
const accountNameEl = document.querySelector("[data-account-name]");
const accountHeadlineEl = document.querySelector("[data-account-headline]");
const profileSummaryEl = document.querySelector("[data-profile-summary]");
const profileSkillsEl = document.querySelector("[data-profile-skills]");
const profileInterestsEl = document.querySelector("[data-profile-interests]");
const profileCategoriesEl = document.querySelector("[data-profile-categories]");
const authAccountInitialsEl = document.querySelector("[data-auth-account-initials]");
const authAccountNameEl = document.querySelector("[data-auth-account-name]");
const authAccountHeadlineEl = document.querySelector("[data-auth-account-headline]");
const authAccountEmailEl = document.querySelector("[data-auth-account-email]");
const authProfileSummaryEl = document.querySelector("[data-auth-profile-summary]");
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

function isAlreadyRegisteredError(error) {
  return /already registered|user already exists|already been registered/i.test(error?.message || "");
}

function isDuplicateSignupResponse(signUpData) {
  const identities = signUpData?.user?.identities;
  return Boolean(signUpData?.user && Array.isArray(identities) && identities.length === 0 && !signUpData?.session);
}

function isOwnQuest(quest) {
  return Boolean(remote.user?.id && quest?.issuerId && String(quest.issuerId) === String(remote.user.id));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getCurrentUserName() {
  return remote.profile?.adventurer_name || state.account.name || "冒険者";
}

function trackAnalytics(eventName, params = {}) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

function isDuplicateSubmissionError(error) {
  const message = error?.message || "";
  const code = error?.code || "";
  return (
    code === "23505" ||
    /duplicate key value violates unique constraint/i.test(message) ||
    /quest_submissions_quest_id_adventurer_id_submission_type_key/i.test(message)
  );
}

function getStorageErrorMessage(error, fallback) {
  const message = error?.message || "";
  if (/bucket not found|storage bucket/i.test(message)) return "画像保存先の設定が見つかりません。管理者に確認してください。";
  if (/row-level security|violates row-level security|not authorized|unauthorized|permission/i.test(message)) {
    return "画像をアップロードする権限がありません。ログイン状態を確認してください。";
  }
  if (/payload too large|file size|exceeded/i.test(message)) return "画像のサイズが大きすぎます。小さい画像で再度お試しください。";
  return fallback;
}

function getQuestSaveErrorMessage(error, isEditing) {
  const message = error?.message || "";
  if (/not_authenticated/i.test(message)) return isEditing ? "クエスト編集にはログインが必要です。" : "クエスト発行にはログインが必要です。";
  if (/insufficient_gold/i.test(message)) return "Gold残高が不足しています。報酬または募集人数を見直してください。";
  if (/quest_not_editable/i.test(message)) return "編集できる発行中クエストが見つかりません。";
  if (/capacity_below_submission_count/i.test(message)) return "募集人数は現在の応募・完了報告数より少なくできません。";
  if (/violates check constraint|invalid input value|not-null constraint|null value/i.test(message)) {
    return "入力内容に不備があります。各項目を確認してください。";
  }
  return isEditing ? "クエストを更新できませんでした。" : "クエストを発行できませんでした。";
}

function getSubmitQuestErrorMessage(error, fallback) {
  const message = error?.message || "";
  if (/not_authenticated/i.test(message)) return "応募・完了報告にはログインが必要です。";
  if (/quest_not_available/i.test(message)) return "このクエストは現在受付していません。";
  if (/quest_full/i.test(message)) return "募集人数に達したため、受付は終了しました。";
  if (/self_submission_denied/i.test(message)) return SELF_SUBMISSION_MESSAGE;
  if (isDuplicateSubmissionError(error)) return "このクエストには既に応募済みです。";
  if (/violates check constraint|invalid input value|not-null constraint|null value/i.test(message)) return "送信内容に不備があります。入力内容を確認してください。";
  return fallback;
}

function getDeleteQuestErrorMessage(error) {
  const message = error?.message || "";
  if (/quest_not_deletable/i.test(message)) return "削除できる発行中クエストが見つかりません。";
  if (/not_authenticated/i.test(message)) return "クエスト削除にはログインが必要です。";
  return "クエストを削除できませんでした。時間をおいて再度お試しください。";
}

function getApprovalErrorMessage(error) {
  const message = error?.message || "";
  if (/not_authenticated/i.test(message)) return "承認にはログインが必要です。";
  if (/submission_not_available/i.test(message)) return "承認できる応募・完了報告が見つかりません。";
  if (/not_quest_issuer/i.test(message)) return "このクエストを承認できるのは発行者のみです。";
  if (/self_review_denied/i.test(message)) return "自分の応募・完了報告は承認できません。";
  if (/violates check constraint|invalid input value|not-null constraint|null value/i.test(message)) return "承認内容に不備があります。入力内容を確認してください。";
  return "承認できませんでした。時間をおいて再度お試しください。";
}

function getSubmissionMessageErrorMessage(error) {
  const message = error?.message || "";
  if (/quest_submission_messages|relation .* does not exist|schema cache/i.test(message)) return "コメント用のSupabaseスキーマが未適用です。";
  if (/row-level security|permission denied|not authorized|unauthorized/i.test(message)) return "この応募にコメントできる権限がありません。ログイン状態または応募の状態を確認してください。";
  if (/violates check constraint|body|char_length|not-null|null value/i.test(message)) return "コメントは1文字以上1000文字以内で入力してください。";
  if (/invalid input syntax.*uuid|submission_id/i.test(message)) return "応募データのIDを確認できませんでした。ページを再読み込みしてください。";
  if (/failed to fetch|network|fetch/i.test(message)) return "通信に失敗しました。ネットワーク接続を確認してください。";
  return "コメントを送信できませんでした。時間をおいて再度お試しください。";
}

function getAuthErrorMessage(error, fallback) {
  const message = error?.message || "";
  if (/invalid login credentials/i.test(message)) return "メールアドレスまたはパスワードが正しくありません。";
  if (/password should be at least|weak password|password/i.test(message)) return "パスワードは8文字以上で入力してください。";
  if (/invalid email|email/i.test(message)) return "メールアドレスの形式を確認してください。";
  if (/rate limit|too many requests/i.test(message)) return "アクセスが集中しています。少し時間をおいて再度お試しください。";
  return fallback;
}

function getProfileSaveErrorMessage(error) {
  const message = error?.message || "";
  if (/row-level security|not authorized|unauthorized|permission/i.test(message)) return "プロフィールを更新する権限がありません。ログイン状態を確認してください。";
  if (/violates check constraint|invalid input value|not-null constraint|null value/i.test(message)) return "プロフィールの入力内容に不備があります。";
  return "プロフィールを保存できませんでした。時間をおいて再度お試しください。";
}

function getDataLoadErrorMessage(error) {
  const message = error?.message || "";
  if (/failed to fetch|network|fetch/i.test(message)) return "通信に失敗しました。ネットワーク接続を確認してください。";
  if (/quest_submission_messages|relation .* does not exist|schema cache/i.test(message)) {
    return "チャット用のSupabaseスキーマが未適用です。管理者に設定を確認してください。";
  }
  if (/permission|row-level security|not authorized|unauthorized/i.test(message)) return "データを読み込む権限がありません。ログイン状態を確認してください。";
  return "Supabaseからデータを読み込めませんでした。時間をおいて再度お試しください。";
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
  const canUseAuthRequiredSections = canUseLocalDemoData() || isSignedIn;
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
      : canUseLocalDemoData()
        ? "Supabase未設定時はデモデータでギルドの流れを確認できます。"
        : "登録・ログインにはSupabase接続が必要です。";
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
    remote.issuerSubmissions = [];
    remote.pendingSubmissions = [];
    remote.participantSubmissions = [];
    remote.submissionMessages = {};
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
  let submissions = [];
  let submissionsError = null;
  if (issuedQuestIds.size) {
    const response = await supabaseClient
      .from("quest_submissions")
      .select("id, quest_id, adventurer_id, submission_type, comment, evidence_url, status, created_at, updated_at, quest_reviews(comment, rating, created_at)")
      .in("quest_id", [...issuedQuestIds])
      .in("status", ["pending", "approved", "rejected"])
      .order("created_at", { ascending: false });
    submissions = response.data;
    submissionsError = response.error;
  }

  if (submissionsError) throw submissionsError;
  const visibleSubmissions = submissions || [];
  const adventurerIds = unique(visibleSubmissions.map((submission) => submission.adventurer_id).filter(Boolean));
  let adventurerProfiles = new Map();
  if (adventurerIds.length) {
    const { data: profiles, error: profilesError } = await supabaseClient
      .from("profiles")
      .select("id, adventurer_name, headline")
      .in("id", adventurerIds);
    if (profilesError) throw profilesError;
    adventurerProfiles = new Map((profiles || []).map((profile) => [String(profile.id), profile]));
  }
  remote.issuerSubmissions = visibleSubmissions.map((submission) => {
    const adventurer = adventurerProfiles.get(String(submission.adventurer_id));
    const review = Array.isArray(submission.quest_reviews) ? submission.quest_reviews[0] : submission.quest_reviews;
    return {
      ...submission,
      adventurerName: adventurer?.adventurer_name || "冒険者",
      adventurerHeadline: adventurer?.headline || "",
      reviewComment: review?.comment || "",
      reviewRating: review?.rating || null,
      reviewedAt: review?.created_at || "",
    };
  });
  remote.pendingSubmissions = remote.issuerSubmissions.filter((submission) => submission.status === "pending");

  const { data: participantSubmissions, error: participantSubmissionsError } = await supabaseClient
    .from("quest_submissions")
    .select("id, quest_id, adventurer_id, submission_type, comment, evidence_url, status, created_at, updated_at, quest_reviews(comment, rating, created_at)")
    .eq("adventurer_id", remote.user.id)
    .in("status", ["pending", "approved"])
    .order("created_at", { ascending: false });

  if (participantSubmissionsError) throw participantSubmissionsError;
  remote.participantSubmissions = (participantSubmissions || []).map((submission) => {
    const review = Array.isArray(submission.quest_reviews) ? submission.quest_reviews[0] : submission.quest_reviews;
    return {
      ...submission,
      reviewComment: review?.comment || "",
      reviewRating: review?.rating || null,
      reviewedAt: review?.created_at || "",
    };
  });

  const messageSubmissionIds = unique([
    ...remote.issuerSubmissions
      .filter((submission) => submission.submission_type === "application")
      .map((submission) => submission.id),
    ...remote.participantSubmissions
      .filter((submission) => submission.submission_type === "application" && submission.status === "pending")
      .map((submission) => submission.id),
  ]);
  remote.submissionMessages = {};
  if (messageSubmissionIds.length) {
    const { data: messages, error: messagesError } = await supabaseClient
      .from("quest_submission_messages")
      .select("id, submission_id, sender_id, body, created_at")
      .in("submission_id", messageSubmissionIds)
      .order("created_at", { ascending: true });

    if (messagesError) throw messagesError;

    const senderIds = unique((messages || []).map((message) => message.sender_id).filter(Boolean));
    let senderProfiles = new Map();
    if (senderIds.length) {
      const { data: profiles, error: senderProfilesError } = await supabaseClient
        .from("profiles")
        .select("id, adventurer_name")
        .in("id", senderIds);
      if (senderProfilesError) throw senderProfilesError;
      senderProfiles = new Map((profiles || []).map((profile) => [String(profile.id), profile]));
    }

    (messages || []).forEach((message) => {
      const key = String(message.submission_id);
      if (!remote.submissionMessages[key]) remote.submissionMessages[key] = [];
      remote.submissionMessages[key].push({
        ...message,
        senderName: senderProfiles.get(String(message.sender_id))?.adventurer_name || "冒険者",
      });
    });
  }
  syncAuthVisibility();
}

async function refreshRemoteState() {
  if (!remote.enabled) return;
  await loadRemoteState();
  renderAccountProfile();
  syncStats();
  renderQuestList();
  renderQuestDetailPage();
  syncSubmissionMessageRealtime();
}

function shouldUseSubmissionMessageRealtime() {
  return Boolean(remote.enabled && remote.user && (issuedQuestsEl || participantPendingQuestsEl));
}

function getOpenApprovalPanelIds() {
  if (!issuedQuestsEl) return [];
  return [...issuedQuestsEl.querySelectorAll("[data-approval-panel]:not([hidden])")]
    .map((panel) => panel.dataset.approvalPanel)
    .filter(Boolean);
}

function clearSubmissionMessageRealtime() {
  if (remote.messageRefreshTimer) {
    clearTimeout(remote.messageRefreshTimer);
    remote.messageRefreshTimer = null;
  }
  if (remote.messageChannel) {
    supabaseClient.removeChannel(remote.messageChannel);
    remote.messageChannel = null;
  }
}

function syncSubmissionMessageRealtime() {
  if (!shouldUseSubmissionMessageRealtime()) {
    clearSubmissionMessageRealtime();
    return;
  }
  if (remote.messageChannel) return;

  remote.messageChannel = supabaseClient
    .channel("quest-submission-messages")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "quest_submission_messages" },
      () => scheduleSubmissionMessageRefresh()
    )
    .subscribe();
}

function scheduleSubmissionMessageRefresh() {
  if (!shouldUseSubmissionMessageRealtime()) return;
  const openApprovalPanelIds = getOpenApprovalPanelIds();
  if (remote.messageRefreshTimer) clearTimeout(remote.messageRefreshTimer);
  remote.messageRefreshTimer = setTimeout(async () => {
    remote.messageRefreshTimer = null;
    try {
      await refreshRemoteState();
      restoreOpenApprovalPanels(openApprovalPanelIds);
    } catch (error) {
      console.error("Failed to refresh submission messages", error);
    }
  }, 250);
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
    .map((value) => `<span class="tag-chip${modifier ? ` ${modifier}` : ""}">${escapeHtml(value)}</span>`)
    .join("");
}

function getQuestType(quest) {
  return QUEST_TYPES[quest.type] || QUEST_TYPES.recruiting;
}

function getQuestCapacity(quest) {
  return Math.max(1, Number(quest.capacity) || 1);
}

function getQuestProgress(quest) {
  return Number(quest.applicants) || 0;
}

function isQuestDeadlinePassed(quest) {
  if (!quest?.deadline) return false;
  const deadline = new Date(`${quest.deadline}T23:59:59`);
  const deadlineTime = deadline.getTime();
  return Number.isFinite(deadlineTime) && deadlineTime <= Date.now();
}

function isQuestClosed(quest) {
  return quest.status === "closed" || quest.status === "cancelled" || isQuestDeadlinePassed(quest) || getQuestProgress(quest) >= getQuestCapacity(quest);
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
  const issuerName = name || "冒険者";
  if (issuerName === state.account.name) {
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

  return state.issuerProfiles[issuerName] || null;
}

function renderIssuerButton(name) {
  const issuerName = name || "冒険者";
  return `
    <span class="issuer-hover">
      <span class="issuer-name">${escapeHtml(issuerName)}</span>
      ${renderIssuerPopover(issuerName)}
    </span>
  `;
}

function renderIssuerPopover(name) {
  const issuerName = name || "冒険者";
  const profile = getIssuerProfile(issuerName);

  if (!profile) {
    return `
      <span class="issuer-profile-popover" aria-hidden="true">
        <span class="popover-eyebrow">ISSUER PROFILE</span>
        <span class="popover-head">
          <span>
            <strong>${escapeHtml(issuerName)}</strong>
            <span>プロフィール未登録</span>
          </span>
        </span>
        <span class="popover-summary">この発行者のプロフィール情報はまだ登録されていません。</span>
      </span>
    `;
  }

  return `
    <span class="issuer-profile-popover" aria-hidden="true">
      <span class="popover-eyebrow">ISSUER PROFILE</span>
      <span class="popover-head">
        <span>
          <strong>${escapeHtml(issuerName)}</strong>
          <span>${escapeHtml(profile.headline)}</span>
        </span>
      </span>
      <span class="popover-summary">${escapeHtml(profile.summary)}</span>
      <span class="popover-stats">
        <span><small>Trust</small><b>${Number(profile.trust) || 0}</b></span>
        <span><small>完了</small><b>${Number(profile.completed) || 0}</b></span>
        <span><small>発行</small><b>${Number(profile.issued) || 0}</b></span>
      </span>
    </span>
  `;
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

function getTrustRankFrame(trust) {
  if (trust >= 5000) return "trust-rank-legend";
  if (trust >= 3000) return "trust-rank-master";
  if (trust >= 1500) return "trust-rank-advanced";
  if (trust >= 700) return "trust-rank-veteran";
  if (trust >= 300) return "trust-rank-pro";
  if (trust >= 100) return "trust-rank-rookie";
  return "trust-rank-apprentice";
}

function setTrustAvatarFrame(el, trust) {
  if (!el) return;
  el.classList.remove(
    "trust-rank-apprentice",
    "trust-rank-rookie",
    "trust-rank-pro",
    "trust-rank-veteran",
    "trust-rank-advanced",
    "trust-rank-master",
    "trust-rank-legend",
  );
  el.classList.add("trust-avatar", getTrustRankFrame(trust));
  el.setAttribute("title", getRank(trust));
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
  if (!value) return "";
  const deadline = new Date(`${value}T23:59:59`);
  const diffMs = deadline.getTime() - Date.now();
  if (!Number.isFinite(diffMs)) return "";
  if (diffMs <= 0) return "締切済";

  const minutes = Math.ceil(diffMs / 60000);
  if (minutes < 60) return `あと${minutes}分`;

  const hours = Math.ceil(minutes / 60);
  if (hours < 48) return `あと${hours}時間`;

  return `あと${Math.ceil(hours / 24)}日`;
}

function formatDateTime(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("ja-JP", {
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function getLocalPendingApprovalCount() {
  return getIssuedQuests().reduce((count, quest) => count + getQuestPendingSubmissions(quest).length, 0);
}

function getQuestPendingSubmissions(quest) {
  if (!quest) return [];
  if (remote.enabled) {
    return remote.pendingSubmissions.filter((submission) => String(submission.quest_id) === String(quest.id));
  }
  if (quest.type === "report" && !isQuestClosed(quest)) {
    return [
      {
        id: `local-report-${quest.id}`,
        quest_id: quest.id,
        submission_type: "report",
        adventurerName: "デモ冒険者",
        adventurerHeadline: "プロダクト初期検証を手伝っています",
        comment: "画面を確認しました。主要導線は分かりやすいですが、初回ユーザー向けの補足があるとさらに迷いにくいです。",
        evidence_url: "",
        created_at: new Date().toISOString(),
      },
    ];
  }
  if (Number(quest.applicants) > 0) {
    return [
      {
        id: `local-application-${quest.id}`,
        quest_id: quest.id,
        submission_type: "application",
        adventurerName: "デモ冒険者",
        adventurerHeadline: "インタビューと壁打ちに対応できます",
        comment: "応募しました。日程調整後に進められます。",
        evidence_url: "",
        created_at: new Date().toISOString(),
      },
    ];
  }
  return [];
}

function getQuestIssuerSubmissions(quest) {
  if (!quest) return [];
  if (remote.enabled) {
    return remote.issuerSubmissions.filter((submission) => String(submission.quest_id) === String(quest.id));
  }

  if (!isQuestClosed(quest)) return [];
  const comments = normalizeList(quest.comments);
  if (!comments.length && !Number(quest.approvedReports)) return [];

  return (comments.length ? comments : ["承認済みの提出内容です。"]).map((comment, index) => ({
    id: `local-closed-submission-${quest.id}-${index}`,
    quest_id: quest.id,
    submission_type: quest.type === "report" ? "report" : "application",
    status: "approved",
    adventurerName: "冒険者",
    adventurerHeadline: "",
    comment,
    evidence_url: "",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * (24 + index)).toISOString(),
    updated_at: new Date(Date.now() - 1000 * 60 * 60 * (12 + index)).toISOString(),
  }));
}

function getQuestDeadlineDate(daysValue) {
  const allowedDays = new Set([3, 5, 7, 10, 20, 30]);
  const days = Number(daysValue);
  if (!allowedDays.has(days)) return "";

  const deadline = new Date();
  deadline.setHours(0, 0, 0, 0);
  deadline.setDate(deadline.getDate() + days);
  return deadline.toISOString().slice(0, 10);
}

function getDeadlineDaysValue(deadlineValue) {
  const allowedDays = [3, 5, 7, 10, 20, 30];
  const deadline = new Date(`${deadlineValue}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = Math.round((deadline.getTime() - today.getTime()) / 86400000);
  return allowedDays.includes(days) ? String(days) : "7";
}

function getQuestEscrow(quest) {
  return (Number(quest.reward) || 0) * getQuestCapacity(quest);
}

function getRefundableEscrow(quest) {
  const approved = Number(quest.approvedReports) || 0;
  const remaining = Math.max(0, getQuestCapacity(quest) - approved);
  return (Number(quest.reward) || 0) * remaining;
}

function getIssuedQuests() {
  return state.quests.filter((quest) => {
    if (isQuestClosed(quest)) return false;
    if (remote.enabled) return quest.issuerId === remote.user?.id;
    return quest.issuer === state.account.name;
  });
}

function getClosedIssuedQuests() {
  return state.quests.filter((quest) => {
    if (!isQuestClosed(quest)) return false;
    if (remote.enabled) return quest.issuerId === remote.user?.id;
    return quest.issuer === state.account.name;
  });
}

function getSubmissionTypeLabel(type) {
  return type === "report" ? "完了報告" : "応募";
}

function getSubmissionMessages(submissionId) {
  const key = String(submissionId);
  if (remote.enabled) return remote.submissionMessages[key] || [];
  return state.submissionMessages[key] || [];
}

function renderSubmissionChat(submission, context) {
  if (!submission || submission.submission_type !== "application" || submission.status !== "pending") return "";

  const submissionId = String(submission.id);
  const messages = getSubmissionMessages(submissionId);
  const currentUserId = remote.user?.id ? String(remote.user.id) : "local-user";
  const noteId = `submission-chat-note-${submissionId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const title = context === "issuer" ? "応募者とのやり取り" : "発行者とのやり取り";
  const placeholder = context === "issuer" ? "日程候補や連絡先を返信" : "日程候補や連絡先を送信";

  return `
    <section class="submission-chat" data-submission-chat="${escapeHtml(submissionId)}">
      <div class="submission-chat-head">
        <span>${title}</span>
        <strong>${messages.length}件</strong>
      </div>
      <div class="submission-chat-log">
        ${
          messages.length
            ? messages
                .map((message) => {
                  const mine = String(message.sender_id || "") === currentUserId;
                  return `
                    <article class="submission-chat-message${mine ? " is-mine" : ""}">
                      <div>
                        <strong>${escapeHtml(mine ? "あなた" : message.senderName || "冒険者")}</strong>
                        <time>${formatDateTime(message.created_at)}</time>
                      </div>
                      <p>${escapeHtml(message.body)}</p>
                    </article>
                  `;
                })
                .join("")
            : `<p class="submission-chat-empty">まだコメントはありません。</p>`
        }
      </div>
      <div class="submission-chat-form">
        <textarea rows="2" data-submission-chat-body="${escapeHtml(submissionId)}" placeholder="${placeholder}"></textarea>
        <button class="btn btn-outline btn-sm" type="button" data-send-submission-message="${escapeHtml(submissionId)}" aria-describedby="${noteId}">
          <i data-lucide="send"></i>送信
        </button>
      </div>
      <p class="form-note" id="${noteId}" data-submission-chat-note="${escapeHtml(submissionId)}"></p>
    </section>
  `;
}

function scrollSubmissionChatsToLatest(root = document) {
  requestAnimationFrame(() => {
    root.querySelectorAll(".submission-chat-log").forEach((log) => {
      log.scrollTop = log.scrollHeight;
    });
  });
}

async function sendSubmissionMessage(submissionId, container = document) {
  const bodyEl = container.querySelector(`[data-submission-chat-body="${CSS.escape(String(submissionId))}"]`);
  const noteEl = container.querySelector(`[data-submission-chat-note="${CSS.escape(String(submissionId))}"]`);
  const body = String(bodyEl?.value || "").trim();
  const openApprovalPanelIds = getOpenApprovalPanelIds();

  if (!body) {
    if (noteEl) noteEl.textContent = "コメントを入力してください。";
    return;
  }

  if (remote.enabled) {
    if (!remote.user) {
      if (noteEl) noteEl.textContent = "コメント送信にはログインが必要です。";
      return;
    }

    const { error } = await supabaseClient.from("quest_submission_messages").insert({
      submission_id: submissionId,
      body,
    });

    if (error) {
      console.error("Failed to send submission message", error);
      if (noteEl) noteEl.textContent = getSubmissionMessageErrorMessage(error);
      return;
    }

    if (bodyEl) bodyEl.value = "";
    showToast("コメントを送信しました。");
    await refreshRemoteState();
    restoreOpenApprovalPanels(openApprovalPanelIds);
    return;
  }

  const key = String(submissionId);
  if (!state.submissionMessages[key]) state.submissionMessages[key] = [];
  state.submissionMessages[key].push({
    id: `local-message-${Date.now()}`,
    submission_id: key,
    sender_id: "local-user",
    senderName: getCurrentUserName(),
    body,
    created_at: new Date().toISOString(),
  });
  if (bodyEl) bodyEl.value = "";
  showToast("コメントを送信しました。");
  renderIssuedQuests();
  renderParticipantQuests();
}

function restoreOpenApprovalPanels(questIds) {
  if (!issuedQuestsEl || !questIds.length) return;
  questIds.forEach((questId) => {
    const panel = issuedQuestsEl.querySelector(`[data-approval-panel="${CSS.escape(String(questId))}"]`);
    if (panel) panel.hidden = false;
  });
  scrollSubmissionChatsToLatest(issuedQuestsEl);
}

function getParticipantQuestSubmissions(status) {
  if (remote.enabled) {
    return remote.participantSubmissions.filter((submission) => submission.status === status);
  }

  const demoItems = [
    {
      id: "demo-participant-pending-report",
      quest_id: 1,
      submission_type: "report",
      status: "pending",
      comment: "オンボーディング画面を確認し、初回ユーザー目線の感想を送りました。",
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    },
    {
      id: "demo-participant-pending-application",
      quest_id: 4,
      submission_type: "application",
      status: "pending",
      comment: "営業資料レビューに応募しました。平日夜で日程調整できます。",
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    },
    {
      id: "demo-participant-approved-application",
      quest_id: 2,
      submission_type: "application",
      status: "approved",
      comment: "ユーザーインタビューに応募し、発行者に承認されました。",
      reviewComment: "応募内容を確認しました。日程候補も具体的で助かります。よろしくお願いします。",
      reviewRating: 5,
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
      updated_at: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString(),
    },
  ];
  return demoItems.filter((submission) => submission.status === status);
}

function renderParticipantQuestList(targetEl, countEl, status) {
  if (!targetEl) return;

  const submissions = getParticipantQuestSubmissions(status);
  const isApproved = status === "approved";
  if (countEl) countEl.textContent = `${submissions.length}件`;

  if (!submissions.length) {
    targetEl.innerHTML = `
      <article class="empty-state">
        <h3>${isApproved ? "承認済みクエストはありません" : "承認待ちクエストはありません"}</h3>
        <p>${isApproved ? "発行者に承認されたクエストがここに表示されます。" : "応募や完了報告を送ると、発行者の承認待ちとしてここに表示されます。"}</p>
      </article>
    `;
    return;
  }

  targetEl.innerHTML = submissions
    .map((submission) => {
      const quest = state.quests.find((item) => String(item.id) === String(submission.quest_id));
      const title = quest?.title || "クエスト";
      const issuer = quest?.issuer || "冒険者";
      const reward = Number(quest?.reward) || 0;
      const typeLabel = getSubmissionTypeLabel(submission.submission_type);
      const statusLabel = isApproved ? "承認済み" : "承認待ち";
      const timeLabel = isApproved ? "更新" : "送信";
      const timeValue = isApproved ? submission.updated_at || submission.created_at : submission.created_at;
      const comment = submission.comment?.trim() || (isApproved ? "承認済みのクエストです。" : "発行者の承認を待っています。");
      const reviewComment = submission.reviewComment?.trim() || "";
      const detailHref = quest ? getQuestDetailUrl(quest.id) : "quests.html";

      return `
        <article class="participant-quest-card">
          <div class="quest-card-labels">
            <span class="quest-type-badge">${typeLabel}</span>
            <span class="quest-status-badge">${statusLabel}</span>
          </div>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(comment)}</p>
          ${
            isApproved && reviewComment
              ? `<div class="participant-review-comment">
                  <span>承認者コメント</span>
                  <p>${escapeHtml(reviewComment)}</p>
                </div>`
              : ""
          }
          <div class="quest-card-meta">
            <span>発行者: ${escapeHtml(issuer)}</span>
            <span>${reward}G</span>
            <span>${timeLabel}: ${formatDateTime(timeValue)}</span>
          </div>
          <div class="participant-quest-actions">
            <a class="btn btn-outline btn-sm" href="${escapeHtml(detailHref)}"><i data-lucide="external-link"></i>詳細</a>
          </div>
          ${!isApproved ? renderSubmissionChat(submission, "participant") : ""}
        </article>
      `;
    })
    .join("");

  if (window.lucide) lucide.createIcons();

  targetEl.querySelectorAll("[data-send-submission-message]").forEach((button) => {
    button.addEventListener("click", () => sendSubmissionMessage(button.dataset.sendSubmissionMessage, targetEl));
  });
  scrollSubmissionChatsToLatest(targetEl);
}

function renderParticipantQuests() {
  renderParticipantQuestList(participantPendingQuestsEl, participantPendingCountEl, "pending");
  renderParticipantQuestList(participantApprovedQuestsEl, participantApprovedCountEl, "approved");
}

function setQuestFormMode(quest = null) {
  state.editingQuestId = quest?.id || null;
  if (questFormTitleEl) questFormTitleEl.textContent = quest ? "クエスト編集" : "クエスト発行";
  if (questFormStatusEl) questFormStatusEl.textContent = quest ? "編集中" : "発行可能";
  if (questSubmitEl) {
    questSubmitEl.innerHTML = quest ? '<i data-lucide="save"></i>変更を保存' : '<i data-lucide="send"></i>発行する';
  }
  if (questEditCancelEl) questEditCancelEl.hidden = !quest;
  if (window.lucide) lucide.createIcons();
}

function resetQuestForm() {
  questForm?.reset();
  setQuestFormMode(null);
}

function navigateToQuestForm() {
  questForm?.closest(".workspace-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  questForm?.elements.title?.focus({ preventScroll: true });
}

function populateQuestForm(quest) {
  if (!questForm || !quest) return;
  questForm.elements.title.value = quest.title || "";
  questForm.elements.description.value = quest.description || "";
  questForm.elements.url.value = quest.url || "";
  questForm.elements.type.value = quest.type || "report";
  questForm.elements.capacity.value = getQuestCapacity(quest);
  questForm.elements.reward.value = String(quest.reward || 5);
  questForm.elements.category.value = quest.category || "フィードバックが欲しい";
  questForm.elements.tags.value = normalizeList(quest.tags).join(", ");
  questForm.elements.deadline_days.value = getDeadlineDaysValue(quest.deadline);
  setQuestFormMode(quest);
  navigateToQuestForm();
}

function renderAccountProfile() {
  const account = state.account;
  const accountEmail = remote.user?.email || "デモアカウント";

  if (accountInitialsEl) accountInitialsEl.textContent = account.initials;
  setTrustAvatarFrame(accountInitialsEl, state.trust);
  if (accountNameEl) accountNameEl.textContent = account.name;
  if (accountHeadlineEl) accountHeadlineEl.textContent = account.headline;
  if (profileSummaryEl) profileSummaryEl.textContent = account.summary;
  if (authAccountInitialsEl) authAccountInitialsEl.textContent = account.initials;
  setTrustAvatarFrame(authAccountInitialsEl, state.trust);
  if (authAccountNameEl) authAccountNameEl.textContent = account.name;
  if (authAccountHeadlineEl) authAccountHeadlineEl.textContent = account.headline;
  if (authAccountEmailEl) authAccountEmailEl.textContent = accountEmail;
  if (authProfileSummaryEl) authProfileSummaryEl.textContent = account.summary;

  if (profileSkillsEl) profileSkillsEl.innerHTML = createChips(account.strengths, "is-skill");
  if (authProfileSkillsEl) authProfileSkillsEl.innerHTML = createChips(account.strengths, "is-skill");
  if (profileInterestsEl) profileInterestsEl.innerHTML = createChips(account.interests);
  if (profileCategoriesEl) profileCategoriesEl.innerHTML = createChips(account.preferredCategories, "is-category");

  if (profileForm) {
    profileForm.elements.adventurer_name.value = account.name;
    profileForm.elements.headline.value = account.headline;
    profileForm.elements.summary.value = account.summary;
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
    matchSignalsEl.innerHTML = signals
      .map(([label, value]) => `<article><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></article>`)
      .join("");
  }

  if (categoryMatrixEl) {
    categoryMatrixEl.innerHTML = Object.entries(state.questTaxonomy)
      .map(([category, tags]) => {
        const isPreferred = account.preferredCategories.includes(category);
        const matchedTags = overlap(tags, account.preferredTags);
        return `
          <article class="${isPreferred ? "is-preferred" : ""}">
            <strong>${escapeHtml(category)}</strong>
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
            <span class="category">${escapeHtml(quest.category)}</span>
            <span class="rec-match-badge"><i data-lucide="sparkles"></i> ${match.score}% match</span>
          </div>
          <h3>${escapeHtml(quest.title)}</h3>
          <p>${escapeHtml(quest.description)}</p>
          <div class="rec-tags">${tags}</div>
          <div class="match-reason"><span>一致理由</span><strong>${escapeHtml(reason)}</strong></div>
          <div class="rec-quest-foot">
            <span class="rec-reward"><i data-lucide="coins"></i> ${quest.reward}G</span>
            <span class="rec-trust"><i data-lucide="shield-check"></i> +5 Trust</span>
            <a class="btn btn-primary btn-sm" href="${escapeHtml(getQuestDetailUrl(quest.id))}">詳細へ</a>
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
        <a class="quest-card quest-card-link latest-quest-card${closed ? " is-closed" : ""}" href="${escapeHtml(getQuestDetailUrl(quest.id))}">
          <div class="quest-main">
            <div class="quest-card-top">
              <div class="quest-card-labels">
                <span class="category">${escapeHtml(quest.category)}</span>
                <span class="quest-type-badge">${type.label}</span>
                ${closed ? `<span class="quest-status-badge">${type.closedLabel}</span>` : ""}
              </div>
              <strong class="gold">${quest.reward}G</strong>
            </div>
            <h3>${escapeHtml(quest.title)}</h3>
            <p class="quest-card-desc">${escapeHtml(quest.description)}</p>
            <div class="quest-card-meta">
              <span>発行者: ${renderIssuerButton(quest.issuer)}</span>
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
    el.innerHTML = `${state.trust} <small>T</small>`;
  });
  completedEls.forEach((el) => {
    el.innerHTML = `${state.completed} <small>件</small>`;
  });
  issuedEls.forEach((el) => {
    el.innerHTML = `${state.issued} <small>件</small>`;
  });
  totalQuestEls.forEach((el) => {
    el.textContent = state.quests.length;
  });
  if (formNote) formNote.textContent = `現在の残高: ${state.gold}G / 現在ランク: ${getRank(state.trust)}`;
  syncDashboardSummary();
  renderLatestQuestSlider();
  renderParticipantQuests();
  renderRecommendedQuests();
  renderIssuedQuests();
  renderClosedIssuedQuests();
  setTrustAvatarFrame(accountInitialsEl, state.trust);
  setTrustAvatarFrame(authAccountInitialsEl, state.trust);
}

function syncDashboardSummary() {
  const pendingCount = remote.enabled ? remote.pendingSubmissions.length : getLocalPendingApprovalCount();
  const openIssuedCount = remote.enabled
    ? state.quests.filter((quest) => quest.issuerId === remote.user?.id && !isQuestClosed(quest)).length
    : getIssuedQuests().length;
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
    nextRankTitleEl.textContent = rankInfo.next ? `${rankInfo.next.name}まであと${rankInfo.remaining}T` : "最高ランクに到達しています";
  }
  if (nextRankBarEl) nextRankBarEl.style.width = `${rankInfo.percent}%`;
  if (nextRankCopyEl) {
    nextRankCopyEl.textContent = rankInfo.next
      ? "クエストを達成するとTrustが積み上がります。"
      : "積み上げたTrustがギルド内の実績として表示されます。";
  }
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

function renderApprovalItems(quest, submissions) {
  if (!submissions.length) {
    return '<div class="approval-empty">このクエストへの応募・完了報告はまだありません。</div>';
  }

  return submissions
    .map((submission, index) => {
      const submissionId = escapeHtml(submission.id);
      const questId = escapeHtml(quest.id);
      const typeLabel = submission.submission_type === "report" ? "完了報告" : "応募";
      const comment = submission.comment?.trim() || "内容コメントはありません。";
      const evidenceUrl = normalizeQuestUrl(submission.evidence_url || "");
      const ratingOptions = TRUST_RATING_OPTIONS.map((option) => `<option value="${option.value}">${option.label}</option>`).join("");
      const noteId = `approval-note-${String(quest.id).replace(/[^a-zA-Z0-9_-]/g, "")}-${index}`;
      return `
        <article class="approval-item">
          <div class="approval-item-head">
            <div>
              <span class="approval-type">${typeLabel}</span>
              <h4>${escapeHtml(submission.adventurerName || "冒険者")}</h4>
              ${submission.adventurerHeadline ? `<p>${escapeHtml(submission.adventurerHeadline)}</p>` : ""}
            </div>
            <time>${formatDateTime(submission.created_at)}</time>
          </div>
          <div class="approval-comment">${escapeHtml(comment)}</div>
          ${
            evidenceUrl
              ? `<a class="approval-evidence" href="${escapeHtml(evidenceUrl)}" target="_blank" rel="noopener"><i data-lucide="image"></i>エビデンスを見る</a>`
              : ""
          }
          ${renderSubmissionChat(submission, "issuer")}
          <div class="approval-controls">
            <label>
              評価
              <select data-approval-rating="${submissionId}">${ratingOptions}</select>
            </label>
            <label>
              承認コメント
              <textarea rows="3" data-approval-comment="${submissionId}" placeholder="承認時のコメントを入力してください。"></textarea>
            </label>
          </div>
          <div class="approval-actions">
            <button class="btn btn-primary btn-sm" type="button" data-approve-submission="${submissionId}" data-approve-quest="${questId}" aria-describedby="${noteId}">
              <i data-lucide="badge-check"></i>承認する
            </button>
            <p class="form-note" id="${noteId}" data-approval-note="${submissionId}"></p>
          </div>
        </article>
      `;
    })
    .join("");
}

function getSubmissionStatusLabel(status) {
  if (status === "approved") return "承認済み";
  if (status === "rejected") return "却下";
  return "承認待ち";
}

function renderClosedSubmissionItems(submissions) {
  if (!submissions.length) {
    return '<div class="approval-empty">保存されている応募・完了報告はありません。</div>';
  }

  return submissions
    .map((submission) => {
      const typeLabel = getSubmissionTypeLabel(submission.submission_type);
      const statusLabel = getSubmissionStatusLabel(submission.status);
      const comment = submission.comment?.trim() || "内容コメントはありません。";
      const evidenceUrl = normalizeQuestUrl(submission.evidence_url || "");
      const reviewComment = submission.reviewComment?.trim() || "";
      const timeValue = submission.updated_at || submission.created_at;

      return `
        <article class="approval-item closed-submission-item">
          <div class="approval-item-head">
            <div>
              <span class="approval-type">${typeLabel}</span>
              <span class="quest-status-badge">${statusLabel}</span>
              <h4>${escapeHtml(submission.adventurerName || "冒険者")}</h4>
              ${submission.adventurerHeadline ? `<p>${escapeHtml(submission.adventurerHeadline)}</p>` : ""}
            </div>
            <time>${formatDateTime(timeValue)}</time>
          </div>
          <div class="approval-comment">${escapeHtml(comment)}</div>
          ${
            evidenceUrl
              ? `<a class="approval-evidence" href="${escapeHtml(evidenceUrl)}" target="_blank" rel="noopener"><i data-lucide="image"></i>エビデンスを見る</a>`
              : ""
          }
          ${
            reviewComment
              ? `<div class="closed-review-comment">
                  <span>承認コメント</span>
                  <p>${escapeHtml(reviewComment)}</p>
                </div>`
              : ""
          }
        </article>
      `;
    })
    .join("");
}

function renderIssuedQuests() {
  if (!issuedQuestsEl) return;

  const quests = getIssuedQuests();
  if (issuedListCountEl) issuedListCountEl.textContent = `${quests.length}件`;

  if (!quests.length) {
    issuedQuestsEl.innerHTML = `
      <article class="empty-state">
        <h3>発行中のクエストはありません</h3>
        <p>新しくクエストを発行すると、ここから編集や削除ができます。</p>
      </article>
    `;
    return;
  }

  issuedQuestsEl.innerHTML = quests
    .map((quest) => {
      const type = getQuestType(quest);
      const progress = Math.min(getQuestProgress(quest), getQuestCapacity(quest));
      const submissions = getQuestPendingSubmissions(quest);
      const approvalCount = submissions.length;
      return `
        <article class="issued-quest-card">
          <div class="issued-quest-main">
            <div class="quest-card-labels">
              <span class="category">${escapeHtml(quest.category)}</span>
              <span class="quest-type-badge">${type.label}</span>
              ${approvalCount ? `<span class="quest-status-badge">承認待ち ${approvalCount}件</span>` : ""}
            </div>
            <h3>${escapeHtml(quest.title)}</h3>
            <p>${escapeHtml(quest.description)}</p>
            <div class="quest-card-meta">
              <span>${quest.reward}G</span>
              <span>${type.metricLabel}: ${progress}/${getQuestCapacity(quest)}名</span>
              <span>締切: ${formatDate(quest.deadline)}</span>
            </div>
          </div>
          <div class="issued-quest-actions">
            <a class="btn btn-outline btn-sm" href="${escapeHtml(getQuestDetailUrl(quest.id))}" target="_blank" rel="noopener"><i data-lucide="external-link"></i>詳細</a>
            <button class="btn btn-primary btn-sm" type="button" data-toggle-approvals="${escapeHtml(quest.id)}" ${approvalCount ? "" : "disabled"}>
              <i data-lucide="badge-check"></i>承認${approvalCount ? ` (${approvalCount})` : ""}
            </button>
            <button class="btn btn-outline btn-sm" type="button" data-edit-issued="${escapeHtml(quest.id)}"><i data-lucide="pencil"></i>編集</button>
            <button class="btn btn-danger btn-sm" type="button" data-delete-issued="${escapeHtml(quest.id)}"><i data-lucide="trash-2"></i>削除</button>
          </div>
          <div class="approval-panel" data-approval-panel="${escapeHtml(quest.id)}" hidden>
            <div class="approval-panel-head">
              <div>
                <span class="eyebrow">APPROVAL</span>
                <h4>届いている応募・完了報告</h4>
              </div>
              <span class="status-pill">${approvalCount}件</span>
            </div>
            ${renderApprovalItems(quest, submissions)}
          </div>
        </article>
      `;
    })
    .join("");

  issuedQuestsEl.querySelectorAll("[data-toggle-approvals]").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = issuedQuestsEl.querySelector(`[data-approval-panel="${CSS.escape(button.dataset.toggleApprovals)}"]`);
      if (!panel) return;
      panel.hidden = !panel.hidden;
      if (!panel.hidden) scrollSubmissionChatsToLatest(panel);
    });
  });

  issuedQuestsEl.querySelectorAll("[data-approve-submission]").forEach((button) => {
    button.addEventListener("click", () => {
      const submissionId = button.dataset.approveSubmission;
      approveSubmissionFromIssuedCard(button.dataset.approveQuest, submissionId);
    });
  });

  issuedQuestsEl.querySelectorAll("[data-send-submission-message]").forEach((button) => {
    button.addEventListener("click", () => sendSubmissionMessage(button.dataset.sendSubmissionMessage, issuedQuestsEl));
  });

  issuedQuestsEl.querySelectorAll("[data-edit-issued]").forEach((button) => {
    button.addEventListener("click", () => {
      const quest = state.quests.find((item) => String(item.id) === String(button.dataset.editIssued));
      populateQuestForm(quest);
    });
  });

  issuedQuestsEl.querySelectorAll("[data-delete-issued]").forEach((button) => {
    button.addEventListener("click", () => deleteIssuedQuest(button.dataset.deleteIssued));
  });

  if (window.lucide) lucide.createIcons();
  scrollSubmissionChatsToLatest(issuedQuestsEl);
}

function renderClosedIssuedQuests() {
  if (!closedIssuedQuestsEl) return;

  const quests = getClosedIssuedQuests();
  if (closedIssuedCountEl) closedIssuedCountEl.textContent = `${quests.length}件`;

  if (!quests.length) {
    closedIssuedQuestsEl.innerHTML = `
      <article class="empty-state">
        <h3>クローズ済みクエストはありません</h3>
        <p>募集人数に達したクエストや受付終了したクエストがここに表示されます。</p>
      </article>
    `;
    return;
  }

  closedIssuedQuestsEl.innerHTML = quests
    .map((quest) => {
      const type = getQuestType(quest);
      const progress = Math.min(getQuestProgress(quest), getQuestCapacity(quest));
      const submissions = getQuestIssuerSubmissions(quest);
      const submissionCount = submissions.length;
      return `
        <article class="closed-quest-card">
          <div class="closed-quest-main">
            <div class="quest-card-labels">
              <span class="category">${escapeHtml(quest.category)}</span>
              <span class="quest-type-badge">${type.label}</span>
              <span class="quest-status-badge">${type.closedLabel}</span>
              ${submissionCount ? `<span class="quest-status-badge">提出 ${submissionCount}件</span>` : ""}
            </div>
            <h3>${escapeHtml(quest.title)}</h3>
            <p>${escapeHtml(quest.description)}</p>
            <div class="quest-card-meta">
              <span>${quest.reward}G</span>
              <span>${type.metricLabel}: ${progress}/${getQuestCapacity(quest)}名</span>
              <span>締切: ${formatDate(quest.deadline)}</span>
            </div>
          </div>
          <div class="closed-quest-actions">
            <a class="btn btn-outline btn-sm" href="${escapeHtml(getQuestDetailUrl(quest.id))}" target="_blank" rel="noopener"><i data-lucide="external-link"></i>詳細</a>
            <button class="btn btn-outline btn-sm" type="button" data-toggle-closed-submissions="${escapeHtml(quest.id)}" ${submissionCount ? "" : "disabled"}>
              <i data-lucide="message-square-text"></i>提出内容${submissionCount ? ` (${submissionCount})` : ""}
            </button>
          </div>
          <div class="approval-panel closed-submission-panel" data-closed-submission-panel="${escapeHtml(quest.id)}" hidden>
            <div class="approval-panel-head">
              <div>
                <span class="eyebrow">SUBMISSIONS</span>
                <h4>応募・完了報告の内容</h4>
              </div>
              <span class="status-pill">${submissionCount}件</span>
            </div>
            ${renderClosedSubmissionItems(submissions)}
          </div>
        </article>
      `;
    })
    .join("");

  closedIssuedQuestsEl.querySelectorAll("[data-toggle-closed-submissions]").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = closedIssuedQuestsEl.querySelector(`[data-closed-submission-panel="${CSS.escape(button.dataset.toggleClosedSubmissions)}"]`);
      if (!panel) return;
      panel.hidden = !panel.hidden;
    });
  });

  if (window.lucide) lucide.createIcons();
}

function filteredQuests() {
  const category = categoryFilter?.value || "all";
  const keyword = (keywordFilter?.value || "").trim().toLowerCase();
  const activeTab = state.questListTab || "new";

  const quests = state.quests
    .filter((quest) => {
      updateQuestStatus(quest);
      const closed = isQuestClosed(quest);
      let tabMatch = !closed;
      if (activeTab === "closed") tabMatch = closed;
      if (activeTab === "recruiting") tabMatch = !closed && quest.type === "recruiting";
      if (activeTab === "report") tabMatch = !closed && quest.type === "report";
      if (activeTab === "multi") tabMatch = !closed && getQuestCapacity(quest) >= 6;
      const categoryMatch = category === "all" || quest.category === category;
      const keywordText = `${quest.title} ${quest.issuer} ${quest.description} ${(quest.tags || []).join(" ")} ${(quest.skills || []).join(" ")}`.toLowerCase();
      return tabMatch && categoryMatch && (!keyword || keywordText.includes(keyword));
    });

  return quests.sort((a, b) => state.quests.indexOf(a) - state.quests.indexOf(b));
}

function renderQuestList() {
  if (!questList) return;

  const quests = filteredQuests();
  questList.innerHTML = "";
  questTabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.questTab === state.questListTab);
  });

  if (!quests.length) {
    const emptyCopy = state.questListTab === "closed" ? "クローズ済みのクエストはありません。" : "カテゴリやキーワードを変更してください。";
    questList.innerHTML = `<article class="quest-card"><div class="quest-main"><h3>該当するクエストがありません</h3><p>${emptyCopy}</p></div></article>`;
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
            <span class="category">${escapeHtml(quest.category)}</span>
            <span class="quest-type-badge">${type.label}</span>
            ${closed ? `<span class="quest-status-badge">${type.closedLabel}</span>` : ""}
          </div>
          <strong class="gold">${quest.reward}G</strong>
        </div>
        <h3>${escapeHtml(quest.title)}</h3>
        <p class="quest-card-desc">${escapeHtml(quest.description)}</p>
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
    if (issuerProfileEl) {
      issuerProfileEl.hidden = true;
      issuerProfileEl.innerHTML = "";
    }
    if (window.lucide) lucide.createIcons();
    return;
  }

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
        <strong><a class="detail-link" href="${escapeHtml(referenceUrl)}" target="_blank" rel="noopener">開く</a></strong>
      </div>
    `
    : "";
  const screenshotUrl = normalizeQuestUrl(quest.screenshot?.url || "");
  const screenshotPreview = screenshotUrl
    ? `
      <section class="quest-attachment-preview">
        <div>
          <span class="panel-label">SCREENSHOT</span>
          <h3>添付スクショ</h3>
          <p>${escapeHtml(quest.screenshot.name || "添付画像")}</p>
        </div>
        <img src="${escapeHtml(screenshotUrl)}" alt="クエスト発行時に添付されたスクショ" />
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
        <div class="report-evidence-box">
          <label for="questApplicationComment">応募メッセージ</label>
          <textarea id="questApplicationComment" rows="4" data-application-comment ${closed ? "disabled" : ""} placeholder="対応できる内容、希望日程、発行者に伝えたいこと"></textarea>
        </div>
        <button class="btn btn-primary" type="button" data-apply ${closed ? "disabled" : ""}>${closed ? type.closedLabel : type.actionLabel}</button>
      `;
  const issuerProfileMarkup = renderIssuerProfile(quest.issuer);

  questDetail.innerHTML = `
    <div class="quest-detail-head">
      <div class="quest-card-labels">
        <span class="category">${escapeHtml(quest.category)}</span>
        <span class="quest-type-badge">${type.label}</span>
        ${closed ? `<span class="quest-status-badge">${type.closedLabel}</span>` : ""}
      </div>
      <strong class="gold detail-gold">${quest.reward}G</strong>
    </div>
    <h2>${escapeHtml(quest.title)}</h2>
    <p class="quest-detail-desc">${escapeHtml(quest.description)}</p>
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
    ${actionArea}
  `;

  if (issuerProfileEl) {
    issuerProfileEl.hidden = false;
    issuerProfileEl.innerHTML = issuerProfileMarkup;
  }

  questDetail.querySelector("[data-apply]")?.addEventListener("click", async () => {
    if (isQuestClosed(quest)) return;
    if (quest.type === "report") {
      if (remote.enabled) {
        if (!remote.user) {
          showToast("完了報告にはログインが必要です。");
          return;
        }
        if (isOwnQuest(quest)) {
          showToast(SELF_SUBMISSION_MESSAGE);
          return;
        }
      }
      const evidence = questDetail.querySelector("[data-evidence]");
      if (!evidence?.files?.length) {
        showToast("スクショ画面のエビデンスを添付してください。");
        return;
      }
      if (remote.enabled) {
        const comment = questDetail.querySelector("[data-report-comment]")?.value || "";
        let evidenceUrl = "";
        try {
          evidenceUrl = await uploadQuestAsset(evidence.files[0], "evidence");
        } catch (error) {
          showToast(getStorageErrorMessage(error, "エビデンスをアップロードできませんでした。"));
          return;
        }
        const { error } = await supabaseClient.rpc("submit_quest", {
          p_quest_id: quest.id,
          p_submission_type: "report",
          p_comment: comment,
          p_evidence_url: evidenceUrl,
        });
        if (error) {
          showToast(getSubmitQuestErrorMessage(error, "完了報告を送信できませんでした。"));
          return;
        }
        trackAnalytics("quest_report_submit", {
          mode: "remote",
          quest_id: String(quest.id),
          category: quest.category,
          reward: Number(quest.reward) || 0,
        });
        showToast("完了報告を送信しました。発行者の承認を待ちます。");
        await refreshRemoteState();
        return;
      }
      quest.applicants += 1;
      quest.comments.unshift("スクショ付きの完了報告が送信されました。承認待ちです。");
      trackAnalytics("quest_report_submit", {
        mode: "demo",
        quest_id: String(quest.id),
        category: quest.category,
        reward: Number(quest.reward) || 0,
      });
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
      if (isOwnQuest(quest)) {
        showToast(SELF_SUBMISSION_MESSAGE);
        return;
      }
      const { error } = await supabaseClient.rpc("submit_quest", {
        p_quest_id: quest.id,
        p_submission_type: "application",
        p_comment: questDetail.querySelector("[data-application-comment]")?.value || "応募しました。",
        p_evidence_url: "",
      });
      if (error) {
        showToast(getSubmitQuestErrorMessage(error, "応募できませんでした。"));
        return;
      }
      trackAnalytics("quest_application_submit", {
        mode: "remote",
        quest_id: String(quest.id),
        category: quest.category,
        reward: Number(quest.reward) || 0,
      });
      showToast("応募しました。発行者との約束を進めてください。");
      await refreshRemoteState();
      return;
    }
    quest.applicants += 1;
    updateQuestStatus(quest);
    trackAnalytics("quest_application_submit", {
      mode: "demo",
      quest_id: String(quest.id),
      category: quest.category,
      reward: Number(quest.reward) || 0,
    });
    showToast(isQuestClosed(quest) ? "募集人数に達したため、応募受付を停止しました。" : "応募しました。発行者との約束を進めてください。");
    renderQuestList();
    renderQuestDetail(quest);
  });
}

function selectQuest(id) {
  state.selectedQuestId = id;
  renderQuestList();
}

function renderQuestDetailPage() {
  if (!questDetail) return;
  const questId = new URLSearchParams(window.location.search).get("id");
  const quest =
    state.quests.find((item) => String(item.id) === String(questId)) ||
    (!questId ? state.quests.find((item) => item.id === state.selectedQuestId) || state.quests[0] : null);
  if (quest) {
    state.selectedQuestId = quest.id;
    document.title = `${quest.title} | ソロプレナー・ギルド`;
  }
  renderQuestDetail(quest);
}

function renderIssuerProfile(name) {
  const issuerName = name || "冒険者";
  const profile = getIssuerProfile(issuerName);
  const safeIssuerName = escapeHtml(issuerName);

  if (!profile) {
    return `
      <section class="issuer-profile-card">
        <div class="issuer-profile-head">
          <div class="issuer-avatar trust-avatar trust-rank-apprentice" title="見習い冒険者">${escapeHtml(issuerName.slice(0, 1))}</div>
          <div>
            <span class="eyebrow">Issuer Profile</span>
            <h3>${safeIssuerName}</h3>
          </div>
        </div>
        <p>この発行者のプロフィール情報はまだ登録されていません。</p>
      </section>
    `;
  }

  return `
    <section class="issuer-profile-card">
      <div class="issuer-profile-head">
        <div class="issuer-avatar trust-avatar ${getTrustRankFrame(profile.trust)}" title="${getRank(profile.trust)}">${escapeHtml(profile.initials)}</div>
        <div>
          <span class="eyebrow">Issuer Profile</span>
          <h3>${safeIssuerName}</h3>
          <p>${escapeHtml(profile.headline)}</p>
        </div>
      </div>
      <p>${escapeHtml(profile.summary)}</p>
      <dl class="issuer-profile-stats">
        <div><dt>Trust</dt><dd>${Number(profile.trust) || 0}</dd></div>
        <div><dt>完了</dt><dd>${Number(profile.completed) || 0}</dd></div>
        <div><dt>発行</dt><dd>${Number(profile.issued) || 0}</dd></div>
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
  const deadline = getQuestDeadlineDate(data.get("deadline_days"));
  const screenshotFile = data.get("screenshot");
  const screenshot =
    screenshotFile instanceof File && screenshotFile.size > 0
      ? {
          name: screenshotFile.name,
          url: URL.createObjectURL(screenshotFile),
        }
      : null;

  if (!Number.isInteger(reward) || reward < 5 || reward > 50 || reward % 5 !== 0) {
    formNote.textContent = "報酬Goldは5G単位で5Gから50Gまでを選んでください。";
    return;
  }

  if (!Number.isInteger(capacity) || capacity < 1 || capacity > 50) {
    formNote.textContent = "募集人数は1名から50名までで入力してください。";
    return;
  }

  if (!deadline) {
    formNote.textContent = "締切は3日後から30日後までの選択肢から選んでください。";
    return;
  }

  const selectedCategory = data.get("category");
  const tags = unique([...(state.questTaxonomy[selectedCategory] || []).slice(0, 2), ...normalizeList(data.get("tags"))]);
  const editingQuest = state.editingQuestId
    ? state.quests.find((quest) => String(quest.id) === String(state.editingQuestId))
    : null;

  if (state.editingQuestId && !editingQuest) {
    formNote.textContent = "編集中のクエストが見つかりません。";
    resetQuestForm();
    return;
  }

  if (!editingQuest && escrowGold > state.gold) {
    formNote.textContent = `残高不足です。現在のGoldは${state.gold}Gです。`;
    return;
  }

  if (editingQuest && !remote.enabled) {
    const escrowDelta = escrowGold - getQuestEscrow(editingQuest);
    if (escrowDelta > state.gold) {
      formNote.textContent = `追加で${escrowDelta}Gが必要です。現在のGoldは${state.gold}Gです。`;
      return;
    }
  }

  if (remote.enabled) {
    if (!remote.user) {
      formNote.textContent = editingQuest ? "クエスト編集にはログインが必要です。" : "クエスト発行にはログインが必要です。";
      return;
    }

    let screenshotUrl = "";
    try {
      screenshotUrl = await uploadQuestAsset(screenshotFile, "quest-screenshots");
    } catch (error) {
      formNote.textContent = getStorageErrorMessage(error, "スクショをアップロードできませんでした。");
      return;
    }

    const payload = {
      p_title: data.get("title"),
      p_description: data.get("description"),
      p_reward: reward,
      p_category: selectedCategory,
      p_quest_type: type,
      p_capacity: capacity,
      p_deadline: deadline,
      p_tags: tags,
      p_reference_url: normalizeQuestUrl(data.get("url")),
      p_screenshot_url: screenshotUrl || editingQuest?.screenshot?.url || "",
    };
    const { error } = editingQuest
      ? await supabaseClient.rpc("update_quest", { p_quest_id: editingQuest.id, ...payload })
      : await supabaseClient.rpc("issue_quest", payload);

    if (error) {
      formNote.textContent = getQuestSaveErrorMessage(error, Boolean(editingQuest));
      return;
    }

    trackAnalytics(editingQuest ? "quest_update_success" : "quest_issue_success", {
      mode: "remote",
      quest_type: type,
      reward,
      capacity,
      category: selectedCategory,
    });

    formNote.textContent = editingQuest
      ? "クエストを更新しました。"
      : `${escrowGold}Gを確保して${QUEST_TYPES[type].label}クエストを発行しました。`;
    resetQuestForm();
    await refreshRemoteState();
    return;
  }

  if (editingQuest) {
    const escrowDelta = escrowGold - getQuestEscrow(editingQuest);
    state.gold -= escrowDelta;
    Object.assign(editingQuest, {
      type,
      title: data.get("title"),
      reward,
      category: selectedCategory,
      tags,
      skills: overlap(tags, state.account.strengths),
      deadline,
      capacity,
      description: data.get("description"),
      url: normalizeQuestUrl(data.get("url")),
      screenshot: screenshot || editingQuest.screenshot,
    });
    syncStats();
    renderQuestList();
    renderQuestDetailPage();
    renderAccountProfile();
    trackAnalytics("quest_update_success", {
      mode: "demo",
      quest_type: type,
      reward,
      capacity,
      category: selectedCategory,
    });
    formNote.textContent = "クエストを更新しました。";
    resetQuestForm();
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
    deadline,
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
  syncStats();
  renderQuestList();
  renderAccountProfile();
  trackAnalytics("quest_issue_success", {
    mode: "demo",
    quest_type: type,
    reward,
    capacity,
    category: selectedCategory,
  });
  formNote.textContent = `${escrowGold}Gを確保して${getQuestType(quest).label}クエストを発行しました。`;
  resetQuestForm();
});

questEditCancelEl?.addEventListener("click", () => {
  resetQuestForm();
  if (formNote) formNote.textContent = `現在の残高: ${state.gold}G / 現在ランク: ${getRank(state.trust)}`;
});

async function deleteIssuedQuest(questId) {
  const quest = state.quests.find((item) => String(item.id) === String(questId));
  if (!quest) return;

  const confirmed = window.confirm(`「${quest.title}」を削除します。よろしいですか？`);
  if (!confirmed) return;

  if (!remote.enabled && Number(quest.approvedReports) > 0) {
    if (formNote) formNote.textContent = "承認済みのあるクエストは削除できません。";
    return;
  }

  if (remote.enabled) {
    if (!remote.user) {
      if (formNote) formNote.textContent = "クエスト削除にはログインが必要です。";
      return;
    }

    const { error } = await supabaseClient.rpc("delete_quest", { p_quest_id: quest.id });
    if (error) {
      if (formNote) formNote.textContent = getDeleteQuestErrorMessage(error);
      return;
    }

    if (state.editingQuestId && String(state.editingQuestId) === String(quest.id)) resetQuestForm();
    if (formNote) formNote.textContent = "発行中クエストを削除しました。未消化のGoldを戻しました。";
    await refreshRemoteState();
    return;
  }

  state.gold += getRefundableEscrow(quest);
  state.issued = Math.max(0, state.issued - 1);
  state.quests = state.quests.filter((item) => String(item.id) !== String(quest.id));
  if (state.selectedQuestId === quest.id) state.selectedQuestId = state.quests[0]?.id || null;
  if (state.editingQuestId && String(state.editingQuestId) === String(quest.id)) resetQuestForm();
  syncStats();
  renderQuestList();
  renderQuestDetailPage();
  renderAccountProfile();
  if (formNote) formNote.textContent = "クエストを削除しました。未消化のGoldを戻しました。";
}

function ratingFromTrustBonus(value) {
  const bonus = Number(value);
  if (bonus >= 10) return 5;
  if (bonus >= 8) return 4;
  if (bonus >= 5) return 3;
  if (bonus >= 2) return 2;
  return 1;
}

async function approveQuestSubmission({ questId, submissionId, trustBonus, comment, noteEl }) {
  const gainedTrust = 5 + trustBonus;

  if (remote.enabled) {
    if (!remote.user) {
      if (noteEl) noteEl.textContent = "承認にはログインが必要です。";
      return;
    }

    const { error } = await supabaseClient.rpc("approve_submission", {
      p_submission_id: submissionId,
      p_rating: ratingFromTrustBonus(trustBonus),
      p_comment: comment || "",
    });

    if (error) {
      if (noteEl) noteEl.textContent = getApprovalErrorMessage(error);
      return;
    }

    showToast(`承認完了。達成者へ報酬Goldと${gainedTrust} Trustを付与しました。`);
    await refreshRemoteState();
    return;
  }

  const quest = state.quests.find((item) => String(item.id) === String(questId));
  if (!quest) {
    if (noteEl) noteEl.textContent = "承認できるクエストがありません。";
    return;
  }

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
  showToast(`承認完了。ローカルデモでは達成者への${Number(quest.reward) || 0}Gと${gainedTrust} Trust付与は表示のみです。${closeMessage}`);
  renderIssuedQuests();
}

function approveSubmissionFromIssuedCard(questId, submissionId) {
  if (!submissionId) return;
  const ratingEl = issuedQuestsEl?.querySelector(`[data-approval-rating="${CSS.escape(submissionId)}"]`);
  const commentEl = issuedQuestsEl?.querySelector(`[data-approval-comment="${CSS.escape(submissionId)}"]`);
  const noteEl = issuedQuestsEl?.querySelector(`[data-approval-note="${CSS.escape(submissionId)}"]`);
  approveQuestSubmission({
    questId,
    submissionId,
    trustBonus: Number(ratingEl?.value || 10),
    comment: commentEl?.value || "",
    noteEl,
  });
}

categoryFilter?.addEventListener("change", renderQuestList);
keywordFilter?.addEventListener("input", renderQuestList);
questTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.questListTab = button.dataset.questTab || "new";
    renderQuestList();
  });
});

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

registerCta?.addEventListener("click", () => {
  trackAnalytics("cta_register_click", { location: "hero" });
});

registerForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!remote.enabled) {
    if (canUseLocalDemoData()) {
      trackAnalytics("sign_up_demo_redirect", { source: "register_form" });
      setAuthNote("Supabase未設定のため、デモのマイページへ移動します。");
      window.location.href = "mypage.html";
      return;
    }
    trackAnalytics("sign_up_error", { reason: "supabase_not_configured" });
    setAuthNote("Supabaseが未設定です。管理者に環境変数の設定を確認してください。");
    return;
  }

  if (remote.user) {
    trackAnalytics("sign_up_skip_already_signed_in", { source: "register_form" });
    setAuthNote("すでにログイン中です。マイページへ移動します。");
    window.location.href = "mypage.html";
    return;
  }

  const data = new FormData(registerForm);
  const email = data.get("email");
  const password = data.get("password");
  const job = String(data.get("job") || "").trim();
  const metadata = {
    adventurer_name: data.get("name"),
    job,
    skills: String(data.get("skills") || "").trim(),
    headline: job || "ソロプレナー",
  };

  const { data: signUpData, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: { data: metadata },
  });

  if (error) {
    if (isAlreadyRegisteredError(error)) {
      trackAnalytics("sign_up_error", { reason: "already_registered" });
      setAuthNote("このメールアドレスはすでに登録済みです。登録済みの方はログインしてください。");
      return;
    }

    trackAnalytics("sign_up_error", { reason: "auth_error" });
    setAuthNote(getAuthErrorMessage(error, "登録できませんでした。"));
    return;
  }

  if (isDuplicateSignupResponse(signUpData)) {
    trackAnalytics("sign_up_error", { reason: "duplicate_signup_response" });
    setAuthNote("このメールアドレスはすでに登録済みです。登録済みの方はログインしてください。");
    return;
  }

  if (signUpData?.session) {
    trackAnalytics("sign_up_success", { method: "password", auto_signed_in: true });
    setAuthNote("登録しました。マイページへ移動します。");
    window.location.href = "mypage.html";
    return;
  }

  trackAnalytics("sign_up_success", { method: "password", auto_signed_in: false });

  setAuthNote("登録しました。確認メールを開いて認証を完了してからログインしてください。");
});

authForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!remote.enabled) {
    if (canUseLocalDemoData()) {
      trackAnalytics("login_demo_redirect", { source: "login_form" });
      setAuthNote("Supabase未設定のため、デモのマイページへ移動します。");
      window.location.href = "mypage.html";
      return;
    }
    trackAnalytics("login_error", { reason: "supabase_not_configured" });
    setAuthNote("Supabaseが未設定です。管理者に環境変数の設定を確認してください。");
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
      trackAnalytics("login_error", { reason: "email_not_confirmed" });
      setAuthNote(
        resent
          ? "メール認証が未完了です。確認メールを再送しました。メール内のリンクで認証してからログインしてください。"
          : "メール認証が未完了です。登録時の確認メールを開いて認証してからログインしてください。"
      );
      return;
    }
    trackAnalytics("login_error", { reason: "auth_error" });
    setAuthNote(getAuthErrorMessage(error, "ログインできませんでした。"));
    return;
  }

  trackAnalytics("login_success", { method: "password" });
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
    skills: normalizeList(data.get("skills")),
    interests: normalizeList(data.get("interests")),
  };

  if (!remote.enabled) {
    state.account = mapProfile(nextProfile);
    renderAccountProfile();
    renderRecommendedQuests();
    trackAnalytics("profile_save", { mode: "demo" });
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
    if (profileNoteEl) profileNoteEl.textContent = getProfileSaveErrorMessage(error);
    return;
  }

  trackAnalytics("profile_save", { mode: "remote" });
  if (profileNoteEl) profileNoteEl.textContent = "プロフィールを保存しました。";
  await refreshRemoteState();
});

signoutBtn?.addEventListener("click", async () => {
  if (!remote.enabled) return;
  trackAnalytics("logout", { source: "mypage" });
  clearSubmissionMessageRealtime();
  await supabaseClient.auth.signOut();
  remote.user = null;
  remote.profile = null;
  remote.issuerSubmissions = [];
  remote.pendingSubmissions = [];
  remote.participantSubmissions = [];
  remote.submissionMessages = {};
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

  if (!remote.enabled) {
    if (canUseLocalDemoData()) {
      renderAccountProfile();
      syncStats();
      renderQuestList();
      renderQuestDetailPage();
      updateMissionUI();
      updateWeeklyChallenge();
      setAuthNote("Supabase未設定のため、デモデータで動作しています。");
      return;
    }

    clearDemoStateForProduction();
    setAuthStatus("未接続");
    renderAccountProfile();
    syncStats();
    renderQuestList();
    renderQuestDetailPage();
    updateMissionUI();
    updateWeeklyChallenge();
    setAuthNote("Supabaseが未設定です。Vercelの環境変数を確認してください。");
    return;
  }

  try {
    setAuthStatus("読込中");
    await refreshRemoteState();
    updateMissionUI();
    updateWeeklyChallenge();
  } catch (error) {
    console.error(error);
    clearDemoStateForProduction();
    setAuthStatus("接続エラー");
    renderAccountProfile();
    syncStats();
    renderQuestList();
    renderQuestDetailPage();
    updateMissionUI();
    updateWeeklyChallenge();
    setAuthNote(getDataLoadErrorMessage(error));
  }
}

initApp();
