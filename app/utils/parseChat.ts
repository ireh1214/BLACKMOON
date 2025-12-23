export function parseChat(text: string) {
  const lines = text.split("\n").filter(Boolean);

  return lines.map((line) => {
    // 1) "오후 1:37 " 같은 시간 패턴 제거
    const noTime = line.replace(/^(오전|오후)\s?\d{1,2}:\d{2}\s?/, "");

    // 2) 시간 제거 후 → 이름 + 내용 패턴
    const match = noTime.match(/^([가-힣]+)\s?(.*)$/);

    return {
      name: match ? match[1] : "Unknown",
      text: match ? match[2].trim() : noTime.trim(),
    };
  });
}
