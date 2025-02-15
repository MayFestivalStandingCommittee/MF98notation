'use client';

import expressions from '@/data/expressions.json';
import { useMemo, useState } from 'react';

// 各ルールの型定義
type ExpressionRule = {
  wrong: string[];
  correct: string[];
};

type ExpressionsData = {
  [key: string]: ExpressionRule;
};

export type Match = {
  start: number;
  end: number;
  ruleKey: string;
  wrongText: string;
  suggested: string;
};

// 正規表現で特殊文字をエスケープする補助関数
function escapeRegExp(text: string): string {
  return text.replace(/[.()]/g, '\\$&');
}

// 入力テキスト内の各誤表記のマッチ情報を取得する関数
function findMatches(text: string, rules: ExpressionsData): Match[] {
  const matches: Match[] = [];
  Object.entries(rules).forEach(([key, rule]) => {
    rule.wrong.forEach((wrong) => {
      const regex = new RegExp(escapeRegExp(wrong), 'g');
      let match;
      while ((match = regex.exec(text)) !== null) {
        matches.push({
          start: match.index,
          end: match.index + wrong.length,
          ruleKey: key,
          wrongText: match[0],
          // 正しい表記は候補の先頭を採用
          suggested: rule.correct[0],
        });
      }
    });
  });
  // マッチ位置でソート
  matches.sort((a, b) => a.start - b.start);
  return matches;
}

// 個別の誤表記を置換できるよう、ホバー時にツールップを表示するコンポーネント
function HighlightSpan({
  match,
  children,
  onReplace,
}: {
  match: Match;
  children: React.ReactNode;
  onReplace: () => void;
}) {
  return (
    <span className="bg-blue-100 cursor-pointer relative group rounded px-1 line-through">
      {children}
      <div className="absolute z-10 bottom-full left-0 mb-1 hidden group-hover:block">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onReplace();
          }}
          className="bg-blue-500 text-white text-xs px-2 py-1 rounded shadow"
        >
          置換
        </button>
      </div>
    </span>
  );
}

// テキストとマッチ情報から、ハイライト表示用の React ノード群を生成
function highlightText(
  text: string,
  matches: Match[],
  onReplaceOccurrence: (match: Match) => void,
) {
  const nodes = [];
  let lastIndex = 0;
  matches.forEach((match, i) => {
    // 重なりがあればスキップ
    if (match.start < lastIndex) return;
    // マッチ手前のテキスト
    if (match.start > lastIndex) {
      nodes.push(text.substring(lastIndex, match.start));
    }
    // 個別置換可能なハイライト部分
    nodes.push(
      <HighlightSpan
        key={i}
        match={match}
        onReplace={() => onReplaceOccurrence(match)}
      >
        {text.substring(match.start, match.end)}
      </HighlightSpan>,
    );
    lastIndex = match.end;
  });
  // 最後の余りテキスト
  if (lastIndex < text.length) {
    nodes.push(text.substring(lastIndex));
  }
  return nodes;
}

export default function Home() {
  // テキストエリアの内容（かつ置換対象のテキスト）を管理
  const [text, setText] = useState('');

  // 入力テキストの変更ハンドラ
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  // 現在のテキストからマッチ情報を算出（メモ化）
  const matches = useMemo(
    () => findMatches(text, expressions as ExpressionsData),
    [text],
  );

  // 各ルールごとに、出現回数や誤表記例の集合を集計
  const errorGroups = useMemo(() => {
    const groups: {
      [key: string]: {
        count: number;
        suggested: string;
        wrongExamples: Set<string>;
      };
    } = {};
    matches.forEach((match) => {
      if (!groups[match.ruleKey]) {
        groups[match.ruleKey] = {
          count: 0,
          suggested: match.suggested,
          wrongExamples: new Set(),
        };
      }
      groups[match.ruleKey].count += 1;
      groups[match.ruleKey].wrongExamples.add(match.wrongText);
    });
    return groups;
  }, [matches]);

  // 個別の誤表記を置換する処理
  const replaceOccurrence = (match: Match) => {
    // ※レンダリング時のインデックスに基づく置換。置換後は再レンダリングで再計算される
    setText(
      (prev) =>
        prev.slice(0, match.start) + match.suggested + prev.slice(match.end),
    );
  };

  // 指定のルールに対して、テキスト中の該当する誤表記を正しい表記に置換する処理
  const replaceRule = (ruleKey: string) => {
    const rule = expressions[ruleKey] as ExpressionRule;
    const wrongVariants = rule.wrong;
    const correctText = rule.correct[0];
    let newText = text;
    wrongVariants.forEach((variant) => {
      const regex = new RegExp(escapeRegExp(variant), 'g');
      newText = newText.replace(regex, correctText);
    });
    setText(newText);
  };

  // 全ルールに対して一括置換する処理
  const replaceAll = () => {
    let newText = text;
    Object.entries(expressions as ExpressionsData).forEach(([, rule]) => {
      rule.wrong.forEach((variant) => {
        const regex = new RegExp(escapeRegExp(variant), 'g');
        newText = newText.replace(regex, rule.correct[0]);
      });
    });
    setText(newText);
  };

  // クリップボードに置換後テキストをコピーする処理
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert('置換文をコピーしました');
    } catch (err) {
      alert('コピーに失敗しました' + err);
    }
  };

  return (
    <div className="min-h-screen p-12">
      <h1 className="text-3xl font-bold mb-4">notation</h1>
      <div className="flex gap-8">
        <main className="w-[60vw]">
          <textarea
            className="w-full h-40 p-2 border border-gray-300 rounded mb-4"
            placeholder="テキストを入力..."
            value={text}
            onChange={handleInputChange}
          />

          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">置換プレビュー</h2>
              <button
                onClick={copyToClipboard}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                コピー
              </button>
            </div>
            <div className="p-2 border border-gray-300 rounded whitespace-pre-wrap">
              {highlightText(text, matches, replaceOccurrence)}
            </div>
          </div>
        </main>
        <aside className="">
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">誤表記一覧</h2>
            {Object.keys(errorGroups).length === 0 ? (
              <p>誤表記は見つかりませんでした</p>
            ) : (
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">誤表記例</th>
                    <th className="border border-gray-300 p-2">回数</th>
                    <th className="border border-gray-300 p-2">正しい表記</th>
                    <th className="border border-gray-300 p-2">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(errorGroups).map(([ruleKey, group]) => (
                    <tr key={ruleKey}>
                      <td className="border border-gray-300 p-2">
                        {Array.from(group.wrongExamples).join(', ')}
                      </td>
                      <td className="border border-gray-300 p-2 text-center">
                        {group.count}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {group.suggested}
                      </td>
                      <td className="border border-gray-300 p-2">
                        <button
                          onClick={() => replaceRule(ruleKey)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                        >
                          置換
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="w-[30vw]">
            <button
              onClick={replaceAll}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full"
            >
              全部置換
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
