# Laravel 11 + Vue 3 フォームサンプル with PHPUnit & Vitest

このリポジトリは、Laravel 11（API）と Vue 3（SPA）を用いた簡単なフォーム送信アプリです。PHPUnitとVitestを使用したテスト環境を整備しています。

## 構成技術

- Laravel 11 (APIバックエンド)
- Vue 3 + Vite (フロントエンド)
- Docker / Docker Compose
- PHPUnit (Laravelのユニットテスト)
- Vitest (Vueのユニットテスト)
- MySQL

---

## ディレクトリ構成（例）

project-root/<br/>
┣ backend/ # Laravelアプリ<br/>
┣ frontend/ # Vue 3 アプリ<br/>
┣ docker-compose.yml<br/>
┗ README.md<br/>

---

## 初期セットアップ手順

### 1. Dockerで環境構築

```bash
docker compose up -d --build