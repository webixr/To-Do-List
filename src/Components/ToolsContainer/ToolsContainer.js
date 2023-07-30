import Button from "../Button/Button";

const ToolsContainer = () => {
  const className = {
    main: "w-full h-10 px-2 flex items-center justify-start gap-2.5 bg-[var(--blue-color)]",
    bar: "block w-0.5 h-9 bg-[var(--gray-light-color)]",
    SortSection: "ml-auto",
  };

  return (
    <div className={className.main}>
      {/* Tools Buttons */}
      <div>
        <Button style={"main"}>
          <i className="fa-solid fa-plus"></i>
        </Button>
        <Button style={"main"}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </Button>
      </div>
      <span className={className.bar}></span>
      {/* Tasks Counter */}
      <div>{1} : Tasks Left</div>
      {/* Sort Buttons */}
      <div className={className.SortSection}>
        <Button style={"titleActive"}>ALL</Button>
        <Button style={"title"}>Active</Button>
        <Button style={"title"}>Completedt</Button>
      </div>
    </div>
  );
};

export default ToolsContainer;
