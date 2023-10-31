const uis = [{
    href: "01-social-icon-hover-glow-effect",
    text: "Social icon Hover glow special effect"
  }];
  
  function UILists() {
    return uis.map((ui, i) => {
      return /*#__PURE__*/React.createElement("li", {
        style: {
          position: "relative"
        }
      }, /*#__PURE__*/React.createElement(Link, {
        item: ui,
        key: i
      }));
    });
  }
  
  function Link({
    item
  }) {
    return /*#__PURE__*/React.createElement("a", {
      href: item.href
    }, item.text, item.newItem ? /*#__PURE__*/React.createElement("span", {
      style: {
        background: "hsl(121deg 100% 50%)",
        borderRadius: 4,
        fontSize: 10,
        padding: "6px 4px",
        color: "#000000",
        fontWeight: 600,
        position: "absolute",
        right: -14,
        top: -6
      }
    }, "\uFF08NEW!\uFF09") : null);
  }
  
  const list = document.querySelector(".list");
  ReactDOM.render( /*#__PURE__*/React.createElement(UILists, null), list);