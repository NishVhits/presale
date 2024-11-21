import Index from "../../../container/Index";

export default function Sidebar() {
  const handleClickMenuItem = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // handleClick();
    }
  };
  return (
    <>
      <Index.Box className="sidebar-main">
        <Index.List className="sidebar-list">
          <Index.ListItem
            className="sidebar-list-item active"
            onClick={() => {
              handleClickMenuItem("tokenomics");
            }}
          >
            Tokenomic
          </Index.ListItem>
          <Index.ListItem
            className="sidebar-list-item"
            onClick={() => {
              handleClickMenuItem("roadmap");
            }}
          >
            Roadmap
          </Index.ListItem>
          <Index.ListItem
            className="sidebar-list-item"
            onClick={() => {
              handleClickMenuItem("whitepaper");
            }}
          >
            Whitepaper
          </Index.ListItem>
          <Index.ListItem
            className="sidebar-list-item"
            onClick={() => {
              handleClickMenuItem("team");
            }}
          >
            Team
          </Index.ListItem>
          <Index.ListItem
            className="sidebar-list-item"
            onClick={() => {
              handleClickMenuItem("participate");
            }}
          >
            Insctruction
          </Index.ListItem>
        </Index.List>
      </Index.Box>
    </>
  );
}
