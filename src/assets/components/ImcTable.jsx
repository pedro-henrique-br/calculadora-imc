import { Button } from "./Button"
import App from "../../App"

export const ImcTable = () => {
  return (
    <div>
      <h2>Seu IMC</h2>
          <div className="action-control">
            <Button id="clear-btn" text="Limpar" action={(<App />)} />
          </div>
    </div>
  )
}
