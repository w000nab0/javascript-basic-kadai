const today = new Date();

const year = today.getFullYear();         // 年（例：2025）
const month = today.getMonth() + 1;       // 月（0〜11 → 1〜12にするため +1）
const day = today.getDate();              // 日（1〜31）

console.log(` ${year}年${month}月${day}日 `);