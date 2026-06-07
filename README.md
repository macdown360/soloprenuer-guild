# soloprenuer-guild

ソロプレナー・ギルドは、一人起業家、フリーランス、個人開発者、副業家が集まるオンライン上の冒険者ギルドです。

案件マッチングサイトではなく、クエストを通じて小さな協力を依頼し、達成し、信頼を積み上げるコミュニティプラットフォームとして設計しています。

## MVPの核

- クエストを投稿できる
- クエストに応募し、達成できる
- 発行者が完了を承認できる
- Gold報酬とTrustが反映される
- 5段階評価で追加Trustが付与される

最重要ループは「クエスト投稿 → クエスト達成 → 信頼獲得」です。

## ポイント設計

- Gold: クエスト発行に使う通貨。新規登録で100G付与され、クエスト達成などで増えます。
- Trust: 譲渡不可、売買不可の信用スコア。ランクと信頼度表示に使います。

MVPの最重要ルールは、Goldは増減し、Trustは蓄積することです。

## 画面

- `index.html`: トップページ、最新クエスト、ランキング、登録導線
- `quests.html`: クエスト検索、カテゴリ絞り込み、一覧、詳細、応募
- `dashboard.html`: マイページ、クエスト作成、完了承認、評価
- `charter.html`: ギルド憲章、ポイントルール、不正対策

静的HTML/CSS/JavaScriptで構成しています。Supabase未設定時はデモデータで動作し、Supabaseを設定すると本番データへ切り替わります。

## Supabase / Vercel リリース手順

1. Supabaseプロジェクトを作成し、SQL Editorで `supabase/schema.sql` を実行します。
2. Authenticationのメール設定を確認します。メール確認を必須にする場合、登録後は確認メール経由でログインします。
3. VercelのEnvironment Variablesに以下を設定します。
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
4. Vercelへデプロイします。`npm run build` が `supabase-env.js` を生成し、フロントからSupabaseへ接続します。

## 実装済みの本番機能

- 冒険者アカウント登録・ログイン・ログアウト
- プロフィール、Gold、Trust、完了数、発行数のSupabase同期
- クエスト発行時のGold確保
- クエスト一覧・詳細のSupabase表示
- 応募型クエストへの応募
- 完了報告型クエストのエビデンス画像アップロードと報告
- 発行者による承認、5段階評価、報酬GoldとTrustの反映
- Gold/Trust台帳、レビュー台帳、RLS、Storageバケット
