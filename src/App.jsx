import { useState, useRef } from "react";
import { faqData } from "./accordionData";

function Accordion() {
  return (
    <main>
      <div className="accordion-container">
        <header>
          <img src="./images/icon-star.svg" alt="" className="header__icon" />
          <h2 className="header__title">FAQs</h2>
        </header>

        {faqData.map((data) => {
          return (
            <AccordionItem
              title={data.title}
              content={data.content}
              key={data.id}
              id={data.id}
            />
          );
        })}
      </div>
    </main>
  );
}
function AccordionItem({ title, content, id }) {
  const [selected, setSelected] = useState(null);
  function toggle(id) {
    console.log(selected);
    if (selected === null) {
      return setSelected(id);
    }

    return setSelected(null);
  }
  return (
    <div className="accordion-item">
      <div onClick={() => toggle(id)}>
        <h4 className="accordion-item__title">{title}</h4>
        <img
          src={
            selected === id
              ? "./images/icon-plus.svg"
              : "./images/icon-minus.svg"
          }
          alt=""
          className="accordion-item__button"
        />
      </div>
      <p
        className={
          selected === id
            ? "accordion-item__content"
            : "accordion-item__content hidden"
        }
      >
        {content}
      </p>
    </div>
  );
}
function App() {
  return (
    <>
      <Accordion />
    </>
  );
}

export default App;

// Simple Plan to Execute
// * 1 section, top and bottom.
// section gets BG Image.

// * 1 Container for FAQ Accordion
// - 4 Drop down menus = 4 divs
// - Each div gets a +/- image which depends if its active or not
// - Each div contains a title and content
