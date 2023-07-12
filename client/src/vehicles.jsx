import { CATEGORIES } from "./constant"
import "./vehicle.css"
export function Vehicle() {

  return (
    <>
      <section className="prod-list">
        {
          CATEGORIES.map((category) => {
            return (

              <div className="c-1" id={category.id}>
                <img src={category.url}
                  alt="img"
                />

                <h6>{category.name}</h6>
              </div>
            )
          })
        }
      </section>
    </>
  )
}



