import { ButtonCssModules } from './components/ButtonCssModules'
import { ButtonStyledComponents } from './components/ButtonStyledComponents'

export function App() {
  return (
    <>
      <div>
        <ButtonCssModules color="primary" />
        <ButtonCssModules color="secondary" />
        <ButtonCssModules color="danger" />
        <ButtonCssModules color="success" />
        <ButtonCssModules />
      </div>
      <br />
      <div>
        <ButtonStyledComponents variant="primary" />
        <ButtonStyledComponents variant="secondary" />
        <ButtonStyledComponents variant="danger" />
        <ButtonStyledComponents variant="success" />
        <ButtonStyledComponents />
      </div>
    </>
  )
}
