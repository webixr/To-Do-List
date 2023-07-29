import Button from "../Button/Button"

const Task = ({}) => {
  const className = {
    main: "w-full h-10 flex items-center gap-2.5",
    bar: "block w-0.5 h-9 bg-[var(--gray-light-color)]",
    p: "",
  }
  return (
    <div className={className.main}>
      <Button style={"main"} color={"green"}><i className="fa-solid fa-check"></i></Button>
      <span className={className.bar}></span>
      <p className={className.p}>task title here...</p>
      <span className={className.bar} style={{marginLeft: "auto"}}></span>
      <Button style={"main"} color={"red"}><i className="fa-solid fa-xmark"></i></Button>
    </div>
  )
}

export default Task