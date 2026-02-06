import Header from "./Header";

export default function ZHeader() {
  return (
    <Header
      variant="hw"
      logo={{ src: "/img/hwmain.png" }}
      menus={[
        {
          title: "· 썰풀이 ·",
          items: [
            { label: "p1", href: "/HW/p1" },
            { label: "p2", href: "/HW/p2" },
            { label: "p3", href: "/HW/p3" },
            { label: "p4", href: "/HW/p4" },
          ],
        },
      ]}
    />
  );
}
