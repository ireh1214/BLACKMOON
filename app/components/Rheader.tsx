import Header from "./Header";

export default function RHeader() {
  return (
    <Header
      variant="rj"
      logo={{ src: "/img/header_logo.png", href: "/RJ/" }}
      menus={[
        {
          title: "· 썰풀이 ·",
          items: [
            { label: "수도원AU", href: "/RJ/p2" },
            { label: "기사AU", href: "/RJ/p3" },
          ],
        },
        {
          title: "TRPG",
          items: [
            { label: "창을 짚은 손", href: "/RJ/p1" },
            { label: "검은 괴물의 신부", href: "/RJ/p4" },
            { label: "화장열차", href: "/RJ/p5" },
          ],
        },
      ]}
    />
  );
}
